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
                  label="Avez-vous de la difficulté à respirer ou à avaler?"
                  v-model="form.difficultyBreathing"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-radio-group
                  label="Avez-vous la même voix que d’habitude?"
                  v-model="form.sameVoice"
                  row
                >
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-radio-group
                  label="Ressentez-vous une oppression ou des douleurs à la poitrine?"
                  v-model="form.chestPain"
                  row
                >
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-radio-group
                  label="Avez-vous des allergies?"
                  v-model="form.hasAllergies"
                  row
                >
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12" v-if="form.hasAllergies === 'oui'">
                <v-text-field
                  label="À quoi êtes-vous allergique?"
                  v-model="form.allergyDetails"
                ></v-text-field>
                <v-radio-group
                  label="Votre réaction allergique est-elle habituellement faible ou sévère?"
                  v-model="form.allergySeverity"
                  row
                >
                  <v-radio label="Faible" value="faible"></v-radio>
                  <v-radio label="Sévère" value="sévère"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-radio-group
                  label="Avez-vous des irritations, de l’enflure ou de l’urticaire quelque part?"
                  v-model="form.hasRash"
                  row
                >
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12" v-if="form.hasRash === 'oui'">
                <v-text-field
                  label="Est-ce que vous pouvez me montrer les irritations/l’urticaire?"
                  v-model="form.rashLocation"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Savez-vous ce qui pourrait causer ces réactions?"
                  v-model="form.reactionCause"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-radio-group
                  label="Portez-vous quelque chose de nouveau aujourd’hui?"
                  v-model="form.wearingNew"
                  row
                >
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Qu’est-ce que vous avez mangé dernièrement?"
                  v-model="form.recentFood"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-radio-group
                  label="Prenez-vous de nouveaux médicaments?"
                  v-model="form.newMedication"
                  row
                >
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-radio-group
                  label="Avez-vous pris quelque chose pour votre réaction?"
                  v-model="form.takenForReaction"
                  row
                >
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12" v-if="form.takenForReaction === 'oui'">
                <v-text-field
                  label="Qu’est-ce que vous avez pris et quelle quantité?"
                  v-model="form.reactionMedication"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-radio-group
                  label="Vous êtes-vous fait piquer ou mordre par un insecte?"
                  v-model="form.insectBite"
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
  name: 'Allergic',
  data() {
    return {
      form: {
        difficultyBreathing: '',
        sameVoice: '',
        chestPain: '',
        hasAllergies: '',
        allergyDetails: '',
        allergySeverity: '',
        hasRash: '',
        rashLocation: '',
        reactionCause: '',
        wearingNew: '',
        recentFood: '',
        newMedication: '',
        takenForReaction: '',
        reactionMedication: '',
        insectBite: '',
        isSubmitDisabled: false
      }
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
      const result = [];

      if (this.form.difficultyBreathing) {
        result.push(`- Difficulté à respirer ou à avaler : ${this.form.difficultyBreathing}`);
      }
      if (this.form.sameVoice) {
        result.push(`- Même voix que d’habitude : ${this.form.sameVoice}`);
      }
      if (this.form.chestPain) {
        result.push(`- Oppression ou douleurs à la poitrine : ${this.form.chestPain}`);
      }
      if (this.form.hasAllergies === 'oui') {
        result.push(`- Allergies : Oui`);
        if (this.form.allergyDetails) {
          result.push(`  - À quoi : ${this.form.allergyDetails}`);
        }
        if (this.form.allergySeverity) {
          result.push(`  - Sévérité : ${this.form.allergySeverity}`);
        }
      } else if (this.form.hasAllergies === 'non') {
        result.push(`- Allergies : Non`);
      }
      if (this.form.hasRash === 'oui') {
        result.push(`- Irritations, enflure ou urticaire : Oui`);
        if (this.form.rashLocation) {
          result.push(`  - Localisation : ${this.form.rashLocation}`);
        }
      } else if (this.form.hasRash === 'non') {
        result.push(`- Irritations, enflure ou urticaire : Non`);
      }
      if (this.form.reactionCause) {
        result.push(`- Cause probable des réactions : ${this.form.reactionCause}`);
      }
      if (this.form.wearingNew) {
        result.push(`- Porte quelque chose de nouveau : ${this.form.wearingNew}`);
      }
      if (this.form.recentFood) {
        result.push(`- Nourriture récente : ${this.form.recentFood}`);
      }
      if (this.form.newMedication) {
        result.push(`- Nouveaux médicaments : ${this.form.newMedication}`);
      }
      if (this.form.takenForReaction === 'oui') {
        result.push(`- Prise de médicaments pour la réaction : Oui`);
        if (this.form.reactionMedication) {
          result.push(`  - Médicament et quantité : ${this.form.reactionMedication}`);
        }
      } else if (this.form.takenForReaction === 'non') {
        result.push(`- Prise de médicaments pour la réaction : Non`);
      }
      if (this.form.insectBite) {
        result.push(`- Piqué ou mordu par un insecte : ${this.form.insectBite}`);
      }

      this.$emit('submit-form', result.join('\n'));
    }
  }
};
</script>

<style>
.mb-5 {
  margin-bottom: 20px;
}
</style>
