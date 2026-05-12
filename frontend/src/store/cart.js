import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])

  const totalItems = computed(() => items.value.reduce((acc, item) => acc + item.quantity, 0))
  const selectedItems = computed(() => items.value.filter(item => item.selected))
  const selectedTotalItems = computed(() => items.value.reduce((acc, item) => acc + (item.selected ? item.quantity : 0), 0))
  const totalPrice = computed(() => items.value.reduce((acc, item) => acc + (item.selected ? item.price * item.quantity : 0), 0))
  const totalDiscount = computed(() => 0)
  const finalPrice = computed(() => totalPrice.value - totalDiscount.value)
  const allSelected = computed(() => items.value.length > 0 && items.value.every(item => item.selected))

  // Helper to generate unique ID for cart items based on options
  function getCartItemId(product) {
    const color = product.selectedColor || 'default'
    const size = product.selectedSize || 'default'
    return `${product.id}-${color}-${size}`
  }

  function addToCart(product) {
    const cartItemId = getCartItemId(product)
    const existingItem = items.value.find(item => item.cartItemId === cartItemId)
    
    if (existingItem) {
      existingItem.quantity++
    } else {
      items.value.unshift({ 
        ...product, 
        cartItemId, 
        quantity: 1,
        selected: true // Default to selected
      })
    }
  }

  function toggleSelection(itemId) {
    const item = items.value.find(item => item.cartItemId === itemId || item.id === itemId)
    if (item) {
      item.selected = !item.selected
    }
  }

  function toggleAllSelection(value) {
    items.value.forEach(item => {
      item.selected = value
    })
  }

  function removeFromCart(itemId) {
    // Match by cartItemId (preferred) or id (fallback)
    const index = items.value.findIndex(item => item.cartItemId === itemId || item.id === itemId)
    if (index > -1) {
      items.value.splice(index, 1)
    }
  }

  function updateQuantity(itemId, quantity) {
    const item = items.value.find(item => item.cartItemId === itemId || item.id === itemId)
    if (item) {
      item.quantity = quantity
      if (item.quantity <= 0) {
        removeFromCart(itemId)
      }
    }
  }

  function clearCart() {
    items.value = []
  }

  function clearSelectedItems() {
    items.value = items.value.filter(item => !item.selected)
  }

  return { items, selectedItems, totalItems, selectedTotalItems, totalPrice, totalDiscount, finalPrice, allSelected, addToCart, removeFromCart, updateQuantity, clearCart, clearSelectedItems, toggleSelection, toggleAllSelection }
})
