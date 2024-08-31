<template>
  <v-app>
    <v-container>
      <v-form ref="form" @submit.prevent="submitForm">
        <!-- Section pour le patient - Troubles cardiaques -->
        <v-card class="mb-5">
          <v-card-title class="headline grey lighten-2">
            Questions au Patient/à la Patiente
          </v-card-title>
          <v-card-text>
            <!-- Questions pour le patient -->
            <v-row>
              <v-col cols="12">
                <v-radio-group
                  v-model="form.hasCardiacIssues"
                  label="Avez-vous déjà eu un trouble du rythme cardiaque ?"
                  row
                >
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-radio-group
                  v-model="form.hasPacemaker"
                  label="Avez-vous un pacemaker ?"
                  row
                >
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-radio-group
                  v-model="form.hasDefibrillator"
                  label="Avez-vous un défibrillateur implantable ?"
                  row
                >
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12" v-if="form.hasDefibrillator === 'oui'">
                <v-radio-group
                  v-model="form.receivedShock"
                  label="Avez-vous reçu un choc ?"
                  row
                >
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
  name: 'Arythmy',
  data() {
    return {
      form: {
        hasCardiacIssues: '',
        hasPacemaker: '',
        hasDefibrillator: '',
        receivedShock: ''
      },
      isSubmitDisabled: false
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
    formatPatientCardiacSection() {
      let report = "Questions au Patient/à la Patiente:\n";

      // Ajout des réponses au rapport uniquement si elles sont renseignées
      if (this.form.hasCardiacIssues) {
        report += `- Trouble du rythme cardiaque : ${this.form.hasCardiacIssues}\n`;
      }
      if (this.form.hasPacemaker) {
        report += `- Pacemaker : ${this.form.hasPacemaker}\n`;
      }
      if (this.form.hasDefibrillator) {
        report += `- Défibrillateur implantable : ${this.form.hasDefibrillator}\n`;
        if (this.form.hasDefibrillator === 'oui' && this.form.receivedShock) {
          report += `- Reçu un choc : ${this.form.receivedShock}\n`;
        }
      }

      return report.trim();  // Suppression des espaces inutiles
    },
    submitForm() {
      this.isSubmitDisabled = true;
      const report = this.formatPatientCardiacSection();
      if (report !== "Questions au Patient/à la Patiente:") { // Vérifier que le rapport n'est pas vide
        this.$emit('submit-form', report);
      }
    }
  }
};
</script>
