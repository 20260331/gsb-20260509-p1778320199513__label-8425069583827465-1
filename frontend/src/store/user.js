import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = ref(null)
  const isLoggedIn = ref(false)

  function login(username, password) {
    // Mock login
    if (username && password) {
      user.value = { username }
      isLoggedIn.value = true
      return true
    }
    return false
  }

  function logout() {
    user.value = null
    isLoggedIn.value = false
  }

  function register(username, password) {
    // Mock register
    return true
  }

  return { user, isLoggedIn, login, logout, register }
})
