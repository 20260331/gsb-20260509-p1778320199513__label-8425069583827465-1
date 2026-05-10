<template>
  <div class="min-h-screen bg-white pt-12 pb-24">
    <div class="container mx-auto px-4">
      <div v-if="product" class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-24">
        <!-- Image Section -->
        <div class="flex flex-col gap-4">
          <!-- Main Image -->
          <div class="bg-gray-100 relative aspect-square overflow-hidden cursor-zoom-in group rounded-lg">
             <img :src="activeImage" :alt="product.name" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
             <div class="absolute top-4 left-4 flex flex-col gap-2">
               <span class="bg-white/90 backdrop-blur text-black text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm">
                 {{ getCategoryName(product.category) }}
               </span>
               <span v-if="product.originalPrice > product.price" class="bg-red-500/90 backdrop-blur text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm">
                 -{{ Math.round((1 - product.price / product.originalPrice) * 100) }}%
               </span>
             </div>
          </div>
          <!-- Thumbnails -->
          <div v-if="product.images && product.images.length > 1" class="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            <button 
              v-for="(img, index) in product.images" 
              :key="index"
              @click="activeImage = img"
              class="w-20 h-20 flex-shrink-0 border-2 rounded-md overflow-hidden transition-all"
              :class="activeImage === img ? 'border-black opacity-100' : 'border-transparent opacity-60 hover:opacity-100'"
            >
              <img :src="img" class="w-full h-full object-cover" />
            </button>
          </div>
        </div>
        
        <!-- Content Section -->
        <div class="flex flex-col space-y-8 lg:sticky lg:top-24">
          <div>
            <div class="flex items-center gap-2 mb-2">
               <span class="text-xs font-bold bg-gray-100 text-gray-600 px-2 py-1 rounded">{{ product.brand }}</span>
            </div>
            <h1 class="text-3xl lg:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-4">{{ product.name }}</h1>
            
            <div class="flex items-center justify-between mb-6">
               <div class="flex flex-col">
                 <div class="flex items-end gap-3">
                   <span class="text-4xl font-bold text-gray-900">¥{{ product.price.toFixed(0) }}</span>
                   <span v-if="product.originalPrice > product.price" class="text-lg text-gray-400 line-through mb-1">¥{{ product.originalPrice.toFixed(0) }}</span>
                 </div>
               </div>
               <div class="flex flex-col items-end">
                 <div class="flex items-center text-orange-500">
                   <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current" viewBox="0 0 20 20" :class="i <= Math.round(product.rating) ? 'text-orange-500' : 'text-gray-300'">
                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                   </svg>
                   <span class="text-gray-900 font-bold ml-2">{{ product.rating }}</span>
                 </div>
                 <span class="text-gray-400 text-sm mt-1">{{ product.reviewCount }} 评价</span>
               </div>
            </div>

            <p class="text-gray-600 leading-relaxed">{{ product.description }}</p>
          </div>
          
          <div class="h-px bg-gray-100 w-full"></div>

          <!-- Selectors -->
          <div class="space-y-6">
            <!-- Color -->
            <div v-if="product.colors && product.colors.length > 0">
              <h3 class="text-sm font-bold uppercase tracking-wider mb-3 text-gray-900">选择颜色 <span class="text-gray-500 font-normal normal-case ml-2">{{ selectedColorName }}</span></h3>
              <div class="flex flex-wrap gap-3">
                <button 
                  v-for="color in product.colors" 
                  :key="color.value"
                  @click="selectColor(color)"
                  class="w-10 h-10 rounded-full focus:outline-none transition-all relative border border-gray-200 shadow-sm"
                  :class="[
                    selectedColor === color.value ? 'ring-2 ring-offset-2 ring-gray-900 scale-110' : 'hover:scale-105 hover:ring-2 hover:ring-offset-2 hover:ring-gray-300'
                  ]"
                  :style="{ backgroundColor: color.value }"
                  :title="color.name"
                >
                </button>
              </div>
            </div>
            
            <!-- Size -->
            <div v-if="hasSizes">
              <h3 class="text-sm font-bold uppercase tracking-wider mb-3 text-gray-900">选择尺码 <span v-if="selectedSize" class="text-gray-500 font-normal normal-case ml-2">{{ selectedSize }}</span><span v-else class="text-red-500 text-xs ml-2 font-normal normal-case">* 请选择</span></h3>
              <div class="grid grid-cols-4 sm:grid-cols-6 gap-2">
                <button 
                  v-for="size in availableSizes" 
                  :key="size" 
                  @click="selectedSize = size"
                  class="border py-3 text-sm font-bold transition-all uppercase rounded-md"
                  :class="selectedSize === size ? 'border-black bg-black text-white' : 'border-gray-200 hover:border-black hover:text-black'"
                >
                  {{ size }}
                </button>
              </div>
            </div>
          </div>
          
          <div class="pt-8 mt-auto">
            <div class="flex gap-4">
              <!-- Quantity Selector -->
              <div class="flex items-center border border-gray-300 rounded-md w-32">
                <button @click="quantity > 1 && quantity--" class="w-10 h-14 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors font-bold rounded-l-md" :disabled="quantity <= 1">-</button>
                <span class="flex-1 text-center font-bold text-gray-900">{{ quantity }}</span>
                <button @click="quantity++" class="w-10 h-14 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors font-bold rounded-r-md">+</button>
              </div>
              
              <!-- Add to Cart Button -->
              <button :disabled="isAdding" @click="addToCart" class="flex-1 bg-black text-white h-14 hover:bg-gray-800 text-lg font-bold transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center uppercase tracking-wide gap-2 rounded-md shadow-lg hover:shadow-xl transform active:scale-[0.99]">
                 <span v-if="isAdding" class="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></span>
                 <span v-else>加入购物车</span>
              </button>
            </div>
          </div>
          
          <!-- Service Promise -->
          <div class="grid grid-cols-2 gap-4 text-sm text-gray-500 pt-4">
            <div class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>官方正品保证</span>
            </div>
            <div class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>24小时极速发货</span>
            </div>
            <div class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>7天无理由退换</span>
            </div>
            <div class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <span>运费险保障</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Not Found State -->
      <div v-else class="text-center py-32">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">商品未找到</h2>
        <button @click="$router.push('/products')" class="text-blue-600 font-bold hover:underline">返回商店</button>
      </div>

      <!-- Details / Specs / Reviews Tabs -->
      <div v-if="product" class="mb-24 border-t border-gray-100 pt-16">
        <div class="flex gap-8 mb-8 border-b border-gray-200 pb-4">
          <button 
            v-for="tab in ['details', 'specs', 'reviews']" 
            :key="tab"
            @click="activeTab = tab"
            class="text-lg font-bold uppercase tracking-wider pb-4 -mb-4.5 border-b-2 transition-colors whitespace-nowrap"
            :class="activeTab === tab ? 'border-black text-black' : 'border-transparent text-gray-400 hover:text-gray-600'"
          >
            {{ tab === 'details' ? '商品详情' : tab === 'specs' ? '规格参数' : `用户评价 (${product.reviews ? product.reviews.length : 0})` }}
          </button>
        </div>

        <div class="min-h-[300px]">
          <!-- Details Content -->
          <div v-if="activeTab === 'details'" class="max-w-4xl animate-fade-in mx-auto">
             <div class="prose prose-lg max-w-none text-gray-600 leading-loose">
                <p class="whitespace-pre-line">{{ product.detail }}</p>
             </div>
             <!-- Mock Detail Images if not real -->
             <div class="grid grid-cols-1 gap-4 mt-8" v-if="product.images && product.images.length > 0">
               <img v-for="(img, idx) in product.images.slice(0, 3)" :key="idx" :src="img" class="w-full rounded-lg shadow-sm" />
             </div>
          </div>

          <!-- Specs Content -->
          <div v-if="activeTab === 'specs'" class="max-w-5xl animate-fade-in mx-auto">
            <div class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <dl class="grid grid-cols-1 md:grid-cols-2">
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 px-4 sm:px-6 py-4 border-b border-gray-100 md:border-r hover:bg-gray-50 transition-colors">
                  <dt class="text-sm font-medium text-gray-500">商品编号</dt>
                  <dd class="text-sm font-semibold text-gray-900 sm:col-span-2 break-all">{{ product.id }}</dd>
                </div>
                
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 px-4 sm:px-6 py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <dt class="text-sm font-medium text-gray-500">品牌</dt>
                  <dd class="text-sm font-semibold text-gray-900 sm:col-span-2 break-all">{{ product.brand }}</dd>
                </div>

                <div 
                  v-for="(value, key, index) in product.specs" 
                  :key="key" 
                  class="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 px-4 sm:px-6 py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  :class="[
                    index % 2 === 0 ? 'md:border-r' : '',
                    Math.floor((index + 2) / 2) % 2 !== 0 ? 'bg-gray-50/50' : 'bg-white'
                  ]"
                >
                  <dt class="text-sm font-medium text-gray-500">{{ key }}</dt>
                  <dd class="text-sm font-semibold text-gray-900 sm:col-span-2 break-all">{{ value }}</dd>
                </div>
              </dl>
            </div>
          </div>

          <!-- Reviews Content -->
          <div v-if="activeTab === 'reviews'" class="w-full animate-fade-in space-y-8">
            <!-- Review List -->
            <div v-if="product.reviews && product.reviews.length > 0">
              <div v-for="review in product.reviews" :key="review.id" class="border-b border-gray-100 pb-8 mb-8 last:mb-0 last:border-0 last:pb-0">
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500 overflow-hidden">
                      <img v-if="review.avatar" :src="review.avatar" class="w-full h-full object-cover" />
                      <span v-else>{{ review.user.charAt(0) }}</span>
                    </div>
                    <div>
                      <h4 class="font-bold text-gray-900">{{ review.user }}</h4>
                      <div class="flex text-orange-500 text-xs">
                        <svg v-for="s in 5" :key="s" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current" viewBox="0 0 20 20" :class="s <= review.rating ? 'opacity-100' : 'opacity-20 text-gray-400'">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <span class="text-gray-400 text-sm">{{ review.date }}</span>
                </div>
                <p class="text-gray-600">{{ review.content }}</p>
              </div>
            </div>
            <div v-else class="text-center text-gray-500 py-8">
              暂无评价，快来抢沙发吧！
            </div>
          </div>
        </div>
      </div>

      <!-- Recommendations -->
      <div v-if="recommendations.length > 0" class="mb-24">
        <h2 class="text-3xl font-black uppercase mb-10 tracking-tight">猜你喜欢</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="rec in recommendations" 
            :key="rec.id" 
            class="group cursor-pointer"
            @click="router.push(`/products/${rec.id}`)"
          >
            <div class="relative aspect-[3/4] bg-gray-100 mb-4 overflow-hidden rounded-lg">
              <img :src="rec.image" :alt="rec.name" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <h3 class="font-bold text-lg text-gray-900 group-hover:underline line-clamp-1">{{ rec.name }}</h3>
            <div class="flex items-center gap-2">
              <span class="text-gray-900 font-bold">¥{{ rec.price.toFixed(0) }}</span>
              <span class="text-gray-400 text-sm line-through" v-if="rec.originalPrice > rec.price">¥{{ rec.originalPrice.toFixed(0) }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Browsing History -->
      <div v-if="history.length > 0" class="border-t border-gray-100 pt-16">
        <h2 class="text-2xl font-bold uppercase mb-8 text-gray-500">最近浏览</h2>
        <div class="flex gap-6 overflow-x-auto pb-8 scrollbar-hide">
          <div 
            v-for="item in history" 
            :key="item.id" 
            class="min-w-[200px] w-[200px] cursor-pointer group flex-shrink-0"
            @click="router.push(`/products/${item.id}`)"
          >
            <div class="relative aspect-square bg-gray-100 mb-3 overflow-hidden rounded-md">
              <img :src="item.image" :alt="item.name" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <h4 class="font-bold text-sm text-gray-900 truncate">{{ item.name }}</h4>
            <span class="text-gray-500 text-sm">¥{{ item.price.toFixed(0) }}</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, inject, watch, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCartStore } from '../store/cart'
import { products as productData } from '../data/products'

const route = useRoute()
const router = useRouter()
const cartStore = useCartStore()
const toast = inject('toast')

const product = ref(null)
const quantity = ref(1)
const isAdding = ref(false)
const activeTab = ref('details')
const history = ref([])
const activeImage = ref('')

// Selection State
const selectedColor = ref('')
const selectedColorName = ref('')
const selectedSize = ref('')

const availableSizes = computed(() => {
  if (!product.value) return []
  if (product.value.sizes) return product.value.sizes
  if (product.value.specs && product.value.specs['尺码']) {
    return product.value.specs['尺码'].split(',').map(s => s.trim())
  }
  return []
})

const hasSizes = computed(() => {
  return availableSizes.value.length > 0
})

function selectColor(color) {
  selectedColor.value = color.value
  selectedColorName.value = color.name
}

// Recommendations based on category
const recommendations = computed(() => {
  if (!product.value) return []
  return productData
    .filter(p => p.category === product.value.category && p.id !== product.value.id)
    .slice(0, 4)
})

function loadProduct(id) {
  const found = productData.find(p => p.id === parseInt(id))
  if (found) {
    product.value = found
    activeImage.value = found.image
    
    // Default selections
    if (found.colors && found.colors.length > 0) {
      selectedColor.value = found.colors[0].value
      selectedColorName.value = found.colors[0].name
    } else {
      selectedColor.value = ''
      selectedColorName.value = ''
    }
    
    // Default size logic: if sizes exist, default to first one? Or force selection?
    // Let's force selection for better UX if sizes are required, but pre-select M if available for quick add
    // Actually, "M" is a safe bet for clothing, but let's be cleaner and check if it exists
    const sizes = found.sizes || (found.specs?.['尺码'] ? found.specs['尺码'].split(',') : [])
    if (sizes.length > 0) {
      selectedSize.value = sizes[0] // Pre-select first size
    } else {
      selectedSize.value = ''
    }

    addToHistory(found)
  }
}

function addToHistory(item) {
  let list = JSON.parse(localStorage.getItem('view_history') || '[]')
  list = list.filter(p => p.id !== item.id)
  list.unshift({ id: item.id, name: item.name, price: item.price, image: item.image })
  if (list.length > 10) list.pop()
  localStorage.setItem('view_history', JSON.stringify(list))
  history.value = list
}

onMounted(() => {
  loadProduct(route.params.id)
  history.value = JSON.parse(localStorage.getItem('view_history') || '[]').filter(p => p.id !== parseInt(route.params.id))
})

watch(
  () => route.params.id,
  (newId) => {
    if (newId) {
      loadProduct(newId)
      window.scrollTo({ top: 0, behavior: 'smooth' })
      quantity.value = 1
      activeTab.value = 'details'
      history.value = JSON.parse(localStorage.getItem('view_history') || '[]').filter(p => p.id !== parseInt(newId))
    }
  }
)

function getCategoryName(category) {
  const map = {
    'phone': '手机通讯',
    'computer': '电脑办公',
    'wearables': '智能穿戴',
    'audio': '影音娱乐',
    'home': '智能家居',
    'clothing': '潮流服饰',
    'shoes': '运动鞋靴',
    'accessories': '潮流配件'
  }
  return map[category] || category
}

async function addToCart() {
  if (product.value) {
    if (isAdding.value) return

    // Validation
    if (hasSizes.value && !selectedSize.value) {
      toast.warning('请选择尺码')
      return
    }

    isAdding.value = true
    
    await new Promise(resolve => setTimeout(resolve, 500))
    
    // Create item with options
    const itemToAdd = {
      ...product.value,
      selectedColor: selectedColor.value,
      selectedColorName: selectedColorName.value,
      selectedSize: selectedSize.value
    }

    for(let i=0; i<quantity.value; i++) {
        cartStore.addToCart(itemToAdd)
    }
    
    const sizeInfo = selectedSize.value ? `, ${selectedSize.value}码` : ''
    const colorInfo = selectedColorName.value ? `, ${selectedColorName.value}` : ''
    toast.success(`已加入购物车 (${product.value.name}${colorInfo}${sizeInfo})`)
    isAdding.value = false
  }
}
</script>