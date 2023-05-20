<template>
  <VRadioGroup :label="showLabel ? infosMemo1.text : ''"
                inline v-model="infosMemo1.val" @change="display(infosMemo1)">
    <VRadio label="O" :value="true"></VRadio>
      <VRadio label="N" :value="false"></VRadio>
  </VRadioGroup>
</template>

<script>
export default {
  name: "SubMemo1",
  props: {
    showLabel: {
      default: true,
      type: Boolean
    },
    infosMemo1: {
      default: () => ({}),
      type: Object,
    }
  },
  methods: {
    display(val) {
      return console.log(val.val)
    }
  }
}
</script>

<style scoped>

</style>
