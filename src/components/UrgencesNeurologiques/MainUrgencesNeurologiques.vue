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
    <v-alert type="info" color="primary" border="left">
      <p>Je comprends que vous êtes probablement inquiet/inquiète ou effrayé/effrayée parce que vous ne pouvez pas parler. On est ici pour vous aider.</p>
      <p>Je vais vérifier le taux de sucre dans votre sang; s’il vous plaît, ne bougez pas.</p>
      <p>Il est possible que vous fassiez un AVC (accident vasculaire cérébral) ou un mini AVC (ICT, ischémie cérébrale transitoire).</p>
      <p>Il semble que vous ayez fait une convulsion.</p>
      <p>Nous allons vous donner de l’oxygène avec un masque/une lunette nasale.</p>
      <p>Nous allons vous étendre sur la civière sur le côté droit/gauche.</p>
      <p>Nous devons vous transporter à l’hôpital pour une évaluation plus complète et des soins.</p>
      <p>Cet hôpital se spécialise dans la maladie qui vous affecte.</p>
      <p>Nous devons partir pour l’hôpital tout de suite.</p>
    </v-alert>

  </div>
</template>


<script>
import convulsion from "@/components/UrgencesNeurologiques/UrgencesNeurologiquesHelper/convulsion.vue";
import GeneralNeuro from "@/components/UrgencesNeurologiques/UrgencesNeurologiquesHelper/GeneralNeuro.vue";
import WeaknessParalysis from "@/components/UrgencesNeurologiques/UrgencesNeurologiquesHelper/WeaknessParalysis.vue";
import headache from "@/components/UrgencesNeurologiques/UrgencesNeurologiquesHelper/headache.vue"
import UnconsciousnessSyncope from "@/components/UrgencesNeurologiques/UrgencesNeurologiquesHelper/UnconsciousnessSyncope.vue";
export default {
  name: 'MainUrgencesNeurologiques',
  data() {
    return {
      title: 'Urgences neurologiques',
      forms: [
        {title: 'Douleur ou inconfort à la poitrine ', component: 'convulsion'},
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
  components: { convulsion, GeneralNeuro, WeaknessParalysis, UnconsciousnessSyncope, headache,

  }

}
</script>

<style scoped>

</style>
