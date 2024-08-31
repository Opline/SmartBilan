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
              <!-- Question 1 -->
              <v-col cols="12">
                <v-text-field
                  label="Est-ce qu’il y a quelqu’un d’autre dans l’édifice/le véhicule?"
                  v-model="form.patientOthersInBuilding"
                ></v-text-field>
              </v-col>
              <!-- Question 2 -->
              <v-col cols="12">
                <v-radio-group v-model="form.patientExplosion" row>
                  <v-radio label="Est-ce qu’il y a eu une explosion?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <!-- Question 3 -->
              <v-col cols="12">
                <v-text-field
                  label="Comment vous êtes-vous brûlé/brûlée?"
                  v-model="form.patientBurnCause"
                ></v-text-field>
              </v-col>
              <!-- Question 4 -->
              <v-col cols="12">
                <v-text-field
                  label="Avez-vous de la difficulté à respirer ou à avaler?"
                  v-model="form.patientBreathingDifficulty"
                ></v-text-field>
              </v-col>
              <!-- Question 5 -->
              <v-col cols="12">
                <v-text-field
                  label="Combien de temps avez-vous été exposé/exposée?"
                  v-model="form.patientExposureTime"
                ></v-text-field>
              </v-col>
              <!-- Question 6 -->
              <v-col cols="12">
                <v-checkbox
                  label="S’il vous plaît, ouvrez la bouche."
                  v-model="form.patientOpenMouth"
                ></v-checkbox>
              </v-col>
              <!-- Question 7 -->
              <v-col cols="12">
                <v-text-field
                  label="Avez-vous des brûlures ou des blessures ailleurs?"
                  v-model="form.patientOtherInjuries"
                ></v-text-field>
              </v-col>
              <!-- Question 8 -->
              <v-col cols="12">
                <v-checkbox
                  label="Je vais vous examiner pour voir si vous avez d’autres brûlures ou blessures."
                  v-model="form.patientExamine"
                ></v-checkbox>
              </v-col>
              <!-- Question 9 -->
              <v-col cols="12">
                <v-radio-group v-model="form.patientLostConsciousness" row>
                  <v-radio label="Avez-vous perdu conscience?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <!-- Question 10 -->
              <v-col cols="12">
                <v-radio-group v-model="form.patientAppliedAnything" row>
                  <v-radio label="Avez-vous déjà mis quelque chose sur la brûlure?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
                <v-text-field
                  v-if="form.patientAppliedAnything === 'oui'"
                  label="(Si oui) Qu’est-ce que vous avez mis?"
                  v-model="form.patientWhatApplied"
                ></v-text-field>
              </v-col>
              <!-- Question 11 -->
              <v-col cols="12">
                <v-radio-group v-model="form.patientRinsedBurn" row>
                  <v-radio label="Avez-vous rincé la brûlure?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
                <v-text-field
                  v-if="form.patientRinsedBurn === 'oui'"
                  label="(Si oui) Avec quoi?"
                  v-model="form.patientRinseWith"
                ></v-text-field>
                <v-text-field
                  v-if="form.patientRinsedBurn === 'oui'"
                  label="(Si oui) Pendant combien de temps?"
                  v-model="form.patientRinseDuration"
                ></v-text-field>
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
              <!-- Question 1 -->
              <v-col cols="12">
                <v-text-field
                  label="Est-ce qu’il y a quelqu’un d’autre dans l’édifice/le véhicule?"
                  v-model="form.witnessOthersInBuilding"
                ></v-text-field>
              </v-col>
              <!-- Question 2 -->
              <v-col cols="12">
                <v-radio-group v-model="form.witnessExplosion" row>
                  <v-radio label="Est-ce qu’il y a eu une explosion?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <!-- Question 3 -->
              <v-col cols="12">
                <v-text-field
                  label="Comment le patient a-t-il été brûlé/la patiente a-t-elle été brûlée?"
                  v-model="form.witnessBurnCause"
                ></v-text-field>
              </v-col>
              <!-- Question 4 -->
              <v-col cols="12">
                <v-radio-group v-model="form.witnessAppliedAnything" row>
                  <v-radio label="Avez-vous déjà mis quelque chose sur la brûlure?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
                <v-text-field
                  v-if="form.witnessAppliedAnything === 'oui'"
                  label="(Si oui) Qu’est-ce que vous avez mis?"
                  v-model="form.witnessWhatApplied"
                ></v-text-field>
              </v-col>
              <!-- Question 5 -->
              <v-col cols="12">
                <v-radio-group v-model="form.witnessRinsedBurn" row>
                  <v-radio label="Avez-vous rincé la brûlure?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
                <v-text-field
                  v-if="form.witnessRinsedBurn === 'oui'"
                  label="(Si oui) Avec quoi?"
                  v-model="form.witnessRinseWith"
                ></v-text-field>
                <v-text-field
                  v-if="form.witnessRinsedBurn === 'oui'"
                  label="(Si oui) Pendant combien de temps?"
                  v-model="form.witnessRinseDuration"
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
  name:'FormulaireBrulure',
  data() {
    return {
      form: {
        patientOthersInBuilding: '',
        patientExplosion: '',
        patientBurnCause: '',
        patientBreathingDifficulty: '',
        patientExposureTime: '',
        patientOpenMouth: false,
        patientOtherInjuries: '',
        patientExamine: false,
        patientLostConsciousness: '',
        patientAppliedAnything: '',
        patientWhatApplied: '',
        patientRinsedBurn: '',
        patientRinseWith: '',
        patientRinseDuration: '',
        witnessOthersInBuilding: '',
        witnessExplosion: '',
        witnessBurnCause: '',
        witnessAppliedAnything: '',
        witnessWhatApplied: '',
        witnessRinsedBurn: '',
        witnessRinseWith: '',
        witnessRinseDuration: ''
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
      let report = '';

      // Compte rendu pour le patient
      if (this.form.patientOthersInBuilding) {
        report += `Patient - Autres personnes dans l’édifice/véhicule : ${this.form.patientOthersInBuilding}\n`;
      }
      if (this.form.patientExplosion) {
        report += `Patient - Explosion : ${this.form.patientExplosion}\n`;
      }
      if (this.form.patientBurnCause) {
        report += `Patient - Cause de la brûlure : ${this.form.patientBurnCause}\n`;
      }
      if (this.form.patientBreathingDifficulty) {
        report += `Patient - Difficulté à respirer ou à avaler : ${this.form.patientBreathingDifficulty}\n`;
      }
      if (this.form.patientExposureTime) {
        report += `Patient - Temps d'exposition : ${this.form.patientExposureTime}\n`;
      }
      if (this.form.patientOpenMouth) {
        report += `Patient - A ouvert la bouche : Oui\n`;
      }
      if (this.form.patientOtherInjuries) {
        report += `Patient - Autres brûlures ou blessures : ${this.form.patientOtherInjuries}\n`;
      }
      if (this.form.patientExamine) {
        report += `Patient - Examen pour d'autres brûlures ou blessures : Oui\n`;
      }
      if (this.form.patientLostConsciousness) {
        report += `Patient - Perte de conscience : ${this.form.patientLostConsciousness}\n`;
      }
      if (this.form.patientAppliedAnything === 'oui') {
        report += `Patient - A mis quelque chose sur la brûlure : ${this.form.patientWhatApplied || 'Non spécifié'}\n`;
      }
      if (this.form.patientRinsedBurn === 'oui') {
        report += `Patient - A rincé la brûlure : Oui\n`;
        if (this.form.patientRinseWith) {
          report += `  Avec quoi : ${this.form.patientRinseWith}\n`;
        }
        if (this.form.patientRinseDuration) {
          report += `  Pendant combien de temps : ${this.form.patientRinseDuration}\n`;
        }
      }

      // Compte rendu pour le témoin
      if (this.form.witnessOthersInBuilding) {
        report += `Témoin - Autres personnes dans l’édifice/véhicule : ${this.form.witnessOthersInBuilding}\n`;
      }
      if (this.form.witnessExplosion) {
        report += `Témoin - Explosion : ${this.form.witnessExplosion}\n`;
      }
      if (this.form.witnessBurnCause) {
        report += `Témoin - Cause de la brûlure : ${this.form.witnessBurnCause}\n`;
      }
      if (this.form.witnessAppliedAnything === 'oui') {
        report += `Témoin - A mis quelque chose sur la brûlure : ${this.form.witnessWhatApplied || 'Non spécifié'}\n`;
      }
      if (this.form.witnessRinsedBurn === 'oui') {
        report += `Témoin - A rincé la brûlure : Oui\n`;
        if (this.form.witnessRinseWith) {
          report += `  Avec quoi : ${this.form.witnessRinseWith}\n`;
        }
        if (this.form.witnessRinseDuration) {
          report += `  Pendant combien de temps : ${this.form.witnessRinseDuration}\n`;
        }
      }

      // Émettre le compte rendu au composant parent
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
