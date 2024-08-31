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
import diabete from "@/components/UrgencesEndocriniennes/UrgencesEndocriniennesHelper/diabete.vue";
import other from "@/components/UrgencesEndocriniennes/UrgencesEndocriniennesHelper/other.vue";
export default {
  name: 'MainUrgencesEndocriniennes',
  data() {
    return {
      forms: [
        {title: 'Troubles du pancréas : diabète', component: 'diabete'},
        {title: 'Autres troubles glandulaires', component: 'other'}

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
  components: { diabete, other

  }

}
</script>

<style scoped>

</style>
