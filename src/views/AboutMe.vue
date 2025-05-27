<template>
  <v-container
    fluid
    class="pa-0 d-flex align-center justify-center"
    style="background: linear-gradient(to right, white 33.3%, #1E3A8A 33.3%); min-height: 100vh;">
    <v-col class="pa-12" cols="12" md="10" style="height: auto;">
      <v-row no-gutters style="height: 100%;">
        <v-col
          cols="12"
          md="4"
          class="d-flex flex-column align-center justify-center pa-8 ma-0"
          elevation="12"
          rounded
          style="min-height: 60vh; position: relative; background-color: #3B5FBD;">
          <v-img
            src="https://avatars.mds.yandex.net/i?id=2a00000179f5ece0391cd85e6c09c8dfb4fb-4914134-images-thumbs&n=13"
            alt="Azime Tolumoğlu"
            class="mb-4 pa-2 pa-md-6"
            min-width="200"
            min-height="180"
            cover
            rounded="circle"
            eager
          ></v-img>
          <transition name="fade-slide">
            <div
              v-if="show"
              class="text-center text-white pa-2 pa-md-6">
              <h1 class="pa-2 text-h4 font-weight-bold">Azime</h1>
              <h1 class="pa-2 text-h4 font-weight-bold">Tolumoğlu</h1>
              <div style="margin-top: 0.5em;"></div>
              <h1
                class="pa-2 text-h6 font-weight-medium"
                style="color: #F97316; margin-bottom: 10%; margin-top: 0;">
                SOFTWARE ENGINEER
              </h1>
            </div>
          </transition>
          <div
            class="d-flex justify-center align-center"
            style="gap: 20px; background-color: white; width: 100%; padding: 3% 0; position: absolute; bottom: 0; left: 0; border-top: 1px solid #a99f8f;"
          >
            <v-btn
              icon
              variant="text"
              href="https://www.linkedin.com/in/azime-tolumo%C4%9Flu/"
              target="_blank"
              rel="noopener"
              class="primary--text"
              elevation="2"
              :ripple="true"
            >
              <font-awesome-icon :icon="['fab', 'linkedin']" size="2x" />
            </v-btn>
            <v-btn
              icon
              variant="text"
              href="https://github.com/TOLUMOGLU"
              target="_blank"
              rel="noopener"
              class="primary--text"
              elevation="2"
              :ripple="true"
            >
              <font-awesome-icon :icon="['fab', 'github']" size="2x" />
            </v-btn>
            <v-btn
              icon
              variant="text"
              href="https://medium.com/@tolumogluazime2"
              target="_blank"
              rel="noopener"
              class="primary--text"
              elevation="2"
              :ripple="true"
            >
              <font-awesome-icon :icon="['fab', 'medium']" size="2x" />
            </v-btn>
            <v-btn
              icon
              variant="text"
              href="mailto:info@mysite.com"
              target="_blank"
              rel="noopener"
              class="primary--text"
              elevation="2"
              :ripple="true"
            >
              <font-awesome-icon :icon="['fas', 'envelope']" size="2x" />
            </v-btn>
          </div>
        </v-col>

        <v-col cols="12" md="8" class="pa-12 text-left" style="height: 100%;">
        <transition name="fade-slide">
          <h1 v-if="show" class="pa-3 text-white font-weight-bold">Hello</h1>
        </transition>

        <transition name="fade-slide">
          <h2
            v-if="show"
            class="mb-4 pa-3"
            style="color: #F97316; font-weight: 600;">
            Here's who I am &amp; what I do
          </h2>
        </transition>

        <transition name="fade-slide-right">
          <div
            v-if="show"
            class="d-flex flex-column flex-sm-row justify-start align-start pa-3"
            style="gap: 16px;">
            
            <v-btn
              href="#resume"
              rounded
              class="mx-2 hover-white"
              style="min-width: 120px;"
              color="#F97316"
              elevation="6"
              ripple>
              Resume
            </v-btn>

            <v-btn
              href="#projects"
              rounded
              class="mx-2 hover-orange"
              style="min-width: 120px;"
              color="white"
              elevation="6"
              ripple>
              Projects
            </v-btn>
            
          </div>
        </transition>
        <transition name="fade-slide">
          <div class="pa-3" v-if="show">
            <p
              class="text-white"
              style="max-width: 600px; font-size: 1.25rem; line-height: 1.8;">
              I'm a paragraph. Click here to add your own text and edit me.
              It’s easy. Just click “Edit Text” or double click me to add your
              own content and make changes to the font. I’m a great place for
              you to tell a story and let your users know a little more about
              you.
            </p>
          </div>
        </transition>
      </v-col>

      </v-row>
    </v-col>
  </v-container>
</template>
<script>
export default {
  data() {
  return {
    show: false
  };
},
  mounted() {
    this.show = true;
  },
};
</script>

<style scoped>
.fade-slide-enter-active {
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.hover-white:hover {
  background-color: white !important;
  color: black !important;
}
.hover-orange:hover {
  background-color: #F97316 !important; 
  color: white !important;
}
.fade-slide-right-enter-active {
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.fade-slide-right-enter-from {
  opacity: 0;
  transform: translateX(-40px);
}
.fade-slide-right-enter-to {
  opacity: 1;
  transform: translateX(0);
}


</style>