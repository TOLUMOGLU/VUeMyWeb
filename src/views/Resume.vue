<template>
  <v-container fluid class="pa-4" style="background: linear-gradient(to right, #1E3A8A 33.3%, #1E3A8A 33.3%); min-height: 100%;">
    <v-row justify="center" class="pa-12">
      <v-col cols="12" class="text-center mb-8 pt-12">
        <h1 class="pa-3 text-white font-weight-bold">Resume</h1>
      </v-col>
      <v-col cols="12" md="10" lg="8" class="mb-6">
        <v-row align="center">
          <v-col cols="12" md="6" class="d-flex justify-start">
            <h2 class="font-weight-bold text-h5" style="color: #F97316;">Experience</h2>
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
        v-if="store.experiences && store.experiences.length"
        v-for="(item, index) in store.experiences"
        :key="'exp-' + index"

        cols="12" md="10" lg="8" class="mb-6">
        <v-card class="pa-6 elevation-2" style="min-height: 35vh; border-radius: 12px; background-color: #f9f9f9;">
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6" class="text-left">
                <h3 class="text-h6 font-weight-bold mb-2" style="color: #2e2e2e;">
                  {{ formatDate(item.startDate) }} - {{ item.endDate ? formatDate(item.endDate) : 'Present' }}
                </h3>
                <div class="text-subtitle-1 font-weight-medium mb-1" style="color: #F97316;">
                  {{ item.jobTitle }}
                </div>
                <div class="text-subtitle-2 mb-1" style="color: #555;">
                  {{ item.companyName }}
                </div>
                <div class="text-subtitle-2" style="color: #888;">
                  {{ item.location }}
                </div>
              </v-col>
              <v-col cols="12" md="6" class="d-flex align-center text-left">
                <p class="ma-0" style="color: #444; font-size: 0.95rem; line-height: 1.5;">
                  {{ item.description }}
                </p>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      
      <v-col cols="12" md="10" lg="8" class="mb-6">
        <v-row align="center">
          <v-col cols="12" md="6" class="d-flex justify-start">
            <h2 class="font-weight-bold text-h5" style="color: #F97316;">Education</h2>
          </v-col>
        </v-row>
      </v-col>

      <!-- Education Card 1 ve 2 -->
      <v-col cols="12" md="10" lg="8" class="mb-6" v-for="(edu, index) in store2.educations" :key="'edu' + index">
        <v-card class="pa-6 elevation-2" style="min-height: 35vh; border-radius: 12px; background-color: #f9f9f9;">
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6" class="text-left">
                <h3 class="text-h6 font-weight-bold mb-2" style="color: #2e2e2e;">
                   {{ formatDate(edu.startDate) }} - {{ edu.endDate ? formatDate(edu.endDate) : 'Present' }}
                </h3>
                <div class="text-subtitle-1 font-weight-medium mb-1" style="color: #3f51b5;">{{ edu.degree }}</div>
                <div class="text-subtitle-2 mb-1" style="color: #555;">{{ edu.schoolName }}</div>
                <div class="text-subtitle-2" style="color: #888;">{{ edu.fieldOfStudy }}</div>
              </v-col>
              <v-col cols="12" md="6" class="d-flex align-center text-left">
                <p class="ma-0" style="color: #444; font-size: 0.95rem; line-height: 1.5;">{{ edu.description }}</p>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="10" lg="8"  class="mb-8 mb-md-12 mb-lg-16">
        <v-card class="pa-6 elevation-2" style="min-height: 35vh; border-radius: 12px; background-color: #f9f9f9;">
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6" class="text-left">
                <h3 class="text-h6 font-weight-bold mb-2" style="color: #F97316;">Professional Skillset</h3>
                <ul style="padding-left: 1rem; color: #444; font-size: 0.95rem; line-height: 1.6;">
                  <li v-for="skill in store3.skillset" :key="skill.id">
                    <strong>{{ skill.title }}</strong> - {{ skill.subtitle }}<br>
                    <small>{{ skill.title }}</small>
                  </li>
                </ul>
              </v-col>
              <v-col cols="12" md="6" class="text-left">
                <h3 class="text-h6 font-weight-bold mb-2" style="color: #F97316;">Soft Skills</h3>
                <ul style="padding-left: 1rem; color: #444; font-size: 0.95rem; line-height: 1.6;">
                   <li v-for="skill in store3.skillset" :key="skill.id">
                    <strong>{{ skill.title }}</strong> - {{ skill.subtitle }}<br>
                    <small>{{ skill.title }}</small>
                  </li>
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
import { onMounted } from 'vue'
import { jsPDF } from 'jspdf';
import { useExperienceStore } from '@/stores/experienceStore';
import { useEducationStore } from '../stores/educationStore';
import { useSkillsetStore } from '../stores/skillsetStore';

const store = useExperienceStore()
const store2 = useEducationStore()
const store3 = useSkillsetStore()

onMounted(async () => {
  await store.fetchExperiences()
  await store2.fetchEducations()
  await store3.fetchSkillsets()
})

function formatDate(dateStr) {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  if (isNaN(date)) return '';
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
}

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
