<template>
  <div class="flex flex-col min-h-screen pt-20 bg-gradient-to-br from-gray-50 to-blue-50">
    <NavBar />
    <main class="flex-grow">
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>
