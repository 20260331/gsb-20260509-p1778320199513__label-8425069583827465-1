<template>
  <div class="max-w-[1200px] mx-auto px-4 py-12 min-h-screen">
    <h1 class="text-4xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">我的订单</h1>
    
    <div v-if="orderStore.orders.length > 0" class="space-y-8">
      <div v-for="order in orderStore.orders" :key="order.orderId" class="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-white/20 overflow-hidden">
        <!-- Order Header -->
        <div class="bg-gradient-to-r from-gray-50 to-white px-6 lg:px-8 py-4 border-b border-gray-100 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div class="flex items-center gap-4 flex-wrap">
            <span class="text-sm text-gray-500">订单号：</span>
            <span class="font-mono font-bold text-gray-800">{{ order.orderId }}</span>
            <span :class="getStatusClass(order.status)" class="px-3 py-1 rounded-full text-sm font-bold">
              {{ order.statusName }}
            </span>
          </div>
          <div class="text-sm text-gray-500">
            下单时间：{{ formatDate(order.createdAt) }}
          </div>
        </div>
        
        <!-- Order Content -->
        <div class="p-6 lg:p-8">
          <!-- Product List -->
          <div class="space-y-4 mb-6">
            <div v-for="item in order.items" :key="item.cartItemId || item.id" class="flex gap-4 items-center">
              <div class="w-20 h-20 bg-white border border-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                <img :src="item.image" :alt="item.name" class="w-full h-full object-contain p-2">
              </div>
              <div class="flex-1 min-w-0">
                <h4 class="font-bold text-gray-900 truncate">{{ item.name }}</h4>
                <div class="flex gap-2 mt-1 text-sm text-gray-500">
                  <span v-if="item.selectedColorName">{{ item.selectedColorName }}</span>
                  <span v-if="item.selectedSize" class="bg-gray-100 px-1 rounded text-xs flex items-center">{{ item.selectedSize }}码</span>
                </div>
                <div class="flex justify-between items-center mt-2">
                  <span class="text-gray-400 text-sm">x {{ item.quantity }}</span>
                  <span class="font-bold text-gray-900">¥{{ (item.price * item.quantity).toFixed(2) }}</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Order Details -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-gray-100">
            <!-- Shipping Address -->
            <div class="space-y-3">
              <h3 class="font-bold text-gray-800 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                收货地址
              </h3>
              <div class="bg-gray-50 rounded-xl p-4 space-y-2">
                <div class="flex items-center gap-2">
                  <span class="font-bold text-gray-800">{{ order.address.name }}</span>
                  <span class="text-gray-500">{{ order.address.phone }}</span>
                </div>
                <p class="text-gray-600 text-sm">{{ order.address.fullAddress }}</p>
              </div>
            </div>
            
            <!-- Payment Info -->
            <div class="space-y-3">
              <h3 class="font-bold text-gray-800 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                支付信息
              </h3>
              <div class="bg-gray-50 rounded-xl p-4 space-y-2">
                <div class="flex justify-between">
                  <span class="text-gray-500">支付方式</span>
                  <span class="font-medium text-gray-800">{{ order.paymentMethodName }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-500">商品数量</span>
                  <span class="font-medium text-gray-800">{{ order.totalItems }} 件</span>
                </div>
                <div class="flex justify-between pt-2 border-t border-gray-200">
                  <span class="text-gray-500">订单金额</span>
                  <span class="font-extrabold text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">¥{{ order.totalPrice.toFixed(2) }}</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Action Buttons -->
          <div class="flex flex-wrap gap-4 mt-6 pt-6 border-t border-gray-100 justify-end">
            <button v-if="order.status === 'paid'" @click="markAsShipped(order.orderId)" class="px-6 py-2.5 bg-blue-100 text-blue-700 rounded-xl font-medium hover:bg-blue-200 transition-colors">
              标记发货
            </button>
            <button v-if="order.status === 'shipped'" @click="markAsCompleted(order.orderId)" class="px-6 py-2.5 bg-green-100 text-green-700 rounded-xl font-medium hover:bg-green-200 transition-colors">
              确认收货
            </button>
            <button v-if="order.status !== 'cancelled' && order.status !== 'completed'" @click="cancelOrder(order.orderId)" class="px-6 py-2.5 bg-gray-100 text-gray-600 rounded-xl font-medium hover:bg-gray-200 transition-colors">
              取消订单
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <div v-else class="bg-white/80 backdrop-blur-md shadow-xl rounded-3xl p-8 border border-white/20 text-center py-16 text-gray-500 flex flex-col items-center">
      <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-full mb-8 shadow-inner">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      </div>
      <p class="text-2xl font-bold text-gray-800 mb-3">暂无订单记录</p>
      <p class="text-gray-500 mb-10 text-lg">您还没有任何订单，快去挑选心仪的商品吧！</p>
      <router-link to="/products" class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 font-bold text-lg flex items-center gap-2">
        <span>去购物</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { onMounted, inject } from 'vue'
import { useOrderStore } from '../store/order'
import { useUserStore } from '../store/user'
import { useRouter } from 'vue-router'

const orderStore = useOrderStore()
const userStore = useUserStore()
const router = useRouter()
const toast = inject('toast')

onMounted(() => {
  if (!userStore.isLoggedIn) {
    toast?.info('请先登录')
    router.replace({ 
      path: '/login', 
      query: { redirect: '/orders' } 
    })
  }
})

function formatDate(dateString) {
  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}

function getStatusClass(status) {
  const classMap = {
    'pending': 'bg-yellow-100 text-yellow-700',
    'paid': 'bg-blue-100 text-blue-700',
    'shipped': 'bg-purple-100 text-purple-700',
    'completed': 'bg-green-100 text-green-700',
    'cancelled': 'bg-gray-100 text-gray-500'
  }
  return classMap[status] || 'bg-gray-100 text-gray-500'
}

function markAsShipped(orderId) {
  orderStore.updateOrderStatus(orderId, 'shipped')
  toast?.success('订单已发货')
}

function markAsCompleted(orderId) {
  orderStore.updateOrderStatus(orderId, 'completed')
  toast?.success('已确认收货')
}

function cancelOrder(orderId) {
  orderStore.updateOrderStatus(orderId, 'cancelled')
  toast?.info('订单已取消')
}
</script>
