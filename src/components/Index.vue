<template>
  <v-btn color="primary" @click="goBack">
    <v-icon left>mdi-arrow-left</v-icon>
  </v-btn>
    <FormulaireIndex class="styleMemoIndex" :shared-data="sharedData"></FormulaireIndex>
</template>

<script>
import FormulaireIndex from "./Formulaire.vue";
export default {
  name: 'Index1',
  components: {FormulaireIndex},
  props: {
    sharedData: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    goBack() {
      this.$emit('change-windows')
    }
  }
}
</script>
<style>

</style>
