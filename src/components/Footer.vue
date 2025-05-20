<template>
  <v-footer
    color="white"
    app
    class="pa-6"
  >
    <v-row
      justify="space-between"
      class="text-left"
      style="width: 100%"
      no-gutters
    >
      <v-col cols="12" md="6" class="footer-left">
        <div>© 2035 by Maya Nelson.</div>
        <div>Powered and secured by <a href="https://www.wix.com" target="_blank" rel="noopener">Wix</a></div>
      </v-col>

      <v-col cols="12" md="1" class="footer-center">
        <div><strong>Call</strong></div>
        <div>123-456-7890</div>
      </v-col>

      <v-col cols="12" md="1" class="footer-center">
        <div><strong>Write</strong></div>
        <div><a href="mailto:info@mysite.com">info@mysite.com</a></div>
      </v-col>

      <v-col cols="12" md="2" class="footer-right d-flex align-center justify-end">
        <v-btn icon href="https://facebook.com" target="_blank" rel="noopener">
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
        <v-btn icon href="https://twitter.com" target="_blank" rel="noopener">
          <v-icon>mdi-twitter</v-icon>
        </v-btn>
        <v-btn icon href="https://linkedin.com" target="_blank" rel="noopener">
          <v-icon>mdi-linkedin</v-icon>
        </v-btn>
        <v-btn icon href="https://instagram.com" target="_blank" rel="noopener">
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script setup>
</script>

<style scoped>
.footer-left {
  font-size: 14px;
  font-style: italic;
  color: #333;
}

.footer-center {
  font-size: 14px;
  color: #333;
  text-align: center;

}

.footer-center strong {
  display: block;
  margin-bottom: 4px;
}

.footer-right v-btn {
  margin-left: 8px;
  color: #333;
}

.footer-right v-btn:hover {
  color: #673ab7;
}
</style>
