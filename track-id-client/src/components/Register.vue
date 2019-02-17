<template>
  <b-container>
    <h1>Register to Track ID</h1>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show"  description="We'll never share your email with anyone else.">
      <b-form-group id="emailInputGroup" label="Email address:" label-for="emailInput" class="text-left">
        <b-form-input id="emailInput" type="email" v-model="email" required placeholder="Enter email address" />
      </b-form-group>
      <b-form-group id="passwordInputGroup" label="Password:" label-for="passwordInput" class="text-left">
        <b-form-input id="passwordInput" type="password" v-model="password" required placeholder="Enter password" />
      </b-form-group>
      <b-button type="submit" variant="outline-primary">Submit</b-button>
      <b-button type="reset" variant="outline-primary">Reset</b-button>
    </b-form>
  </b-container>
</template>

<script>
  import AuthService from '@/services/AuthService'
  export default {
    data() {
      return {
        email: '',
        password: '',
        show: true
      }
    },
    methods: {
       async onSubmit(evt) {
        evt.preventDefault()
        const response = await AuthService.register({
          email: this.email,
          password: this.password
        })
      },
      onReset(evt) {
        evt.preventDefault()
        this.email = ''
        this.password = ''
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }

</script>

<style>

</style>
