<template>
    <div class="container mx-auto px-4 py-20">
      <Navbar />
      <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 p-6">
        <div class="flex justify-between items-start mb-6">
          <div>
            <h1 class="text-3xl font-bold text-gray-900 dark:text-white">{{ business.name }}</h1>
            <div class="flex items-center space-x-2 mt-2">
              <span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{{ business.industry }}</span>
              <span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">{{ business.type }}</span>
            </div>
          </div>
        </div>
  
        <div class="mb-6">
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">About</h2>
          <p class="text-gray-700 dark:text-gray-300">{{ business.about }}</p>
        </div>
  
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Details</h2>
            <div class="space-y-2">
              <p class="text-gray-700 dark:text-gray-300"><span class="font-medium">Sub-Industry:</span> {{ business.subIndustry || 'N/A' }}</p>
              <p class="text-gray-700 dark:text-gray-300"><span class="font-medium">Contact:</span> {{ business.contact }}</p>
              <p class="text-gray-700 dark:text-gray-300"><span class="font-medium">Address:</span> {{ business.address }}</p>
            </div>
          </div>
  
          <div>
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Products & Services</h2>
            <div v-if="business.products && business.products.length > 0" class="flex flex-wrap gap-2">
              <span v-for="(product, index) in business.products" :key="index" class="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                {{ product }}
              </span>
            </div>
            <p v-else class="text-gray-500 dark:text-gray-400">No products/services listed</p>
          </div>
        </div>
  
        <router-link to="/search" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Back to Search
        </router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { useBusinessStore } from '@/stores/business'
  import Navbar from '@/components/Navbar.vue'
  
  const route = useRoute()
  const businessStore = useBusinessStore()
  
  const business = computed(() => {
    return businessStore.businesses.find(b => b.id === parseInt(route.params.id)) || {}
  })
  </script>