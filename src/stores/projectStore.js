import { defineStore } from 'pinia'
import * as projectService from '@/services/projectService'

export const useProjectStore = defineStore('project', {
  state: () => ({
    projects: [],
    isLoading: false,
    error: null,
  }),
  actions: {
    async fetchProjects() {
        this.isLoading = true
        this.error = null
        try {
            const response = await projectService.projectGetAll()
            const data = response.data
            const status = response.status
            this.projects = data
            return { data, status }
        } catch (err) {
            this.error = err
            throw err
        } finally {
            this.isLoading = false
        }
    }}
})
