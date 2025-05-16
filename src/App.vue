<template>
  <v-app>
    <HeaderComponent />
    <v-main>
      <v-container>
        <h1>Merhaba Dünya</h1>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import HeaderComponent from './components/Header.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent
  }
}
</script>
