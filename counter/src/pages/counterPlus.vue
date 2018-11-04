<template>
  <q-page class="flex flex-center">
    <div class="row">
        <div class="col-12 flex"><q-btn class="flex-end" row flat style="color: #FF0080" label="increment +1" @click="incre" /></div>
        incrementeur of this tab: {{number}}
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
    number: function () {
      return this.$store.state.example.number;
    }
  },
  methods: {
    incre: function(){
      this.$store.commit('example/incrementation');
    }
  }
}
</script>
