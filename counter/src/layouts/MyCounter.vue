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
        to="/"
        exact
        slot="title"
        label="general view"
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

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-item to="/plus">
          <q-item-side icon="add" />
          <q-item-main label="Plus" sublabel="counter for incremente" />
        </q-item>
        <q-item to="/minus">
          <q-item-side icon="toc" />
          <q-item-main label="Minus" sublabel="counter for minus" />
        </q-item>
      </q-list>
    </q-layout-drawer>

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
