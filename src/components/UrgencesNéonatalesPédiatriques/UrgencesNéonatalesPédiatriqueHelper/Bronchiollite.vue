<template>
  <v-app>
    <v-container>
      <v-form ref="form" @submit.prevent="submitForm">
        <!-- Section pour le témoin -->
        <v-card class="mb-5">
          <v-card-title class="headline grey lighten-2">
            Bronchiolite - Questions au Témoin
          </v-card-title>
          <v-card-text>
            <!-- Depuis quand votre bébé a-t-il/elle de la difficulté à respirer ? -->
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Depuis quand votre bébé a-t-il/elle de la difficulté à respirer ?"
                  v-model="form.difficultyBreathingDuration"
                ></v-text-field>
              </v-col>
            </v-row>

            <!-- La difficulté respiratoire augmente-t-elle en position couchée ? -->
            <v-row>
              <v-col cols="12">
                <p>Est-ce que la difficulté respiratoire augmente en position couchée ?</p>
                <v-radio-group v-model="form.difficultyBreathingLyingDown" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>

            <!-- Avez-vous entendu des sons respiratoires anormaux ? -->
            <v-row>
              <v-col cols="12">
                <p>Avez-vous entendu des sons respiratoires anormaux ?</p>
                <v-radio-group v-model="form.abnormalBreathingSounds" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>

            <!-- Est-ce que votre bébé prend des médicaments pour sa bronchiolite ? -->
            <v-row>
              <v-col cols="12">
                <p>Est-ce que votre bébé prend des médicaments pour sa bronchiolite ?</p>
                <v-radio-group v-model="form.takesMedication" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>

            <!-- Médicaments pris (si oui) -->
            <v-row v-if="form.takesMedication === 'oui'">
              <v-col cols="12">
                <v-text-field
                  label="Lesquels ?"
                  v-model="form.medicationName"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Depuis combien de temps les prend-il/elle ?"
                  v-model="form.medicationDuration"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <!-- Bouton de soumission -->
        <v-btn type="submit" color="primary">Soumettre</v-btn>
      </v-form>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "Bronchiollite",
  data() {
    return {
      form: {
        difficultyBreathingDuration: '',
        difficultyBreathingLyingDown: '',
        abnormalBreathingSounds: '',
        takesMedication: '',
        medicationName: '',
        medicationDuration: ''
      }
    };
  },
  methods: {
    formatReport() {
      let report = 'Bronchiolite - Compte Rendu:\n';

      if (this.form.difficultyBreathingDuration) {
        report += `- Difficulté à respirer depuis : ${this.form.difficultyBreathingDuration}\n`;
      }

      if (this.form.difficultyBreathingLyingDown) {
        report += `- Difficulté respiratoire en position couchée : ${this.form.difficultyBreathingLyingDown}\n`;
      }

      if (this.form.abnormalBreathingSounds) {
        report += `- Sons respiratoires anormaux : ${this.form.abnormalBreathingSounds}\n`;
      }

      if (this.form.takesMedication === 'oui') {
        report += `- Médicaments pris pour la bronchiolite : Oui\n`;

        if (this.form.medicationName) {
          report += `  a) Médicaments : ${this.form.medicationName}\n`;
        }

        if (this.form.medicationDuration) {
          report += `  b) Depuis : ${this.form.medicationDuration}\n`;
        }
      } else if (this.form.takesMedication === 'non') {
        report += `- Médicaments pris pour la bronchiolite : Non\n`;
      }

      return report.trim(); // Retirer les espaces inutiles
    },
    submitForm() {
      const report = this.formatReport();
      this.$emit('submit-form', report);
    }
  }
};
</script>

<style>
.mb-5 {
  margin-bottom: 20px;
}
</style>

