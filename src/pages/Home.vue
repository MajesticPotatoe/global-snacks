<template>
  <v-btn @click="notify">
    Summon Global Snackbar
  </v-btn>
</template>

<script>
  import { call } from 'vuex-pathify'

  export default {
    data: () => ({}),
    methods: {
      updateSnackbar: call('appSnackbar/setSnackbar'),
      notify () {
        const status = {
          show: true,
          text: 'Request Received',
          color: 'success',
          timeout: 3000,
        }
        this.updateSnackbar(status)
      },
    },
  }
</script>
