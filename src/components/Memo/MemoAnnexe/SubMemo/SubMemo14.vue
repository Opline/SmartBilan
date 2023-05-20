<template>
<VSelect :label="infos.label" :items="mapSubInfos(infos)" v-model="infos.val" ></VSelect>
</template>

<script>
export default {
  name: "SubMemo14",
  props: {
    infos: {
      default: () => ({}),
      type: Object,
    }
  },
  methods: {
    mapSubInfos(infos) {
      const subInfos = infos.suby
      return subInfos.map(inf => inf.text)
    }
  }
}
</script>

<style scoped>

</style>
