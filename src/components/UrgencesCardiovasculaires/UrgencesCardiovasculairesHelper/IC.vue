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
              <!-- Antécédents d’insuffisance cardiaque -->
              <v-col cols="12">
                <p>Avez-vous des antécédents d’insuffisance cardiaque?</p>
                <v-radio-group v-model="form.heartFailureHistory" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12" v-if="form.heartFailureHistory === 'oui'">
                <v-select
                  label="Gauche ou droite?"
                  v-model="form.heartFailureSide"
                  :items="['Gauche', 'Droite', 'Ne sait pas']"
                ></v-select>
              </v-col>

              <!-- Liquide dans les poumons -->
              <v-col cols="12">
                <v-radio-group v-model="form.lungFluid" row>
                  <p>Avez-vous déjà eu du liquide dans les poumons?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <!-- Jambes enflées -->
              <v-col cols="12">
                <p>Avez-vous récemment eu les jambes enflées?</p>
                <v-radio-group v-model="form.legSwelling" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12" v-if="form.legSwelling === 'oui'">
                <v-select
                  label="Sont-elles plus enflées ou moins enflées aujourd’hui?"
                  v-model="form.legSwellingToday"
                  :items="['Plus enflées', 'Moins enflées']"
                ></v-select>
              </v-col>

              <!-- Difficulté à respirer en position couchée -->
              <v-col cols="12">
                <p>Avez-vous plus de difficulté à respirer en position couchée?</p>
                <v-radio-group v-model="form.breathingDifficultyLying" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12" v-if="form.breathingDifficultyLying === 'oui'">
                <v-text-field
                  label="Depuis quand?"
                  v-model="form.difficultySince"
                ></v-text-field>
                <v-text-field
                  label="Avec combien d’oreillers dormez-vous?"
                  v-model="form.pillowCount"
                  type="number"
                ></v-text-field>
              </v-col>

              <!-- Avez-vous reçu un choc? -->
              <v-col cols="12">
                <v-radio-group v-model="form.receivedShock" row>
                  <p>Avez-vous reçu un choc?</p>
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
  name: 'IC',
  data() {
    return {
      form: {
        heartFailureHistory: '',
        heartFailureSide: '',
        lungFluid: '',
        legSwelling: '',
        legSwellingToday: '',
        breathingDifficultyLying: '',
        difficultySince: '',
        pillowCount: '',
        receivedShock: ''
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
      // Initialisation du compte rendu vide
      let report = 'AU PATIENT/À LA PATIENTE\n';

      // Ajout conditionnel des réponses
      if (this.form.heartFailureHistory) {
        report += `- Antécédents d’insuffisance cardiaque : ${this.form.heartFailureHistory}\n`;
        if (this.form.heartFailureHistory === 'oui' && this.form.heartFailureSide) {
          report += `  - Côté : ${this.form.heartFailureSide}\n`;
        }
      }

      if (this.form.lungFluid) {
        report += `- Liquide dans les poumons : ${this.form.lungFluid}\n`;
      }

      if (this.form.legSwelling) {
        report += `- Jambes enflées récemment : ${this.form.legSwelling}\n`;
        if (this.form.legSwelling === 'oui' && this.form.legSwellingToday) {
          report += `  - Enflure aujourd'hui : ${this.form.legSwellingToday}\n`;
        }
      }

      if (this.form.breathingDifficultyLying) {
        report += `- Difficulté à respirer en position couchée : ${this.form.breathingDifficultyLying}\n`;
        if (this.form.breathingDifficultyLying === 'oui') {
          if (this.form.difficultySince) {
            report += `  - Depuis quand : ${this.form.difficultySince}\n`;
          }
          if (this.form.pillowCount) {
            report += `  - Nombre d'oreillers : ${this.form.pillowCount}\n`;
          }
        }
      }

      if (this.form.receivedShock) {
        report += `- Avez-vous reçu un choc : ${this.form.receivedShock}\n`;
      }

      // Supprimer les lignes vides à la fin
      report = report.trim();

      // Émettre le compte rendu formatté au parent
      this.$emit('submit-form', report);
    }
  }
};
</script>
