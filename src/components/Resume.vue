<template>
  <v-container fluid class="pa-0" style="background-color: pink; min-height: 100vh;">
    <v-row justify="center" class="pa-8">
      <!-- Başlık -->
      <v-col cols="12" class="text-center mb-8 pt-12">
      <h1 class="text-black"><strong>Resume</strong></h1>
      </v-col>

      <v-col cols="12" md="10" lg="8" class="mb-6">
        <v-row class="d-flex flex-wrap" align="center">
          <!-- Başlık -->
          <v-col cols="12" sm="6" class="text-start mb-2 mb-sm-0">
            <h2 class="text-black mb-0"><strong>Experience</strong></h2>
          </v-col>

          <!-- Buton -->
          <v-col cols="12" sm="6" class="d-flex justify-start justify-sm-end">
            <v-btn color="primary" rounded @click="downloadPDF">DOWNLOAD CV</v-btn>
          </v-col>
        </v-row>
      </v-col>
      <!-- Kart 1 -->
      <v-col cols="12" md="10" lg="8" class="mb-6" >
        <v-card hover style="min-height: 35vh; width: 100%;">
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6">
                <v-card-title class="text-h6">Card Title</v-card-title>
                <v-card-subtitle class="text-subtitle-1">Card subtitle secondary text</v-card-subtitle>
              </v-col>
              <v-col cols="12" md="6" class="d-flex align-center">
                <p class="ma-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Kart 2 -->
      <v-col cols="12" md="10" lg="8" class="mb-6" >
        <v-card hover style="min-height: 35vh; width: 100%;">
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6">
                <v-card-title class="text-h6">Card Title</v-card-title>
                <v-card-subtitle class="text-subtitle-1">Card subtitle secondary text</v-card-subtitle>
              </v-col>
              <v-col cols="12" md="6" class="d-flex align-center">
                <p class="ma-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" class="pa-8">

      <!-- Experience ve Buton aynı hizada -->
      <v-col cols="12" md="10" lg="8" class="mb-6">
        <v-row align="center">
          <v-col cols="12" md="6" class="d-flex justify-start">
            <h2 class="text-black mb-0"><strong>Education</strong></h2>
          </v-col>
        </v-row>
      </v-col>

      <!-- Kart 1 -->
      <v-col cols="12" md="10" lg="8" class="mb-6" >
        <v-card hover style="min-height: 35vh; width: 100%;">
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6">
                <v-card-title class="text-h6">Card Title</v-card-title>
                <v-card-subtitle class="text-subtitle-1">Card subtitle secondary text</v-card-subtitle>
              </v-col>
              <v-col cols="12" md="6" class="d-flex align-center">
                <p class="ma-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Kart 2 -->
      <v-col cols="12" md="10" lg="8" class="mb-6" >
        <v-card hover style="min-height: 35vh; width: 100%;">
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6">
                <v-card-title class="text-h6">Card Title</v-card-title>
                <v-card-subtitle class="text-subtitle-1">Card subtitle secondary text</v-card-subtitle>
              </v-col>
              <v-col cols="12" md="6" class="d-flex align-center">
                <p class="ma-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" class="pa-8">
      <!-- Kart Professional skillset -->
      <v-col cols="12" md="10" lg="8" class="mb-6" >
        <v-card hover style="min-height: 55vh; width: 100%;">
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6">
                <v-card-title class="text-h6">Professional skillset</v-card-title>
                <v-card-subtitle class="text-subtitle-1">Card subtitle secondary text</v-card-subtitle>
              </v-col>
              <v-col cols="12" md="6" class="d-flex align-center">
                <p class="ma-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { jsPDF } from "jspdf";

function downloadPDF() {
  const doc = new jsPDF();

  doc.text("Azime Tolumoglu CV", 10, 10);
  doc.text("Software Engineer", 10, 20);
  doc.text("Experience and skills go here...", 10, 30);
  doc.save("Azime_Tolumoglu_CV.pdf");
}
</script>

