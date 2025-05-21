<template>
  <v-container fluid class="pa-0" style="background-color: #f2eae3; height: 100vh;">
    <v-row align="center" justify="center" class="fill-height">
      <v-col cols="12" md="10">
        <v-card elevation="6" class="overflow-hidden mx-auto" style="border-radius: 12px;">
          <v-row no-gutters>
            <v-col
              cols="12"
              md="4"
              class="d-flex flex-column align-center justify-center pa-4"
              style="background-color: #e6dace;">
              <v-img
                src="https://via.placeholder.com/150"
                alt="Azime Tolumoğlu"
                width="150"
                height="150"
                class="mb-4"
                cover
                style="border-radius: 50%; box-shadow: 0 4px 12px rgba(0,0,0,0.15);"
              ></v-img>
              <div class="text-center">
                <h2 class="mb-1">Azime</h2>
                <h2 class="mb-3">Tolumoğlu</h2>
              </div>
              <div class="d-flex justify-center" style="gap: 16px;">
                <a href="https://linkedin.com/in/azimetolumoglu" target="_blank" rel="noopener">
                  <v-icon size="28">mdi-linkedin</v-icon>
                </a>
                <a href="https://github.com/azimetolumoglu" target="_blank" rel="noopener">
                  <v-icon size="28">mdi-github</v-icon>
                </a>
                <a href="mailto:azime@example.com">
                  <v-icon size="28">mdi-email</v-icon>
                </a>
              </div>
            </v-col>
            <v-col cols="12" md="8" class="pa-6">
              <h1><strong>Hello</strong></h1>
              <h2 class="mb-4">Here's who I am & what I do</h2>
              <div class="d-flex justify-center mb-4" style="gap: 15px;">
                <v-btn color="primary" rounded>Resume</v-btn>
                <v-btn variant="plain">Projects</v-btn>
              </div>
              <p>
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
