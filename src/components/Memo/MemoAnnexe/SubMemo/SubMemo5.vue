

<template>
  <VTextarea   :label="infos.text" v-model="infos.val"></VTextarea>
</template>

<script >
export default {
  data() {
    return {
      textAreaContent: '',
    }
  },
  props: {
    infos: {
      default: () => ({}),
      type: Object,
    }
  },
}
</script>
<style scoped>

</style>
