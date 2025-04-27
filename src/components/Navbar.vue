<template>
  <nav class="bg-white border-b border-gray-200 fixed w-full top-0 z-10">
    <div class="max-w-screen-xl flex items-center justify-between mx-auto p-4">
      <router-link to="/" class="text-2xl font-semibold">BizList</router-link>
      <button 
        v-if="authStore.isAuthenticated" 
        @click="authStore.logout" 
        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Logout
      </button>
    </div>
  </nav>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
const authStore = useAuthStore()
</script>