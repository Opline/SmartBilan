<template>
  <div>
    <div class="text-subtitle-2 mb-2">Urgences toxicologiques</div>
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
import Drug from "@/components/UrgencesToxicologiques/UrgencesToxicologiquesHelper/Drug.vue";
import Alcohol from "@/components/UrgencesToxicologiques/UrgencesToxicologiquesHelper/Alcohol.vue";
import BitesStings from "@/components/UrgencesToxicologiques/UrgencesToxicologiquesHelper/BitesStings.vue";
import generalToxico from "@/components/UrgencesToxicologiques/UrgencesToxicologiquesHelper/generalToxico.vue";
import Poisoning from "@/components/UrgencesToxicologiques/UrgencesToxicologiquesHelper/Poisoning.vue";
export default {
  name: 'MainUrgencesToxicologiques',
  data() {
    return {
      forms: [
        {title: 'Empoisonnement', component: 'Poisoning'},
        {title: 'Morsures et piqûres', component: 'BitesStings'},
        {title: 'Généralités (drogue, alcool)', component: 'generalToxico'},
        {title: 'Abus d’alcool', component: 'Alcohol'},
        {title: 'Abus de drogues', component: 'Drug'},
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
  components: { Poisoning, BitesStings, Alcohol, generalToxico, Drug

  }

}
</script>

<style scoped>

</style>
