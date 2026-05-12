<template>
  <div class="container mx-auto px-4 py-12 min-h-screen">
    <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
      <div>
        <h1 class="text-5xl font-black mb-4 text-gray-900 tracking-tight uppercase">New Arrivals</h1>
        <p class="text-gray-500 text-lg">探索最新运动与生活装备</p>
      </div>
      
      <!-- Filter/Sort/Search -->
      <div class="flex flex-col md:flex-row gap-6 w-full md:w-auto items-center">
        <!-- Search Box -->
        <div class="relative group w-full md:w-64">
          <input 
            v-model="searchQuery" 
            type="text" 
            placeholder="搜索商品" 
            class="w-full bg-transparent border-b-2 border-gray-200 py-2 pr-8 text-gray-900 font-medium placeholder-gray-400 focus:outline-none focus:border-black transition-colors" 
          />
          <span class="absolute right-0 top-2 text-gray-400 group-focus-within:text-black transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
        </div>

        <!-- Sort & Filter -->
        <div class="flex gap-4 w-full md:w-auto">
          <div class="relative flex-1 md:flex-none">
            <select v-model="sortBy" class="w-full md:w-auto appearance-none bg-white border border-gray-200 hover:border-gray-300 py-3 pl-4 pr-10 rounded-xl font-medium text-sm cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-black/5 shadow-sm text-gray-700">
              <option value="default">默认排序</option>
              <option value="price_asc">价格从低到高</option>
              <option value="price_desc">价格从高到低</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
            </div>
          </div>

          <div class="relative flex-1 md:flex-none">
            <select v-model="filterCategory" class="w-full md:w-auto appearance-none bg-white border border-gray-200 hover:border-gray-300 py-3 pl-4 pr-10 rounded-xl font-medium text-sm cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-black/5 shadow-sm text-gray-700">
              <option value="">所有分类</option>
              <option value="phone">手机通讯</option>
              <option value="computer">电脑办公</option>
              <option value="wearables">智能穿戴</option>
              <option value="audio">影音娱乐</option>
              <option value="home">智能家居</option>
              <option value="clothing">潮流服饰</option>
              <option value="shoes">运动鞋靴</option>
              <option value="accessories">潮流配件</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
      <div v-for="product in visibleProducts" :key="product.id" class="group cursor-pointer" @click="goToDetail(product.id)">
        <div class="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-6 rounded-lg">
           <img :src="product.image" :alt="product.name" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
           
           <!-- Tag -->
           <div class="absolute top-4 left-4 flex flex-col gap-2">
             <span class="bg-white/90 backdrop-blur text-black text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm">
               {{ getCategoryName(product.category) }}
             </span>
             <span v-if="product.originalPrice > product.price" class="bg-red-500/90 backdrop-blur text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm">
               -{{ Math.round((1 - product.price / product.originalPrice) * 100) }}%
             </span>
           </div>

           <!-- Quick Add Button -->
           <button 
             @click.stop="addToCart(product)"
             class="absolute bottom-0 left-0 w-full bg-black text-white font-bold py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2 hover:bg-gray-900"
           >
             <span>加入购物车</span>
             <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
             </svg>
           </button>
        </div>
        
        <div class="space-y-1">
          <div class="flex justify-between items-start">
            <h3 class="font-bold text-lg text-gray-900 group-hover:underline decoration-2 underline-offset-4 line-clamp-1" :title="product.name">{{ product.name }}</h3>
            <div class="flex flex-col items-end">
              <span class="font-bold text-gray-900">¥{{ product.price.toFixed(0) }}</span>
              <span v-if="product.originalPrice > product.price" class="text-xs text-gray-400 line-through">¥{{ product.originalPrice.toFixed(0) }}</span>
            </div>
          </div>
          <div class="flex items-center gap-2 mb-1">
             <span class="text-xs text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded">{{ product.brand }}</span>
             <div class="flex items-center text-xs text-orange-500" v-if="product.rating">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-0.5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {{ product.rating }}
             </div>
          </div>
          <p class="text-gray-500 text-sm line-clamp-1">{{ product.description }}</p>
        </div>
      </div>
    </div>

    <!-- Loading / End State -->
    <div class="mt-16 text-center">
       <div v-if="loading" class="inline-block animate-spin rounded-full h-8 w-8 border-4 border-gray-200 border-t-black"></div>
       <p v-else-if="visibleProducts.length >= filteredProducts.length && filteredProducts.length > 0" class="text-gray-400 text-sm">已经到底啦</p>
       <p v-else-if="filteredProducts.length === 0" class="text-gray-400 text-lg">没有找到相关商品</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, inject, onMounted, onUnmounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '../store/cart'
import { products as productData } from '../data/products'

const router = useRouter()
const cartStore = useCartStore()
const toast = inject('toast')

const sortBy = ref('default')
const filterCategory = ref('')
const searchQuery = ref('')

const page = ref(1)
const pageSize = 12
const loading = ref(false)

const products = ref(productData)

const filteredProducts = computed(() => {
  let result = [...products.value]
  
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase().trim()
    result = result.filter(p => 
      p.name.toLowerCase().includes(query) || 
      p.description.toLowerCase().includes(query) ||
      p.brand?.toLowerCase().includes(query)
    )
  }

  if (filterCategory.value) {
    result = result.filter(p => p.category === filterCategory.value)
  }
  
  if (sortBy.value === 'price_asc') {
    result.sort((a, b) => a.price - b.price)
  } else if (sortBy.value === 'price_desc') {
    result.sort((a, b) => b.price - a.price)
  }
  
  return result
})

const visibleProducts = computed(() => {
  return filteredProducts.value.slice(0, page.value * pageSize)
})

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

function loadMore() {
  if (loading.value) return
  if (visibleProducts.value.length >= filteredProducts.value.length) return
  
  loading.value = true
  // Simulate network delay
  setTimeout(() => {
    page.value++
    loading.value = false
  }, 500)
}

function handleScroll() {
  const scrollPosition = window.innerHeight + window.scrollY
  const documentHeight = document.documentElement.offsetHeight
  
  // Trigger load when within 300px of bottom
  if (scrollPosition >= documentHeight - 300) {
    loadMore()
  }
}

// Reset pagination when filters change
watch([searchQuery, filterCategory, sortBy], () => {
  page.value = 1
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

function goToDetail(id) {
  router.push(`/products/${id}`)
}

function addToCart(product) {
  // Add defaults for quick add
  const itemToAdd = {
    ...product,
    selectedColor: product.colors?.[0]?.value || '#000000',
    selectedColorName: product.colors?.[0]?.name || '默认',
    selectedSize: (product.category === 'clothing' || product.category === 'shoes') && product.specs?.['尺码'] ? product.specs['尺码'].split(',')[0] : ''
  }
  
  cartStore.addToCart(itemToAdd)
  toast.success('已加入购物车')
}
</script>