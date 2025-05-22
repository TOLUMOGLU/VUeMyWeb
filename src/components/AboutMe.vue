<template>
  <v-container fluid class="pa-0" style="background-color: #f2eae3; height: 100vh;">
    <v-row align="center" justify="center" class="fill-height">
      <v-col cols="12" md="10">
        <v-card elevation="6" class="overflow-hidden mx-auto" style="border-radius: 0; min-height: 35vh; width: 65%;">
          <v-row no-gutters>
            <v-col
              cols="12"
              md="6"
              class="d-flex flex-column align-center justify-center pa-8"
              style="background-color: #e6dace;">
              <v-img
              src="https://avatars.mds.yandex.net/i?id=2a00000179f5ece0391cd85e6c09c8dfb4fb-4914134-images-thumbs&n=13"
              alt="Azime Tolumoğlu"
              class="mb-4"
              cover
              style="border-radius: 50%; box-shadow: 0 4px 12px rgba(0,0,0,0.15); max-width: 150px; max-height: 150px; width: 100%; height: auto;"
            ></v-img>

              <div class="text-center">
                <h2 class="mb-1 font-weight-bold text-black">Azime</h2>
                <h2 class="mb-3 font-weight-bold text-black">Tolumoğlu</h2>
                <h3 class="mb-3 font-italic">SOFTWARE ENGINEER</h3>
              </div>
              <div class="d-flex justify-center" style="gap: 16px;">
                <v-btn icon variant="text" href="https://facebook.com" target="_blank" rel="noopener">
                  <v-icon color="grey-darken-3">mdi-facebook</v-icon>
                </v-btn>
                <v-btn icon variant="text" href="https://twitter.com" target="_blank" rel="noopener">
                  <v-icon color="grey-darken-3">mdi-twitter</v-icon>
                </v-btn>
                <v-btn icon variant="text" href="https://linkedin.com" target="_blank" rel="noopener">
                  <v-icon color="grey-darken-3">mdi-linkedin</v-icon>
                </v-btn>
                <v-btn icon variant="text" href="https://instagram.com" target="_blank" rel="noopener">
                  <v-icon color="grey-darken-3">mdi-instagram</v-icon>
                </v-btn>
              </div>
            </v-col>
            <v-col cols="12" md="6" class="pa-8 text-left">
              <h1 class="pa-2"><strong>Hello</strong></h1>
              <h2 class="mb-4 pa-2">Here's who I am & what I do</h2>
              <div class="d-flex justify-start mb-4 pa-2" style="gap: 20px;">
                <v-btn color="primary" href = "#resume" rounded>Resume</v-btn>
                <v-btn href = "#projects" rounded>Projects</v-btn>
              </div>
              <p class="pa-2">
                I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                I’m a great place for you to tell a story and let your users know a little more about you.
              </p>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
