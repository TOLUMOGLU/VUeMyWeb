import { defineStore } from "pinia";
import * as educationService from '@/services/educationService'

export const useEducationStore = defineStore('education', {
  state: () => ({
    educations: [],
    isLoading: false,
    error: null,
  }),
  actions: {
    async fetchEducations() {
      this.isLoading = true
      this.error = null
      try {
        const response = await educationService.educationGetAll()
        const data = response.data
        const status = response.status
        this.educations = data
        return { data, status }
      } catch (err) {
        this.error = err
        throw err
      } finally {
        this.isLoading = false
      }
    },}})