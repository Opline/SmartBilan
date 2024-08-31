<template>
  <v-app>
    <v-container>
      <v-form ref="form" @submit.prevent="submitForm">
        <!-- Section pour les questions médicales -->
        <v-card class="mb-5">
          <v-card-title class="headline grey lighten-2">
            Questions Médicales
          </v-card-title>
          <v-card-text>
            <!-- Question sur les maladies sexuellement transmissibles -->
            <v-row>
              <v-col cols="12">
                <p>Avez-vous une maladie transmise sexuellement ?</p>
                <v-radio-group v-model="form.hasSTD" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12" v-if="form.hasSTD === 'oui'">
                <v-text-field
                  label="Laquelle ?"
                  v-model="form.whichSTD"
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
  name: 'MST',
  data() {
    return {
      form: {
        hasSTD: '',
        whichSTD: ''
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
    submitForm() {
      this.isSubmitDisabled = true;
      let report = '';

      if (this.form.hasSTD) {
        report += `Avez-vous une maladie transmise sexuellement ? ${this.form.hasSTD === 'oui' ? 'Oui' : 'Non'}\n`;
      }

      if (this.form.hasSTD === 'oui' && this.form.whichSTD) {
        report += `Laquelle : ${this.form.whichSTD}\n`;
      }

      // Emit the report to the parent
      this.$emit('submit-form', report.trim());
    }
  }
};
</script>

<style>
.mb-5 {
  margin-bottom: 20px;
}
</style>
