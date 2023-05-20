<template>
  <VTextField type="datetime-local" name="datetime" :label="infos.text" v-model="infos.val"></VTextField>
</template>

<script>
export default {
  name: "SubMemo15",props: {
    infos: {
      default: () => ({}),
      type: Object,
    }
  },
}
</script>

<style scoped>

</style>
