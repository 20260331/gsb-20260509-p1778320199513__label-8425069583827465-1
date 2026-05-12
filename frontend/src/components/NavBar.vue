<template>
  <nav class="bg-white/80 backdrop-blur-md border-b border-gray-100 fixed top-0 w-full z-50 transition-all duration-300">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-20 relative">
        <!-- Logo -->
        <router-link to="/" class="text-2xl font-extrabold tracking-tight flex-shrink-0 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-80 transition-opacity">
          BeautyLevel
        </router-link>
        
        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-10 absolute left-1/2 transform -translate-x-1/2">
          <router-link to="/" class="text-gray-600 hover:text-blue-600 font-semibold transition-colors relative group">
            首页
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </router-link>
          <router-link to="/products" class="text-gray-600 hover:text-blue-600 font-semibold transition-colors relative group">
            商品
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </router-link>
        </div>

        <!-- Desktop Right Menu -->
        <div class="hidden md:flex items-center space-x-6">
          <router-link to="/cart" class="text-gray-600 hover:text-blue-600 flex items-center transition-colors group">
            <div class="relative p-2 rounded-full group-hover:bg-blue-50 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span v-if="cartCount > 0" class="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-white shadow-sm transform scale-90 group-hover:scale-100 transition-transform">
                {{ cartCount }}
              </span>
            </div>
          </router-link>
          
          <template v-if="!isLoggedIn">
            <router-link to="/login" class="text-gray-600 hover:text-blue-600 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-gray-50">登录</router-link>
            <router-link to="/register" class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2.5 rounded-full font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 shadow-md">
              注册
            </router-link>
          </template>
          <template v-else>
             <div class="flex items-center space-x-4">
               <router-link to="/orders" class="text-gray-600 hover:text-blue-600 font-medium transition-colors">我的订单</router-link>
               <span class="text-gray-700 font-medium">用户</span>
               <button @click="logout" class="text-gray-500 hover:text-red-600 transition-colors">退出</button>
             </div>
          </template>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center">
          <router-link to="/cart" class="text-gray-600 hover:text-blue-600 flex items-center mr-4 relative">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span v-if="cartCount > 0" class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">{{ cartCount }}</span>
          </router-link>
          <button @click="isMenuOpen = !isMenuOpen" class="text-gray-600 hover:text-blue-600 focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-show="isMenuOpen" class="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg border-t z-40">
      <div class="flex flex-col px-4 py-2 space-y-2">
        <router-link to="/" class="block py-2 text-gray-600 hover:text-blue-600 border-b border-gray-100" @click="isMenuOpen = false">首页</router-link>
        <router-link to="/products" class="block py-2 text-gray-600 hover:text-blue-600 border-b border-gray-100" @click="isMenuOpen = false">商品</router-link>
        
        <template v-if="!isLoggedIn">
          <router-link to="/login" class="block py-2 text-gray-600 hover:text-blue-600 border-b border-gray-100" @click="isMenuOpen = false">登录</router-link>
          <router-link to="/register" class="block py-2 text-blue-600 font-medium" @click="isMenuOpen = false">注册</router-link>
        </template>
        <template v-else>
           <router-link to="/orders" class="block py-2 text-gray-600 hover:text-blue-600 border-b border-gray-100" @click="isMenuOpen = false">我的订单</router-link>
           <div class="flex justify-between items-center py-2 border-b border-gray-100">
             <span class="text-gray-600">当前用户</span>
             <button @click="logout" class="text-red-600">退出</button>
           </div>
        </template>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useCartStore } from '../store/cart'
import { useUserStore } from '../store/user'
import { useRouter } from 'vue-router'

const cartStore = useCartStore()
const userStore = useUserStore()
const router = useRouter()

const isMenuOpen = ref(false)

const cartCount = computed(() => cartStore.totalItems)
const isLoggedIn = computed(() => userStore.isLoggedIn)

function logout() {
  userStore.logout()
  isMenuOpen.value = false
  router.push('/')
}
</script>
