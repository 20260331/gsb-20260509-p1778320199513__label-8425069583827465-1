<template>
  <div class="max-w-[1200px] mx-auto px-4 py-12 min-h-screen">
    <h1 class="text-4xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">确认订单</h1>
    
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div class="lg:col-span-2 space-y-8">
        <!-- Address -->
        <div class="bg-white/80 backdrop-blur-md p-4 lg:p-8 rounded-3xl shadow-xl border border-white/20">
          <h2 class="text-2xl font-bold mb-6 flex items-center gap-2">
            <span class="w-1 h-8 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full block"></span>
            收货信息
          </h2>
          <form class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label class="text-sm font-bold text-gray-700 ml-1">收货人姓名</label>
                <input v-model="form.name" type="text" placeholder="请输入姓名" class="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none" required>
              </div>
              <div class="space-y-2">
                <label class="text-sm font-bold text-gray-700 ml-1">联系电话</label>
                <input v-model="form.phone" type="tel" placeholder="请输入手机号码" class="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none" required>
              </div>
            </div>

            <!-- Region Selection -->
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700 ml-1">所在地区</label>
              <div class="grid grid-cols-3 gap-4">
                <select v-model="form.province" @change="handleProvinceChange" class="bg-gray-50 border border-gray-200 p-4 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none appearance-none">
                  <option value="">选择省份</option>
                  <option v-for="p in provinces" :key="p.code" :value="p.code">{{ p.name }}</option>
                </select>
                <select v-model="form.city" @change="handleCityChange" :disabled="!form.province" class="bg-gray-50 border border-gray-200 p-4 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none appearance-none disabled:bg-gray-100 disabled:text-gray-400">
                  <option value="">选择城市</option>
                  <option v-for="c in availableCities" :key="c.code" :value="c.code">{{ c.name }}</option>
                </select>
                <select v-model="form.district" :disabled="!form.city" class="bg-gray-50 border border-gray-200 p-4 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none appearance-none disabled:bg-gray-100 disabled:text-gray-400">
                  <option value="">选择区县</option>
                  <option v-for="d in availableDistricts" :key="d.code" :value="d.code">{{ d.name }}</option>
                </select>
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700 ml-1">详细地址</label>
              <textarea v-model="form.address" rows="3" placeholder="街道、楼牌号等" class="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none resize-none" required></textarea>
            </div>
          </form>
        </div>
        
        <!-- Product List -->
        <div class="bg-white/80 backdrop-blur-md p-4 lg:p-8 rounded-3xl shadow-xl border border-white/20">
          <h2 class="text-2xl font-bold mb-6 flex items-center gap-2">
            <span class="w-1 h-8 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full block"></span>
            商品清单
            <span class="text-sm font-normal text-gray-500 ml-2">共 {{ selectedTotalItems }} 件</span>
          </h2>
          <div class="space-y-6">
            <div v-for="item in selectedItems" :key="item.cartItemId || item.id" class="flex gap-4 items-center border-b border-gray-100 last:border-0 pb-6 last:pb-0">
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

        <!-- Payment -->
        <div class="bg-white/80 backdrop-blur-md p-4 lg:p-8 rounded-3xl shadow-xl border border-white/20">
          <h2 class="text-2xl font-bold mb-6 flex items-center gap-2">
            <span class="w-1 h-8 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full block"></span>
            支付方式
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div 
              @click="paymentMethod = 'wechat'"
              :class="{'border-blue-500 bg-blue-50/50 ring-2 ring-blue-500/20': paymentMethod === 'wechat', 'border-gray-200 hover:border-blue-300 hover:bg-gray-50': paymentMethod !== 'wechat'}"
              class="border-2 p-6 rounded-2xl cursor-pointer transition-all duration-300 flex items-center justify-between h-24 group relative overflow-hidden"
            >
              <div class="flex items-center gap-3 z-10">
                <span class="text-3xl bg-green-100 w-12 h-12 rounded-full flex items-center justify-center text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.937 8.344c-.75 0-1.359.516-1.359 1.172 0 .656.609 1.172 1.36 1.172.75 0 1.359-.516 1.359-1.172 0-.656-.61-1.172-1.36-1.172zm5.765 0c-.75 0-1.359.516-1.359 1.172 0 .656.61 1.172 1.36 1.172.75 0 1.36-.516 1.36-1.172 0-.656-.61-1.172-1.36-1.172zm-8.83 5.334c-.655 0-1.17.447-1.17 1.008 0 .563.515 1.01 1.171 1.01.657 0 1.172-.447 1.172-1.01 0-.561-.515-1.008-1.172-1.008zm5.228 0c-.656 0-1.172.447-1.172 1.008 0 .563.516 1.01 1.172 1.01.656 0 1.171-.447 1.171-1.01 0-.561-.515-1.008-1.171-1.008z"/></svg>
                </span>
                <span class="font-bold text-lg text-gray-800">微信支付</span>
              </div>
              <div v-if="paymentMethod === 'wechat'" class="bg-blue-600 text-white rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
              </div>
            </div>
            <div 
              @click="paymentMethod = 'alipay'"
              :class="{'border-blue-500 bg-blue-50/50 ring-2 ring-blue-500/20': paymentMethod === 'alipay', 'border-gray-200 hover:border-blue-300 hover:bg-gray-50': paymentMethod !== 'alipay'}"
              class="border-2 p-6 rounded-2xl cursor-pointer transition-all duration-300 flex items-center justify-between h-24 group relative overflow-hidden"
            >
              <div class="flex items-center gap-3 z-10">
                <span class="text-3xl bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                </span>
                <span class="font-bold text-lg text-gray-800">支付宝</span>
              </div>
              <div v-if="paymentMethod === 'alipay'" class="bg-blue-600 text-white rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Summary Sidebar -->
      <div class="lg:col-span-1">
        <div class="bg-white/80 backdrop-blur-md p-4 lg:p-8 rounded-3xl shadow-xl border border-white/20 h-fit sticky top-24">
          <h2 class="text-2xl font-bold mb-6 flex items-center gap-2">
            <span class="w-1 h-8 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full block"></span>
            订单摘要
          </h2>
          <div class="space-y-4 mb-8 border-b border-gray-100 pb-8">
            <div class="flex justify-between text-gray-600">
              <span>商品小计 ({{ selectedTotalItems }}件)</span>
              <span class="font-medium">¥{{ selectedTotalPrice.toFixed(2) }}</span>
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
            <span class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">¥{{ selectedFinalPrice.toFixed(2) }}</span>
          </div>
          <button @click="submitOrder" :disabled="isSubmitting" class="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 font-bold text-lg transform hover:-translate-y-1 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center">
             <span v-if="isSubmitting" class="mr-2">
               <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                 <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                 <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
               </svg>
             </span>
             {{ isSubmitting ? '正在提交...' : '提交订单' }}
          </button>
          
          <p class="text-xs text-center text-gray-400 mt-4">
            提交订单即表示您同意我们的<router-link to="/agreement/user" class="underline hover:text-blue-600">用户协议</router-link>
          </p>
        </div>
      </div>
    </div>

    <!-- Success Modal -->
    <div v-if="showModal" class="fixed inset-0 bg-gray-900/60 backdrop-blur-sm flex items-center justify-center z-50 transition-all duration-300">
      <div class="bg-white p-10 rounded-3xl shadow-2xl max-w-sm w-full text-center transform scale-100 animate-bounce-in relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-50 z-0"></div>
        <div class="relative z-10">
          <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h3 class="text-3xl font-bold mb-3 text-gray-900">支付成功</h3>
          <p class="text-gray-500 mb-8 text-lg">感谢您的购买！您的订单已确认。</p>
          <button @click="finishOrder" class="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 font-bold transform hover:-translate-y-0.5 active:scale-95">
            返回首页
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, inject, onMounted, computed } from 'vue'
import { useCartStore } from '../store/cart'
import { useUserStore } from '../store/user'
import { useOrderStore } from '../store/order'
import { useRouter } from 'vue-router'

const cartStore = useCartStore()
const userStore = useUserStore()
const orderStore = useOrderStore()
const router = useRouter()
const toast = inject('toast')

const form = ref({
  name: '',
  phone: '',
  province: '',
  city: '',
  district: '',
  address: ''
})

const paymentMethod = ref('wechat')
const showModal = ref(false)
const isSubmitting = ref(false)

const selectedItems = computed(() => cartStore.items.filter(item => item.selected))
const selectedTotalItems = computed(() => selectedItems.value.reduce((acc, item) => acc + item.quantity, 0))
const selectedTotalPrice = computed(() => selectedItems.value.reduce((acc, item) => acc + item.price * item.quantity, 0))
const selectedFinalPrice = computed(() => selectedTotalPrice.value - cartStore.totalDiscount)

// Mock Address Data
const provinces = [
  { name: '北京', code: '110000' },
  { name: '上海', code: '310000' },
  { name: '广东', code: '440000' },
  { name: '浙江', code: '330000' }
]

const cities = {
  '110000': [{ name: '北京市', code: '110100' }],
  '310000': [{ name: '上海市', code: '310100' }],
  '440000': [{ name: '广州市', code: '440100' }, { name: '深圳市', code: '440300' }],
  '330000': [{ name: '杭州市', code: '330100' }, { name: '宁波市', code: '330200' }]
}

const districts = {
  '110100': [{ name: '朝阳区', code: '110105' }, { name: '海淀区', code: '110108' }],
  '310100': [{ name: '浦东新区', code: '310115' }, { name: '黄浦区', code: '310101' }],
  '440100': [{ name: '天河区', code: '440106' }, { name: '越秀区', code: '440104' }],
  '440300': [{ name: '南山区', code: '440305' }, { name: '福田区', code: '440304' }],
  '330100': [{ name: '西湖区', code: '330106' }, { name: '余杭区', code: '330110' }],
  '330200': [{ name: '鄞州区', code: '330212' }, { name: '海曙区', code: '330203' }]
}

const availableCities = computed(() => {
  return form.value.province ? cities[form.value.province] || [] : []
})

const availableDistricts = computed(() => {
  return form.value.city ? districts[form.value.city] || [] : []
})

function handleProvinceChange() {
  form.value.city = ''
  form.value.district = ''
}

function handleCityChange() {
  form.value.district = ''
}

onMounted(() => {
  if (!userStore.isLoggedIn) {
    toast?.info('请先登录')
    router.replace({ 
      path: '/login', 
      query: { redirect: '/checkout' } 
    })
  }
})

async function submitOrder() {
  if (!form.value.name || !form.value.phone || !form.value.province || !form.value.city || !form.value.district || !form.value.address) {
    toast?.warning('请填写完整的收货信息')
    return
  }
  
  if (isSubmitting.value) return
  isSubmitting.value = true
  
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  orderStore.createOrder({
    items: selectedItems.value,
    address: form.value,
    paymentMethod: paymentMethod.value,
    totalPrice: selectedTotalPrice.value,
    finalPrice: selectedFinalPrice.value
  })

  isSubmitting.value = false
  showModal.value = true
}

function finishOrder() {
  cartStore.removeSelectedItems()
  showModal.value = false
  router.push('/')
}
</script>
