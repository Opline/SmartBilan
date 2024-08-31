<template>
  <div>
    <div class="text-subtitle-2 mb-2">Urgences cardiovasculaires</div>
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
import HTA from "@/components/UrgencesCardiovasculaires/UrgencesCardiovasculairesHelper/HTA.vue";
import IC from "@/components/UrgencesCardiovasculaires/UrgencesCardiovasculairesHelper/IC.vue";
import Palpitations from "@/components/UrgencesCardiovasculaires/UrgencesCardiovasculairesHelper/Palpitations.vue";
import VascularProblemsBenign from "@/components/UrgencesCardiovasculaires/UrgencesCardiovasculairesHelper/VascularProblemsBenign.vue";
import GeneralCardio from "@/components/UrgencesCardiovasculaires/UrgencesCardiovasculairesHelper/GeneralCardio.vue";
import Arythmy from "@/components/UrgencesCardiovasculaires/UrgencesCardiovasculairesHelper/Arythmy.vue";
export default {
  name: 'mainUrgCardio',
  data() {
    return {
      forms: [
        {title: 'Douleur ou inconfort à la poitrine ', component: 'GeneralCardio'},
        {title: 'Hypertension', component: 'HTA'},
        {title: 'Insuffisance cardiaque', component: 'IC'},
        {title: 'Palpitations', component: 'Palpitations'},
        {title: 'Problèmes vasculaires périphériques bénins', component: 'VascularProblemsBenign'},
        {title: 'Arythmie commune', component: 'Arythmy'}
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
  components: { GeneralCardio, IC, HTA, Palpitations, Arythmy, VascularProblemsBenign

  }

}
</script>

<style scoped>

</style>
