import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useBusinessStore = defineStore('business', () => {
  const businesses = ref([
    {
      id: 1,
      name: 'Tech Solutions Inc.',
      about: 'Providing innovative tech solutions',
      type: 'Corporation',
      industry: 'Technology',
      subIndustry: 'Software',
      products: ['Web Apps', 'Mobile Apps'],
      contact: '+1234567890',
      address: '123 Tech Street'
    }
  ])

  const userBusiness = ref(null)

  const setUserBusiness = (businessData) => {
    userBusiness.value = businessData
  }

  const searchBusinesses = (filters) => {
    return businesses.value.filter(business => {
      return (
        (!filters.name || business.name.toLowerCase().includes(filters.name.toLowerCase())) &&
        (!filters.industry || business.industry === filters.industry) &&
        (!filters.type || business.type === filters.type))
    })
  }

  return { businesses, userBusiness, setUserBusiness, searchBusinesses }
})