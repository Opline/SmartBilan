<template>
    <v-container>
      <v-form ref="form" @submit.prevent="submitForm">
        <!-- Section pour l'embolie pulmonaire -->
        <v-card class="mb-5">
          <v-card-title class="headline grey lighten-2">
            Embolie pulmonaire - Questions au Patient/à la Patiente
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <v-radio-group
                  v-model="form.pePainBreathing"
                  row
                  label="Ressentez-vous de la douleur quand vous prenez une grande respiration?"
                >
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-radio-group
                  v-model="form.pePalpitations"
                  row
                  label="Avez-vous des palpitations?"
                >
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-radio-group
                  v-model="form.peAtrialFibrillation"
                  row
                  label="Avez-vous de la fibrillation auriculaire?"
                >
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-radio-group
                  v-model="form.peAnticoagulants"
                  row
                  label="Prenez-vous des anticoagulants pour diluer votre sang?"
                >
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <!-- Section pour la thrombophlébite -->
        <v-card class="mb-5">
          <v-card-title class="headline grey lighten-2">
            Thrombophlébite - Questions au Patient/à la Patiente
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <v-radio-group
                  v-model="form.tpBedridden"
                  row
                  label="Avez-vous récemment été alité/alitée?"
                >
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12" v-if="form.tpBedridden === 'oui'">
                <v-text-field
                  label="Si oui, pour combien de temps?"
                  v-model="form.tpBedriddenDuration"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-radio-group
                  v-model="form.tpLegPain"
                  row
                  label="Avez-vous eu des douleurs aux jambes récemment?"
                >
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-radio-group
                  v-model="form.tpSurgery"
                  row
                  label="Avez-vous subi une chirurgie dernièrement?"
                >
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-radio-group
                  v-model="form.tpSittingLong"
                  row
                  label="Êtes-vous resté assis/restée assise longtemps?"
                >
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-radio-group
                  v-model="form.tpRecentFlight"
                  row
                  label="Avez-vous pris l’avion récemment?"
                >
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <!-- Bouton de soumission -->
        <v-btn type="submit" color="primary"  :disabled="isSubmitDisabled">Soumettre</v-btn>
      </v-form>
    </v-container>
</template>

<script>
export default {
  name: 'PulmonaryAndThrombosisAssessment',
  data() {
    return {
      form: {
        // Embolie pulmonaire
        pePainBreathing: '',
        pePalpitations: '',
        peAtrialFibrillation: '',
        peAnticoagulants: '',
        // Thrombophlébite
        tpBedridden: '',
        tpBedriddenDuration: '',
        tpLegPain: '',
        tpSurgery: '',
        tpSittingLong: '',
        tpRecentFlight: ''
      },
      isSubmitDisabled: false // Nouveau état pour le bouton de soumission
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
    formatPulmonaryEmbolismSection() {
      return `
        Embolie pulmonaire - Questions au Patient/à la Patiente:
        - Douleur en respirant profondément : ${this.form.pePainBreathing || 'Non renseigné'}
        - Palpitations : ${this.form.pePalpitations || 'Non renseigné'}
        - Fibrillation auriculaire : ${this.form.peAtrialFibrillation || 'Non renseigné'}
        - Anticoagulants : ${this.form.peAnticoagulants || 'Non renseigné'}
      `;
    },
    formatThrombophlebitisSection() {
      return `
        Thrombophlébite - Questions au Patient/à la Patiente:
        - Alité récemment : ${this.form.tpBedridden || 'Non renseigné'}
        - Durée alité : ${this.form.tpBedridden === 'oui' ? this.form.tpBedriddenDuration : 'Non applicable'}
        - Douleurs aux jambes récemment : ${this.form.tpLegPain || 'Non renseigné'}
        - Chirurgie récente : ${this.form.tpSurgery || 'Non renseigné'}
        - Assis longtemps : ${this.form.tpSittingLong || 'Non renseigné'}
        - Vol récent : ${this.form.tpRecentFlight || 'Non renseigné'}
      `;
    },
    submitForm() {
      this.isSubmitDisabled = true;
      const result = `
        ${this.formatPulmonaryEmbolismSection()}
        ${this.formatThrombophlebitisSection()}
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
