<template>
    <div class="container mx-auto px-4 py-20">
      <Navbar />
      <div class="max-w-2xl mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 p-6">
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Business Profile</h1>
        <form @submit.prevent="saveProfile">
          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Business Name</label>
              <input v-model="businessData.name" type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
            </div>
            <div>
              <label for="type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Business Type</label>
              <select v-model="businessData.type" id="type" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="Corporation">Corporation</option>
                <option value="LLC">LLC</option>
                <option value="Sole Proprietorship">Sole Proprietorship</option>
                <option value="Partnership">Partnership</option>
              </select>
            </div>
            <div>
              <label for="industry" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Industry</label>
              <input v-model="businessData.industry" type="text" id="industry" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
            </div>
            <div>
              <label for="subIndustry" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sub-Industry</label>
              <input v-model="businessData.subIndustry" type="text" id="subIndustry" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>
            <div class="md:col-span-2">
              <label for="about" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">About Business</label>
              <textarea v-model="businessData.about" id="about" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Describe your business..."></textarea>
            </div>
            <div class="md:col-span-2">
              <label for="products" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Products and Services (comma separated)</label>
              <input v-model="businessData.productsInput" type="text" id="products" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product 1, Product 2, Service 1">
            </div>
            <div>
              <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact Number</label>
              <input v-model="businessData.contact" type="tel" id="contact" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
            </div>
            <div>
              <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Business Address</label>
              <input v-model="businessData.address" type="text" id="address" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
            </div>
          </div>
          <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save Profile</button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { useBusinessStore } from '@/stores/business'
  import Navbar from '@/components/Navbar.vue'
  
  const businessStore = useBusinessStore()
  
  const businessData = ref({
    name: '',
    about: '',
    type: 'Corporation',
    industry: '',
    subIndustry: '',
    productsInput: '',
    contact: '',
    address: ''
  })
  
  const saveProfile = () => {
    const products = businessData.value.productsInput
      .split(',')
      .map(item => item.trim())
      .filter(item => item)
    
    businessStore.setUserBusiness({
      ...businessData.value,
      products
    })
  }
  </script>