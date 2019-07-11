<template>
  <v-app>
    <app-snackbar />
    <v-content>
      <v-container grid-list-xl text-xs-center>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

  export default {
    name: 'App',
    components: {
      AppSnackbar: () => import(/* webpackChunkName: "app-snackbar" */ '@/components/AppSnackbar')
    },
    data: () => ({})
  }
</script>
