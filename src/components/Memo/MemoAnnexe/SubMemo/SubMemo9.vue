<template>
  <VTextField @input="changeValSys(infos)" label="TA sys" v-model="infos.val.sys"></VTextField>
  <VTextField @input="changeValDias(infos)" label="TA dias" v-model="infos.val.dias"></VTextField>
</template>

<script>
export default {
  name: "SubMemo9",

  props: {
    infos: {
      default: () => ({}),
      type: Object,
    }
  },
  methods: {
    changeValDias(val) {
      const info = JSON.parse(JSON.stringify(val))
      if (info.val.sys < 70) {
        this.msg = "Hypotension"
      } else if (info.val.sys > 90) {
        this.msg = "Hypertension"
      } else {
        this.msg = "Bonne tension"
      }
    }
  }
}
</script>

<style scoped>

</style>
