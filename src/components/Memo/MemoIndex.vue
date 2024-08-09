<template>
  <div v-if="!printMode">
  <Header :bilanInfo="bilan.sub" @triggerMenu="v => idVisible = v"></Header>
  <VMain v-if="isObjNotEmpty(bilan)">
    <PostInt  v-if="dialog1" :motifs="motif"></PostInt>
    <VContainer v-if="dialog2">
      <div v-for="(item,k ) in bilan.sub" :key="k">
        <Memo v-if="item.id === idVisible" :bilanInfo="item" :medics="bilan.medics"></Memo>
      </div>
    </VContainer>
    <CompteRendu v-if="cr && dialog3" :text="cr" :constantes="constante"></CompteRendu>
    <VBottomNavigation>
      <VBtn v-if="dialog2" :disabled="idVisible === 0" @click="idVisible--">
        <VIcon>mdi-chevron-left</VIcon>
      </VBtn>
      <VBtn @click="displayPostInt()">Afficher le Post inter</VBtn>
      <VBtn @click="displayBilan()">Afficher le bilan</VBtn>
      <VBtn  @click="displayCR(bilan)">Afficher le Compte rendu</VBtn>
      <VBtn @click="openPage(bilan)">Ouvrir la page dans une nouvelle fenêtre</VBtn>
        <VBtn v-if="dialog2" :disabled="idVisible >= 9" @click="idVisible++">
          <VIcon>mdi-chevron-right</VIcon>
        </VBtn>
        <GesteAEffectuer v-if="gae" :text="gae"></GesteAEffectuer>
    </VBottomNavigation>
  </VMain>
  </div>
  <div v-else>
<VBtn class="invisible-button" @click="() => printMode = !printMode"></VBtn>
    <FormatPrintCompteRendu :text="cr" :constantes="constante"></FormatPrintCompteRendu>
  </div>
</template>

<script>
import {getMotifs, initFile} from "@/js/ComputeFile";
import Memo1 from "@/components/Memo/MemoAnnexe/Memo1.vue";
import * as CompteRenduNeuro from '../../js/CompteRenduNeuro.js'
import CompteRendu from "@/components/Memo/CompteRendu/CompteRendu.vue";
import GesteAEffectuer from "@/components/Memo/GesteAEffectuer/GesteAEffectuer.vue";
import Memo2 from "@/components/Memo/MemoAnnexe/Memo2.vue";
import Header from "@/components/Memo/HeaderVue.vue";
import Memo from "@/components/Memo/MemoAnnexe/Memo.vue";
import PostInt from "@/components/Memo/PostInt/PostInt.vue";
import FormatPrintCompteRendu from "@/components/Memo/CompteRendu/FormatPrintCompteRendu.vue";
export default {
  name: "MemoIndex",
  components: {PostInt, Memo, Header, Memo2, GesteAEffectuer, CompteRendu, Memo1, FormatPrintCompteRendu},
  data() {
    return {
      idVisible: 0,
      printMode : false,
      cr: null,
      gae: null,
      dialog1: false,
      dialog2: false,
      dialog3: false,
      constante: null,
      bilan: initFile(),
      motif: getMotifs()
    }
  },

  methods: {
    openPage(val) {
      const obj = JSON.parse(JSON.stringify(val))
      const res = CompteRenduNeuro.displayCompteRendu(obj.sub, true)
      this.constante = CompteRenduNeuro.displayConstantes(res)
      this.cr = res
      debugger
      this.printMode = !this.printMode
    },
    isObjNotEmpty(obj) {
      return Object.keys(obj).length !== 0;
    },
    displayPostInt() {
      this.dialog2 = this.dialog3 = false;
      this.dialog1 = true
    },
    displayBilan() {
      this.dialog1 = this.dialog3 = false;
      this.dialog2 = true
    },
    displayCR(val) {
      this.dialog2 = this.dialog1 = false;
      this.dialog3 = true
      const obj = JSON.parse(JSON.stringify(val))
      const res = CompteRenduNeuro.displayCompteRendu(obj.sub,false)
      this.constante = CompteRenduNeuro.displayConstantes(res)
      this.cr = res
      //this.gae = res.gae
    }
  }

}
</script>

<style scoped>
.invisible-button {
  opacity: 0; /* Rendre le bouton transparent */
  position: absolute; /* Positionner le bouton si nécessaire */
  pointer-events: auto; /* Assurer que le bouton reste cliquable */
}

</style>
