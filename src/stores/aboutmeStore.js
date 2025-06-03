import { defineStore } from 'pinia'
import * as aboutService from '@/services/aboutmeService'

export const useAboutStore = defineStore('about', {
  state: () => ({
    abouts: [],
    isLoading: false,
    error: null,
  }),
  actions: {
    async fetchAbouts() {
        this.isLoading = true
        this.error = null
        try {
            const response = await aboutService.aboutGetAll()
            const data = response.data
            const status = response.status
            this.abouts = data
            return { data, status }
        } catch (err) {
            this.error = err
            throw err
        } finally {
            this.isLoading = false
        }
        }
 }});