<template>
  <div class="max-w-[1200px] mx-auto px-4 py-12 min-h-screen">
    <div v-if="order" class="space-y-8">
      <div class="flex items-center gap-4 mb-2">
        <router-link to="/orders" class="text-gray-400 hover:text-blue-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </router-link>
        <h1 class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">订单详情</h1>
      </div>

      <div class="bg-white/80 backdrop-blur-md p-4 lg:p-8 rounded-3xl shadow-xl border border-white/20">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-gray-100">
          <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
            <span class="text-sm text-gray-400 font-mono">订单号：{{ order.orderId }}</span>
            <span class="text-sm text-gray-400">{{ formatTime(order.createdAt) }}</span>
          </div>
          <span :class="statusClass(order.status)" class="px-4 py-1.5 rounded-full text-sm font-bold self-start">
            {{ orderStore.getStatusLabel(order.status) }}
          </span>
        </div>
      </div>

      <div class="bg-white/80 backdrop-blur-md p-4 lg:p-8 rounded-3xl shadow-xl border border-white/20">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-2">
          <span class="w-1 h-8 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full block"></span>
          收货地址
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <div>
            <span class="text-sm text-gray-400">收货人</span>
            <p class="font-bold mt-1">{{ order.address.name }}</p>
          </div>
          <div>
            <span class="text-sm text-gray-400">联系电话</span>
            <p class="font-bold mt-1">{{ order.address.phone }}</p>
          </div>
          <div class="md:col-span-2">
            <span class="text-sm text-gray-400">详细地址</span>
            <p class="font-bold mt-1">{{ getFullAddress(order.address) }}</p>
          </div>
        </div>
      </div>

      <div class="bg-white/80 backdrop-blur-md p-4 lg:p-8 rounded-3xl shadow-xl border border-white/20">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-2">
          <span class="w-1 h-8 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full block"></span>
          商品清单
          <span class="text-sm font-normal text-gray-500 ml-2">共 {{ totalQuantity }} 件</span>
        </h2>
        <div class="space-y-6">
          <div
            v-for="item in order.items"
            :key="item.id"
            class="flex gap-4 items-center border-b border-gray-100 last:border-0 pb-6 last:pb-0"
          >
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
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div class="bg-white/80 backdrop-blur-md p-4 lg:p-8 rounded-3xl shadow-xl border border-white/20">
          <h2 class="text-2xl font-bold mb-6 flex items-center gap-2">
            <span class="w-1 h-8 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full block"></span>
            支付方式
          </h2>
          <p class="font-bold text-gray-800 text-lg">{{ orderStore.getPaymentMethodLabel(order.paymentMethod) }}</p>
        </div>

        <div class="bg-white/80 backdrop-blur-md p-4 lg:p-8 rounded-3xl shadow-xl border border-white/20">
          <h2 class="text-2xl font-bold mb-6 flex items-center gap-2">
            <span class="w-1 h-8 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full block"></span>
            金额明细
          </h2>
          <div class="space-y-3">
            <div class="flex justify-between text-gray-600">
              <span>商品小计</span>
              <span class="font-medium">¥{{ order.totalPrice.toFixed(2) }}</span>
            </div>
            <div class="flex justify-between text-gray-600">
              <span>运费</span>
              <span class="text-green-600 font-medium">免运费</span>
            </div>
          </div>
          <div class="flex justify-between items-end mt-6 pt-4 border-t border-gray-100">
            <span class="font-bold text-xl text-gray-800">实付金额</span>
            <span class="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">¥{{ order.finalPrice.toFixed(2) }}</span>
          </div>
        </div>
      </div>

      <div v-if="order.status === 'pending'" class="flex justify-center">
        <button
          @click="handleCancelOrder"
          class="px-8 py-3 border-2 border-red-400 text-red-500 rounded-xl font-bold hover:bg-red-50 transition-all duration-300 active:scale-95"
        >
          取消订单
        </button>
      </div>
    </div>

    <div v-else class="bg-white/80 backdrop-blur-md shadow-xl rounded-3xl p-8 border border-white/20 text-center py-16 text-gray-500 flex flex-col items-center">
      <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-full mb-8 shadow-inner">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <p class="text-2xl font-bold text-gray-800 mb-3">未找到该订单</p>
      <p class="text-gray-500 mb-10 text-lg">请检查订单号是否正确</p>
      <router-link to="/orders" class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 font-bold text-lg">
        返回订单列表
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, inject } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useOrderStore } from '../store/order'
import { useUserStore } from '../store/user'

const route = useRoute()
const router = useRouter()
const orderStore = useOrderStore()
const userStore = useUserStore()
const toast = inject('toast')

const order = computed(() => {
  return orderStore.getOrderById(route.params.id)
})

const totalQuantity = computed(() => {
  if (!order.value) return 0
  return order.value.items.reduce((acc, item) => acc + item.quantity, 0)
})

onMounted(() => {
  if (!userStore.isLoggedIn) {
    toast?.info('请先登录')
    router.replace({
      path: '/login',
      query: { redirect: `/orders/${route.params.id}` }
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

function getFullAddress(address) {
  const parts = [address.province, address.city, address.district, address.detail].filter(Boolean)
  return parts.join(' ')
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

function handleCancelOrder() {
  if (order.value && orderStore.cancelOrder(order.value.orderId)) {
    toast?.success('订单已取消')
  } else {
    toast?.warning('无法取消该订单')
  }
}
</script>
