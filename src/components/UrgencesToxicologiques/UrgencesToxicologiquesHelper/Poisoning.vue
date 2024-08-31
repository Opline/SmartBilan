<template>
  <v-app>
    <v-container>
      <v-form ref="form" @submit.prevent="submitForm">
        <!-- Section des Questions -->
        <v-card class="mb-5">
          <v-card-title class="headline grey lighten-2">
            Questionnaire Médical
          </v-card-title>
          <v-card-text>
            <!-- Questions pour le patient -->
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Pourquoi avez-vous appelé l’ambulance?"
                  v-model="form.reasonForCall"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <p>Pensez-vous que quelqu’un a mis quelque chose dans votre boisson?</p>
                <v-radio-group v-model="form.suspiciousDrink" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <p>Est-ce que votre boisson avait un drôle de goût?</p>
                <v-radio-group v-model="form.strangeTaste" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <p>Avez-vous pris des médicaments, de la drogue ou des produits chimiques?</p>
                <v-radio-group v-model="form.substancesTaken" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <!-- Sous-questions si substances prises -->
              <v-row v-if="form.substancesTaken === 'oui'">
                <v-col cols="12">
                  <v-text-field
                    label="Qu’est-ce que vous avez pris?"
                    v-model="form.whatTaken"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Combien en avez-vous pris?"
                    v-model="form.amountTaken"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Pourquoi en avez-vous pris?"
                    v-model="form.reasonTaken"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Quand en avez-vous pris?"
                    v-model="form.whenTaken"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <p>En avez-vous pris avec de l’alcool?</p>
                  <v-radio-group v-model="form.withAlcohol" row>
                    <v-radio label="Oui" value="oui"></v-radio>
                    <v-radio label="Non" value="non"></v-radio>
                  </v-radio-group>
                </v-col>
                <v-col cols="12">
                  <p>Est-ce que cette consommation était accidentelle?</p>
                  <v-radio-group v-model="form.accidentalIntake" row>
                    <v-radio label="Oui" value="oui"></v-radio>
                    <v-radio label="Non" value="non"></v-radio>
                  </v-radio-group>
                </v-col>
              </v-row>
              <v-col cols="12">
                <p>Avez-vous vomi?</p>
                <v-radio-group v-model="form.vomiting" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <p>Avez-vous pris quelque chose pour vous aider à vous sentir mieux?</p>
                <v-radio-group v-model="form.takenForRelief" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <p>Vous sentez-vous déprimé/déprimée?</p>
                <v-radio-group v-model="form.feelingDepressed" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <!-- Sous-questions si déprimé -->
              <v-row v-if="form.feelingDepressed === 'oui'">
                <v-col cols="12">
                  <p>Avez-vous des antécédents de dépression?</p>
                  <v-radio-group v-model="form.depressionHistory" row>
                    <v-radio label="Oui" value="oui"></v-radio>
                    <v-radio label="Non" value="non"></v-radio>
                  </v-radio-group>
                </v-col>
              </v-row>
              <v-col cols="12">
                <p>Souffrez-vous de problèmes psychiatriques ou psychologiques?</p>
                <v-radio-group v-model="form.psychiatricIssues" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <p>Avez-vous déjà pensé au suicide?</p>
                <v-radio-group v-model="form.suicidalThoughts" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <!-- Sous-questions si pensées suicidaires -->
              <v-row v-if="form.suicidalThoughts === 'oui'">
                <v-col cols="12">
                  <p>Avez-vous déjà fait une tentative de suicide?</p>
                  <v-radio-group v-model="form.suicideAttempt" row>
                    <v-radio label="Oui" value="oui"></v-radio>
                    <v-radio label="Non" value="non"></v-radio>
                  </v-radio-group>
                </v-col>
                <v-row v-if="form.suicideAttempt === 'oui'">
                  <v-col cols="12">
                    <v-text-field
                      label="Comment?"
                      v-model="form.suicideMethod"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="Quand?"
                      v-model="form.suicideWhen"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-row>
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
  name:  'Poisoning',
  data() {
    return {
      form: {
        reasonForCall: '',
        suspiciousDrink: '',
        strangeTaste: '',
        substancesTaken: '',
        whatTaken: '',
        amountTaken: '',
        reasonTaken: '',
        whenTaken: '',
        withAlcohol: '',
        accidentalIntake: '',
        vomiting: '',
        takenForRelief: '',
        feelingDepressed: '',
        depressionHistory: '',
        psychiatricIssues: '',
        suicidalThoughts: '',
        suicideAttempt: '',
        suicideMethod: '',
        suicideWhen: '',
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

      if (this.form.reasonForCall) {
        report += `Pourquoi avez-vous appelé l’ambulance? : ${this.form.reasonForCall}\n`;
      }
      if (this.form.suspiciousDrink) {
        report += `Pensez-vous que quelqu’un a mis quelque chose dans votre boisson? : ${this.form.suspiciousDrink}\n`;
      }
      if (this.form.strangeTaste) {
        report += `Est-ce que votre boisson avait un drôle de goût? : ${this.form.strangeTaste}\n`;
      }
      if (this.form.substancesTaken === 'oui') {
        report += `Avez-vous pris des médicaments, de la drogue ou des produits chimiques? : Oui\n`;
        if (this.form.whatTaken) {
          report += `- Qu’est-ce que vous avez pris? : ${this.form.whatTaken}\n`;
        }
        if (this.form.amountTaken) {
          report += `- Combien en avez-vous pris? : ${this.form.amountTaken}\n`;
        }
        if (this.form.reasonTaken) {
          report += `- Pourquoi en avez-vous pris? : ${this.form.reasonTaken}\n`;
        }
        if (this.form.whenTaken) {
          report += `- Quand en avez-vous pris? : ${this.form.whenTaken}\n`;
        }
        if (this.form.withAlcohol) {
          report += `- En avez-vous pris avec de l’alcool? : ${this.form.withAlcohol}\n`;
        }
        if (this.form.accidentalIntake) {
          report += `- Est-ce que cette consommation était accidentelle? : ${this.form.accidentalIntake}\n`;
        }
      }
      if (this.form.vomiting) {
        report += `Avez-vous vomi? : ${this.form.vomiting}\n`;
      }
      if (this.form.takenForRelief) {
        report += `Avez-vous pris quelque chose pour vous aider à vous sentir mieux? : ${this.form.takenForRelief}\n`;
      }
      if (this.form.feelingDepressed === 'oui') {
        report += `Vous sentez-vous déprimé/déprimée? : Oui\n`;
        if (this.form.depressionHistory) {
          report += `- Avez-vous des antécédents de dépression? : ${this.form.depressionHistory}\n`;
        }
      }
      if (this.form.psychiatricIssues) {
        report += `Souffrez-vous de problèmes psychiatriques ou psychologiques? : ${this.form.psychiatricIssues}\n`;
      }
      if (this.form.suicidalThoughts === 'oui') {
        report += `Avez-vous déjà pensé au suicide? : Oui\n`;
        if (this.form.suicideAttempt === 'oui') {
          report += `- Avez-vous déjà fait une tentative de suicide? : Oui\n`;
          if (this.form.suicideMethod) {
            report += `  - Comment? : ${this.form.suicideMethod}\n`;
          }
          if (this.form.suicideWhen) {
            report += `  - Quand? : ${this.form.suicideWhen}\n`;
          }
        }
      }

      // Émettre le compte rendu au parent
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
