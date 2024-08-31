<template>
  <v-app>
    <v-container>
      <v-form ref="form" @submit.prevent="submitForm">
        <!-- Section pour les questions -->
        <v-card class="mb-5">
          <v-card-title class="headline grey lighten-2">
            Questions de Santé
          </v-card-title>
          <v-card-text>
            <v-row>
              <!-- Questions -->
              <v-col cols="12">
                <v-text-field
                  label="Souffrez-vous de problèmes gastrointestinaux (nausées, vomissements, diarrhée, douleurs abdominales)?"
                  v-model="form.gastroIssues"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Sentez-vous votre gorge se serrer?"
                  v-model="form.throatTightness"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Est-ce que l’air entre difficilement dans vos poumons?"
                  v-model="form.breathingDifficulty"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Comment évolue votre réaction habituellement?"
                  v-model="form.reactionProgression"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Depuis quand avez-vous de la difficulté à respirer?"
                  v-model="form.breathingDifficultyDuration"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-slider
                  label="Sur une échelle de 0 à 10, combien donnez-vous à votre difficulté respiratoire maintenant?"
                  v-model="form.breathingDifficultyScale"
                  :min="0"
                  :max="10"
                  ticks
                ></v-slider>
              </v-col>
              <v-col cols="12">
                <v-radio-group
                  label="Est-ce que c’est la première fois que ça vous arrive?"
                  v-model="form.firstOccurrence"
                  row
                >
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-radio-group
                  label="Avez-vous habituellement des réactions anaphylactiques?"
                  v-model="form.anaphylacticReactions"
                  row
                >
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Quand avez-vous été en contact avec l’allergène?"
                  v-model="form.allergenContactTime"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-radio-group
                  label="Avez-vous un auto-injecteur d’épinéphrine : de l’EpipenMD ou de l’AllerjectMD?"
                  v-model="form.epinephrineAutoInjector"
                  row
                >
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-radio-group
                  label="Avez-vous pris quelque chose pour la réaction?"
                  v-model="form.treatmentTaken"
                  row
                >
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12" v-if="form.treatmentTaken === 'oui'">
                <v-text-field
                  label="Qu’est-ce que vous avez pris?"
                  v-model="form.treatmentDetails"
                ></v-text-field>
              </v-col>
              <v-col cols="12" v-if="form.treatmentTaken === 'oui'">
                <v-radio-group
                  label="Est-ce que ça vous a aidé à mieux respirer?"
                  v-model="form.helpedBreathing"
                  row
                >
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-radio-group
                  label="Comment est votre respiration maintenant?"
                  v-model="form.currentBreathingCondition"
                  row
                >
                  <v-radio label="Mieux" value="mieux"></v-radio>
                  <v-radio label="Pire" value="pire"></v-radio>
                  <v-radio label="Pareil" value="pareil"></v-radio>
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
  name: 'Anaphylaxie',
  data() {
    return {
      form: {
        gastroIssues: '',
        throatTightness: '',
        breathingDifficulty: '',
        reactionProgression: '',
        breathingDifficultyDuration: '',
        breathingDifficultyScale: null,
        firstOccurrence: '',
        anaphylacticReactions: '',
        allergenContactTime: '',
        epinephrineAutoInjector: '',
        treatmentTaken: '',
        treatmentDetails: '',
        helpedBreathing: '',
        currentBreathingCondition: ''
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
    submitForm() {
      this.isSubmitDisabled = true;
      const fields = {
        gastroIssues: "Problèmes gastrointestinaux",
        throatTightness: "Gorge serrée",
        breathingDifficulty: "Difficulté à respirer",
        reactionProgression: "Évolution de la réaction",
        breathingDifficultyDuration: "Durée de la difficulté respiratoire",
        breathingDifficultyScale: "Échelle de difficulté respiratoire",
        firstOccurrence: "Première occurrence",
        anaphylacticReactions: "Réactions anaphylactiques habituelles",
        allergenContactTime: "Temps de contact avec l'allergène",
        epinephrineAutoInjector: "Auto-injecteur d'épinéphrine",
        treatmentTaken: "Traitement pris",
        treatmentDetails: "Détails du traitement",
        helpedBreathing: "Aide à mieux respirer",
        currentBreathingCondition: "Condition actuelle de la respiration",
      };

      let result = '';

      for (const key in this.form) {
        if (this.form[key]) {
          if (key === 'breathingDifficultyScale') {
            result += `${fields[key]}: ${this.form[key]}/10\n`;
          } else if (key === 'treatmentTaken' && this.form[key] === 'non') {
            result += `${fields[key]}: Non\n`;
          } else if (key === 'firstOccurrence' || key === 'anaphylacticReactions' || key === 'epinephrineAutoInjector' || key === 'helpedBreathing' || key === 'currentBreathingCondition') {
            result += `${fields[key]}: ${this.form[key] === 'oui' ? 'Oui' : this.form[key] === 'non' ? 'Non' : this.form[key]}\n`;
          } else {
            result += `${fields[key]}: ${this.form[key]}\n`;
          }
        }
      }

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
