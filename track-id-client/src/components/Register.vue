<template>
  <v-container grid-list-md text-xs-center>
    <v-layout justify-center row wrap>
      <v-flex xs6>
        <v-toolbar-title>Register</v-toolbar-title>
        <v-form ref="form" v-if="show" lazy-validation autocomplete="off">
          <v-text-field v-model="email" :rules="[rules.required]" label="Email Address" required></v-text-field>
          <v-text-field v-model="password" :append-icon="passwordVisiblity ? 'visibility_off' : 'visibility'" :rules="[rules.required, rules.min]"
            :type="passwordVisiblity ? 'text' : 'password'" name="input-10-1" label="Password" hint="At least 8 characters"
            counter @click:append="passwordVisiblity = !passwordVisiblity"></v-text-field>
          <v-text-field v-model="confirmPassword" autocomplete="new-password" :icons="['fas fa-eye', 'fas fa-eye-slash']" :append-icon="passwordConfirmationVisibility ? 'visibility_off' : 'visibility'"
            :rules="[rules.required, rules.min]" :type="passwordConfirmationVisibility ? 'text' : 'password'" name="input-10-2"
            label="Confirm Password" hint="At least 8 characters" value="" class="input-group--focused" @click:append="passwordConfirmationVisibility = !passwordConfirmationVisibility"></v-text-field>
          <div class="v-alert app-alert mb-3 error" v-if="error">
            <i aria-hidden="true" class="v-icon material-icons theme--light v-alert__icon">warning</i>
            <div v-html="error" />
          </div>
        </v-form>
        <div>
          <v-btn @click="onSubmit" color="info">
            Submit
          </v-btn>
          <v-btn @click="onReset" color="info">
            Reset
          </v-btn>
        </div>
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
        confirmPassword: '',
        passwordVisiblity: false,
        passwordConfirmationVisibility: false,
        error: '',
        show: true,
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
        }
      }
    },
    methods: {
      async onSubmit(evt) {
        evt.preventDefault()
        try {
          await AuthService.register({
            email: this.email,
            password: this.password,
            confirmPassword: this.confirmPassword
          })
        } catch (error) {
          this.error = error.response.data.error;
        }
      },
      onReset(evt) {
        evt.preventDefault()
        this.email = ''
        this.password = ''
        this.confirmPassword = ''
        this.error = ''
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }

</script>

<style scoped>

  .v-toolbar__title {
    font-size: 32px;
  }

</style>
