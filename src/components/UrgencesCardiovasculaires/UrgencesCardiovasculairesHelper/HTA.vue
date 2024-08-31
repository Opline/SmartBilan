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
            <!-- Questions sur la tension artérielle -->
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Quelle est votre tension artérielle habituelle ?"
                  v-model="form.usualBloodPressure"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <p>Votre tension artérielle est haute.</p>
              </v-col>
              <v-col cols="12">
                <p>Faites-vous de l’hypertension ?</p>
                <v-radio-group v-model="form.hasHypertension" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <p>Avez-vous pris vos médicaments ?</p>
                <v-radio-group v-model="form.tookMedication" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>

            <!-- Symptômes du patient -->
            <v-row>
              <v-col cols="12">
                <p>Avez-vous :</p>
                <v-checkbox
                  label="Mal à la tête ?"
                  v-model="form.symptoms.headache"
                ></v-checkbox>
                <v-checkbox
                  label="Des étourdissements ?"
                  v-model="form.symptoms.dizziness"
                ></v-checkbox>
                <v-checkbox
                  label="Des troubles de vision ?"
                  v-model="form.symptoms.visionProblems"
                ></v-checkbox>
                <v-checkbox
                  label="Des bouffées de chaleur ?"
                  v-model="form.symptoms.hotFlashes"
                ></v-checkbox>
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
  name: 'HTA',
  data() {
    return {
      isSubmitDisabled: false, // Nouveau état pour le bouton de soumission
      form: {
        usualBloodPressure: '',
        hasHypertension: '',
        tookMedication: '',
        symptoms: {
          headache: false,
          dizziness: false,
          visionProblems: false,
          hotFlashes: false,
        },
      },
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
      let result = 'Compte rendu :\n';

      if (this.form.usualBloodPressure) {
        result += `- Tension artérielle habituelle : ${this.form.usualBloodPressure}\n`;
      }

      if (this.form.hasHypertension) {
        result += `- Hypertension : ${this.form.hasHypertension === 'oui' ? 'Oui' : 'Non'}\n`;
      }

      if (this.form.tookMedication) {
        result += `- Médicaments pris : ${this.form.tookMedication === 'oui' ? 'Oui' : 'Non'}\n`;
      }

      const symptoms = [];
      if (this.form.symptoms.headache) symptoms.push('Mal à la tête');
      if (this.form.symptoms.dizziness) symptoms.push('Étourdissements');
      if (this.form.symptoms.visionProblems) symptoms.push('Troubles de vision');
      if (this.form.symptoms.hotFlashes) symptoms.push('Bouffées de chaleur');

      if (symptoms.length > 0) {
        result += `- Symptômes : ${symptoms.join(', ')}\n`;
      }

      // Émettre l'événement 'submit-form' avec le résultat du compte rendu
      this.$emit('submit-form', result.trim());
    },
  },
};
</script>

<style>
.mb-5 {
  margin-bottom: 20px;
}
</style>
