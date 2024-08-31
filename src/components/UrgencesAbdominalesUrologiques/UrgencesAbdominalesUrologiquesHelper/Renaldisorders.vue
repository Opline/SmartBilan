<template>
  <v-app>
    <v-container>
      <v-form ref="form" @submit.prevent="submitForm">
        <!-- Section pour les questions -->
        <v-card class="mb-5">
          <v-card-title class="headline grey lighten-2">
            Questionnaire de Santé
          </v-card-title>
          <v-card-text>
            <v-row>
              <!-- Question sur la douleur à l'aine -->
              <v-col cols="12">
                <v-radio-group v-model="form.groinPain" row>
                  <v-radio label="Avez-vous une douleur à l’aine?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <!-- Question sur l'insuffisance rénale -->
              <v-col cols="12">
                <v-radio-group v-model="form.kidneyFailure" row>
                  <v-radio label="Faites-vous de l’insuffisance rénale?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <!-- Question sur les traitements de dialyse -->
              <v-col cols="12">
                <v-radio-group v-model="form.dialysisTreatment" row>
                  <v-radio label="Recevez-vous des traitements de dialyse?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <!-- Sous-questions sur le type de dialyse, affichées uniquement si nécessaire -->
              <v-col cols="12" v-if="form.dialysisTreatment === 'oui'">
                <v-select
                  label="Quel type de dialyse?"
                  v-model="form.dialysisType"
                  :items="['Hémo', 'Péritonéale']"
                ></v-select>
              </v-col>

              <!-- Question sur la fréquence de dialyse -->
              <v-col cols="12" v-if="form.dialysisTreatment === 'oui'">
                <v-text-field
                  label="Combien de fois par semaine?"
                  v-model="form.dialysisFrequency"
                  type="number"
                  min="0"
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
  name:'Renaldisorders' ,
  data() {
    return {
      form: {
        groinPain: '',
        kidneyFailure: '',
        dialysisTreatment: '',
        dialysisType: '',
        dialysisFrequency: ''
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

      // Ajoute les informations sur la douleur à l'aine si définies
      if (this.form.groinPain) {
        report += `Douleur à l'aine : ${this.form.groinPain === 'oui' ? 'Oui' : 'Non'}\n`;
      }

      // Ajoute les informations sur l'insuffisance rénale si définies
      if (this.form.kidneyFailure) {
        report += `Insuffisance rénale : ${this.form.kidneyFailure === 'oui' ? 'Oui' : 'Non'}\n`;
      }

      // Ajoute les informations sur le traitement de dialyse si définies
      if (this.form.dialysisTreatment) {
        report += `Traitement de dialyse : ${this.form.dialysisTreatment === 'oui' ? 'Oui' : 'Non'}\n`;

        // Si la réponse est "oui", ajoute le type de dialyse et la fréquence si définies
        if (this.form.dialysisTreatment === 'oui') {
          if (this.form.dialysisType) {
            report += `Type de dialyse : ${this.form.dialysisType}\n`;
          }
          if (this.form.dialysisFrequency) {
            report += `Fréquence de dialyse : ${this.form.dialysisFrequency} fois par semaine\n`;
          }
        }
      }

      // Émet le compte rendu au parent
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
