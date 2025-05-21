<template>
  <v-app>
    <HeaderComponent @navigate="scrollToSection" />

    <section id="about-me" class="section">
      <AboutMe />
    </section>

    <section id="resume" class="section">
      <Resume />
    </section>

    <section id="projects" class="section">
      <Projects />
    </section>

    <section id="contact" class="section">
      <Contact />
    </section>
    <FooterComp />
  </v-app>
</template>

<script>
import HeaderComponent from './components/Header.vue'
import AboutMe from './components/AboutMe.vue'
import Resume from './components/Resume.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import FooterComp from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    AboutMe,
    Resume,
    Projects,
    Contact,
    FooterComp
  },
  methods: {
    scrollToSection(sectionId) {
      const el = document.getElementById(sectionId)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>

<style scoped>
.section {
  min-height: 100vh;
  padding: 48px 24px;
  box-sizing: border-box;
}
</style>
