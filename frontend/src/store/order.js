import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import { useUserStore } from './user'

export const useOrderStore = defineStore('order', () => {
  const userStore = useUserStore()
  const orders = ref([])
  const allUserOrders = ref({})

  const orderCount = computed(() => orders.value.length)

  function getStorageKey() {
    if (userStore.isLoggedIn && userStore.user) {
      return `orders_${userStore.user.username}`
    }
    return null
  }

  function loadOrdersForCurrentUser() {
    const key = getStorageKey()
    if (key) {
      try {
        const stored = localStorage.getItem(key)
        if (stored) {
          allUserOrders.value[key] = JSON.parse(stored)
          orders.value = allUserOrders.value[key]
        } else {
          orders.value = []
          allUserOrders.value[key] = []
        }
      } catch (e) {
        orders.value = []
        allUserOrders.value[key] = []
      }
    } else {
      orders.value = []
    }
  }

  function saveOrdersToStorage() {
    const key = getStorageKey()
    if (key) {
      allUserOrders.value[key] = [...orders.value]
      try {
        localStorage.setItem(key, JSON.stringify(orders.value))
      } catch (e) {
        console.error('Failed to save orders to localStorage', e)
      }
    }
  }

  function clearCurrentUserOrders() {
    const key = getStorageKey()
    if (key) {
      delete allUserOrders.value[key]
      localStorage.removeItem(key)
    }
    orders.value = []
  }

  watch(
    () => userStore.isLoggedIn,
    (newVal) => {
      if (newVal) {
        loadOrdersForCurrentUser()
      } else {
        orders.value = []
      }
    },
    { immediate: true }
  )

  function generateOrderId() {
    const now = new Date()
    const timestamp = now.getTime().toString().slice(-8)
    const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0')
    return `ORD${timestamp}${random}`
  }

  function getProvinceName(code) {
    const provinces = {
      '110000': '北京',
      '310000': '上海',
      '440000': '广东',
      '330000': '浙江'
    }
    return provinces[code] || code
  }

  function getCityName(provinceCode, cityCode) {
    const cities = {
      '110000': { '110100': '北京市' },
      '310000': { '310100': '上海市' },
      '440000': { '440100': '广州市', '440300': '深圳市' },
      '330000': { '330100': '杭州市', '330200': '宁波市' }
    }
    return cities[provinceCode]?.[cityCode] || cityCode
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
    return districts[cityCode]?.[districtCode] || districtCode
  }

  function formatPaymentMethod(method) {
    const methods = {
      'wechat': '微信支付',
      'alipay': '支付宝'
    }
    return methods[method] || method
  }

  function formatOrderStatus(status) {
    const statusMap = {
      'pending': '待支付',
      'paid': '已支付',
      'shipped': '已发货',
      'completed': '已完成',
      'cancelled': '已取消'
    }
    return statusMap[status] || status
  }

  function getOrderById(orderId) {
    return orders.value.find(order => order.orderId === orderId)
  }

  function createOrder(orderData) {
    const newOrder = {
      orderId: generateOrderId(),
      items: orderData.items.map(item => ({ ...item })),
      address: {
        name: orderData.address.name,
        phone: orderData.address.phone,
        province: orderData.address.province,
        provinceName: getProvinceName(orderData.address.province),
        city: orderData.address.city,
        cityName: getCityName(orderData.address.province, orderData.address.city),
        district: orderData.address.district,
        districtName: getDistrictName(orderData.address.city, orderData.address.district),
        address: orderData.address.address,
        fullAddress: `${getProvinceName(orderData.address.province)}${getCityName(orderData.address.province, orderData.address.city)}${getDistrictName(orderData.address.city, orderData.address.district)}${orderData.address.address}`
      },
      paymentMethod: orderData.paymentMethod,
      paymentMethodName: formatPaymentMethod(orderData.paymentMethod),
      status: 'paid',
      statusName: formatOrderStatus('paid'),
      totalItems: orderData.totalItems,
      totalPrice: orderData.totalPrice,
      createdAt: new Date().toISOString()
    }
    orders.value.unshift(newOrder)
    saveOrdersToStorage()
    return newOrder
  }

  function updateOrderStatus(orderId, newStatus) {
    const order = orders.value.find(o => o.orderId === orderId)
    if (order) {
      order.status = newStatus
      order.statusName = formatOrderStatus(newStatus)
      saveOrdersToStorage()
    }
  }

  function clearOrders() {
    clearCurrentUserOrders()
  }

  return {
    orders,
    orderCount,
    createOrder,
    getOrderById,
    updateOrderStatus,
    clearOrders,
    formatOrderStatus,
    formatPaymentMethod
  }
})
