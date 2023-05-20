<template>
  <VContainer>
    <VCard>
      <VCardTitle>
        {{ bilanInfo.text }}
      </VCardTitle>
    </VCard>
  </VContainer>
  <VRow class="overflowContainer">
    <VCol v-for="item in bilanInfo.sub" cols="4" :key="item.id">
      <SubMemo1 v-if="item.type === 1" :infosMemo1="item"></SubMemo1>
      <SubMemo2 v-if="item.type === 2" :infos="item"></SubMemo2>
      <SubMemo4 v-if="item.type === 4" :infos="item"></SubMemo4>
      <SubMemo6 v-if="item.type === 6" :infos="item"></SubMemo6>
      <SubMemo9 v-if="item.type === 9" :infos="item"></SubMemo9>
      <SubMemo11 v-if="item.type === 11" :infos="item"></SubMemo11>
      <SubMemo14 v-if="item.type === 14" :infos="item"></SubMemo14>
      <SubMemo15 v-if="item.type === 15" :infos="item"></SubMemo15>
      <SubMemo16 v-if="item.type === 16" :infos="item" :medicList="medics"></SubMemo16>
    </VCol>
  </VRow>
</template>

<script>
import SubMemo4 from "@/components/Memo/MemoAnnexe/SubMemo/SubMemo4.vue";
import SubMemo1 from "@/components/Memo/MemoAnnexe/SubMemo/SubMemo1.vue";
import SubMemo6 from "@/components/Memo/MemoAnnexe/SubMemo/SubMemo6.vue";
import SubMemo9 from "@/components/Memo/MemoAnnexe/SubMemo/SubMemo9.vue";
import SubMemo2 from "@/components/Memo/MemoAnnexe/SubMemo/SubMemo2.vue";
import SubMemo11 from "@/components/Memo/MemoAnnexe/SubMemo/SubMemo11.vue";
import SubMemo14 from "@/components/Memo/MemoAnnexe/SubMemo/SubMemo14.vue";
import SubMemo15 from "@/components/Memo/MemoAnnexe/SubMemo/subMemo15.vue";
import SubMemo16 from "@/components/Memo/MemoAnnexe/SubMemo/SubMemo16.vue";


export default {
  name: "Memo1",
  components: {SubMemo16, SubMemo15, SubMemo14, SubMemo11, SubMemo2, SubMemo9, SubMemo6, SubMemo4, SubMemo1},
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
.overflowContainer {
  height: calc(100vh - 40vh);
  overflow-y: auto;
}
</style>
