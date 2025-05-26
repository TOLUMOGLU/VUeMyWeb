<template>
  <v-container
    fluid
    class="pa-0 d-flex align-center justify-center"
    style="background: linear-gradient(to right, white 33.3%, #213555 33.3%); min-height: 100vh;"
  >
    <v-col class="pa-12" cols="12" md="10" style="height: auto;">
      <v-row no-gutters style="height: 100%;">
        <!-- Sol Panel -->
        <v-col
          cols="12"
          md="4"
          class="d-flex flex-column align-center justify-center pa-8 ma-0"
          style="
            background-color: #3E5879;
            min-height: 60vh;
            position: relative;
            border-radius: 0;
          "
        >
          <v-img
            src="https://avatars.mds.yandex.net/i?id=2a00000179f5ece0391cd85e6c09c8dfb4fb-4914134-images-thumbs&n=13"
            alt="Azime Tolumoğlu"
            class="mb-4 pa-2 pa-md-6"
            cover
            style="
              border-radius: 50%;
              box-shadow: 0 4px 12px rgba(0,0,0,0.15);
              max-width: 150px;
              max-height: 150px;
              width: 100%;
              height: auto;
            "
          ></v-img>

          <div class="text-center text-white pa-2 pa-md-6">
            <h1 class="pa-2"><strong>Azime</strong></h1>
            <h1 class="pa-2"><strong>Tolumoğlu</strong></h1>
            <div style="margin-top: 10px;"></div>
            <h2 class="pa-2">SOFTWARE ENGINEER</h2>
          </div>

          <div
            class="d-flex justify-center align-center"
            style="
              gap: 20px;
              background-color: white;
              width: 100%;
              padding: 12px 0;
              position: absolute;
              bottom: 0;
              left: 0;
              border-top: 1px solid #a99f8f;
              border-radius: 0;
            "
          >
            <v-btn icon variant="text" href="https://www.linkedin.com/in/azime-tolumo%C4%9Flu/" target="_blank" rel="noopener">
              <font-awesome-icon :icon="['fab', 'linkedin']" size="2x" />
            </v-btn>
            <v-btn icon variant="text" href="https://github.com/TOLUMOGLU" target="_blank" rel="noopener">
              <font-awesome-icon :icon="['fab', 'github']" size="2x" />
            </v-btn>
            <v-btn icon variant="text" href="https://medium.com/@tolumogluazime2" target="_blank" rel="noopener">
              <font-awesome-icon :icon="['fab', 'medium']" size="2x" />
            </v-btn>
            <v-btn icon variant="text" href="mailto:info@mysite.com" target="_blank" rel="noopener">
              <font-awesome-icon :icon="['fas', 'envelope']" size="2x" />
            </v-btn>
          </div>
        </v-col>

        <v-col
          cols="12"
          md="8"
          class="pa-12 text-left"
          style="height: 100%;"
        >
          <h1 class="pa-3 text-white"><strong>Hello</strong></h1>
          <h2 class="mb-4 pa-3">Here's who I am &amp; what I do</h2>

          <div class="d-flex flex-column flex-sm-row justify-start align-start pa-3" style="gap: 16px;">
            <v-btn href="#resume" rounded block class="flex-grow-1" style="min-width: 80px;">Resume</v-btn>
            <v-btn href="#projects" rounded block class="flex-grow-1" style="min-width: 80px;">Projects</v-btn>
          </div>

          <!-- Paragraf -->
          <div class="pa-3">
            <p class="text-white" style="max-width: 600px; font-size: 1.25rem; line-height: 1.8;">
              I'm a paragraph. Click here to add your own text and edit me.
              It’s easy. Just click “Edit Text” or double click me to add your
              own content and make changes to the font. I’m a great place for
              you to tell a story and let your users know a little more about
              you.
            </p>
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>
