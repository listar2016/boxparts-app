<template>
  <q-page padding>
    <div class="row">
      <div class="col col-md-6 offset-md-6">
        <q-card class="login-card q-pa-lg">
          <div class="text-h4">Sign in</div>
          <div class="text-subtitle1 q-mb-lg">New user? <router-link to="/signup">Create an account</router-link></div>
          <div class="row q-py-sm">
            <div class="col">
              <q-input outlined v-model="email" label="Email address"/>
            </div>
          </div>
          <div class="row q-py-sm">
            <div class="col">
              <q-input outlined v-model="password" type="password" label="Password" />
            </div>
          </div>
          <div class="row q-pt-lg">
            <div class="col text-center">
              <q-btn @click="login()" rounded color="primary q-px-xl" label="Continue" size="lg"/>
            </div>
          </div>
          <hr class="hr-text" data-content="OR">
          <div class="row q-py-sm">
            <div class="col text-center social-btn">
              <q-btn rounded color="white" text-color="black" class="q-py-sm">
                <q-icon name="img:statics/icons/google.png" class="q-mr-md"/>
                <div>Continue with Google</div>
              </q-btn>
            </div>
          </div>
          <div class="row q-py-sm">
            <div class="col text-center social-btn">
              <q-btn rounded style="background-color:#3b5998" text-color="white" class="q-py-sm">
                <q-icon name="img:statics/icons/facebook.png" class="q-mr-md"/>
                <div>Continue with Facebook</div>
              </q-btn>
            </div>
          </div>
          <div class="row q-py-sm">
            <div class="col text-center social-btn">
              <q-btn rounded color="black" class="q-py-sm">
                <q-icon name="img:statics/icons/apple.png" class="q-mr-md"/>
                <div>Continue with Apple</div>
              </q-btn>
            </div>
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
//import mapActions from 'vuex'

export default {
  // name: 'PageName',
  data() {
    return {
      password: "",
      email: ""
    }
  },
  methods: {
   // ...mapActions['auth', { login: 'TestLogin' }]
   login() {
      this.$q.notify("Logged in.");
     this.$store.dispatch('auth/TestLogin')
     this.$router.push('/')
     //window.location.reload()
   }
  }
}
</script>
