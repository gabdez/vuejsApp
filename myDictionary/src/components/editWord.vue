<template>
  <div>
  <q-modal v-model="_showModal" minimized content-css="height: 600px">
    <h4 class="myFont text-center blue" >{{mode}} word</h4>
    <q-btn
      color="primary"
      @click="_showModal = false"
      label="Close"
    />
  </q-modal>
  </div>
</template>

<style scoped>
.myFont{
  color: #027be3;
}
</style>

<script>
export default {
  name: "editWord",
  props: ["word", "mode", "showModal"],
  data() {
    return {};
  },
  computed: {
    _showModal: {
      get: function() {
        return this.showModal;
      },
      set: function() {
          this.$emit('closeModal', false);
      }
    }
  }
};
</script>
