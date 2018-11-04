<template>
  <q-page class="flex flex-center">
    <div class="row">
        <q-card inline class="q-ma-sm">
            <q-card-main class="q-display-3 text-center">
                {{number}}
            </q-card-main>
            <q-card-actions align="around">
                <q-btn flat round color="red" icon="add" @click="incre"/>
                <q-btn flat round color="green" icon="minimize" class="q-pb-sm" @click="decre"/>
            </q-card-actions>
        </q-card>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: "counterMinus",
  data: function() {
    return {

    };
  },
  computed: {
    number: function() {
      return this.$store.state.example.number;
    }
  },
  methods: {
    incre: function() {
      this.$store.commit("example/incrementation");
    },
    decre: function(){
      this.$store.commit('example/decrementation');
    }
  }
};
</script>
