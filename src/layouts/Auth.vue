<template>
  <q-layout view="hHh Lpr fFf" class="auth-layout"> <!-- Be sure to play with the Layout demo on docs -->
    <!-- <q-header elevated class=""> -->
      <q-toolbar>
        <q-toolbar-title class="text-h4 text-white q-ml-xl">
          <span @click="toLanding()" class="cursor-pointer">BoxParts</span>
        </q-toolbar-title>

        <div class="q-mx-sm"><router-link to="/help" class="q-link text-white text-bold">Help</router-link></div>
        <div class="q-mx-sm">
          <q-avatar>
            <img src="statics/flag.png">
          </q-avatar>
        </div>
      </q-toolbar>
    <!-- </q-header> -->
    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  // name: 'LayoutName',

  data () {
    return {
      leftDrawer: true
    }
  },
  methods: {
  toLanding() {
    this.$router.push('/')
  }
  }
}
</script>
