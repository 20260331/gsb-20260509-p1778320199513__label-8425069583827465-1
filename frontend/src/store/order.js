import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useOrderStore = defineStore('order', () => {
  const orders = ref([])

  const orderCount = computed(() => orders.value.length)

  function generateOrderId() {
    const now = new Date()
    const timestamp = now.getFullYear().toString() +
      String(now.getMonth() + 1).padStart(2, '0') +
      String(now.getDate()).padStart(2, '0') +
      String(now.getHours()).padStart(2, '0') +
      String(now.getMinutes()).padStart(2, '0') +
      String(now.getSeconds()).padStart(2, '0')
    const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0')
    return `ORD${timestamp}${random}`
  }

  function createOrder({ items, address, paymentMethod, totalPrice, finalPrice }) {
    const order = {
      orderId: generateOrderId(),
      items: items.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: item.image,
        selectedColorName: item.selectedColorName || '',
        selectedSize: item.selectedSize || ''
      })),
      address: {
        name: address.name,
        phone: address.phone,
        province: address.province,
        city: address.city,
        district: address.district,
        detail: address.address
      },
      paymentMethod,
      status: 'pending',
      totalPrice,
      finalPrice,
      createdAt: new Date().toISOString()
    }
    orders.value.unshift(order)
    return order
  }

  function getOrderById(orderId) {
    return orders.value.find(order => order.orderId === orderId)
  }

  function cancelOrder(orderId) {
    const order = orders.value.find(o => o.orderId === orderId)
    if (order && order.status === 'pending') {
      order.status = 'cancelled'
      return true
    }
    return false
  }

  const statusMap = {
    pending: '待发货',
    shipped: '已发货',
    completed: '已完成',
    cancelled: '已取消'
  }

  function getStatusLabel(status) {
    return statusMap[status] || status
  }

  const paymentMethodMap = {
    wechat: '微信支付',
    alipay: '支付宝'
  }

  function getPaymentMethodLabel(method) {
    return paymentMethodMap[method] || method
  }

  return {
    orders,
    orderCount,
    createOrder,
    getOrderById,
    cancelOrder,
    getStatusLabel,
    getPaymentMethodLabel
  }
})
