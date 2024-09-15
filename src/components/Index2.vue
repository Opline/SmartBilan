<template>
    <div class="styleIndex2">
      <v-btn color="primary" @click="goBack">
        <v-icon left>mdi-arrow-left</v-icon>
      </v-btn>
      <v-btn color="success" @click="sendInfo">
        <v-icon left>mdi-send</v-icon>
      </v-btn>
        <SelecteurMotifs @motifs-selected="handleSelectedMotifs"></SelecteurMotifs>
      <mainUrgResp v-if="formData.includes(2)" @submit-form="handleNewInfos"></mainUrgResp>
      <MainBurn v-if="formData.includes(3)" @submit-form="handleNewInfos"></MainBurn>
      <mainUrgCardio v-if="formData.includes(4)" @submit-form="handleNewInfos"></mainUrgCardio>
      <mainUrgencesNeurologiques v-if="formData.includes(5)" @submit-form="handleNewInfos"></mainUrgencesNeurologiques>
      <mainAllergic v-if="formData.includes(6)" @submit-form="handleNewInfos"></mainAllergic>
      <mainUrgencesEndocriniennes v-if="formData.includes(7)" @submit-form="handleNewInfos"></mainUrgencesEndocriniennes>
      <MainUrgencesGastrointestinales  v-if="formData.includes(8)" @submit-form="handleNewInfos"></MainUrgencesGastrointestinales>
      <mainAbdominalesUrologiques  v-if="formData.includes(9)" @submit-form="handleNewInfos"></mainAbdominalesUrologiques>
      <mainUrgencesToxicologiques v-if="formData.includes(10)" @submit-form="handleNewInfos"></mainUrgencesToxicologiques>
      <mainUrgencesHematologiques  v-if="formData.includes(11)" @submit-form="handleNewInfos"></mainUrgencesHematologiques>
      <mainBehaviouralPsychiatric v-if="formData.includes(13)" @submit-form="handleNewInfos"></mainBehaviouralPsychiatric>
      <mainUrgencesObstetricales v-if="formData.includes(14)" @submit-form="handleNewInfos"></mainUrgencesObstetricales>
      <mainUrgencesNOnatalesPDiatriques v-if="formData.includes(15)" @submit-form="handleNewInfos"></mainUrgencesNOnatalesPDiatriques>
    </div>
</template>

<script>
import MainBurn from "@/components/GestionDesBrûlures/MainBurn.vue";
import mainUrgResp from "@/components/UrgencesRespiratoiresPulmonaires/mainUrgResp.vue";
import SelecteurMotifs from "./Helper/SelecteurMotifs.vue";
import mainUrgCardio from "@/components/UrgencesCardiovasculaires/mainUrgCardio.vue";
import mainUrgencesEndocriniennes from "@/components/UrgencesEndocriniennes/MainUrgencesEndocriniennes.vue";
import mainUrgencesNeurologiques from "@/components/UrgencesNeurologiques/MainUrgencesNeurologiques.vue";
import mainAllergic from "@/components/ReactionsAllergiques/mainAllergic.vue";
import mainUrgencesHematologiques from "@/components/UrgencesHematologiques/MainUrgencesHematologiques.vue";
import mainBehaviouralPsychiatric from "@/components/BehaviouralPsychiatricDisorders/MainBehaviouralPsychiatric.vue";
import mainUrgencesToxicologiques from "@/components/UrgencesToxicologiques/MainUrgencesToxicologiques.vue";
import mainAbdominalesUrologiques from "@/components/UrgencesAbdominalesUrologiques/MainAbdominalesUrologiques.vue";
import mainUrgencesGastrointestinales from "@/components/UrgencesGastrointestinales/mainUrgencesGastrointestinales.vue";
import mainUrgencesObstetricales from "@/components/UrgencesObstetricales/MainUrgencesObstetricales.vue";
import mainUrgencesNOnatalesPDiatriques
  from "@/components/UrgencesNéonatalesPédiatriques/MainUrgencesNéonatalesPédiatriques.vue";
export default {
  name: 'index2',
  components: {
    SelecteurMotifs, mainUrgencesNOnatalesPDiatriques, mainUrgencesObstetricales, mainUrgencesGastrointestinales,mainUrgencesHematologiques, mainAbdominalesUrologiques,  mainUrgencesToxicologiques, mainBehaviouralPsychiatric, mainUrgResp, MainBurn, mainUrgCardio, mainAllergic, mainUrgencesEndocriniennes, mainUrgencesNeurologiques,
  },
  data() {
    return {
      formData: []
    }
  },
  methods: {
    handleSelectedMotifs(selectedMotifs) {
      const selectedMotif = JSON.parse(JSON.stringify(selectedMotifs))
      console.log('Motifs sélectionnés :', selectedMotif);
      this.formData = selectedMotif
      // Faites ce que vous voulez avec les motifs sélectionnés
    },
    goBack() {
      this.$emit('change-windows')
    },
    handleNewInfos(infoRes) {
      const infos = JSON.parse(JSON.stringify(infoRes))
      this.$emit('submit-form', infos);
    },
    sendInfo() {
      this.$emit('share-data');
      this.$emit('change-windows')
    }
  }
}
</script>
<style scoped>
.styleIndex2{
  max-height: 100vh;
  overflow-y: auto;
}
</style>
