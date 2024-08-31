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
            <v-row>
              <v-col cols="12">
                <v-radio-group
                  v-model="form.electricityCutOff"
                  row
                  label="Est-ce que le courant/l’électricité a été coupé/coupée ?"
                >
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-radio-group
                  v-model="form.electricCurrentType"
                  row
                  label="Est-ce que le courant électrique était alternatif ou continu ?"
                >
                  <v-radio label="Alternatif" value="alternatif"></v-radio>
                  <v-radio label="Continu" value="continu"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Connaissez-vous le voltage ?"
                  v-model="form.voltage"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Connaissez-vous l’ampérage ?"
                  v-model="form.amperage"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-radio-group
                  v-model="form.thrown"
                  row
                  label="Avez-vous été projeté/projetée ?"
                >
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-radio-group
                  v-model="form.stuckToSource"
                  row
                  label="Est-ce que vous étiez collé/collée à la source ?"
                >
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
                <v-text-field
                  v-if="form.stuckToSource === 'oui'"
                  label="Pendant combien de temps ?"
                  v-model="form.timeStuck"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-radio-group
                  v-model="form.lostConsciousness"
                  row
                  label="Avez-vous perdu conscience après le choc électrique ?"
                >
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-radio-group
                  v-model="form.feltCurrent"
                  row
                  label="Avez-vous ressenti le courant passer à travers votre corps ?"
                >
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
                <v-text-field
                  v-if="form.feltCurrent === 'oui'"
                  label="Où ?"
                  v-model="form.whereFelt"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-radio-group
                  v-model="form.palpitations"
                  row
                  label="Avez-vous des palpitations ?"
                >
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <!-- Section pour le témoin -->
        <v-card class="mb-5">
          <v-card-title class="headline grey lighten-2">
            Questions au Témoin
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <v-radio-group
                  v-model="form.witnessSawThrown"
                  row
                  label="Est-ce que le patient a été projeté/la patiente a été projetée ?"
                >
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-radio-group
                  v-model="form.witnessSawStuck"
                  row
                  label="Est-ce que le patient a été collé/la patiente a été collée à la source ?"
                >
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
                <v-text-field
                  v-if="form.witnessSawStuck === 'oui'"
                  label="Pour combien de temps ?"
                  v-model="form.witnessTimeStuck"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-radio-group
                  v-model="form.witnessSawConsciousnessLost"
                  row
                  label="Est-ce que le patient/la patiente a perdu conscience après le choc électrique ?"
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
    name: 'ElectricalBurnsForm',
  data() {
  return {
  form: {
  electricityCutOff: '',
  electricCurrentType: '',
  voltage: '',
  amperage: '',
  thrown: '',
  stuckToSource: '',
  timeStuck: '',
  lostConsciousness: '',
  feltCurrent: '',
  whereFelt: '',
  palpitations: '',
  witnessSawThrown: '',
  witnessSawStuck: '',
  witnessTimeStuck: '',
  witnessSawConsciousnessLost: ''
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
  let result = '';

  // Fonction utilitaire pour ajouter des réponses au résultat
  const appendResult = (question, answer) => {
  if (answer) {
  result += `- ${question} : ${answer}\n`;
}
};

  // Ajout des réponses du patient
  result += 'Questions au Patient :\n';
  appendResult('Est-ce que le courant/l’électricité a été coupé/coupée', this.form.electricityCutOff);
  appendResult('Est-ce que le courant électrique était alternatif ou continu', this.form.electricCurrentType);
  appendResult('Connaissez-vous le voltage', this.form.voltage);
  appendResult('Connaissez-vous l’ampérage', this.form.amperage);
  appendResult('Avez-vous été projeté/projetée', this.form.thrown);
  appendResult('Est-ce que vous étiez collé/collée à la source', this.form.stuckToSource);
  appendResult('Pendant combien de temps', this.form.timeStuck);
  appendResult('Avez-vous perdu conscience après le choc électrique', this.form.lostConsciousness);
  appendResult('Avez-vous ressenti le courant passer à travers votre corps', this.form.feltCurrent);
  appendResult('Où', this.form.whereFelt);
  appendResult('Avez-vous des palpitations', this.form.palpitations);

  // Ajout des réponses du témoin
  result += '\nQuestions au Témoin :\n';
  appendResult('Est-ce que le patient a été projeté/la patiente a été projetée', this.form.witnessSawThrown);
  appendResult('Est-ce que le patient a été collé/la patiente a été collée à la source', this.form.witnessSawStuck);
  appendResult('Pour combien de temps', this.form.witnessTimeStuck);
  appendResult('Est-ce que le patient/la patiente a perdu conscience après le choc électrique', this.form.witnessSawConsciousnessLost);

  // Suppression des lignes vides ou redondantes
  result = result.trim();

  // Émission du résultat formaté au composant parent
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
