<template>
  <Index2 v-if="toogleIndex" @change-windows="changeWindows" @share-data="ShareData" @submit-form="handleNewInfos"></Index2>
  <Index v-else @change-windows="changeWindows" :shared-data="data"></Index>
</template>

<script>
import Index2 from "@/components/Index2.vue";
import Index from "@/components/Index.vue";
export default {
  name: 'mainRoot',
components: {Index2, Index},
  data() {
    return {
      toogleIndex: true,
      data: []
    }
  },
  methods: {
    changeWindows() {
      this.toogleIndex = !this.toogleIndex
    },
    handleNewInfos(infoRes) {
      const infos = JSON.parse(JSON.stringify(infoRes))
      this.data.push(infos)
    },
    ShareData() {
      const infos = JSON.parse(JSON.stringify( this.data))
      this.$emit('share-data', infos); // Emit data to be shared
    }
  }
}
</script>
<style>

</style>
