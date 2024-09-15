<template>
  <div>
    <div class="text-subtitle-2 mb-2">Urgences néonatales et pédiatriques</div>
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
import MainUrgencesNOnatalesPDiatriquesRespn
  from "@/components/UrgencesNéonatalesPédiatriques/MainUrgencesNéonatalesPédiatriquesResp.vue";
import ACRPedia from "@/components/UrgencesNéonatalesPédiatriques/UrgencesNéonatalesPédiatriqueHelper/ACRPedia.vue";
export default {
  name: "MainUrgencesNéonatalesPédiatriques",
  data() {
    return {
      forms: [
        {title: 'Réanimation du nouveau-né/de la nouveau-née en détresse', component: 'ACRPedia'},
        {title: 'Problèmes respiratoires propres aux nourrissons et aux jeunes enfants', component:"MainUrgencesNOnatalesPDiatriquesRespn"}
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
  components: { ACRPedia, MainUrgencesNOnatalesPDiatriquesRespn

  }

}
</script>

<style scoped>

</style>
