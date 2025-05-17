<template>
  <v-app>
    <HeaderComponent @navigate="setActiveSection" />
    <section
      id="about-me"
      v-show="activeSection === 'about-me'"
      style="min-height: 600px; padding: 40px;">
      <AboutMe />
    </section>
    <section
      id="resume"
      v-show="activeSection === 'resume'"
      style="min-height: 600px; padding: 40px;">
      <AboutMe />
    </section>
    <section
      id="projects"
      v-show="activeSection === 'projects'"
      style="min-height: 600px; padding: 40px;">
      <AboutMe />
    </section>
    <section
      id="contact"
      v-show="activeSection === 'contact'"
      style="min-height: 600px; padding: 40px;">
      <AboutMe />
    </section>
  </v-app>
</template>

<script>
import HeaderComponent from './components/Header.vue'
import AboutMe from './components/AboutMe.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    AboutMe
  },
  data() {
    return {
      activeSection: 'about-me'  // default görünür bölüm
    }
  },
  methods: {
    setActiveSection(section) {
      this.activeSection = section
      
      // Scroll işlemi (smooth)
      this.$nextTick(() => {  // DOM güncellenince scroll yap
        const el = document.getElementById(section)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      })
    }
  }
}
</script>
