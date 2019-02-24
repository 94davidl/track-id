<template>
  <v-toolbar fixed dark class="blue-grey lighten-3">
    <v-toolbar-title class="mr-4 white--text"><span class="home" @click="navigateTo({name: 'home'})">Track ID</span></v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat>Browse</v-btn>
      <v-btn flat>Upload</v-btn>
      <v-btn flat>Trending</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>
    <v-toolbar-items>
      <v-btn flat dark @click="navigateTo({name: 'login'})">Login</v-btn>
      <v-btn flat dark @click="navigateTo({name: 'register'})">Sign Up</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  export default {
    methods: {
      navigateTo(route) {
        console.log(route);
        this.$router.push(route)
      }
    }
  }

</script>

<style scoped>
  .home {
    cursor: pointer
  }

  .home:hover {
    color: aliceblue
  }

</style>
