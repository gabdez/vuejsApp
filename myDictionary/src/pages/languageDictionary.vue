<template>
<transition name="slide-fade">
	<q-layout>
      <div style="background-color: #e1f5fe; min-height: 100vh">
        <wordsList></wordsList>
      </div>
	</q-layout>
</transition>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.myFont {
  font-size: 1.8em;
  font-weight: 100;
}
</style>

<script>
import wordsList from "../components/wordsList.vue";
export default {
  components: {
    wordsList
  },
  name: "languageDictionary",
  data() {
    return {};
  }
};
</script>
