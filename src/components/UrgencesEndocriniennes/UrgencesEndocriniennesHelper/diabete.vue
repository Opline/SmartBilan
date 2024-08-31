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
                <v-radio-group v-model="form.isDiabetic" row>
                  <label>Êtes-vous diabétique?</label>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12" v-if="form.isDiabetic === 'oui'">
                <v-select
                  label="De type I ou II?"
                  v-model="form.diabetesType"
                  :items="['Type I', 'Type II']"
                ></v-select>
              </v-col>

              <v-col cols="12" v-if="form.isDiabetic === 'oui'">
                <v-radio-group v-model="form.takesMedication" row>
                  <label>Prenez-vous des médicaments?</label>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12" v-if="form.takesMedication === 'oui'">
                <v-text-field
                  label="Lesquels?"
                  v-model="form.medications"
                ></v-text-field>
              </v-col>

              <v-col cols="12" v-if="form.takesMedication === 'oui'">
                <v-radio-group v-model="form.tookMedicationToday" row>
                  <label>Avez-vous pris votre médication aujourd’hui?</label>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12" v-if="form.isDiabetic === 'oui'">
                <v-radio-group v-model="form.correctInsulinDosage" row>
                  <label>Avez-vous pris la bonne insuline et le bon dosage?</label>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12" v-if="form.isDiabetic === 'oui'">
                <v-radio-group v-model="form.medicationChange" row>
                  <label>Y a-t-il eu des changements dans votre médication?</label>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12" v-if="form.medicationChange === 'oui'">
                <v-text-field
                  label="Qu’est-ce qui a été changé?"
                  v-model="form.whatChanged"
                ></v-text-field>
              </v-col>

              <v-col cols="12" v-if="form.isDiabetic === 'oui'">
                <v-radio-group v-model="form.checkedBloodSugar" row>
                  <label>Avez-vous vérifié votre taux de sucre?</label>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12" v-if="form.checkedBloodSugar === 'oui'">
                <v-text-field
                  label="Quel a été le résultat?"
                  v-model="form.bloodSugarResult"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  label="Comment est votre glycémie/taux de sucre habituellement?"
                  v-model="form.usualBloodSugar"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.difficultyControlling" row>
                  <label>Avez-vous de la difficulté à contrôler votre glycémie/taux de sucre?</label>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.feelHypoglycemia" row>
                  <label>Ressentez-vous habituellement vos épisodes d’hypoglycémie?</label>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  label="Est-ce que je peux voir votre carnet de glycémie s’il vous plaît?"
                  v-model="form.bloodSugarLog"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.eatenEnoughToday" row>
                  <label>Avez-vous suffisamment mangé aujourd’hui?</label>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.moreExerciseThanUsual" row>
                  <label>Avez-vous fait une activité physique plus intense que d’habitude?</label>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.hadFever" row>
                  <label>Avez-vous eu de la fièvre?</label>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.moreThirstyThanUsual" row>
                  <label>Avez-vous plus soif que d’habitude?</label>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.moreFrequentUrination" row>
                  <label>Urinez-vous plus fréquemment que d’habitude?</label>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.weightLossRecently" row>
                  <label>Avez-vous perdu du poids dernièrement?</label>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.moreStressedThanUsual" row>
                  <label>Êtes-vous plus stressé/stressée que d’habitude?</label>
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
            <!-- Questions pour le témoin -->
            <v-row>
              <v-col cols="12">
                <v-radio-group v-model="form.frequentHypoglycemia" row>
                  <label>Est-ce que ça lui arrive souvent de faire de l’hypoglycémie?</label>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.gaveFoodDrink" row>
                  <label>Avant notre arrivée, lui avez-vous donné quelque chose à boire ou à manger?</label>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.injectedGlucagon" row>
                  <label>Lui avez-vous injecté du glucagon avant notre arrivée?</label>
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
  name: 'diabete',
  data() {
    return {
      form: {
        isDiabetic: '',
        diabetesType: '',
        takesMedication: '',
        medications: '',
        tookMedicationToday: '',
        correctInsulinDosage: '',
        medicationChange: '',
        whatChanged: '',
        checkedBloodSugar: '',
        bloodSugarResult: '',
        usualBloodSugar: '',
        difficultyControlling: '',
        feelHypoglycemia: '',
        bloodSugarLog: '',
        eatenEnoughToday: '',
        moreExerciseThanUsual: '',
        hadFever: '',
        moreThirstyThanUsual: '',
        moreFrequentUrination: '',
        weightLossRecently: '',
        moreStressedThanUsual: '',
        frequentHypoglycemia: '',
        gaveFoodDrink: '',
        injectedGlucagon: '',
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
    formatPatientSection() {
      let result = "Questions au Patient:";
      if (this.form.isDiabetic === 'oui') {
        result += `\n- Diabétique: Oui`;
        if (this.form.diabetesType) result += `\n- Type de diabète: ${this.form.diabetesType}`;
        if (this.form.takesMedication === 'oui') {
          result += `\n- Prend des médicaments: Oui`;
          if (this.form.medications) result += `\n- Médicaments: ${this.form.medications}`;
          if (this.form.tookMedicationToday) result += `\n- Médication prise aujourd’hui: ${this.form.tookMedicationToday}`;
        }
        if (this.form.correctInsulinDosage) result += `\n- Bonne insuline et dosage: ${this.form.correctInsulinDosage}`;
        if (this.form.medicationChange === 'oui') {
          result += `\n- Changement de médication: Oui`;
          if (this.form.whatChanged) result += `\n- Changement: ${this.form.whatChanged}`;
        }
        if (this.form.checkedBloodSugar === 'oui') {
          result += `\n- Taux de sucre vérifié: Oui`;
          if (this.form.bloodSugarResult) result += `\n- Résultat: ${this.form.bloodSugarResult}`;
        }
        if (this.form.usualBloodSugar) result += `\n- Glycémie habituelle: ${this.form.usualBloodSugar}`;
        if (this.form.difficultyControlling) result += `\n- Difficulté à contrôler la glycémie: ${this.form.difficultyControlling}`;
        if (this.form.feelHypoglycemia) result += `\n- Ressent les épisodes d’hypoglycémie: ${this.form.feelHypoglycemia}`;
      } else {
        result += `\n- Diabétique: Non`;
      }
      if (this.form.bloodSugarLog) result += `\n- Carnet de glycémie: ${this.form.bloodSugarLog}`;
      if (this.form.eatenEnoughToday) result += `\n- Suffisamment mangé aujourd’hui: ${this.form.eatenEnoughToday}`;
      if (this.form.moreExerciseThanUsual) result += `\n- Activité physique plus intense: ${this.form.moreExerciseThanUsual}`;
      if (this.form.hadFever) result += `\n- A eu de la fièvre: ${this.form.hadFever}`;
      if (this.form.moreThirstyThanUsual) result += `\n- Plus soif que d’habitude: ${this.form.moreThirstyThanUsual}`;
      if (this.form.moreFrequentUrination) result += `\n- Urine plus fréquemment: ${this.form.moreFrequentUrination}`;
      if (this.form.weightLossRecently) result += `\n- Perte de poids récemment: ${this.form.weightLossRecently}`;
      if (this.form.moreStressedThanUsual) result += `\n- Plus stressé que d’habitude: ${this.form.moreStressedThanUsual}`;
      return result;
    },
    formatWitnessSection() {
      let result = "Questions au Témoin:";
      if (this.form.frequentHypoglycemia) result += `\n- Hypoglycémie fréquente: ${this.form.frequentHypoglycemia}`;
      if (this.form.gaveFoodDrink) result += `\n- Nourriture ou boisson donnée: ${this.form.gaveFoodDrink}`;
      if (this.form.injectedGlucagon) result += `\n- Glucagon injecté: ${this.form.injectedGlucagon}`;
      return result;
    },
    submitForm() {
      this.isSubmitDisabled = true;
      const result = `
        ${this.formatPatientSection()}
        ${this.formatWitnessSection()}
      `;
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
