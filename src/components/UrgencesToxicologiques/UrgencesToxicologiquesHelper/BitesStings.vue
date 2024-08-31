<template>
  <v-app>
    <v-container>
      <v-form ref="form" @submit.prevent="submitForm">
        <!-- Section pour le patient -->
        <v-card class="mb-5">
          <v-card-title class="headline grey lighten-2">
            Questions au Patient
          </v-card-title>
          <v-card-text>
            <!-- Questions pour le patient -->
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Qu’est-ce qui vous a piqué/piquée ou mordu/mordue?"
                  v-model="form.patientBite"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-radio-group v-model="form.patientAllergic" row>
                  <p>Êtes-vous allergique aux piqûres d’un insecte?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Pouvez-vous nous décrire l’insecte/l’animal?"
                  v-model="form.patientInsectDescription"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-radio-group v-model="form.patientCleanedWound" row>
                  <p>Avez-vous nettoyé la plaie avant notre arrivée?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-radio-group v-model="form.patientRemovedStinger" row>
                  <p>Avez-vous retiré un dard?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-radio-group v-model="form.patientSpecificCare" row>
                  <p>Avez-vous reçu des soins spécifiques avant notre arrivée?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Quand avez-vous été piqué/piquée ou mordu/mordue?"
                  v-model="form.patientBiteTime"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-radio-group v-model="form.patientAnimalNearby" row>
                  <p>Est-ce que l’animal est encore proche?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-radio-group v-model="form.patientNoticedDiscoloration" row>
                  <p>Avez-vous remarqué une décoloration autour de la blessure?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12" v-if="form.patientNoticedDiscoloration === 'oui'">
                <v-radio-group v-model="form.patientDiscolorationSpread" row>
                  <p>a) Est-ce que la surface atteinte s’est élargie?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-radio-group v-model="form.patientFever" row>
                  <p>Avez-vous fait de la fièvre?</p>
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
  name: 'BitesStings',
  data() {
    return {
      form: {
        patientBite: '',
        patientAllergic: '',
        patientInsectDescription: '',
        patientCleanedWound: '',
        patientRemovedStinger: '',
        patientSpecificCare: '',
        patientBiteTime: '',
        patientAnimalNearby: '',
        patientNoticedDiscoloration: '',
        patientDiscolorationSpread: '',
        patientFever: ''
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
    formatPatientSection() {
      const details = [];

      if (this.form.patientBite) {
        details.push(`- Piqure ou morsure : ${this.form.patientBite}`);
      }
      if (this.form.patientAllergic) {
        details.push(`- Allergique aux piqûres d'insectes : ${this.form.patientAllergic === 'oui' ? 'Oui' : 'Non'}`);
      }
      if (this.form.patientInsectDescription) {
        details.push(`- Description de l'insecte/animal : ${this.form.patientInsectDescription}`);
      }
      if (this.form.patientCleanedWound) {
        details.push(`- Plaie nettoyée avant arrivée : ${this.form.patientCleanedWound === 'oui' ? 'Oui' : 'Non'}`);
      }
      if (this.form.patientRemovedStinger) {
        details.push(`- Dard retiré : ${this.form.patientRemovedStinger === 'oui' ? 'Oui' : 'Non'}`);
      }
      if (this.form.patientSpecificCare) {
        details.push(`- Soins spécifiques avant arrivée : ${this.form.patientSpecificCare === 'oui' ? 'Oui' : 'Non'}`);
      }
      if (this.form.patientBiteTime) {
        details.push(`- Heure de la piqûre/morsure : ${this.form.patientBiteTime}`);
      }
      if (this.form.patientAnimalNearby) {
        details.push(`- Animal encore proche : ${this.form.patientAnimalNearby === 'oui' ? 'Oui' : 'Non'}`);
      }
      if (this.form.patientNoticedDiscoloration) {
        details.push(`- Décoloration autour de la blessure : ${this.form.patientNoticedDiscoloration === 'oui' ? 'Oui' : 'Non'}`);
      }
      if (this.form.patientNoticedDiscoloration === 'oui' && this.form.patientDiscolorationSpread) {
        details.push(`- Surface atteinte élargie : ${this.form.patientDiscolorationSpread === 'oui' ? 'Oui' : 'Non'}`);
      }
      if (this.form.patientFever) {
        details.push(`- Fièvre : ${this.form.patientFever === 'oui' ? 'Oui' : 'Non'}`);
      }

      return details.length ? `Questions au Patient:\n${details.join('\n')}` : '';
    },
    submitForm() {
      this.isSubmitDisabled = true;
      const patientReport = this.formatPatientSection();

      const result = patientReport.trim();

      if (result) {
        this.$emit('submit-form', result);
      }
    }
  }
};
</script>

<style>
.mb-5 {
  margin-bottom: 20px;
}
</style>
