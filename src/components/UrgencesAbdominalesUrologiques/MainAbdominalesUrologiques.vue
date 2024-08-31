<template>
  <div>
    <div class="text-subtitle-2 mb-2">Urgences abdominales et urologiques</div>
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
import dlAbdo from "@/components/UrgencesAbdominalesUrologiques/UrgencesAbdominalesUrologiquesHelper/dlAbdo.vue";
import uro from "@/components/UrgencesAbdominalesUrologiques/UrgencesAbdominalesUrologiquesHelper/Uro.vue";
import bloodvigina
  from "@/components/UrgencesAbdominalesUrologiques/UrgencesAbdominalesUrologiquesHelper/Bloodvigina.vue";
import renaldisorders
  from "@/components/UrgencesAbdominalesUrologiques/UrgencesAbdominalesUrologiquesHelper/Renaldisorders.vue";
import MST from "@/components/UrgencesAbdominalesUrologiques/UrgencesAbdominalesUrologiquesHelper/MST.vue";
export default {
  name: 'MainAbdominalesUrologiques',
  data() {
    return {
      forms: [
        {title: 'Douleurs abdominales ', component: 'dlAbdo'},
        {title: 'Troubles urologiques et génitourinaires', component: 'uro'},
        {title: 'Saignements vaginaux', component: 'bloodvigina'},
        {title: 'Troubles rénaux', component: 'renaldisorders'},
        {title: 'MST', component: 'MST'},
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
  components: { dlAbdo, uro, bloodvigina, renaldisorders, MST

  }

}
</script>

<style scoped>

</style>
