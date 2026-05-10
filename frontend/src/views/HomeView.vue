<template>
  <div class="min-h-screen bg-gray-50/50">
    <!-- Hero Section -->
    <div class="relative overflow-hidden bg-white">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50/50 to-purple-50 opacity-70"></div>
      <div class="container mx-auto px-4 py-24 md:py-32 relative z-10 text-center">
        <h1 class="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
          探索<span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">品质生活</span>的无限可能
        </h1>
        <p class="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          精选全球好物，为您带来极致的购物体验。每一件商品，都代表着我们对美好生活的追求。
        </p>
        <router-link to="/products" class="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300">
          立即开始购物
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </router-link>
      </div>
    </div>
    
    <!-- Featured Products -->
    <div class="container mx-auto px-4 py-16">
      <div class="flex items-center justify-between mb-10">
        <h2 class="text-3xl font-bold text-gray-900 tracking-tight">热门精选</h2>
        <router-link to="/products" class="text-blue-600 hover:text-blue-700 font-medium flex items-center group">
          查看全部
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
        </router-link>
      </div>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        <div v-for="product in featuredProducts" :key="product.id" class="group cursor-pointer" @click="$router.push(`/products/${product.id}`)">
          <div class="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-6 rounded-lg">
            <img :src="product.image" :alt="product.name" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div class="absolute top-4 left-4 flex flex-col gap-2">
               <span class="bg-white/90 backdrop-blur text-black text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm">
                 {{ getCategoryName(product.category) }}
               </span>
               <span v-if="product.originalPrice > product.price" class="bg-red-500/90 backdrop-blur text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm">
                 -{{ Math.round((1 - product.price / product.originalPrice) * 100) }}%
               </span>
            </div>
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
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { products } from '../data/products'

const featuredProducts = computed(() => products.slice(0, 4))

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
</script>