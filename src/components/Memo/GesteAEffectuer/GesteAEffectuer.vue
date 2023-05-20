<template>
  <VCard>
    <VCardTitle>Geste a Effectuer</VCardTitle>
    <VCardText>{{ text }}</VCardText>
  </VCard>
</template>

<script>
export default {
  name: "GesteAEffectuer",
  props: {
    text: {
      default: '',
      type: String
    }
  }
}
</script>

<style scoped>

</style>
