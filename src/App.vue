<template>
  <v-app class="app-root">
    <HeaderComp />
    <router-view />
    <FooterComp />
  </v-app>
</template>

<script>
import HeaderComp from './components/Header.vue'
import FooterComp from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    HeaderComp,
    FooterComp
  }
}
</script>

<style>
html, body, #app, .v-application {
  margin: 0 !important;
  padding: 0 !important;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #1E3A8A 33.3%, #1E3A8A 33.3%);
  background-repeat: no-repeat;
  background-attachment: fixed;
}

</style>
