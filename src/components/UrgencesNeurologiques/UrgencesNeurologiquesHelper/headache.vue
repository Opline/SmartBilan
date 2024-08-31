<template>
  <v-app>
    <v-container>
      <v-form ref="form" @submit.prevent="submitForm">
        <!-- Section pour le patient -->
        <v-card class="mb-5">
          <v-card-title class="headline grey lighten-2">
            AU PATIENT/À LA PATIENTE
          </v-card-title>
          <v-card-text>
            <v-row>
              <!-- Depuis quand avez-vous mal à la tête? -->
              <v-col cols="12">
                <v-text-field
                  label="Depuis quand avez-vous mal à la tête?"
                  v-model="form.headacheDuration"
                ></v-text-field>
              </v-col>

              <!-- Est-ce que ça a commencé lentement ou soudainement? -->
              <v-col cols="12">
                <v-radio-group v-model="form.headacheOnset" row>
                  <v-radio label="Lentement" value="lentement"></v-radio>
                  <v-radio label="Soudainement" value="soudainement"></v-radio>
                </v-radio-group>
              </v-col>

              <!-- Quel type de mal de tête avez-vous eu? -->
              <v-col cols="12">
                <v-select
                  label="Quel type de mal de tête avez-vous eu?"
                  v-model="form.headacheType"
                  :items="['Mal de tête dû à la tension', 'Migraine', 'Algie vasculaire de la face', 'Sinusite/céphalée due à la sinusite']"
                ></v-select>
              </v-col>

              <!-- Pouvez-vous décrire la douleur? -->
              <v-col cols="12">
                <v-select
                  label="Pouvez-vous décrire la douleur?"
                  v-model="form.painDescription"
                  :items="['Sensation d’étau', 'Intense', 'Pulsative', 'De serrement']"
                  multiple
                ></v-select>
              </v-col>

              <!-- Sur une échelle de 0 à 10, combien donneriez-vous à votre douleur aujourd’hui? -->
              <v-col cols="12">
                <v-text-field
                  label="Sur une échelle de 0 à 10, combien donneriez-vous à votre douleur aujourd’hui?"
                  type="number"
                  v-model="form.painScale"
                  :rules="[v => v >= 0 && v <= 10 || 'Veuillez entrer un nombre entre 0 et 10']"
                ></v-text-field>
              </v-col>

              <!-- Avez-vous déjà ressenti cette douleur auparavant? -->
              <v-col cols="12">
                <v-radio-group v-model="form.pastPain" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <!-- (Si oui) Que faites-vous pour vous soulager? -->
              <v-col cols="12" v-if="form.pastPain === 'oui'">
                <v-text-field
                  label="Que faites-vous pour vous soulager?"
                  v-model="form.painReliefMethod"
                ></v-text-field>
              </v-col>

              <!-- Avez-vous pris un médicament pour soulager la douleur? -->
              <v-col cols="12">
                <v-radio-group v-model="form.takenMedication" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <!-- (Si oui) Lequel? -->
              <v-col cols="12" v-if="form.takenMedication === 'oui'">
                <v-text-field
                  label="Lequel?"
                  v-model="form.medicationName"
                ></v-text-field>
              </v-col>

              <!-- (Si oui) Ce médicament vous a-t-il soulagé/soulagée? -->
              <v-col cols="12" v-if="form.takenMedication === 'oui'">
                <v-radio-group v-model="form.medicationEffective" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <!-- Est-ce que votre douleur se déplace? -->
              <v-col cols="12">
                <v-radio-group v-model="form.painMoves" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <!-- Est-ce que la lumière vous dérange? -->
              <v-col cols="12">
                <v-radio-group v-model="form.lightSensitivity" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <!-- Avez-vous des nausées? -->
              <v-col cols="12">
                <v-radio-group v-model="form.nausea" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <!-- (Si oui) Avez-vous vomi? -->
              <v-col cols="12" v-if="form.nausea === 'oui'">
                <v-radio-group v-model="form.vomiting" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <!-- (Si oui) Est-ce que les vomissements étaient en jet? -->
              <v-col cols="12" v-if="form.vomiting === 'oui'">
                <v-radio-group v-model="form.projectileVomiting" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <!-- Est-ce que votre mal de tête augmente quand vous penchez la tête vers l’avant? -->
              <v-col cols="12">
                <v-radio-group v-model="form.worseningPainWhenBending" row>
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
  name:'headache' ,
  data() {
    return {
      form: {
        headacheDuration: '',
        headacheOnset: '',
        headacheType: '',
        painDescription: [],
        painScale: '',
        pastPain: '',
        painReliefMethod: '',
        takenMedication: '',
        medicationName: '',
        medicationEffective: '',
        painMoves: '',
        lightSensitivity: '',
        nausea: '',
        vomiting: '',
        projectileVomiting: '',
        worseningPainWhenBending: ''
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

      if (this.form.headacheDuration) {
        report += `Depuis quand avez-vous mal à la tête?: ${this.form.headacheDuration}\n`;
      }
      if (this.form.headacheOnset) {
        report += `Est-ce que ça a commencé lentement ou soudainement?: ${this.form.headacheOnset}\n`;
      }
      if (this.form.headacheType) {
        report += `Quel type de mal de tête avez-vous eu?: ${this.form.headacheType}\n`;
      }
      if (this.form.painDescription.length) {
        report += `Pouvez-vous décrire la douleur?: ${this.form.painDescription.join(', ')}\n`;
      }
      if (this.form.painScale) {
        report += `Échelle de douleur: ${this.form.painScale}/10\n`;
      }
      if (this.form.pastPain) {
        report += `Avez-vous déjà ressenti cette douleur auparavant?: ${this.form.pastPain}\n`;
        if (this.form.pastPain === 'oui' && this.form.painReliefMethod) {
          report += `Que faites-vous pour vous soulager?: ${this.form.painReliefMethod}\n`;
        }
      }
      if (this.form.takenMedication) {
        report += `Avez-vous pris un médicament pour soulager la douleur?: ${this.form.takenMedication}\n`;
        if (this.form.takenMedication === 'oui') {
          if (this.form.medicationName) {
            report += `Lequel?: ${this.form.medicationName}\n`;
          }
          if (this.form.medicationEffective) {
            report += `Ce médicament vous a-t-il soulagé?: ${this.form.medicationEffective}\n`;
          }
        }
      }
      if (this.form.painMoves) {
        report += `Est-ce que votre douleur se déplace?: ${this.form.painMoves}\n`;
      }
      if (this.form.lightSensitivity) {
        report += `Est-ce que la lumière vous dérange?: ${this.form.lightSensitivity}\n`;
      }
      if (this.form.nausea) {
        report += `Avez-vous des nausées?: ${this.form.nausea}\n`;
        if (this.form.nausea === 'oui') {
          if (this.form.vomiting) {
            report += `Avez-vous vomi?: ${this.form.vomiting}\n`;
          }
          if (this.form.vomiting === 'oui' && this.form.projectileVomiting) {
            report += `Est-ce que les vomissements étaient en jet?: ${this.form.projectileVomiting}\n`;
          }
        }
      }
      if (this.form.worseningPainWhenBending) {
        report += `Est-ce que votre mal de tête augmente quand vous penchez la tête vers l’avant?: ${this.form.worseningPainWhenBending}\n`;
      }

      // Émet le compte rendu au parent seulement s'il y a du contenu
      if (report.trim()) {
        this.$emit('submit-form', report.trim());
      }
    }
  }
};
</script>

<style>
.mb-5 {
  margin-bottom: 20px;
}
</style>
