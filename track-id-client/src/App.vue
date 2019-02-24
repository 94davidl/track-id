<template>
  <div id="app">
    <v-app>
      <app-header />
      <main>
        <v-container fluid>
          <router-view />
        </v-container>
      </main>
    </v-app>
  </div>
</template>

<script>
  import AppHeader from '@/components/Header.vue'
  export default {
    name: 'App',
    components: {
      AppHeader
    }
  }

</script>

<style>
  #app {
    font-family: 'Ubuntu', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  
  .container {
    padding-top: 60px;
  }


</style>
