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
            <!-- Questions sur l'anémie -->
            <v-row>
              <v-col cols="12">
                <v-radio-group v-model="form.hasAnemia" row>
                  <p>Faites-vous de l’anémie?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12" v-if="form.hasAnemia === 'oui'">
                <v-text-field
                  label="Quel type?"
                  v-model="form.anemiaType"
                ></v-text-field>
              </v-col>

              <!-- Autres questions médicales -->
              <v-col cols="12">
                <v-radio-group v-model="form.jointPain" row>
                  <p>Avez-vous de la douleur aux articulations?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.bleeding" row>
                  <p>Saignez-vous quelque part?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.ironIssue" row>
                  <p>Avez-vous un problème avec le taux de fer dans votre sang?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.takingIronSupplements" row>
                  <p>Prenez-vous des suppléments de fer?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.anemiaTreatment" row>
                  <p>Êtes-vous présentement traité/traitée pour de l’anémie?</p>
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
  name: 'Anemia',
  data() {
    return {
      form: {
        hasAnemia: '',
        anemiaType: '',
        jointPain: '',
        bleeding: '',
        ironIssue: '',
        takingIronSupplements: '',
        anemiaTreatment: ''
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
    formatMedicalQuestionsSection() {
      let report = 'Questions Médicales:';

      if (this.form.hasAnemia === 'oui') {
        report += `\n- Anémie : Oui`;
        if (this.form.anemiaType) {
          report += `\n  - Type d'anémie : ${this.form.anemiaType}`;
        }
      } else if (this.form.hasAnemia === 'non') {
        report += `\n- Anémie : Non`;
      }

      if (this.form.jointPain === 'oui') {
        report += `\n- Douleur aux articulations : Oui`;
      } else if (this.form.jointPain === 'non') {
        report += `\n- Douleur aux articulations : Non`;
      }

      if (this.form.bleeding === 'oui') {
        report += `\n- Saignement : Oui`;
      } else if (this.form.bleeding === 'non') {
        report += `\n- Saignement : Non`;
      }

      if (this.form.ironIssue === 'oui') {
        report += `\n- Problème avec le taux de fer : Oui`;
      } else if (this.form.ironIssue === 'non') {
        report += `\n- Problème avec le taux de fer : Non`;
      }

      if (this.form.takingIronSupplements === 'oui') {
        report += `\n- Prend des suppléments de fer : Oui`;
      } else if (this.form.takingIronSupplements === 'non') {
        report += `\n- Prend des suppléments de fer : Non`;
      }

      if (this.form.anemiaTreatment === 'oui') {
        report += `\n- Traité pour l'anémie : Oui`;
      } else if (this.form.anemiaTreatment === 'non') {
        report += `\n- Traité pour l'anémie : Non`;
      }

      return report;
    },
    submitForm() {
      this.isSubmitDisabled = true;
      const medicalReport = this.formatMedicalQuestionsSection().trim();

      // Émettre l'événement avec le compte rendu vers le parent
      this.$emit('submit-form', medicalReport);
    }
  }
};
</script>

<style>
.mb-5 {
  margin-bottom: 20px;
}
</style>
