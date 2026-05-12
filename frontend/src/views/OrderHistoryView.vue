<template>
  <div class="max-w-[1200px] mx-auto px-4 py-12 min-h-screen">
    <h1 class="text-4xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">订单历史</h1>
    
    <div v-if="orderStore.orderList.length === 0" class="text-center py-20">
      <div class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      </div>
      <h3 class="text-2xl font-bold text-gray-700 mb-2">暂无订单</h3>
      <p class="text-gray-500 mb-6">您还没有任何购买记录</p>
      <router-link to="/products" class="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 shadow-md">
        去购物
      </router-link>
    </div>

    <div v-else class="space-y-6">
      <div v-for="order in orderStore.orderList" :key="order.orderId" class="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-white/20 overflow-hidden">
        <div class="p-6 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div class="flex items-center gap-4">
            <span class="text-sm text-gray-500">订单号: <span class="font-mono font-medium text-gray-700">{{ order.orderId }}</span></span>
            <span class="text-sm text-gray-500">{{ formatDate(order.orderTime) }}</span>
          </div>
          <span class="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full w-fit">{{ order.status }}</span>
        </div>

        <div class="p-6">
          <h3 class="text-lg font-bold mb-4 text-gray-800">商品清单</h3>
          <div class="space-y-4 mb-6">
            <div v-for="item in order.items" :key="item.id" class="flex gap-4 items-center">
              <div class="w-16 h-16 bg-white border border-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                <img :src="item.image" :alt="item.name" class="w-full h-full object-contain p-2">
              </div>
              <div class="flex-1 min-w-0">
                <h4 class="font-bold text-gray-900 truncate">{{ item.name }}</h4>
                <div class="flex gap-2 mt-1 text-sm text-gray-500">
                  <span v-if="item.selectedColorName">{{ item.selectedColorName }}</span>
                  <span v-if="item.selectedSize" class="bg-gray-100 px-1 rounded text-xs flex items-center">{{ item.selectedSize }}码</span>
                </div>
              </div>
              <div class="text-right">
                <div class="font-bold text-gray-900">¥{{ item.price.toFixed(2) }}</div>
                <div class="text-sm text-gray-400">x {{ item.quantity }}</div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-gray-100">
            <div>
              <h4 class="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                收货地址
              </h4>
              <div class="bg-gray-50 rounded-xl p-4 space-y-2">
                <p class="font-medium text-gray-800">{{ order.receiverName }} <span class="text-gray-500 font-normal">{{ order.receiverPhone }}</span></p>
                <p class="text-gray-600 text-sm">{{ order.fullAddress }}</p>
              </div>
            </div>

            <div class="space-y-4">
              <div>
                <h4 class="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  支付方式
                </h4>
                <p class="text-gray-600">{{ order.paymentMethod }}</p>
              </div>
              <div>
                <h4 class="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  订单金额
                </h4>
                <p class="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">¥{{ order.totalAmount.toFixed(2) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useOrderStore } from '../store/order'
import { useUserStore } from '../store/user'
import { useRouter } from 'vue-router'
import { inject } from 'vue'

const orderStore = useOrderStore()
const userStore = useUserStore()
const router = useRouter()
const toast = inject('toast')

function formatDate(dateString) {
  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const hour = String(date.getHours()).padStart(2, '0')
  const minute = String(date.getMinutes()).padStart(2, '0')
  return `${year}-${month}-${day} ${hour}:${minute}`
}

onMounted(() => {
  if (!userStore.isLoggedIn) {
    toast?.info('请先登录')
    router.replace({ 
      path: '/login', 
      query: { redirect: '/orders' } 
    })
  }
})
</script>
