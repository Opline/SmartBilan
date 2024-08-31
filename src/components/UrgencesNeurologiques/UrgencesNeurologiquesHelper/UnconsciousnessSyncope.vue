<template>
  <v-app>
    <v-container>
      <v-form ref="form" @submit.prevent="submitForm">
        <!-- Section pour le témoin -->
        <v-card class="mb-5">
          <v-card-title class="headline grey lighten-2">
            Questions au Témoin
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <v-radio-group v-model="form.witnessSawWhatHappened" row>
                  <p>Y a-t-il quelqu’un qui a vu ce qui s’est passé ?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.patientEpilepsy" row>
                  <p>Souffre-t-il/elle d’épilepsie ?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.patientDiabetes" row>
                  <p>Souffre-t-il/elle de diabète ?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.patientSeizure" row>
                  <p>Est-ce qu’il/elle a eu une convulsion ou des tremblements ?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.patientHeadacheDizziness" row>
                  <p>Est-ce qu’il s’est plaint/elle s’est plainte de maux de tête ou d’étourdissements ?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  label="À quelle heure est-ce arrivé ?"
                  v-model="form.eventTime"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  label="Pendant combien de temps le patient a-t-il été inconscient/la patiente a-t-elle été inconsciente ?"
                  v-model="form.unconsciousDuration"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  label="Comment était sa respiration pendant son inconscience ?"
                  v-model="form.breathingDuringUnconsciousness"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.patientSpokeDuringUnconsciousness" row>
                  <p>Est-ce que le patient/la patiente a parlé pendant son inconscience ?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.patientSweatingDuringUnconsciousness" row>
                  <p>Est-ce que le patient/la patiente transpirait ?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  label="Quand l’avez-vous vu réveillé/réveillée pour la dernière fois ?"
                  v-model="form.lastSeenAwake"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <!-- Section pour le patient -->
        <v-card class="mb-5">
          <v-card-title class="headline grey lighten-2">
            Questions au Patient
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <p>Ouvrez les yeux s’il vous plaît.</p>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  label="Pouvez-vous me dire ce qui est arrivé ?"
                  v-model="form.patientDescription"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  label="Comment vous êtes-vous retrouvé/retrouvée dans cette position ?"
                  v-model="form.positionDescription"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <p>Si vous comprenez ce que je dis, clignez des yeux une fois/serrez ma main.</p>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.patientHeadacheDizzinessConsciousness" row>
                  <p>Avez-vous eu des maux de tête ou des étourdissements avant ou après avoir perdu conscience ?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  label="Comment vous sentiez-vous avant de perdre conscience ?"
                  v-model="form.feelingBeforeUnconsciousness"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.patientPainBeforeAfterConsciousness" row>
                  <p>Avez-vous ressenti une douleur avant ou après votre perte de conscience ?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.patientPalpitationsBeforeAfterConsciousness" row>
                  <p>Avez-vous eu des palpitations avant ou après votre perte de conscience ?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.firstTimeUnconscious" row>
                  <p>Est-ce la première fois que vous perdez conscience ?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.patientSweating" row>
                  <p>Est-ce que vous transpirez ?</p>
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
  name: 'UnconsciousnessSyncope',
  data() {
    return {
      form: {
        // Données pour le témoin
        witnessSawWhatHappened: '',
        patientEpilepsy: '',
        patientDiabetes: '',
        patientSeizure: '',
        patientHeadacheDizziness: '',
        eventTime: '',
        unconsciousDuration: '',
        breathingDuringUnconsciousness: '',
        patientSpokeDuringUnconsciousness: '',
        patientSweatingDuringUnconsciousness: '',
        lastSeenAwake: '',

        // Données pour le patient
        patientDescription: '',
        positionDescription: '',
        patientHeadacheDizzinessConsciousness: '',
        feelingBeforeUnconsciousness: '',
        patientPainBeforeAfterConsciousness: '',
        patientPalpitationsBeforeAfterConsciousness: '',
        firstTimeUnconscious: '',
        patientSweating: ''
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
      let result = '';

      // Questions au Témoin
      if (this.form.witnessSawWhatHappened) {
        result += `Quelqu’un a vu ce qui s’est passé : ${this.form.witnessSawWhatHappened}\n`;
      }
      if (this.form.patientEpilepsy) {
        result += `Souffre d’épilepsie : ${this.form.patientEpilepsy}\n`;
      }
      if (this.form.patientDiabetes) {
        result += `Souffre de diabète : ${this.form.patientDiabetes}\n`;
      }
      if (this.form.patientSeizure) {
        result += `Convulsion ou tremblements : ${this.form.patientSeizure}\n`;
      }
      if (this.form.patientHeadacheDizziness) {
        result += `Maux de tête ou étourdissements : ${this.form.patientHeadacheDizziness}\n`;
      }
      if (this.form.eventTime) {
        result += `Heure de l’événement : ${this.form.eventTime}\n`;
      }
      if (this.form.unconsciousDuration) {
        result += `Durée de l’inconscience : ${this.form.unconsciousDuration}\n`;
      }
      if (this.form.breathingDuringUnconsciousness) {
        result += `Respiration pendant l’inconscience : ${this.form.breathingDuringUnconsciousness}\n`;
      }
      if (this.form.patientSpokeDuringUnconsciousness) {
        result += `Parlé pendant l’inconscience : ${this.form.patientSpokeDuringUnconsciousness}\n`;
      }
      if (this.form.patientSweatingDuringUnconsciousness) {
        result += `Transpiration pendant l’inconscience : ${this.form.patientSweatingDuringUnconsciousness}\n`;
      }
      if (this.form.lastSeenAwake) {
        result += `Dernière fois vu réveillé : ${this.form.lastSeenAwake}\n`;
      }

      // Questions au Patient
      if (this.form.patientDescription) {
        result += `Description de ce qui est arrivé : ${this.form.patientDescription}\n`;
      }
      if (this.form.positionDescription) {
        result += `Position : ${this.form.positionDescription}\n`;
      }
      if (this.form.patientHeadacheDizzinessConsciousness) {
        result += `Maux de tête ou étourdissements avant/après : ${this.form.patientHeadacheDizzinessConsciousness}\n`;
      }
      if (this.form.feelingBeforeUnconsciousness) {
        result += `Sentiments avant inconscience : ${this.form.feelingBeforeUnconsciousness}\n`;
      }
      if (this.form.patientPainBeforeAfterConsciousness) {
        result += `Douleur avant/après inconscience : ${this.form.patientPainBeforeAfterConsciousness}\n`;
      }
      if (this.form.patientPalpitationsBeforeAfterConsciousness) {
        result += `Palpitations avant/après inconscience : ${this.form.patientPalpitationsBeforeAfterConsciousness}\n`;
      }
      if (this.form.firstTimeUnconscious) {
        result += `Première perte de conscience : ${this.form.firstTimeUnconscious}\n`;
      }
      if (this.form.patientSweating) {
        result += `Transpiration : ${this.form.patientSweating}\n`;
      }

      // Trim the result and emit it to the parent
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
