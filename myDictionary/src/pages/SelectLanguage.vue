<template>
<transition name="slide-fade">
	<q-layout>
      <div style="background-color: #e1f5fe; min-height: 100vh">
        <div class="row justify-center q-pt-lg"><p class="q-mt-lg myFont">Choose your language</p></div>
        <div class="row justify-around" style="padding-top: 30%">
          <q-card inline overlay-position="full" class="col-5 q-my-sm" v-for="lang in languages" :key="lang.name"
          @click.native="$router.push('/SelectL/' + lang.name)"
          style="border-color: red"
          >
            <q-card-media overlay-position="full">
              <img :src="lang.flagUrl" style="min-height: 105px">
              <!-- <q-card-title slot="overlay">
              {{lang.name}}
              </q-card-title> -->
            </q-card-media>
          </q-card>
        </div>
      </div>
	</q-layout>
</transition>
</template>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.myFont{
  font-size: 1.8em;
  font-weight: 100;
}
</style>

<script>
export default {
  name: "SelectLanguage",
  data() {
    return {
      langHover: ""
    };
  },
  computed: {
    languages: function() {
      return this.$store.getters["dictionary/getAllLanguages"];
    }
  },
  methods: {
    chooseDictionary: function(lang) {
      console.log(lang);
    },
    essaie: function() {
      console.log("reazre");
    }
  },
  mounted() {
    console.log(this.languages);
  }
};
</script>
