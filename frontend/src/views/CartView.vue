<template>
  <div class="max-w-[1200px] mx-auto px-4 py-12">
    <h1 class="text-4xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">我的购物车</h1>
    
    <div v-if="cartStore.items.length > 0" class="flex flex-col lg:flex-row gap-8 items-start relative">
      <!-- Left: Cart Items -->
      <div class="flex-1 min-w-0 w-full lg:w-auto bg-white/80 backdrop-blur-md shadow-xl rounded-3xl p-6 md:p-8 border border-white/20">
        <!-- Select All Header -->
        <div class="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100">
          <label class="flex items-center gap-3 cursor-pointer group">
            <div class="relative flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-lg transition-all duration-200 group-hover:border-blue-500" :class="{'bg-blue-600 border-blue-600': cartStore.allSelected}">
              <svg v-if="cartStore.allSelected" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <input type="checkbox" class="hidden" :checked="cartStore.allSelected" @change="cartStore.toggleAllSelection($event.target.checked)">
            </div>
            <span class="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">全选</span>
          </label>
          <span class="text-sm text-gray-400">已选 {{ cartStore.items.filter(i => i.selected).length }} 件商品</span>
        </div>

        <div class="space-y-8">
        <div v-for="item in cartStore.items" :key="item.cartItemId || item.id" class="group relative flex items-start gap-4 border-b border-gray-100 pb-8 last:border-0 last:pb-0 hover:bg-gray-50/50 pr-4 py-4 rounded-2xl transition-colors duration-300">
          <!-- Checkbox -->
          <label class="flex-shrink-0 cursor-pointer pt-2">
            <div class="relative flex items-center justify-center w-6 h-6 border-2 rounded-lg transition-all duration-200 shadow-sm" :class="item.selected ? 'bg-blue-600 border-blue-600' : 'bg-white border-gray-300 hover:border-blue-500'">
              <svg v-if="item.selected" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <input type="checkbox" class="hidden" :checked="item.selected" @change="cartStore.toggleSelection(item.cartItemId || item.id)">
            </div>
          </label>

          <!-- Absolute Delete Button -->
          <button @click="promptDelete(item.cartItemId || item.id)" class="absolute -top-[10px] -right-[10px] z-20 p-2 w-10 h-10 flex items-center justify-center rounded-bl-2xl text-gray-400 hover:text-red-500 transition-colors" title="删除商品">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Content Wrapper -->
          <div class="flex-1 flex flex-col md:flex-row items-center justify-between w-full min-w-0">
            <div class="flex items-center gap-4 w-full md:flex-1 md:mr-4 mb-6 md:mb-0 overflow-hidden">
              <div class="w-20 h-20 md:w-24 md:h-24 bg-white rounded-2xl overflow-hidden flex-shrink-0 border border-gray-100 shadow-sm group-hover:shadow-md transition-shadow duration-300 cursor-pointer" @click="$router.push(`/products/${item.id}`)">
                 <img :src="item.image" :alt="item.name" class="w-full h-full object-cover" />
              </div>
              <div class="flex-1 min-w-0">
                <h3 class="font-bold text-xl text-gray-800 mb-2 cursor-pointer hover:text-blue-600 transition-colors truncate" :title="item.name" @click="$router.push(`/products/${item.id}`)">{{ item.name }}</h3>
                
                <!-- Specs Display -->
                <div v-if="item.selectedColorName || item.selectedSize" class="flex flex-wrap gap-2 mb-3">
                   <span v-if="item.selectedColorName" class="text-xs font-bold px-2.5 py-1 bg-gray-100 rounded text-gray-600 border border-gray-200">
                     {{ item.selectedColorName }}
                   </span>
                   <span v-if="item.selectedSize" class="text-xs font-bold px-2.5 py-1 bg-gray-100 rounded text-gray-600 border border-gray-200">
                     {{ item.selectedSize }}码
                   </span>
                </div>

                <p class="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">¥{{ item.price.toFixed(2) }}</p>
              </div>
            </div>
            <div class="flex items-center justify-between w-full md:w-auto gap-4 flex-shrink-0">
              <div class="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-200">
                <button @click="cartStore.updateQuantity(item.cartItemId || item.id, item.quantity - 1)" class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white hover:shadow-sm text-gray-600 transition-all active:scale-95 font-bold">-</button>
                <span class="w-12 text-center font-semibold text-gray-700">{{ item.quantity }}</span>
                <button @click="cartStore.updateQuantity(item.cartItemId || item.id, item.quantity + 1)" class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white hover:shadow-sm text-gray-600 transition-all active:scale-95 font-bold">+</button>
              </div>
              <p class="font-bold text-xl w-24 text-right text-gray-900">¥{{ (item.price * item.quantity).toFixed(2) }}</p>
            </div>
          </div>
        </div>
        </div>
      </div>

      <!-- Right: Checkout Summary (Sticky) -->
      <div class="w-full lg:w-96 flex-shrink-0 lg:sticky lg:top-24 space-y-6">
        <div class="bg-white/80 backdrop-blur-md p-8 shadow-xl rounded-3xl border border-white/20">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">订单摘要</h2>
          
          <div class="space-y-4 mb-8 border-b border-gray-100 pb-8">
            <div class="flex justify-between text-gray-600">
              <span>商品小计 ({{ cartStore.selectedTotalItems }}件)</span>
              <span class="font-medium">¥{{ cartStore.totalPrice.toFixed(2) }}</span>
            </div>
            <div class="flex justify-between text-gray-600">
              <span>运费</span>
              <span class="text-green-600 font-medium">免运费</span>
            </div>
            <div class="flex justify-between text-gray-600">
               <span>优惠</span>
               <span :class="cartStore.totalDiscount > 0 ? 'text-red-500 font-bold' : 'text-gray-400'">
                 -¥{{ cartStore.totalDiscount.toFixed(2) }}
               </span>
            </div>
          </div>
          <div class="flex justify-between items-end mb-8">
            <span class="font-bold text-xl text-gray-800">应付金额</span>
            <span class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">¥{{ cartStore.finalPrice.toFixed(2) }}</span>
          </div>

          <button @click="checkout" :disabled="isCheckingOut || cartStore.items.filter(i => i.selected).length === 0" class="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center font-bold text-lg transform hover:-translate-y-1 active:scale-95">
            <span v-if="isCheckingOut" class="mr-3">
              <svg class="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </span>
            {{ isCheckingOut ? '正在结算...' : '立即结算' }}
          </button>
          
          <div class="mt-6 flex items-center justify-center gap-2 text-gray-400 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span>安全支付保障</span>
          </div>
        </div>
      </div>
    </div>
    
    <div v-else class="bg-white/80 backdrop-blur-md shadow-xl rounded-3xl p-8 mb-8 border border-white/20 text-center py-12 text-gray-500 flex flex-col items-center">
        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-full mb-8 shadow-inner">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <p class="text-2xl font-bold text-gray-800 mb-3">您的购物车还是空的</p>
        <p class="text-gray-500 mb-10 text-lg">快去挑选您喜欢的商品，开启品质生活！</p>
        <router-link to="/products" class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 font-bold text-lg flex items-center gap-2">
          <span>去逛逛</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </router-link>
    </div>

    <!-- Delete Confirmation Modal -->
    <div v-if="showDeleteModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden animate-scale-up">
        <div class="p-6 text-center">
          <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">确认删除?</h3>
          <p class="text-gray-500">您确定要从购物车中移除此商品吗？此操作无法撤销。</p>
        </div>
        <div class="flex border-t border-gray-100">
          <button @click="showDeleteModal = false" class="flex-1 py-4 text-gray-600 font-bold hover:bg-gray-50 transition-colors">
            取消
          </button>
          <div class="w-px bg-gray-100"></div>
          <button @click="confirmDelete" class="flex-1 py-4 text-red-600 font-bold hover:bg-red-50 transition-colors">
            确认删除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../store/cart'
import { useUserStore } from '../store/user'
import { useRouter } from 'vue-router'
import { ref, inject } from 'vue'

const cartStore = useCartStore()
const userStore = useUserStore()
const router = useRouter()
const toast = inject('toast')
const isCheckingOut = ref(false)

// Delete Modal State
const showDeleteModal = ref(false)
const itemToDelete = ref(null)

function promptDelete(itemId) {
  itemToDelete.value = itemId
  showDeleteModal.value = true
}

function confirmDelete() {
  if (itemToDelete.value) {
    cartStore.removeFromCart(itemToDelete.value)
    toast.success('商品已移除')
  }
  showDeleteModal.value = false
  itemToDelete.value = null
}

async function checkout() {
  if (!userStore.isLoggedIn) {
    toast.info('请先登录')
    router.push({ 
      path: '/login', 
      query: { redirect: '/checkout' } 
    })
    return
  }

  if (isCheckingOut.value) return
  isCheckingOut.value = true
  
  // 模拟结算处理
  await new Promise(resolve => setTimeout(resolve, 500))
  
  isCheckingOut.value = false
  router.push('/checkout')
}
</script>
