import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useOrderStore = defineStore('order', () => {
  const orders = ref([])

  const orderList = computed(() => 
    [...orders.value].sort((a, b) => new Date(b.orderTime) - new Date(a.orderTime))
  )

  function generateOrderId() {
    const timestamp = Date.now().toString()
    const random = Math.random().toString(36).substring(2, 8).toUpperCase()
    return `ORD${timestamp}${random}`
  }

  function getProvinceName(code) {
    const provinces = {
      '110000': '北京',
      '310000': '上海',
      '440000': '广东',
      '330000': '浙江'
    }
    return provinces[code] || ''
  }

  function getCityName(provinceCode, cityCode) {
    const cities = {
      '110000': { '110100': '北京市' },
      '310000': { '310100': '上海市' },
      '440000': { '440100': '广州市', '440300': '深圳市' },
      '330000': { '330100': '杭州市', '330200': '宁波市' }
    }
    return cities[provinceCode]?.[cityCode] || ''
  }

  function getDistrictName(cityCode, districtCode) {
    const districts = {
      '110100': { '110105': '朝阳区', '110108': '海淀区' },
      '310100': { '310115': '浦东新区', '310101': '黄浦区' },
      '440100': { '440106': '天河区', '440104': '越秀区' },
      '440300': { '440305': '南山区', '440304': '福田区' },
      '330100': { '330106': '西湖区', '330110': '余杭区' },
      '330200': { '330212': '鄞州区', '330203': '海曙区' }
    }
    return districts[cityCode]?.[districtCode] || ''
  }

  function formatAddress(addressForm) {
    const province = getProvinceName(addressForm.province)
    const city = getCityName(addressForm.province, addressForm.city)
    const district = getDistrictName(addressForm.city, addressForm.district)
    return `${province}${city}${district}${addressForm.address}`
  }

  function createOrder(cartItems, addressForm, paymentMethod) {
    const orderItems = cartItems.map(item => ({
      id: item.id,
      name: item.name,
      image: item.image,
      price: item.price,
      quantity: item.quantity,
      selectedColorName: item.selectedColorName,
      selectedSize: item.selectedSize
    }))

    const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

    const order = {
      orderId: generateOrderId(),
      items: orderItems,
      totalAmount,
      status: '已完成',
      paymentMethod: paymentMethod === 'wechat' ? '微信支付' : '支付宝',
      receiverName: addressForm.name,
      receiverPhone: addressForm.phone,
      fullAddress: formatAddress(addressForm),
      orderTime: new Date().toISOString()
    }

    orders.value.unshift(order)
    return order
  }

  function getOrderById(orderId) {
    return orders.value.find(order => order.orderId === orderId)
  }

  function clearOrders() {
    orders.value = []
  }

  return { orders, orderList, createOrder, getOrderById, clearOrders }
})
