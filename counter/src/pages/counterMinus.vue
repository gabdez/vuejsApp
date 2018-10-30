<template>
  <q-page class="flex flex-center">
    <div class="row">
      <div class="col-12 flex"><q-btn class="flex-end" row flat style="color: #FF0080" label="increment -1" @click="this.$store.commit('moduleExample/decrementation')" /></div>
      incrementeur of this tab: {{inc}}
    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'counterMinus',
  data: function () {
    return {

    }
  },
  computed: {
    inc: function () {
      return this.$store.state.moduleExample.minus
    }
  }
}
</script>
