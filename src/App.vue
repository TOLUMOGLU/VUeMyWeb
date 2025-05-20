<template>
  <v-app>
    <HeaderComponent @navigate="setActiveSection" />

    <section
      id="about-me"
      v-show="activeSection === 'about-me'"
      class="full-width-section black-bg"
    >
      <AboutMe />
    </section>

    <section
      id="resume"
      v-show="activeSection === 'resume'"
      class="full-width-section"
    >
      <AboutMe />
    </section>

    <section
      id="projects"
      v-show="activeSection === 'projects'"
      class="full-width-section"
    >
      <AboutMe />
    </section>

    <section
      id="contact"
      v-show="activeSection === 'contact'"
      class="full-width-section"
    >
      <AboutMe />
    </section>

    <FooterComp />
  </v-app>
</template>

<script>
import HeaderComponent from './components/Header.vue'
import AboutMe from './components/AboutMe.vue'
import FooterComp from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    AboutMe,
    FooterComp 
  },
  data() {
    return {
      activeSection: 'about-me'
    }
  },
  methods: {
    setActiveSection(section) {
      this.activeSection = section
      this.$nextTick(() => {
        const el = document.getElementById(section)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      })
    }
  }
}
</script>

<style scoped>
.full-width-section {
  min-height: 600px;
  padding: 40px;
  width: 100vw;
  margin: 0;
  position: relative;
  left: calc(-50vw + 50%);
  box-sizing: border-box;
}

.black-bg {
  background: linear-gradient(to right, #e6dace 33.33%, white 33.34%);
  color: white;
}
</style>
