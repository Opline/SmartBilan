<template>
  <v-app>
    <v-container>
      <v-form ref="form" @submit.prevent="submitForm">
        <!-- Section pour l'infection des voies respiratoires supérieures -->
        <v-card class="mb-5">
          <v-card-title class="headline grey lighten-2">
            Infection des voies respiratoires supérieures
          </v-card-title>
          <v-card-text>
            <!-- Questions au témoin à propos d'un enfant -->
            <v-row>
              <v-col cols="12">
                <v-checkbox
                  label="Est-ce que l’enfant a une toux aboyante?"
                  v-model="form.childBarkingCough"
                ></v-checkbox>
              </v-col>
              <v-col cols="12">
                <v-checkbox
                  label="Est-ce que la toux est pire la nuit?"
                  v-model="form.childCoughWorseAtNight"
                ></v-checkbox>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <!-- Section pour l'épiglottite -->
        <v-card class="mb-5">
          <v-card-title class="headline grey lighten-2">
            Épiglottite
          </v-card-title>
          <v-card-text>
            <!-- Questions au patient -->
            <v-row>
              <v-col cols="12">
                <v-checkbox
                  label="Avez-vous de la difficulté à avaler?"
                  v-model="form.patientDifficultySwallowing"
                ></v-checkbox>
              </v-col>
              <v-col cols="12">
                <v-checkbox
                  label="Avez-vous salivé?"
                  v-model="form.patientDrooling"
                ></v-checkbox>
              </v-col>
              <v-col cols="12">
                <v-checkbox
                  label="Avez-vous mal à la gorge?"
                  v-model="form.patientSoreThroat"
                ></v-checkbox>
              </v-col>
              <v-col cols="12">
                <v-checkbox
                  label="Avez-vous de la difficulté à parler?"
                  v-model="form.patientDifficultySpeaking"
                ></v-checkbox>
              </v-col>
              <v-col cols="12" v-if="form.patientDifficultySpeaking">
                <v-checkbox
                  label="Votre voix a-t-elle changé?"
                  v-model="form.patientVoiceChanged"
                ></v-checkbox>
              </v-col>
              <v-col cols="12">
                <v-checkbox
                  label="Est-ce que vous vous mouchez?"
                  v-model="form.patientBlowingNose"
                ></v-checkbox>
              </v-col>
              <v-col cols="12" v-if="form.patientBlowingNose">
                <v-checkbox
                  label="Y avait-il du sang dans les sécrétions?"
                  v-model="form.bloodInSecretions"
                ></v-checkbox>
                <v-select
                  label="Quelle est la couleur des sécrétions nasales?"
                  v-model="form.secretionsColor"
                  :items="['Blanche', 'Jaune', 'Verte']"
                  v-if="form.patientBlowingNose"
                ></v-select>
              </v-col>
            </v-row>

            <!-- Questions au témoin à propos d'un enfant -->
            <v-row>
              <v-col cols="12">
                <v-checkbox
                  label="Est-ce que l’enfant a de la difficulté à avaler?"
                  v-model="form.childDifficultySwallowing"
                ></v-checkbox>
              </v-col>
              <v-col cols="12">
                <v-checkbox
                  label="Est-ce que l’enfant a salivé de façon excessive?"
                  v-model="form.childDrooling"
                ></v-checkbox>
              </v-col>
              <v-col cols="12">
                <v-checkbox
                  label="Est-ce que l’enfant a mal à la gorge?"
                  v-model="form.childSoreThroat"
                ></v-checkbox>
              </v-col>
              <v-col cols="12">
                <v-checkbox
                  label="Est-ce que l’enfant a de la difficulté à parler?"
                  v-model="form.childDifficultySpeaking"
                ></v-checkbox>
              </v-col>
              <v-col cols="12" v-if="form.childDifficultySpeaking">
                <v-checkbox
                  label="Sa voix a-t-elle changé?"
                  v-model="form.childVoiceChanged"
                ></v-checkbox>
              </v-col>
              <v-col cols="12">
                <v-checkbox
                  label="Est-ce que l’enfant se mouche?"
                  v-model="form.childBlowingNose"
                ></v-checkbox>
              </v-col>
              <v-col cols="12" v-if="form.childBlowingNose">
                <v-checkbox
                  label="Y avait-il du sang dans les sécrétions nasales?"
                  v-model="form.childBloodInSecretions"
                ></v-checkbox>
                <v-select
                  label="Quelle est la couleur des sécrétions?"
                  v-model="form.childSecretionsColor"
                  :items="['Blanche', 'Jaune', 'Verte']"
                  v-if="form.childBlowingNose"
                ></v-select>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <!-- Bouton de soumission -->
        <v-btn type="submit" color="primary"  :disabled="isSubmitDisabled">Soumettre</v-btn>
      </v-form>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'UpperRespiratoryInfectionForm',
  data() {
    return {
      form: {
        childBarkingCough: false,
        childCoughWorseAtNight: false,
        patientDifficultySwallowing: false,
        patientDrooling: false,
        patientSoreThroat: false,
        patientDifficultySpeaking: false,
        patientVoiceChanged: false,
        patientBlowingNose: false,
        bloodInSecretions: false,
        secretionsColor: '',
        childDifficultySwallowing: false,
        childDrooling: false,
        childSoreThroat: false,
        childDifficultySpeaking: false,
        childVoiceChanged: false,
        childBlowingNose: false,
        childBloodInSecretions: false,
        childSecretionsColor: ''
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

      // Ajouter des sections au rapport si les questions ont été répondues
      if (this.form.childBarkingCough) {
        report += 'L’enfant a une toux aboyante.\n';
      }
      if (this.form.childCoughWorseAtNight) {
        report += 'La toux de l’enfant est pire la nuit.\n';
      }
      if (this.form.patientDifficultySwallowing) {
        report += 'Le patient a de la difficulté à avaler.\n';
      }
      if (this.form.patientDrooling) {
        report += 'Le patient a salivé.\n';
      }
      if (this.form.patientSoreThroat) {
        report += 'Le patient a mal à la gorge.\n';
      }
      if (this.form.patientDifficultySpeaking) {
        report += 'Le patient a de la difficulté à parler.\n';
        if (this.form.patientVoiceChanged) {
          report += 'La voix du patient a changé.\n';
        }
      }
      if (this.form.patientBlowingNose) {
        report += 'Le patient se mouche.\n';
        if (this.form.bloodInSecretions) {
          report += 'Il y avait du sang dans les sécrétions.\n';
        }
        if (this.form.secretionsColor) {
          report += `La couleur des sécrétions nasales est ${this.form.secretionsColor}.\n`;
        }
      }
      if (this.form.childDifficultySwallowing) {
        report += 'L’enfant a de la difficulté à avaler.\n';
      }
      if (this.form.childDrooling) {
        report += 'L’enfant a salivé de façon excessive.\n';
      }
      if (this.form.childSoreThroat) {
        report += 'L’enfant a mal à la gorge.\n';
      }
      if (this.form.childDifficultySpeaking) {
        report += 'L’enfant a de la difficulté à parler.\n';
        if (this.form.childVoiceChanged) {
          report += 'La voix de l’enfant a changé.\n';
        }
      }
      if (this.form.childBlowingNose) {
        report += 'L’enfant se mouche.\n';
        if (this.form.childBloodInSecretions) {
          report += 'Il y avait du sang dans les sécrétions nasales de l’enfant.\n';
        }
        if (this.form.childSecretionsColor) {
          report += `La couleur des sécrétions de l’enfant est ${this.form.childSecretionsColor}.\n`;
        }
      }

      // Émettre le rapport au parent
      this.$emit('submit-report', report.trim());
    }
  }
};
</script>
