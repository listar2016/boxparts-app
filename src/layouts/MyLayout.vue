<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="">
      <q-toolbar>
        <q-btn
          v-if="isAuthenticated"
          flat
          dense
          round
          @click="leftDrawerSwitch()"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title class="text-center text-h4 text-bold">
          <span @click="toLanding()" class="cursor-pointer">BoxParts</span>
        </q-toolbar-title>

        <div class="q-mx-sm"><router-link to="/login" class="q-link text-white text-bold">Login</router-link></div>
        <div class="q-mx-sm"><router-link to="/help" class="q-link text-white text-bold">Help</router-link></div>
        <div class="q-mx-sm">
          <q-avatar>
            <img src="statics/flag.png">
          </q-avatar>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-if="isAuthenticated && leftDrawerOpen"
      @input="leftDrawerSwitch()"
      :value="leftDrawerOpen"
      bordered
    >
      <q-list>
        <q-item clickable tag="a" to="/">
          <q-item-section avatar>
            <q-icon name="home" class="text-primary" size="lg"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Home</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" to="/search">
          <q-item-section avatar>
            <q-icon name="search" class="text-primary" size="lg"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Advanced Search</q-item-label>
          </q-item-section>
        </q-item>
        <q-separator />
        <q-item clickable tag="a">
          <q-item-section avatar>
            <q-icon name="img:statics/icons/icon-orders.png" class="text-primary" size="md"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Orders</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a">
          <q-item-section avatar>
            <q-icon name="remove_red_eye" class="text-primary" size="lg"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Watch List</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator />

        <q-item clickable tag="a">
          <q-item-section avatar>
            <q-icon name="mail_outline" class="text-primary" size="lg"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Inbox</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a">
          <q-item-section avatar>
            <q-icon name="format_list_bulleted" class="text-primary" size="lg"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Your Listings</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator />

        <q-item clickable tag="a">
          <q-item-section avatar>
            <q-icon name="person" class="text-primary" size="lg"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Profile</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a">
          <q-item-section avatar>
            <q-icon name="img:statics/icons/icon-settings.png" class="text-primary" size="md"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Settings</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" @click="logout()">
          <q-item-section avatar>
            <q-icon name="logout" class="text-primary" size="lg"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Logout</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
  name: "MyLayout",
  computed: {
    ...mapGetters('auth', ['user', 'isAuthenticated']),
    leftDrawerOpen: {
      get() {
        return this.$store.state.leftDrawerOpen
      },
      set() {
        this.leftDrawerSwitch()
      }
    }
    //isAuthenticated() { return !!localStorage.token }
  },
  methods: {
    ...mapActions(['leftDrawerSwitch']),
    logout() {
      this.$store.dispatch('auth/Logout')
      this.$q.notify("Logged out.");
      //this.$router.push('/')
      //this.$forceUpdate();
      //window.location.reload()
    },
    toLanding() {
      this.$router.push('/')
  }
  },
  mounted() {
    this.$store.dispatch('maps/checkGeo')
  }
};
</script>
