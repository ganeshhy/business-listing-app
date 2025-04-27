<template>
  <div class="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
    <div class="w-full max-w-xs">
      <!-- BidList Header -->
      <h1 class="text-3xl font-bold text-center text-gray-800 mb-8">BidList</h1>
      
      <!-- Sign In Card -->
      <div class="bg-white shadow-md rounded px-8 pt-8 pb-6">
        <h2 class="text-xl font-semibold text-center text-gray-700 mb-6">SIGN IN</h2>
        
        <form @submit.prevent="handleLogin" class="space-y-4">
          <!-- Username Field -->
          <div>
            <label class="block text-gray-700 text-sm font-medium mb-1">Username</label>
            <input
              v-model="username"
              type="text"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter username"
            >
          </div>
          
          <!-- Password Field -->
          <div>
            <label class="block text-gray-700 text-sm font-medium mb-1">Password</label>
            <input
              v-model="password"
              type="password"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter password"
            >
          </div>
          
          <!-- Login Button -->
          <div class="pt-2">
            <button
              type="submit"
              class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              LOGIN
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const authStore = useAuthStore()
const router = useRouter()

const handleLogin = () => {
  authStore.login(username.value, password.value)
  router.push('/search')
}
</script>

<style>
/* This ensures the container padding works with fixed navbar */
.container {
  padding-top: 80px;
}
</style>