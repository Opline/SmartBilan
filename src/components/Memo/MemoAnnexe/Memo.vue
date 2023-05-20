<template>
<Memo1 v-if="bilanInfo.type === 1"  :bilanInfo="bilanInfo" :medics="medics"></Memo1>
  <Memo2 v-if="bilanInfo.type === 2"  :bilanInfo="bilanInfo"></Memo2>
</template>

<script>
import Memo1 from "@/components/Memo/MemoAnnexe/Memo1.vue";
import Memo2 from "@/components/Memo/MemoAnnexe/Memo2.vue";

export default {
  name: "Memo",
  components: {Memo2, Memo1},
  props: {
    bilanInfo: {
      default: () => ({}),
      type: Object,
    },
    medics: {
      default: [],
      type: Array
    }
  }
}
</script>

<style scoped>

</style>
