<template>
  <v-container grid-list-md text-xs-center>
    <v-layout justify-center row wrap>
      <v-flex xs6>
        <v-toolbar-title>Login</v-toolbar-title>
        <v-form ref="form">
          <v-text-field v-model="email" label="Email Address" required></v-text-field>
          <v-text-field v-model="password" :append-icon="passwordVisiblity ? 'visibility_off' : 'visibility'" :type="passwordVisiblity ? 'text' : 'password'"
            name="input-10-1" label="Password" hint="At least 8 characters" counter @click:append="passwordVisiblity = !passwordVisiblity"></v-text-field>
          <div class="v-alert app-alert mb-3 error" v-if="error">
            <i aria-hidden="true" class="v-icon material-icons theme--light v-alert__icon">warning</i>
            <div v-html="error" />
          </div>
          <div>
            <v-btn @click="onLogin" color="info">
              Login
            </v-btn>
          </div>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
  import AuthService from '@/services/AuthService'

  export default {
    data() {
      return {
        email: '',
        password: '',
        passwordVisiblity: false,
        error: '',
      }
    },
    methods: {
      async onLogin(evt) {
        evt.preventDefault()
        try {
          const response = await AuthService.login({
            email: this.email,
            password: this.password,
          })
          this.$store.dispatch('setToken', response.data.token)
          this.$store.dispatch('setUser', response.data.user)
        } catch (error) {
          this.error = error.response.data.error;
        }
      },
    }
  }

</script>

<style scoped>
  .v-toolbar__title {
    font-size: 32px;
  }

</style>
