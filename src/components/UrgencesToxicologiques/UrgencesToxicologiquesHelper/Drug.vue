<template>
  <v-app>
    <v-container>
      <v-form ref="form" @submit.prevent="submitForm">
        <!-- Section pour les questions sur la drogue -->
        <v-card class="mb-5">
          <v-card-title class="headline grey lighten-2">
            Questions sur la Drogue
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <p>Avez-vous acheté votre drogue auprès de la même personne que d’habitude?</p>
                <v-radio-group v-model="form.boughtFromSamePerson" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <p>Avez-vous pris la même dose que d’habitude?</p>
                <v-radio-group v-model="form.sameDoseAsUsual" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <p>Est-ce la première fois que vous prenez cette drogue?</p>
                <v-radio-group v-model="form.firstTimeTakingDrug" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="S’il vous plaît, montrez-moi les flacons de pilules vides."
                  v-model="form.emptyPillBottles"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Quand avez-vous fait remplir ces ordonnances la dernière fois?"
                  v-model="form.lastPrescriptionFill"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <p>Suivez-vous un programme à base de méthadone?</p>
                <v-radio-group v-model="form.onMethadoneProgram" row>
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
  name: 'Drug',
  data() {
    return {
      form: {
        boughtFromSamePerson: '',
        sameDoseAsUsual: '',
        firstTimeTakingDrug: '',
        emptyPillBottles: '',
        lastPrescriptionFill: '',
        onMethadoneProgram: ''
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
    formatDrugSection() {
      let result = '';

      if (this.form.boughtFromSamePerson) {
        result += `- Acheté auprès de la même personne que d'habitude : ${this.form.boughtFromSamePerson}\n`;
      }
      if (this.form.sameDoseAsUsual) {
        result += `- Prise de la même dose que d'habitude : ${this.form.sameDoseAsUsual}\n`;
      }
      if (this.form.firstTimeTakingDrug) {
        result += `- Première fois prenant cette drogue : ${this.form.firstTimeTakingDrug}\n`;
      }
      if (this.form.emptyPillBottles) {
        result += `- Flacons de pilules vides montrés : ${this.form.emptyPillBottles}\n`;
      }
      if (this.form.lastPrescriptionFill) {
        result += `- Dernier remplissage d'ordonnance : ${this.form.lastPrescriptionFill}\n`;
      }
      if (this.form.onMethadoneProgram) {
        result += `- Programme à base de méthadone suivi : ${this.form.onMethadoneProgram}\n`;
      }

      return result;
    },
    submitForm() {
      this.isSubmitDisabled = true;
      const result = this.formatDrugSection().trim();

      // Émettre le résultat formaté au parent
      this.$emit('submit-form', result);
    }
  }
};
</script>

<style>
.mb-5 {
  margin-bottom: 20px;
}
</style>
