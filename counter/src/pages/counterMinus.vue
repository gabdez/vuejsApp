<template>
  <q-page>
    <div class="row justify-around" v-if="loaded">
      <div v-for="champ in allChamps" :key="champ.id" class="">
        {{champ.name}}<br>
        <img :src="'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/' + champ.name + '.png'" @error="imageLoadError">
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  name: "counterMinus",
  data: function() {
    return {
      champions: null,
      loaded: false
    };
  },
  mounted() {
    axios
      .get(
        "http://ddragon.leagueoflegends.com/cdn/8.21.1/data/fr_FR/champion.json"
      )
      .then(response => {
        this.champions = response.data.data;
        this.loaded = true;
      })
      .catch(error => console.log(error));
    console.log("mounted");
  },
  computed: {
    number: function() {
      return this.$store.state.example.number;
    },
    aatrox: function() {
      return Object.values(this.champions)[0];
    },
    allChamps: function() {
      return Object.values(this.champions);
    }
  },
  methods: {
    decre: function() {
      this.$store.commit("example/decrementation");
    },
    imageLoadError: function() {
      console.log('image failed');
    }
  }
};
</script>
