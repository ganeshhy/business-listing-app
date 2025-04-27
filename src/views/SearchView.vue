<template>
  <div class="container mx-auto px-4 py-20">
    <div class="flex flex-col md:flex-row gap-6">
      <div class="w-full md:w-1/4">
        <BusinessFilters @filter="applyFilters" />
      </div>
      <div class="w-full md:w-3/4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BusinessCard 
            v-for="business in filteredBusinesses" 
            :key="business.id" 
            :business="business" 
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useBusinessStore } from '@/stores/business'
import BusinessCard from '@/components/BusinessCard.vue'
import BusinessFilters from '@/components/BusinessFilters.vue'

const businessStore = useBusinessStore()
const filters = ref({})

const filteredBusinesses = computed(() => {
  return businessStore.searchBusinesses(filters.value)
})

const applyFilters = (newFilters) => {
  filters.value = newFilters
}
</script>