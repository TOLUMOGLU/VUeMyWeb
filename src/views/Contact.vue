<template>
  <v-container fluid class="d-flex justify-center align-center pa-0"
    style="background: linear-gradient(to right, #1E3A8A 33.3%, #1E3A8A 33.3%); min-height: 100vh;">
    <v-row justify="center" align="center" class="fill-height">
      <v-col cols="12" md="8" lg="6" class="pa-6 pa-md-10 ma-6">
        <v-card elevation="6" class="pa-6 pa-md-12 mt-8 mb-12" style="border-radius: 16px; background-color: #f9f9f9;">
          <h2 class="text-center font-weight-bold mb-6 text-h5" style="color: #1E3A8A;">Contact Form</h2>
          <form @submit.prevent="submit">
            <v-row dense class="mb-4">
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="state.firstName"
                  label="First Name *"
                  :error-messages="v$.firstName.$errors.map(e => e.$message)"
                  @blur="v$.firstName.$touch"
                  outlined
                  dense
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="state.lastName"
                  label="Last Name *"
                  :error-messages="v$.lastName.$errors.map(e => e.$message)"
                  @blur="v$.lastName.$touch"
                  outlined
                  dense
                />
              </v-col>
            </v-row>

            <v-text-field
              v-model="state.email"
              label="Email *"
              :error-messages="v$.email.$errors.map(e => e.$message)"
              @blur="v$.email.$touch"
              outlined
              dense
              class="mb-4"
            />

            <v-textarea
              v-model="message"
              label="Message"
              auto-grow
              rows="4"
              clearable
              class="mb-6"
              outlined
            />

            <v-btn
              type="submit"
              color="#F97316"
              class="hover-white"
              rounded
              block
              elevation="4"
            >
              Send
            </v-btn>
          </form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import axios from 'axios'

const initialState = {
  firstName: '',
  lastName: '',
  email: ''
}

const state = reactive({ ...initialState })
const message = ref('')

const rules = {
  firstName: { required },
  lastName: { required },
  email: { required, email }
}

const v$ = useVuelidate(rules, state)

async function submit() {
  v$.value.$touch()
  if (v$.value.$invalid) return

  try {
    const payload = {
        name: `${state.firstName} ${state.lastName}`,
        email: state.email,
        subject: 'Contact Form Submission',
        message: message.value
      }

    const response = await axios.post('http://localhost:5282/api/Contact', payload)

    alert('Message sent successfully!')
    console.log('Response:', response.data)

    Object.assign(state, initialState)
    message.value = ''
    v$.value.$reset()

  } catch (error) {
    console.error('Submission error:', error)

    if (error.response) {
      console.error('Response:', error.response.data)
    }

    alert('Something went wrong. Please try again.')
  }
}
</script>

<style scoped>
.hover-white:hover {
  background-color: white !important;
  color: black !important;
}
</style>
