<template>
  <v-container fluid>
    <v-app-bar app color="white" class="pa-4">
      <v-row class="align-center" style="width: 100%" no-gutters>
        <v-col cols="8" md="4" class="d-flex align-center">
          <div class="title-container">
            <span class="name">Azime Tolumoğlu</span>
            <span class="subtitle">/ SOFTWARE ENGINEER</span>
          </div>
        </v-col>

        <v-col
          cols="4"
          md="8"
          class="d-none d-md-flex justify-end align-center"
        >
          <v-btn text class="custom-btn" @click="$emit('navigate', 'about-me')">ABOUT ME</v-btn>
          <v-btn text class="custom-btn" @click="$emit('navigate', 'resume')">RESUME</v-btn>
          <v-btn text class="custom-btn" @click="$emit('navigate', 'projects')">PROJECTS</v-btn>
          <v-btn text class="custom-btn" @click="$emit('navigate', 'contact')">CONTACT</v-btn>
        </v-col>

        <v-col
          cols="4"
          class="d-flex d-md-none justify-end align-center"
        >
          <v-btn icon @click="drawer = true">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      temporary
      location="right"
      class="d-md-none"
    >
      <v-list>
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

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.title-container {
  display: flex;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  margin-left: 20px;
}

.name {
  font-size: 24px;
  font-weight: 600;
  color: black;
}

.subtitle {
  font-size: 16px;
  font-weight: 400;
  color: black;
  margin-left: 8px;
  font-style: italic;
}

.custom-btn {
  font-family: 'Poppins', sans-serif;
  color: black !important;
  background-color: transparent !important;
  box-shadow: none !important;
  outline: none !important;
  border: none !important;
  transition: color 0.3s ease;
}

.custom-btn:hover {
  color: #673ab7 !important;
  background-color: transparent !important;
  box-shadow: none !important;
}

.custom-btn:focus,
.custom-btn:active {
  background-color: transparent !important;
  box-shadow: none !important;
  outline: none !important;
  border: none !important;
}
.v-navigation-drawer {
  padding-top: 64px !important;
}

</style>
