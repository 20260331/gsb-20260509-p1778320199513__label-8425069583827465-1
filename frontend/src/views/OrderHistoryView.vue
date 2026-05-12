<template>
  <div class="max-w-[1200px] mx-auto px-4 py-12 min-h-screen">
    <h1 class="text-4xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">我的订单</h1>

    <div v-if="orderStore.orders.length > 0" class="space-y-6">
      <div
        v-for="order in orderStore.orders"
        :key="order.orderId"
        class="bg-white/80 backdrop-blur-md p-4 lg:p-8 rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl transition-shadow duration-300"
      >
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-100">
          <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
            <span class="text-sm text-gray-400 font-mono">{{ order.orderId }}</span>
            <span class="text-sm text-gray-400">{{ formatTime(order.createdAt) }}</span>
          </div>
          <div class="flex items-center gap-4">
            <span
              :class="statusClass(order.status)"
              class="px-3 py-1 rounded-full text-sm font-bold"
            >
              {{ orderStore.getStatusLabel(order.status) }}
            </span>
            <router-link
              :to="`/orders/${order.orderId}`"
              class="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
            >
              查看详情 &rarr;
            </router-link>
          </div>
        </div>

        <div class="space-y-4 mb-6">
          <div
            v-for="item in order.items.slice(0, 3)"
            :key="item.id"
            class="flex items-center gap-4"
          >
            <div class="w-16 h-16 bg-white border border-gray-200 rounded-lg overflow-hidden flex-shrink-0">
              <img :src="item.image" :alt="item.name" class="w-full h-full object-contain p-1">
            </div>
            <div class="flex-1 min-w-0">
              <h4 class="font-bold text-gray-900 truncate">{{ item.name }}</h4>
              <div class="flex gap-2 mt-1 text-sm text-gray-500">
                <span v-if="item.selectedColorName">{{ item.selectedColorName }}</span>
                <span v-if="item.selectedSize" class="bg-gray-100 px-1 rounded text-xs">{{ item.selectedSize }}码</span>
              </div>
            </div>
            <div class="text-right flex-shrink-0">
              <p class="font-bold text-gray-900">¥{{ (item.price * item.quantity).toFixed(2) }}</p>
              <p class="text-sm text-gray-400">x{{ item.quantity }}</p>
            </div>
          </div>
          <p v-if="order.items.length > 3" class="text-sm text-gray-400 text-center">
            还有 {{ order.items.length - 3 }} 件商品...
          </p>
        </div>

        <div class="flex justify-between items-center pt-4 border-t border-gray-100">
          <span class="text-gray-500 text-sm">共 {{ order.items.reduce((acc, item) => acc + item.quantity, 0) }} 件商品</span>
          <div class="flex items-center gap-2">
            <span class="text-gray-600">实付金额：</span>
            <span class="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">¥{{ order.finalPrice.toFixed(2) }}</span>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="bg-white/80 backdrop-blur-md shadow-xl rounded-3xl p-8 border border-white/20 text-center py-16 text-gray-500 flex flex-col items-center">
      <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-full mb-8 shadow-inner">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      </div>
      <p class="text-2xl font-bold text-gray-800 mb-3">暂无订单记录</p>
      <p class="text-gray-500 mb-10 text-lg">快去选购心仪的商品吧！</p>
      <router-link to="/products" class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 font-bold text-lg">
        去逛逛
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

function formatTime(isoString) {
  const date = new Date(isoString)
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  const h = String(date.getHours()).padStart(2, '0')
  const min = String(date.getMinutes()).padStart(2, '0')
  const s = String(date.getSeconds()).padStart(2, '0')
  return `${y}-${m}-${d} ${h}:${min}:${s}`
}

function statusClass(status) {
  const map = {
    pending: 'bg-yellow-100 text-yellow-700',
    shipped: 'bg-blue-100 text-blue-700',
    completed: 'bg-green-100 text-green-700',
    cancelled: 'bg-gray-100 text-gray-500'
  }
  return map[status] || 'bg-gray-100 text-gray-500'
}
</script>
