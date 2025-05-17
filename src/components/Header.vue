<template>
  <v-app-bar app color="white" class="pa-4">
    <div class="title-container pa-10">
      <span class="name">Azime Tolumoğlu</span>
      <span class="subtitle">/ SOFTWARE ENGINEER</span>
    </div>

    <v-spacer></v-spacer>

    <v-btn text class="custom-btn" @click="$emit('navigate', 'about-me')">ABOUT ME</v-btn>
    <v-btn text class="custom-btn" @click="$emit('navigate', 'resume')">RESUME</v-btn>
    <v-btn text class="custom-btn" @click="$emit('navigate', 'projects')">PROJECTS</v-btn>
    <v-btn text class="custom-btn" @click="$emit('navigate', 'contact')">CONTACT</v-btn>
  </v-app-bar>
</template>

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
</style>
