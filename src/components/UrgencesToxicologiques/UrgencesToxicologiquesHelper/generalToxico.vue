<template>
  <v-app>
    <v-container>
      <v-form ref="form" @submit.prevent="submitForm">
        <!-- Questions du formulaire -->
        <v-card class="mb-5">
          <v-card-title class="headline grey lighten-2">
            Urgences Toxicologiques
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Pourquoi avez-vous appelé l’ambulance?"
                  v-model="form.ambulanceReason"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Qu’est-ce que vous avez pris?"
                  v-model="form.substanceTaken"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Combien en avez-vous pris?"
                  v-model="form.substanceAmount"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Quand en avez-vous pris?"
                  v-model="form.substanceTime"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Depuis combien de temps en prenez-vous?"
                  v-model="form.substanceDuration"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Pour quelle raison en avez-vous pris?"
                  v-model="form.reasonForTaking"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Quand en avez-vous pris la dernière fois?"
                  v-model="form.lastTakenTime"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-radio-group v-model="form.sameAmount" row>
                  <p>Avez-vous pris la même quantité que d’habitude?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Avez-vous une dépendance à/au/aux (nom de la substance)?"
                  v-model="form.dependency"
                ></v-text-field>
              </v-col>
              <v-col cols="12" v-if="form.dependency === 'oui'">
                <v-text-field
                  label="Depuis combien de temps êtes-vous dépendant/dépendante?"
                  v-model="form.dependencyDuration"
                ></v-text-field>
              </v-col>
              <!-- Méthode de prise -->
              <v-col cols="12">
                <v-checkbox
                  label="Injecté"
                  v-model="form.methods.injected"
                ></v-checkbox>
                <v-checkbox
                  label="Sniffé"
                  v-model="form.methods.sniffed"
                ></v-checkbox>
                <v-checkbox
                  label="Avalé"
                  v-model="form.methods.swallowed"
                ></v-checkbox>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="L’avez-vous pris avec autre chose?"
                  v-model="form.takenWithOthers"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-radio-group v-model="form.suicideThoughts" row>
                  <p>Avez-vous déjà pensé au suicide?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12" v-if="form.suicideThoughts === 'oui'">
                <v-radio-group v-model="form.suicideAttempt" row>
                  <p>Avez-vous déjà tenté de vous suicider?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12" v-if="form.suicideAttempt === 'oui'">
                <v-text-field
                  label="Comment?"
                  v-model="form.suicideAttemptMethod"
                ></v-text-field>
                <v-text-field
                  label="Quand?"
                  v-model="form.suicideAttemptWhen"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-radio-group v-model="form.intentionToWakeUp" row>
                  <p>Aviez-vous l’intention de vous réveiller demain matin?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Comment vous sentez-vous en ce moment?"
                  v-model="form.currentFeeling"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-radio-group v-model="form.breathingDifficulty" row>
                  <p>Avez-vous de la difficulté à respirer?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-radio-group v-model="form.palpitations" row>
                  <p>Ressentez-vous des palpitations?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-radio-group v-model="form.seeingThings" row>
                  <p>Voyez-vous des choses qui vous semblent étranges?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-radio-group v-model="form.hearingVoices" row>
                  <p>Entendez-vous des voix ou des bruits qui vous semblent étranges?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Quand avez-vous mangé pour la dernière fois?"
                  v-model="form.lastMeal"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Comment vous êtes-vous blessé/blessée?"
                  v-model="form.injuryDescription"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-radio-group v-model="form.checkAbdomen" row>
                  <p>Est-ce que je peux regarder votre abdomen?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Avez-vous déjà fait une cure de désintoxication?"
                  v-model="form.detoxTreatment"
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
  name: 'generalToxico',
  data() {
    return {
      form: {
        ambulanceReason: '',
        substanceTaken: '',
        substanceAmount: '',
        substanceTime: '',
        substanceDuration: '',
        reasonForTaking: '',
        lastTakenTime: '',
        sameAmount: '',
        dependency: '',
        dependencyDuration: '',
        methods: {
          injected: false,
          sniffed: false,
          swallowed: false,
        },
        takenWithOthers: '',
        suicideThoughts: '',
        suicideAttempt: '',
        suicideAttemptMethod: '',
        suicideAttemptWhen: '',
        intentionToWakeUp: '',
        currentFeeling: '',
        breathingDifficulty: '',
        palpitations: '',
        seeingThings: '',
        hearingVoices: '',
        lastMeal: '',
        injuryDescription: '',
        checkAbdomen: '',
        detoxTreatment: ''
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
      const responses = {
        "Pourquoi avez-vous appelé l’ambulance?": this.form.ambulanceReason,
        "Qu’est-ce que vous avez pris?": this.form.substanceTaken,
        "Combien en avez-vous pris?": this.form.substanceAmount,
        "Quand en avez-vous pris?": this.form.substanceTime,
        "Depuis combien de temps en prenez-vous?": this.form.substanceDuration,
        "Pour quelle raison en avez-vous pris?": this.form.reasonForTaking,
        "Quand en avez-vous pris la dernière fois?": this.form.lastTakenTime,
        "Avez-vous pris la même quantité que d’habitude?": this.form.sameAmount,
        "Avez-vous une dépendance à/au/aux (nom de la substance)?": this.form.dependency,
        "Depuis combien de temps êtes-vous dépendant/dépendante?": this.form.dependencyDuration,
        "Méthode de prise": Object.entries(this.form.methods)
          .filter(([_, value]) => value)
          .map(([key]) => key)
          .join(', '),
        "L’avez-vous pris avec autre chose?": this.form.takenWithOthers,
        "Avez-vous déjà pensé au suicide?": this.form.suicideThoughts,
        "Avez-vous déjà tenté de vous suicider?": this.form.suicideAttempt,
        "Comment?": this.form.suicideAttemptMethod,
        "Quand?": this.form.suicideAttemptWhen,
        "Aviez-vous l’intention de vous réveiller demain matin?": this.form.intentionToWakeUp,
        "Comment vous sentez-vous en ce moment?": this.form.currentFeeling,
        "Avez-vous de la difficulté à respirer?": this.form.breathingDifficulty,
        "Ressentez-vous des palpitations?": this.form.palpitations,
        "Voyez-vous des choses qui vous semblent étranges?": this.form.seeingThings,
        "Entendez-vous des voix ou des bruits qui vous semblent étranges?": this.form.hearingVoices,
        "Quand avez-vous mangé pour la dernière fois?": this.form.lastMeal,
        "Comment vous êtes-vous blessé/blessée?": this.form.injuryDescription,
        "Est-ce que je peux regarder votre abdomen?": this.form.checkAbdomen,
        "Avez-vous déjà fait une cure de désintoxication?": this.form.detoxTreatment,
      };

      const report = Object.entries(responses)
        .filter(([_, value]) => value) // Garder seulement les réponses définies
        .map(([question, answer]) => `- ${question}: ${answer}`)
        .join('\n');

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
