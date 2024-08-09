<template>
  <VCard>
    <VCardTitle> Post inter</VCardTitle>
  <VContainer>
    <h1>Selection le motif</h1>
    <v-autocomplete
      v-model="motifsSelects"
      label="Autocomplete"
      :items="motifs"
      chips
      closable-chips
      item-title="LibC"
      item-value="code_SISAMU"
      multiple
    >
      <template v-slot:chip="{ props, item }">
        <v-chip
          v-bind="props"
          :text="item.value"
        ></v-chip>
      </template>
      <template v-slot:item="{ props, item }">
        <VListItem  v-if="!checkIfEntete(item.raw.code_CISU)" v-bind="props" :title="item.title"

        ></VListItem>
        <VListSubheader v-else v-bind="props" :title="item.title"></VListSubheader>
      </template>
    </v-autocomplete>
    <VTextarea v-model="textAreaContent" label="Autres élément à rapporter (symptome, constante) "></VTextarea>
    <VBtn @click="displayVal">TRigger IA</VBtn>
    <VCardText> {{ postOpInfos }}</VCardText>
  </VContainer>
  </VCard>
</template>

<script>
import {created} from "@/js/OpenAI";

export default {
  name: "PostInt",
  data() {
    return {
      motifsSelects: [],
      postOpInfos: '',
      textAreaContent: ''
    }
  },
  props: {
    motifs: {
      default: [],
      type: Array
    }
  },
  methods: {
    async displayVal() {
      const idsSelected = JSON.parse(JSON.stringify(this.motifsSelects));
      const intro = "Je suis ambulancier que faire lorsque le patient présente "
      const motifsSeclects= idsSelected.map(el => {
        const motifs = JSON.parse(JSON.stringify(this.motifs.find(m => m.code_SISAMU === el)))
        return motifs.Lib1 + ' et '
      });
      const text =  intro + motifsSeclects.join() + this.textAreaContent
      console.log(text)
      const req =  JSON.stringify({prompt : text})
      const res = await created(req)
      this.postOpInfos = JSON.parse(res).data
    },
    checkIfEntete(code_CISU) {
      const code_CISUSplit = code_CISU.split('.')
      const check = parseInt(code_CISUSplit[1]) === 0 || (code_CISUSplit[2] ? parseInt(code_CISUSplit[2]) === 0 : false)
      return check
    }
  }
}
</script>

<style scoped>

</style>
