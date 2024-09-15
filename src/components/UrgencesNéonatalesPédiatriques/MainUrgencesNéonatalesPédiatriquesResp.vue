<template>
  <div>
    <div class="text-subtitle-2 mb-2">Problèmes respiratoires propres aux nourrissons et aux jeunes enfants</div>
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
import Bronchiollite from "@/components/UrgencesNéonatalesPédiatriques/UrgencesNéonatalesPédiatriqueHelper/Bronchiollite.vue";
export default {
  name: "MainUrgencesNéonatalesPédiatriquesResp",
  data() {
    return {
      forms: [
        {title: 'Bronchiolite', component: 'Bronchiollite'}
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
  components: { Bronchiollite

  }

}
</script>

<style scoped>

</style>
