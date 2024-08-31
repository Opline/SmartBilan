<template>
  <div>
    <div class="text-subtitle-2 mb-2">Urgences gastrointestinales</div>
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
import GastrointestinaleGeneral from "@/components/UrgencesGastrointestinales/UrgencesGastrointestinalesHelper/GastrointestinaleGeneral.vue";
export default {
  name: 'mainUrgencesGastrointestinales',
  data() {
    return {
      forms: [
        {title: 'Questions relatives à des urgences\n' +
            'abdominales spécifiques', component: 'GastrointestinaleGeneral'}
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
  components: { GastrointestinaleGeneral

  }

}
</script>

<style scoped>

</style>
