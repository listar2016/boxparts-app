<template>
  <q-page padding>
    <div class="row">
      <div class="col col-md-6 offset-md-6">
        <q-card class="login-card q-pa-lg">
          <div class="text-h4">Create an account</div>
          <div class="text-subtitle1 q-mb-lg">Enter your details to create an account</div>
          <div class="row q-py-sm">
            <div class="col">
              <q-input outlined v-model="email" label="Email address"/>
            </div>
          </div>
          <div class="row q-py-sm">
            <div class="col q-mr-md">
              <q-input outlined v-model="firstName" label="Name"/>
            </div>
            <div class="col q-ml-md">
              <q-input outlined v-model="lastName" label="Surname"/>
            </div>
          </div>
          <div class="row q-py-sm">
            <div class="col">
              <q-input outlined v-model="password" type="password" label="Password" />
            </div>
          </div>
          <div class="row q-pt-sm">
              <div class="col text-subtitle2">Date of birth</div>
          </div>
          <div class="row q-pb-sm">
            <div class="col q-pr-sm">
              <q-select outlined v-model="birthdate.day" :options="options" label="Day"/>
            </div>
            <div class="col q-pr-sm">
              <q-select outlined v-model="birthdate.month" :options="options" label="Month"/>
            </div>
            <div class="col">
              <q-select outlined v-model="birthdate.year" :options="options" label="Year"/>
            </div>
          </div>
          <div class="row q-pt-xl">
            <div class="col-4">
              <q-btn outline rounded color="grey" label="Back" size="lg"/>
            </div>
            <div class="col-8 text-right">
              <q-btn rounded color="primary" label="Create Account" size="lg"/>
            </div>
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data() {
    return {
      username: "",
      password: "",
      email: "",
      firstName: "",
      lastName: "",
      birthdate: {
        day: -1,
        month: -1,
        year: -1
      },
      options: [],
    }
  }
}
</script>
