<template>
  <VAutocomplete v-if="list.length > 0" label="Médicaments" v-model="infos.val" :items="list"></VAutocomplete>
  <VTextField v-else label="Médicaments" v-model="infos.val"></VTextField>
  <VBtn @click="getList(infos.val)">search</VBtn>

</template>

<script>

export default {
  name: "SubMemo16",
  data() {
    return {
      list: []
    }
  },
  props: {
    infos: {
      default: () => ({}),
      type: Object
    },
    medicList: {
      default: [],
      type: Array
    }
  },
  methods: {
    getList(val) {
      this.list = [];
      const test = this.medicList.filter(name =>
        name.toLowerCase()).includes(val.toLowerCase()
      )
      this.list = test
    }
  }
}
</script>

<style scoped>

</style>
