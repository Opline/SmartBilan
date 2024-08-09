<template>
    <!--<VContainer>
    <VRow>
      <VCol cols="4" v-for="constante in constantes">
        <VBadge :color="constante.color" :text-color="findTextColor(constante.color)"
                :content="`${ constante.title } : ${ constante.val } ${ constante.mesure }`"></VBadge>
      </VCol>
    </VRow>
    </VContainer>
    <VDivider></VDivider>
   !-->

        <div v-for="i in text">
          <div v-if="i.type === 'Intro'">
            <VListItemTitle class="entreprise">{{ i.cr[2] }}</VListItemTitle>
            <VListItemTitle class="ambu1" >{{ i.cr[0] }}</VListItemTitle>
            <VListItemTitle class="ambu2">{{ i.cr[3] }}</VListItemTitle>
          </div>
          <div v-else-if="i.type === 'ATC'">
          <VListItemTitle class="atcd">{{ i.cr[3] }}</VListItemTitle>
          <VListItemTitle class="allergie">Allergie :{{ i.cr[2] === ''  ? "pas d'allergie connue" : i.cr[2] }}</VListItemTitle>
        </div>
          <div v-else-if="i.type === 'TTT'">
            <VListItemTitle class="ttt" >{{ i.cr[1] }}</VListItemTitle>
          </div>
          <div class="circ" v-else-if="i.type === 'Circ'">
            {{ gea }}
          </div>
        </div>

     <VListItemAction>
          <VBtn @click="triggerIA(constantes)">Trigger ia</VBtn>
        </VListItemAction>
        !-->
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
      const text = JSON.parse(JSON.stringify(this.text))
      let info = ''
      text.forEach(i => {
        if(i.type !== 'Intro') {
          i.cr.forEach(c => {
            info += ` ${c}`
          })
        }

      })
      const intro = "Redige moi un rapport de la situation de façon épurer"
      const msg = JSON.stringify({prompt : intro + info + "?"})
      console.log(msg)
      debugger
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
.circ{
  max-width: 18cm;
  position: absolute;
  top: 130mm;
  left: 20mm;
  white-space: pre-wrap;
  word-break: break-word;
  max-height: 28mm;
  line-height: 1.5;
  font-size: 13px;

}
.entreprise{
  position: absolute;
  top : 3cm;
  left: 25mm
}
.ambu1{
  position: absolute;
  top: 37mm;
  left: 5cm;
}
.ambu2{
  position: absolute;
  top: 44mm;
  left: 4cm;
}

.ttt{
  max-width: 9cm;
  position: absolute;
  top: 184mm;
  left: 114mm;
  white-space: pre-wrap;
  word-break: break-word;
  max-height: 20mm;
  line-height: 1.5;
  font-size: 13px;
}

.atcd{
  position: absolute;
  white-space: pre-wrap;
  word-break: break-word;
  max-height: 15mm;
  max-width: 9cm;
  line-height: 1.5;
  font-size: 13px;
  top: 164mm;
  left: 114mm;
}

.allergie{
  max-width: 9cm;
  position: absolute;
  top: 195mm;
  left: 114mm;
}
</style>
