<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
    </q-layout-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <firstComp></firstComp>
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
