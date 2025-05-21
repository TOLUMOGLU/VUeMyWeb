<template>
  <v-container fluid class="pa-0">
    <v-app-bar app color="white" elevation="1">
      <v-container>
        <v-row class="align-center" no-gutters>
          <v-col cols="8" md="4" class="d-flex align-center">
            <div>
              <div class="text-h6 font-weight-bold text-black">Azime Tolumoğlu</div>
              <div class="text-subtitle2 font-italic text-black">SOFTWARE ENGINEER</div>
            </div>
          </v-col>

          <v-col cols="4" md="8" class="d-none d-md-flex justify-end align-center">
            <v-btn variant="text" color="black" @click="$emit('navigate', 'about-me')">ABOUT ME</v-btn>
            <v-btn variant="text" color="black" @click="$emit('navigate', 'resume')">RESUME</v-btn>
            <v-btn variant="text" color="black" @click="$emit('navigate', 'projects')">PROJECTS</v-btn>
            <v-btn variant="text" color="black" @click="$emit('navigate', 'contact')">CONTACT</v-btn>
          </v-col>

          <v-col cols="4" class="d-flex d-md-none justify-end align-center">
            <v-btn icon @click="drawer = true">
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      temporary
      location="right"
      class="d-md-none"
    >
      <v-list nav>
        <v-list-item @click="$emit('navigate', 'about-me'); drawer = false">
          <v-list-item-title>ABOUT ME</v-list-item-title>
        </v-list-item>
        <v-list-item @click="$emit('navigate', 'resume'); drawer = false">
          <v-list-item-title>RESUME</v-list-item-title>
        </v-list-item>
        <v-list-item @click="$emit('navigate', 'projects'); drawer = false">
          <v-list-item-title>PROJECTS</v-list-item-title>
        </v-list-item>
        <v-list-item @click="$emit('navigate', 'contact'); drawer = false">
          <v-list-item-title>CONTACT</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const drawer = ref(false)
</script>
