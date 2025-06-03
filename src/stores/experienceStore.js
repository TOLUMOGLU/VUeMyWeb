import { defineStore } from 'pinia'
import * as experienceService from '@/services/experienceService'

export const useExperienceStore = defineStore('experience', {
  state: () => ({
    experiences: [],
    isLoading: false,
    error: null,
  }),
  actions: {
    async fetchExperiences() {
        this.isLoading = true
        this.error = null
        try {
            const response = await experienceService.experienceGetAll()
            const data = response.data
            const status = response.status
            this.experiences = data
            return { data, status }
        } catch (err) {
            this.error = err
            throw err
        } finally {
            this.isLoading = false
        }
        }
 }});