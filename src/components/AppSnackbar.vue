<template>
  <v-snackbar
    v-model="snackbar.show"
    :color="snackbar.color"
    :timeout="snackbar.timeout"
    auto-height
    right
    top
  >
    {{ snackbar.text }}
    <v-btn
      fab
      small
      text
      @click="snackbar.show = false"
    >
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </v-snackbar>
</template>

<script>
  import { sync } from 'vuex-pathify'

  export default {
    data: () => ({}),
    computed: {
      ...sync('appSnackbar/*')
    }
  }
</script>
