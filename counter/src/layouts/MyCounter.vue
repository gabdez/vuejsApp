<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
            <q-layout-header>
    <q-tabs>
      <q-route-tab
        icon="home"
        to="/home"
        exact
        slot="title"
        label="home"
      />
      <q-route-tab
        icon="add"
        to="/plus"
        exact
        slot="title"
        label="Counter plus"
      />

      <q-route-tab
        icon="minimize"
        to="/minus"
        exact
        slot="title"
        label="Counter minus"
      />
    </q-tabs>
  </q-layout-header>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
