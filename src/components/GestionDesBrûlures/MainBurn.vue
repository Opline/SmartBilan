<template>
  <div>
    <div class="text-subtitle-2 mb-2">Gestion des brûlures</div>
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
    <v-alert type="info" dismissible>
      <h3>Conduite a tenir et comment les dires</h3>
      <p>Je vais verser de l’eau sur les surfaces brûlées pour arrêter le processus de brûlure.</p>
      <p>J’ai besoin de retirer vos vêtements qui ne sont pas collés à votre peau.</p>
      <p>Je vais vous envelopper dans ce drap.</p>
      <p>Avez-vous assez chaud? (Si non, Aimeriez-vous avoir une couverture?)</p>
      <p>Je vais couvrir les surfaces brûlées avec un pansement.</p>
      <p>Je vais rincer vos yeux avec de l’eau pendant (nombre) minutes.</p>
      <p>Je dois couvrir vos yeux avec un pansement.</p>
      <p>Je vais vous administrer de l’oxygène à l’aide de ce masque.</p>
    </v-alert>

  </div>
</template>

<script>
import FormulaireBrulure from "@/components/GestionDesBrûlures/HelperBurn/FormulaireBrulure.vue";
import ChemicalBurnsForm from "@/components/GestionDesBrûlures/HelperBurn/ChemicalBurnsForm.vue";
import ElectricalBurnsForm from "@/components/GestionDesBrûlures/HelperBurn/ElectricalBurnsForm.vue";
import ThermalBurnsForm from "@/components/GestionDesBrûlures/HelperBurn/ThermalBurnsForm.vue";

export default {
  name: 'MainBurn',
  data() {
    return {
      forms: [
        {title: 'Questions générales', component: 'FormulaireBrulure'},
        {title: 'Brûlures thermique', component: 'ThermalBurnsForm'},
        {title: 'Brûlures chimique', component: 'ChemicalBurnsForm'},
        {title: 'Brûlures électriques', component: 'ElectricalBurnsForm'}
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
  components: {FormulaireBrulure, ElectricalBurnsForm, ChemicalBurnsForm, ThermalBurnsForm}
}

</script>


<style scoped>

</style>
