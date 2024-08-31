<template>
  <div>
    <div class="text-subtitle-2 mb-2">{{ title }}</div>
    <v-expansion-panels>
      <v-expansion-panel v-for="(form, index) in forms" :key="index">
        <v-expansion-panel-title expand-icon="mdi-menu-down">
          {{ form.title }}
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <component :is="form.component" @submit-form="inf => handleNewInfos(inf, form.title)"></component>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>

  </div>
</template>


<script>
import HyperventilationForm from "@/components/UrgencesRespiratoiresPulmonaires/Helper Respi/HyperventilationForm.vue";
import PulmonaryAndThrombosisAssessment
  from "@/components/UrgencesRespiratoiresPulmonaires/Helper Respi/PulmonaryAndThrombosisAssessment.vue";
import LungCancerQuestionnaire from "@/components/UrgencesRespiratoiresPulmonaires/Helper Respi/LungCancerQuestionnaire.vue";
import BPCO from "@/components/UrgencesRespiratoiresPulmonaires/Helper Respi/BPCO.vue";
import PneumothoraxForm from "@/components/UrgencesRespiratoiresPulmonaires/Helper Respi/PneumothoraxForm.vue";
import ChokingForm from "@/components/UrgencesRespiratoiresPulmonaires/Helper Respi/ChokingForm.vue";
import UpperRespiratoryInfectionForm
  from "@/components/UrgencesRespiratoiresPulmonaires/Helper Respi/UpperRespiratoryInfectionForm.vue";
export default {
  name: 'mainUrgResp',
  data() {
    return {
      title: 'Urgences respiratoires et pulmonaires',
      forms: [
        {title: 'Obstruction des voies respiratoires étouffement', component: 'ChokingForm'},
        {title: 'BPCO', component: 'BPCO'},
        {title: 'Syndrome d’hyperventilation', component: 'HyperventilationForm'},
        { title: 'Embolie pulmonaire et Thrombophlébite', component: 'PulmonaryAndThrombosisAssessment'},
        { title: 'Cancer du poumon', component: 'LungCancerQuestionnaire'},
        { title: 'Pneumothorax  ', component: 'PneumothoraxForm'},
        { title: 'Infection des voies respiratoires supérieures', component: 'UpperRespiratoryInfectionForm'}
      ],
    }
    },
  methods: {
    handleNewInfos(infoRes, t) {
      let infos = JSON.parse(JSON.stringify(infoRes))
      infos = `${this.title} :\n ${t} :\n ${infos}`
      this.$emit('submit-form', infos);
    }
  },
  components: {
    ChokingForm, BPCO, PulmonaryAndThrombosisAssessment, HyperventilationForm, LungCancerQuestionnaire, PneumothoraxForm, UpperRespiratoryInfectionForm
  }

}
</script>

<style scoped>

</style>
