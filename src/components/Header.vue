<template>
  <v-app-bar app color="white" elevation="1" class="pa-2">
    <v-row no-gutters class="w-100 align-center justify-space-between ma-0">
      <!-- Logo & Başlık -->
      <v-col cols="12" md="4" class="d-flex align-center justify-start pa-0">
        <div class="d-flex align-center flex-wrap ml-2 ml-md-4">
          <span class="text-h6 text-md-h4 font-weight-bold mr-2">
            Azime Tolumoğlu
          </span>
          <span class="text-subtitle-2 text-md-subtitle-1 font-weight-light">
            / SOFTWARE ENGINEER
          </span>
        </div>
      </v-col>

      <!-- Masaüstü Menü -->
      <v-col cols="12" md="8" class="d-none d-md-flex justify-end align-center pa-0">
        <router-link to="/about-me">
          <v-btn variant="text" color="black">ABOUT ME</v-btn>
        </router-link>
        <router-link to="/resume">
          <v-btn variant="text" color="black">RESUME</v-btn>
        </router-link>
        <router-link to="/projects">
          <v-btn variant="text" color="black">PROJECTS</v-btn>
        </router-link>
        <router-link to="/contact">
          <v-btn variant="text" color="black">CONTACT</v-btn>
        </router-link>
      </v-col>

      <!-- Mobil Menü Butonu -->
      <v-col cols="12" class="d-flex d-md-none justify-end align-center pa-0">
        <v-btn icon @click="drawer = true">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <!-- Mobil Drawer Menüsü -->
    <v-navigation-drawer
      v-model="drawer"
      temporary
      location="right"
      class="d-md-none"
    >
      <v-list nav>
        <v-list-item @click="navigateTo('/about-me')">
          <v-list-item-title>ABOUT ME</v-list-item-title>
        </v-list-item>
        <v-list-item @click="navigateTo('/resume')">
          <v-list-item-title>RESUME</v-list-item-title>
        </v-list-item>
        <v-list-item @click="navigateTo('/projects')">
          <v-list-item-title>PROJECTS</v-list-item-title>
        </v-list-item>
        <v-list-item @click="navigateTo('/contact')">
          <v-list-item-title>CONTACT</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app-bar>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const drawer = ref(false)
const router = useRouter()

function navigateTo(path: string) {
  router.push(path)
  drawer.value = false
}
</script>

<style scoped>
.v-btn:focus,
.v-btn:focus-visible {
  outline: none !important;
  box-shadow: none !important;
}
</style>
