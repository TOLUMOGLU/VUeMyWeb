<template>
  <v-container fluid class="pa-4" style="background-color: #1E3A8A; min-height: 100vh;">
    <v-row justify="center" class="pa-12">
      <v-col cols="12" class="text-center mb-8 pt-12">
        <h1 class="pa-3 text-white font-weight-bold">Projects</h1>
      </v-col>
      <v-col cols="12" md="10" lg="8" class="mb-6">
        <p class="text-white" style="font-size: 1rem; line-height: 1.6;">
          I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
        </p>
      </v-col>
      <v-col
        v-for="(project, index) in store.projects"
        :key="'project-' + index"
        cols="12" md="10" lg="8"
        class="mb-8 mb-md-12 mb-lg-16">
        <v-card class="elevation-2" style="min-height: 35vh; border-radius: 12px; background-color: #f9f9f9;">
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6" class="pa-6 text-left">
                <h3 class="text-h6 font-weight-bold mb-2" style="color: #F97316;">{{ project.title }}</h3>
                <div class="text-subtitle-1 font-weight-medium mb-1" style="color: #3f51b5;">
                  {{ project.role }}
                </div>
                <p style="color: #444; font-size: 0.95rem; line-height: 1.5;">
                  {{ project.description }}
                </p>
              </v-col>
              <v-col cols="12" md="6" class="d-flex align-center justify-end pa-4">
                <img
                  :src="project.image"
                  alt="Project image"
                  style="max-width: 100%; height: auto; border-radius: 8px;"
                />
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <div style="height: 80px;"></div>
    </v-row>
  </v-container>
</template>

<script setup>
import { onMounted } from 'vue'
import { useProjectStore } from '../stores/projectStore'

const store = useProjectStore()

onMounted(async () => {
  await store.fetchProjects()
})

</script>
