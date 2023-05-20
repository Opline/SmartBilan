<template>
  <Header :bilanInfo="bilan.sub" @triggerMenu="v => idVisible = v"></Header>
  <VMain v-if="isObjNotEmpty(bilan)">
    <VContainer>
      <div v-for="(item,k ) in bilan.sub" :key="k">
        <Memo v-if="item.id === idVisible" :bilanInfo="item" :medics="bilan.medics"></Memo>
      </div>
    </VContainer>
    <VBottomNavigation>
      <v-dialog
        scrollable
        width="auto"
        v-model="dialog"
      >
        <template v-slot:activator="{ props }">
          <VBtn :disabled="idVisible === 0" @click="idVisible--">
            <VIcon>mdi-chevron-left</VIcon>
          </VBtn>
          <VBtn v-bind="props" @click="displayCR(bilan)">Afficher le Compte rendu</VBtn>
          <VBtn :disabled="idVisible >= 8" @click="idVisible++">
            <VIcon>mdi-chevron-right</VIcon>
          </VBtn>
        </template>
        <CompteRendu v-if="cr" :text="cr" :constantes="constante"></CompteRendu>
        <GesteAEffectuer v-if="gae" :text="gae"></GesteAEffectuer>
      </v-dialog>
    </VBottomNavigation>
  </VMain>
</template>

<script>
import {initFile} from "@/js/ComputeFile";
import Memo1 from "@/components/Memo/MemoAnnexe/Memo1.vue";
import * as CompteRenduNeuro from '../../js/CompteRenduNeuro.js'
import CompteRendu from "@/components/Memo/CompteRendu/CompteRendu.vue";
import GesteAEffectuer from "@/components/Memo/GesteAEffectuer/GesteAEffectuer.vue";
import Memo2 from "@/components/Memo/MemoAnnexe/Memo2.vue";
import Header from "@/components/Memo/HeaderVue.vue";
import Memo from "@/components/Memo/MemoAnnexe/Memo.vue";

export default {
  name: "MemoIndex",
  components: {Memo, Header, Memo2, GesteAEffectuer, CompteRendu, Memo1},
  data() {
    return {
      idVisible: 0,
      cr: null,
      gae: null,
      dialog: false,
      constante: null,
      bilan: initFile()
    }
  },

  methods: {
    isObjNotEmpty(obj) {
      return Object.keys(obj).length !== 0;
    },
    displayCR(val) {
      const obj = JSON.parse(JSON.stringify(val))
      const res = CompteRenduNeuro.displayCompteRendu(obj.sub)
      this.constante = CompteRenduNeuro.displayConstantes(res)
      this.cr = res
      //this.gae = res.gae
    },
  }

}
</script>

<style scoped>
</style>
