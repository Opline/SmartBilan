<template>
<VTextField :label="infos.text" v-model="infos.val"></VTextField>
</template>

<script>
export default {
  name: "SubMemo2",props: {
    infos: {
      default: () => ({}),
      type: Object,
    }
  },
}
</script>

<style scoped>

</style>
