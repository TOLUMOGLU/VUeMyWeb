import { defineStore } from "pinia";
import * as skillsetService from '@/services/skillsetService';

export const useSkillsetStore = defineStore('skillset', {
  state: () => ({
    skillset: null,
    isLoading: false,
    error: null,
  }),

  actions: {
    async fetchSkillsets() {
      this.isLoading = true;
      this.error = null;
      try {
        const response = await skillsetService.skillsetGetAll();
        this.skillset = response.data;
        return response;
      } catch (err) {
        this.error = err;
        throw err;
      } finally {
        this.isLoading = false;
      }
    },}})