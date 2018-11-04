<template>
  <q-page class="column" style="background-color: #e1f5fe" >
    <div class="row justify-center q-mt-lg">
      <img class="q-mt-lg" alt="dictionary logo" src="~assets/dictionary1.png" height="140px">
    </div>
    <div class="row justify-center" style="padding-top: 40%">
      <q-btn outline style="color: goldenrod;" label="Enter into my dictionary" icon-right="arrow_forward" @click="$router.push('/SelectL')" />
    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: "PageHome"
};
</script>
