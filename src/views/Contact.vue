<template>
  <v-container
  fluid
  class="d-flex justify-center align-center pa-0"
  style="background: linear-gradient(to right, #1E3A8A 33.3%, #1E3A8A 33.3%); min-height: 100vh;">
  <v-row
    justify="center"
    align="center"
    class="fill-height">
    <v-col cols="12" md="8" lg="6" class="pa-6 pa-md-10 ma-6">
        <v-card
          elevation="6"
          class="pa-6 pa-md-12 mt-8 mb-12"
          style="border-radius: 16px; background-color: #f9f9f9;">
          <h2 class="text-center font-weight-bold mb-6 text-h5" style="color: #1E3A8A;">
            Contact Form
          </h2>
          <form @submit.prevent="submit">
            <v-row dense class="mb-4">
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="state.firstName"
                  label="First Name *"
                  :error-messages="v$.firstName.$errors.map(e => e.$message)"
                  @blur="v$.firstName.$touch"
                  @input="v$.firstName.$touch"
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
                  @input="v$.lastName.$touch"
                  outlined
                  dense/>
              </v-col>
            </v-row>

            <v-text-field
              v-model="state.email"
              label="Email *"
              :error-messages="v$.email.$errors.map(e => e.$message)"
              @blur="v$.email.$touch"
              @input="v$.email.$touch"
              outlined
              dense
              class="mb-4"/>

            <!--<v-select
              v-model="state.select"
              :items="items"
              label="Select Topic *"
              :error-messages="v$.select.$errors.map(e => e.$message)"
              @blur="v$.select.$touch"
              @change="v$.select.$touch"
              outlined
              dense
              class="mb-4"/>-->

            <v-textarea
              v-model="message"
              label="Message"
              auto-grow
              rows="4"
              clearable
              @click:prepend="changeIcon"
              @click:clear="clearMessage"
              outlinedf
              class="mb-6"/>

            <v-btn
              type="submit"
              color="#F97316"
              class="hover-white"
              rounded
              block
              elevation="4">
              Send
            </v-btn>
          </form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, helpers } from '@vuelidate/validators'

const requiredTrue = helpers.withMessage('You must agree', value => value === true)

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  select: null,
  checkbox: false,
}

const state = reactive({ ...initialState })
const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4']

const rules = {
  firstName: { required },
  lastName: { required },
  email: { required, email },
  select: { required },
  checkbox: { requiredTrue }
}

const icons = [
  'mdi-emoticon',
  'mdi-emoticon-cool',
  'mdi-emoticon-dead',
  'mdi-emoticon-excited',
  'mdi-emoticon-happy',
  'mdi-emoticon-neutral',
  'mdi-emoticon-sad',
  'mdi-emoticon-tongue',
]

const v$ = useVuelidate(rules, state)

const message = ref('Hey!')
const iconIndex = ref(0)

const icon = computed(() => icons[iconIndex.value])

function clearMessage() {
  message.value = ''
}

function changeIcon() {
  iconIndex.value = (iconIndex.value + 1) % icons.length
}

</script>

<style scoped>
.hover-white:hover {
  background-color: white !important;
  color: black !important;
}
</style>
