<template>
<transition name="slide-fade">
	<q-layout>
    <q-page-container>
      <q-page class="row items-center" style="background-color: #e1f5fe">
        <div class="row justify-around">
          <q-card inline overlay-position="full" class="col-5 q-my-sm" v-for="lang in languages" :key="lang.name">
            <q-card-media overlay-position="full">
              <img :src="lang.flagUrl" style="min-height: 105px">
              <!-- <q-card-title slot="overlay">
              {{lang.name}}
              </q-card-title> -->
            </q-card-media>
          </q-card>
        </div>
      </q-page>
    </q-page-container>
	</q-layout>
</transition>
</template>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css";
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>

<script>
export default {
  name: "SelectLanguage",
  data() {
    return {};
  },
  computed: {
    languages: function() {
      return this.$store.getters["dictionary/getAllLanguages"];
    }
  },
  mounted() {
    console.log(this.languages);
  }
};
</script>
