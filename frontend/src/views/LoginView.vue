<template>
  <div class="flex items-center justify-center min-h-[calc(100vh-12rem)] py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-white/20">
      <div>
        <h2 class="mt-2 text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 tracking-tight">欢迎回来</h2>
        <p class="mt-4 text-center text-gray-600 text-lg">
          登录您的账户开启品质生活
        </p>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="handleLogin">
        <div class="space-y-5">
          <div>
            <label for="username" class="block text-sm font-medium text-gray-700 ml-1 mb-1">用户名</label>
            <div class="mt-1">
              <input id="username" v-model="username" name="username" type="text" required class="appearance-none block w-full px-5 py-3 border border-gray-200 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-gray-50/50" placeholder="请输入用户名">
            </div>
          </div>
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700 ml-1 mb-1">密码</label>
            <div class="mt-1">
              <input id="password" v-model="password" name="password" type="password" required class="appearance-none block w-full px-5 py-3 border border-gray-200 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-gray-50/50" placeholder="请输入密码">
            </div>
          </div>
        </div>

        <div>
          <button type="submit" :disabled="isLoading" class="group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-bold rounded-xl text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-lg hover:shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95">
            <span v-if="isLoading" class="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </span>
            {{ isLoading ? '登录中...' : '立即登录' }}
          </button>
        </div>
        <div class="text-center">
          <router-link to="/register" class="font-medium text-blue-600 hover:text-indigo-600 transition duration-300 ease-in-out hover:underline underline-offset-4">还没有账号？立即注册</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, inject } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useUserStore } from '../store/user'

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()
const toast = inject('toast')

const username = ref('')
const password = ref('')
const isLoading = ref(false)

async function handleLogin() {
  if (isLoading.value) return
  
  isLoading.value = true
  
  // 模拟网络延迟
  await new Promise(resolve => setTimeout(resolve, 800))
  
  try {
    if (userStore.login(username.value, password.value)) {
      toast.success('登录成功')
      const redirect = route.query.redirect || '/'
      router.push(redirect)
    } else {
      toast.error('登录失败，请检查用户名或密码')
    }
  } catch (error) {
    toast.error('发生错误：' + error.message)
  } finally {
    isLoading.value = false
  }
}
</script>
