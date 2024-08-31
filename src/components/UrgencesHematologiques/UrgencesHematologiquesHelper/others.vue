<template>
  <v-app>
    <v-container>
      <v-form ref="form" @submit.prevent="submitForm">
        <!-- Section pour les questions de santé -->
        <v-card class="mb-5">
          <v-card-title class="headline grey lighten-2">
            Questions de Santé
          </v-card-title>
          <v-card-text>
            <v-row>
              <!-- Question: Êtes-vous hémophile? -->
              <v-col cols="12">
                <p>Êtes-vous hémophile?</p>
                <v-radio-group v-model="form.hemophilia" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <!-- Question: Avez-vous des troubles de coagulation? -->
              <v-col cols="12">
                <p>Avez-vous des troubles de coagulation?</p>
                <v-radio-group v-model="form.coagulationDisorders" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <!-- Question: Prenez-vous des anticoagulants? -->
              <v-col cols="12">
                <p>Prenez-vous des anticoagulants?</p>
                <v-radio-group v-model="form.anticoagulants" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
                <v-text-field
                  v-if="form.anticoagulants === 'oui'"
                  label="Lesquels?"
                  v-model="form.anticoagulantType"
                ></v-text-field>
              </v-col>

              <!-- Question: Avez-vous déjà eu des transfusions sanguines? -->
              <v-col cols="12">
                <p>Avez-vous déjà eu des transfusions sanguines?</p>
                <v-radio-group v-model="form.bloodTransfusions" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
                <v-text-field
                  v-if="form.bloodTransfusions === 'oui'"
                  label="À quand remonte votre dernière transfusion sanguine?"
                  v-model="form.lastTransfusionDate"
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
  name: 'others',
  data() {
    return {
      form: {
        hemophilia: '',
        coagulationDisorders: '',
        anticoagulants: '',
        anticoagulantType: '',
        bloodTransfusions: '',
        lastTransfusionDate: '',
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
    formatHealthQuestions() {
      this.isSubmitDisabled = true;
      const responses = [];

      if (this.form.hemophilia) {
        responses.push(`- Hémophile : ${this.form.hemophilia}`);
      }

      if (this.form.coagulationDisorders) {
        responses.push(`- Troubles de coagulation : ${this.form.coagulationDisorders}`);
      }

      if (this.form.anticoagulants) {
        responses.push(`- Prise d'anticoagulants : ${this.form.anticoagulants}`);
        if (this.form.anticoagulants === 'oui' && this.form.anticoagulantType) {
          responses.push(`  - Type d'anticoagulant : ${this.form.anticoagulantType}`);
        }
      }

      if (this.form.bloodTransfusions) {
        responses.push(`- Transfusions sanguines : ${this.form.bloodTransfusions}`);
        if (this.form.bloodTransfusions === 'oui' && this.form.lastTransfusionDate) {
          responses.push(`  - Date de la dernière transfusion : ${this.form.lastTransfusionDate}`);
        }
      }

      return responses.join('\n');
    },
    submitForm() {
      const result = this.formatHealthQuestions();
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
