<template>
  <v-app>
    <v-container>
      <v-form ref="form" @submit.prevent="submitForm">
        <!-- Section pour le patient concernant le pneumothorax spontané -->
        <v-card class="mb-5">
          <v-card-title class="headline grey lighten-2">
            Pneumothorax Spontané - Questions au Patient/à la Patiente
          </v-card-title>
          <v-card-text>
            <!-- Questions pour le pneumothorax spontané -->
            <v-row>
              <v-col cols="12">
                <v-radio-group v-model="form.patientCoughSneeze" row>
                  <p>Avez-vous toussé ou éternué avec force?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.patientLiftHeavy" row>
                  <p>Avez-vous soulevé une charge lourde en retenant votre souffle?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.patientDeepPain" row>
                  <p>Avez-vous une douleur à l’inspiration profonde?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.patientPreviousPneumothorax" row>
                  <p>Avez-vous déjà fait un pneumothorax?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
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
  name: 'PneumothoraxForm',
  data() {
    return {
      form: {
        patientCoughSneeze: '',
        patientLiftHeavy: '',
        patientDeepPain: '',
        patientPreviousPneumothorax: ''
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
    formatPneumothoraxSection() {
      return `
      Pneumothorax Spontané - Questions au Patient/à la Patiente:
      - Tousse ou éternue avec force: ${this.form.patientCoughSneeze || 'Non renseigné'}
      - A soulevé une charge lourde en retenant son souffle: ${this.form.patientLiftHeavy || 'Non renseigné'}
      - Douleur à l’inspiration profonde: ${this.form.patientDeepPain || 'Non renseigné'}
      - A déjà fait un pneumothorax: ${this.form.patientPreviousPneumothorax || 'Non renseigné'}
      `;
    },
    submitForm() {
      this.isSubmitDisabled = true;
      const result = this.formatPneumothoraxSection();
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
