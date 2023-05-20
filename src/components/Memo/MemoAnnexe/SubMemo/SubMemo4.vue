<template>
  <VRow>

    <div class="d-flex justify-end mb-6 ">
        {{ infos.text }}
    </div>
    <div class="d-flex justify-end mb-6">
      <VList>
        <VListGroup v-for="subInfos in infos.sub">
          <SubMemo1 v-if="subInfos.type === 1" :infosMemo1="subInfos"></SubMemo1>
          <SubMemo2 v-if="subInfos.type === 2" :infos="subInfos"></SubMemo2>
          <SubMemo4 v-if="subInfos.type === 4" :infos="subInfos"></SubMemo4>
          <SubMemo6 v-if="subInfos.type === 6" :infos="subInfos"></SubMemo6>
          <SubMemo9 v-if="subInfos.type === 9" :infos="subInfos"></SubMemo9>
          <SubMemo11 v-if="subInfos.type === 11" :infos="subInfos"></SubMemo11>
          <SubMemo14 v-if="subInfos.type === 14" :infos="subInfos"></SubMemo14>
          <SubMemo15 v-if="subInfos.type === 15" :infos="subInfos"></SubMemo15>
        </VListGroup>
      </VList>
    </div>


  </VRow>
</template>

<script>

import SubMemo1 from "@/components/Memo/MemoAnnexe/SubMemo/SubMemo1.vue";
import SubMemo11 from "@/components/Memo/MemoAnnexe/SubMemo/SubMemo11.vue";
import SubMemo9 from "@/components/Memo/MemoAnnexe/SubMemo/SubMemo9.vue";
import SubMemo6 from "@/components/Memo/MemoAnnexe/SubMemo/SubMemo6.vue";
import SubMemo2 from "@/components/Memo/MemoAnnexe/SubMemo/SubMemo2.vue";
import SubMemo15 from "@/components/Memo/MemoAnnexe/SubMemo/subMemo15.vue";
import SubMemo14 from "@/components/Memo/MemoAnnexe/SubMemo/SubMemo14.vue";

export default {
  name: "SubMemo4",
  components: {SubMemo14, SubMemo15, SubMemo2, SubMemo6, SubMemo9, SubMemo11, SubMemo1},
  props: {
    infos: {
      default: () => ({}),
      type: Object,
    }
  },
}
</script>

<style scoped>

</style>
