<template>
  <VTextField type="number" @input="changeVal(infos)" :label="infos.label" v-model="infos.val"></VTextField>
</template>

<script>
export default {
  name: "SubMemo6",
  props: {
    infos: {
      default: () => ({}),
      type: Object,
    }
  },
  methods: {
    changeVal(val) {
      const info =  JSON.parse(JSON.stringify(val))
      console.log(info)   }
  }
}
</script>

<style scoped>

</style>
