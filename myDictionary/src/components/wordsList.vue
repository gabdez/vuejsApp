<template>
  <div>
<!--     <div v-for="(w, index) in words" :key="index">
      {{w.word}} -> {{w.translation}}
    </div> -->
    <q-list inset-separator>
      <q-item v-for="(w, index) in words" :key="index" @click.native="viewWord(index)" v-ripple>
        <q-item-side :letter="w.word.charAt(0).toUpperCase()" style="color: goldenrod;" />
        <q-item-main class="text-center myFont" :label="w.word" ><br>
          <q-item-tile text-color="light">
            translation: {{w.translation}}
          </q-item-tile>
        </q-item-main>
        <q-item-side right icon="edit" color="secondary" @click.native.stop="editWord(index)"/>
      </q-item>
    </q-list>
    <q-btn
      v-back-to-top.animate="{offset: 500, duration: 500}"
      round
      color="primary"
      class="fixed-bottom-right animate-pop"
      :style="positionBackToTop"
        size="sm"
    >
      <q-icon name="keyboard_arrow_up" />
    </q-btn>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-fab
        v-model="floatButton"
        icon="add"
        direction="up"
        color="primary"
      >
      <q-btn color="blue" @click="editNewWord">add word</q-btn>
      </q-fab>
    </q-page-sticky>
    <editWord v-if="wordSelected != null" :word="wordSelected" :mode="mode" :showModal="showModal" @closeModal="showModal = false"></editWord>
  </div>
</template>

<style scoped>
.myFont {
  font-size: 1.1em;
  font-weight: 100;
}
</style>

<script>
import editWord from "../components/editWord.vue";

export default {
  name: "wordsList",
  components: {
    editWord
  },
  data() {
    return {
      wordSelected: null,
      showModal: false,
      mode: "view",
      floatButton: false
    };
  },
  mounted: function() {},
  watch: {},
  methods: {
    editWord: function(index) {
      this.wordSelected = this.$store.getters["dictionary/getWordByIndex"](
        index,
        this.$route.params.language
      );
      this.mode = "edit";
      this.showModal = true;
    },
    editNewWord: function() {
      this.wordSelected = {word: null, translation: null};
      this.mode = 'new';
      this.showModal = true;
      this.floatButton = false;
    },
    viewWord: function(index) {
      this.wordSelected = this.$store.getters["dictionary/getWordByIndex"](
        index,
        this.$route.params.language
      );
      this.mode = "view";
      this.showModal = true;
    }
  },
  computed: {
    words: function() {
      return this.$store.getters["dictionary/getWordsListByLanguage"](
        this.$route.params.language
      );
    },
    positionBackToTop: function() {
      return "margin: 0 " + (window.innerWidth / 2 - 20) + "px 18px 0";
    }
  }
};
</script>
