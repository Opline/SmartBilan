<template>
  <div>
    <div class="text-subtitle-2 mb-2">Troubles comportementaux et psychiatriques</div>
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
import GeneralPsy
  from "@/components/BehaviouralPsychiatricDisorders/BehaviouralPsychiatricDisordersHelper/GeneralPsy.vue";
import Suicide from "@/components/BehaviouralPsychiatricDisorders/BehaviouralPsychiatricDisordersHelper/Suicide.vue";
export default {
  name: 'MainBehaviouralPsychiatric',
  data() {
    return {
      forms: [
        {title: 'Évaluation générale ', component: 'GeneralPsy'},
        {title: 'Suicide', component: 'Suicide'}
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
  components: { GeneralPsy, Suicide

  }

}
</script>

<style scoped>

</style>
