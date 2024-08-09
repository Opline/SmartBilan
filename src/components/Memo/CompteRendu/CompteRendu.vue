<template>
  <VCard>
    <VCardTitle> Compte rendu</VCardTitle>
    <VDivider></VDivider>
    <VContainer>
    <VRow>
      <VCol cols="4" v-for="constante in constantes">
        <VBadge :color="constante.color" :text-color="findTextColor(constante.color)"
                :content="`${ constante.title } : ${ constante.val } ${ constante.mesure }`"></VBadge>
      </VCol>
    </VRow>
    </VContainer>
    <VDivider></VDivider>
    <VContainer class="crOverflow">
      <VList>
        <VListItem v-for="i in text">
          <VListItemTitle v-if="i.cr.toString().replaceAll(',','').length > 0">{{ i.label }}</VListItemTitle>
          <div v-for="j in i.cr">
            <VListItemSubtitle v-if="j.length > 0">{{ j }}</VListItemSubtitle>
          </div>
        </VListItem>
        <!-- <VListItemAction>
          <VBtn @click="triggerIA(constantes)">Triiger ia</VBtn>
        </VListItemAction>
        <VListItemTitle>Selon l'IA il faudrait</VListItemTitle>
        <VListItem>{{ gea }}</VListItem>
        !-->
      </VList>
    </VContainer>
  </VCard>
</template>

<script>
import {created} from '@/js/OpenAI'
export default {
  name: "CompteRendu",
  data() {
    return {
      gea: ''
    }
    },
  props: {
    text: {
      default: [],
      type: Array
    },
    constantes: {
      default: [],
      type: Array
    }
  },
  methods: {
    findTextColor(c) {
      return (c === "#666666" || c === "#808080") ? "#fff" : "#000";
    },
    async triggerIA() {
      const constantes = JSON.parse(JSON.stringify(this.constantes))
      const body = constantes.map(c =>` ${c.name} à ${c.val} ${c.mesure} `)
      const intro = "que faire quand j'ai"
      const msg = JSON.stringify({prompt : intro +body + "?"})
      this.$emit('triggerIA', msg)
      const res = await created(msg)
      this.gea = JSON.parse(res).data
    }
  },
}
</script>

<style scoped>
.crOverflow{
  height: calc(100vh - 20vh);
  overflow-y: auto;
}
</style>
