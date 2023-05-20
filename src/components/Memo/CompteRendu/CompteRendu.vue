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
          <VListItemTitle>{{ i.label }}</VListItemTitle>
          <div v-for="j in i.cr">
            <VListItemSubtitle v-if="j.length > 0">{{ j }}</VListItemSubtitle>
          </div>
        </VListItem>
      </VList>
    </VContainer>
  </VCard>
</template>

<script>
export default {
  name: "CompteRendu",
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
      if(c === "#666666" || c === "#808080") {
        return "#fff"
      } else {
        return "#000"
      }

    }
  }
}
</script>

<style scoped>
.crOverflow{
  height: calc(100vh - 20vh);
  overflow-y: auto;
}
</style>
