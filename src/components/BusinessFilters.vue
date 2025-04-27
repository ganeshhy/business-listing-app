<template>
    <div class="p-4 bg-gray-50 rounded-lg dark:bg-gray-800">
      <h3 class="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Filters</h3>
      <div class="space-y-4">
        <div>
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Business Name</label>
          <input v-model="filters.name" type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by name">
        </div>
        <div>
          <label for="industry" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Industry</label>
          <select v-model="filters.industry" id="industry" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="">All Industries</option>
            <option value="Technology">Technology</option>
            <option value="Retail">Retail</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Finance">Finance</option>
          </select>
        </div>
        <div>
          <label for="type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Business Type</label>
          <select v-model="filters.type" id="type" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="">All Types</option>
            <option value="Corporation">Corporation</option>
            <option value="LLC">LLC</option>
            <option value="Sole Proprietorship">Sole Proprietorship</option>
            <option value="Partnership">Partnership</option>
          </select>
        </div>
        <button @click="applyFilters" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Apply Filters
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const emit = defineEmits(['filter'])
  
  const filters = ref({
    name: '',
    industry: '',
    type: ''
  })
  
  const applyFilters = () => {
    emit('filter', filters.value)
  }
  </script>