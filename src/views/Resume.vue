<template>
  <v-container fluid class="pa-4" style="background: linear-gradient(to right, #1E3A8A 33.3%, #1E3A8A 33.3%); min-height: 100%;">
    <v-row justify="center" class="pa-12">
      <v-col cols="12" class="text-center mb-8 pt-12">
        <h1 class="pa-3 text-white font-weight-bold">Resume</h1>
      </v-col>
      <v-col cols="12" md="10" lg="8" class="mb-6">
        <v-row align="center">
          <v-col cols="12" md="6" class="d-flex justify-start">
            <h2 class="text-white font-weight-bold text-h5">Experience</h2>
          </v-col>
          <v-col cols="12" md="6" class="d-flex justify-end">
            <v-btn
              @click="downloadPDF"
              rounded
              class="hover-white"
              style="min-width: 140px;"
              color="#F97316"
              elevation="6"
              ripple>
              DOWNLOAD CV
            </v-btn>
          </v-col>
        </v-row>
      </v-col>

      <v-col
        cols="12" md="10" lg="8" class="mb-6">
        <v-card class="pa-6 elevation-2" style="min-height: 35vh; border-radius: 12px; background-color: #f9f9f9;">
          <v-card-text>
            <v-row>
                <v-col cols="12" md="6" class="text-left">
                  <h3 class="text-h6 font-weight-bold mb-2" style="color: #2e2e2e;">
                    2035 - Present
                  </h3>
                  <div class="text-subtitle-1 font-weight-medium mb-1" style="color: #3f51b5;">
                    Senior Software Engineerrr
                  </div>
                  <div class="text-subtitle-2 mb-1" style="color: #555;">
                    OpenAI Inc.
                  </div>
                  <div class="text-subtitle-2" style="color: #888;">
                    San Francisco, CA
                  </div>
                </v-col>
                <v-col cols="12" md="6" class="d-flex align-center text-left">
                  <p class="ma-0" style="color: #444; font-size: 0.95rem; line-height: 1.5;">
                    Spearheaded AI model development and led cross-functional teams in delivering
                    cutting-edge solutions. Collaborated on research, architecture, and product
                    innovation with real-world deployment at scale.
                  </p>
                </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col
        cols="12" md="10" lg="8" class="mb-6">
        <v-card class="pa-6 elevation-2" style="min-height: 35vh; border-radius: 12px; background-color: #f9f9f9;">
          <v-card-text>
            <v-row>
                <v-col cols="12" md="6" class="text-left">
                  <h3 class="text-h6 font-weight-bold mb-2" style="color: #2e2e2e;">
                    2035 - Present
                  </h3>
                  <div class="text-subtitle-1 font-weight-medium mb-1" style="color: #3f51b5;">
                    Senior Software Enginee
                  </div>
                  <div class="text-subtitle-2 mb-1" style="color: #555;">
                    OpenAI Inc.
                  </div>
                  <div class="text-subtitle-2" style="color: #888;">
                    San Francisco, CA
                  </div>
                </v-col>
                <v-col cols="12" md="6" class="d-flex align-center text-left">
                  <p class="ma-0" style="color: #444; font-size: 0.95rem; line-height: 1.5;">
                    Spearheaded AI model development and led cross-functional teams in delivering
                    cutting-edge solutions. Collaborated on research, architecture, and product
                    innovation with real-world deployment at scale.
                  </p>
                </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      
      <v-col cols="12" md="10" lg="8" class="mb-6">
        <v-row align="center">
          <v-col cols="12" md="6" class="d-flex justify-start">
            <h2 class="text-white font-weight-bold text-h5">Education</h2>
          </v-col>
        </v-row>
      </v-col>

      <!-- Education Card 1 ve 2 -->
      <v-col cols="12" md="10" lg="8" class="mb-6" v-for="(edu, index) in 2" :key="'edu' + index">
        <v-card class="pa-6 elevation-2" style="min-height: 35vh; border-radius: 12px; background-color: #f9f9f9;">
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6" class="text-left">
                <h3 class="text-h6 font-weight-bold mb-2" style="color: #2e2e2e;">
                  {{ index === 0 ? '2020 - 2024' : '2016 - 2020' }}
                </h3>
                <div class="text-subtitle-1 font-weight-medium mb-1" style="color: #3f51b5;">
                  {{ index === 0 ? 'Bachelor of Computer Engineering' : 'High School Diploma' }}
                </div>
                <div class="text-subtitle-2 mb-1" style="color: #555;">
                  {{ index === 0 ? 'Istanbul Technical University' : 'Istanbul Science High School' }}
                </div>
                <div class="text-subtitle-2" style="color: #888;">
                  Istanbul, Turkey
                </div>
              </v-col>
              <v-col cols="12" md="6" class="d-flex align-center text-left">
                <p class="ma-0" style="color: #444; font-size: 0.95rem; line-height: 1.5;">
                  {{ index === 0 
                    ? 'Focused on software engineering, algorithms, and AI technologies. Participated in several research and development projects related to NLP and deep learning.' 
                    : 'Excelled in science and math courses, participating in national olympiads and software contests.' 
                  }}
                </p>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="10" lg="8"   class="mb-8 mb-md-12 mb-lg-16">
        <v-card class="pa-6 elevation-2" style="min-height: 35vh; border-radius: 12px; background-color: #f9f9f9;">
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6" class="text-left">
                <h3 class="text-h6 font-weight-bold mb-2" style="color: #2e2e2e;">Professional Skillset</h3>
                <ul style="padding-left: 1rem; color: #444; font-size: 0.95rem; line-height: 1.6;">
                  <li>JavaScript, TypeScript, Python, C++</li>
                  <li>Vue.js, React, Node.js</li>
                  <li>TensorFlow, PyTorch, Scikit-learn</li>
                  <li>RESTful APIs, GraphQL</li>
                </ul>
              </v-col>
              <v-col cols="12" md="6" class="text-left">
                <h3 class="text-h6 font-weight-bold mb-2" style="color: #2e2e2e;">Soft Skills</h3>
                <ul style="padding-left: 1rem; color: #444; font-size: 0.95rem; line-height: 1.6;">
                  <li>Strong communication and team collaboration</li>
                  <li>Problem solving & critical thinking</li>
                  <li>Project and time management</li>
                  <li>Mentoring and leadership</li>
                </ul>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>

    </v-row>
  </v-container>
</template>

<script setup>
import { jsPDF } from 'jspdf';

function downloadPDF() {
  const doc = new jsPDF();
  doc.text("Azime Tolumoğlu - CV", 10, 10);
  doc.save('azime_tolumoglu_cv.pdf');
}
</script>

<style scoped>
.hover-white:hover {
  background-color: white !important;
  color: black !important;
}

.hover-orange:hover {
  background-color: #F97316 !important;
  color: white !important;
}
</style>
