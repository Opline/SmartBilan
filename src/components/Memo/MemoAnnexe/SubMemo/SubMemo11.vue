<template>
  <VSlider  @input="changeValSys(infos)" thumb-label="always" :max="infos.max" :step="infos.step"
           :min="infos.min" :label="infos.text" v-model="infos.val"></VSlider>
</template>

<script>
export default {
  name: "SubMemo11",
  props: {
    infos: {
      default: () => ({}),
      type: Object,
    }
  },
  methods: {
    changeValSys(val) {
      console.log(val)
    }
  }
}
</script>

<style scoped>

</style>
