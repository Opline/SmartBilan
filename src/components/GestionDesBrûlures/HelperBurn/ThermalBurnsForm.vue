<template>
  <v-app>
    <v-container>
      <v-form ref="form" @submit.prevent="submitForm">
        <!-- Section pour le patient -->
        <v-card class="mb-5">
          <v-card-title class="headline grey lighten-2">
            Questions au Patient/À la Patiente
          </v-card-title>
          <v-card-text>
            <v-row>
              <!-- Question sur la fumée ou l'air chaud -->
              <v-col cols="12">
                <v-radio-group
                  v-model="form.patientInhaledSmoke"
                  row
                  :rules="[v => !!v || 'Veuillez sélectionner une option']"
                  label="Avez-vous respiré de la fumée ou de l’air chaud?"
                >
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <!-- Questions sur les brûlures -->
              <v-col cols="12">
                <v-checkbox
                  label="Avez-vous été brûlé/brûlée par le feu?"
                  v-model="form.burnedBy.fire"
                ></v-checkbox>
                <v-checkbox
                  label="Avez-vous été brûlé/brûlée par l’air chaud?"
                  v-model="form.burnedBy.hotAir"
                ></v-checkbox>
                <v-checkbox
                  label="Avez-vous été brûlé/brûlée par la vapeur?"
                  v-model="form.burnedBy.steam"
                ></v-checkbox>
                <v-checkbox
                  label="Avez-vous été brûlé/brûlée par du liquide?"
                  v-model="form.burnedBy.liquid"
                ></v-checkbox>
              </v-col>

              <!-- Question sur ce qui brûlait -->
              <v-col cols="12">
                <v-text-field
                  label="Qu’est-ce qui brûlait?"
                  v-model="form.burningSource"
                  :rules="[v => !!v || 'Ce champ est requis']"
                ></v-text-field>
              </v-col>

              <!-- Question sur la durée de contact avec la source de chaleur -->
              <v-col cols="12">
                <v-text-field
                  label="Combien de temps êtes-vous resté/restée en contact avec la source de chaleur?"
                  v-model="form.contactDuration"
                  :rules="[v => !!v || 'Ce champ est requis']"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <!-- Bouton de soumission -->
        <v-btn type="submit" color="primary" :disabled="isSubmitDisabled">Soumettre</v-btn>
      </v-form>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'ThermalBurnsForm',
  data() {
    return {
      form: {
        patientInhaledSmoke: '',
        burnedBy: {
          fire: false,
          hotAir: false,
          steam: false,
          liquid: false,
        },
        burningSource: '',
        contactDuration: '',
        isSubmitDisabled: false
      }
    };
  },
  watch: {
    form: {
      deep: true,
      handler() {
        this.isSubmitDisabled = false; // Réactive le bouton en cas de modification du formulaire
      }
    }
  },
  methods: {
    submitForm() {
      this.isSubmitDisabled = true;
      const result = `
      Questions au Patient/À la Patiente:
      - A respiré de la fumée ou de l'air chaud : ${this.form.patientInhaledSmoke || 'Non renseigné'}
      - Brûlé(e) par :
        - Feu : ${this.form.burnedBy.fire ? 'Oui' : 'Non'}
        - Air chaud : ${this.form.burnedBy.hotAir ? 'Oui' : 'Non'}
        - Vapeur : ${this.form.burnedBy.steam ? 'Oui' : 'Non'}
        - Liquide : ${this.form.burnedBy.liquid ? 'Oui' : 'Non'}
      - Ce qui brûlait : ${this.form.burningSource || 'Non renseigné'}
      - Durée de contact avec la source de chaleur : ${this.form.contactDuration || 'Non renseigné'}
      `;
      this.$emit('submit-form', result.trim());
    }
  }
};
</script>

<style>
.mb-5 {
  margin-bottom: 20px;
}
</style>
