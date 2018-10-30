<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
    </q-layout-header>

        <q-page-container>
      <router-view />
    <firstComp></firstComp>
    </q-page-container>

  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import firstComp from '../components/firstComp'

export default {
  name: 'firstLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  components: {
    'firstComp': firstComp
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
