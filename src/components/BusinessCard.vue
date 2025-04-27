<template>
  <div class="bg-white border border-gray-200 rounded-lg shadow p-5">
    <h5 class="text-2xl font-bold mb-2">{{ business.name }}</h5>
    <p class="mb-3">{{ business.about }}</p>
    <div class="flex gap-2 mb-3">
      <span class="bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded text-xs">
        {{ business.industry }}
      </span>
      <span class="bg-green-100 text-green-800 px-2.5 py-0.5 rounded text-xs">
        {{ business.type }}
      </span>
    </div>
    <router-link 
      :to="`/business/${business.id}`" 
      class="inline-flex items-center px-3 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      View details
    </router-link>
  </div>
</template>

<script setup>
defineProps({
  business: {
    type: Object,
    required: true
  }
})
</script>