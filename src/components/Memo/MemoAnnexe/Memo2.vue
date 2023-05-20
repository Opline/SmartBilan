<template>
  <VContainer>
    <VCard>
      <VCardTitle>
        {{ bilanInfo.text }}
      </VCardTitle>
    </VCard>
  </VContainer>
  <VTable class="overflowContainer">
    <thead>
    <tr>
      <th v-for="Hheader in tabsHHeader">
        {{ Hheader }}
      </th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="Vhearder in bilanInfo.sub">
      <td> {{
          Vhearder.text
        }}
      </td>
      <td v-for="val in Vhearder.sub">
        <SubMemo1 v-if="val.type === 1" :infosMemo1="val" :showLabel="false">
        </SubMemo1>
        <SubMemo2 v-if="val.type === 2" :infos="val"></SubMemo2>
      </td>
    </tr>
    </tbody>
  </VTable>
</template>

<script>

import SubMemo1 from "@/components/Memo/MemoAnnexe/SubMemo/SubMemo1.vue";
import SubMemo2 from "@/components/Memo/MemoAnnexe/SubMemo/SubMemo2.vue";

export default {
  name: "Memo2",
  components: {SubMemo2, SubMemo1},
  props: {
    bilanInfo: {
      default: () => ({}),
      type: Object,
    }
  },
  data() {
    return {
      tabsHHeader: ['', 'Motricité', 'Sensibilité', 'Lésion'],
      tabsVHeader: []
    }
  },

}
</script>

<style scoped>
.overflowContainer {
  height: calc(100vh - 40vh);
  overflow-y: auto;
}
</style>
