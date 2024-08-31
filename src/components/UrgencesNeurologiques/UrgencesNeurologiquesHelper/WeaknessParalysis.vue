<template>
  <v-app>
    <v-container>
      <v-form ref="form" @submit.prevent="submitForm">
        <!-- Section pour le patient -->
        <v-card class="mb-5">
          <v-card-title class="headline grey lighten-2">
            Questions au Patient/à la Patiente
          </v-card-title>
          <v-card-text>
            <!-- Questions pour le patient -->
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Comment vous sentez-vous en ce moment?"
                  v-model="form.patientFeeling"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-radio-group v-model="form.patientHeadacheNow" row>
                  <p>Avez-vous mal à la tête maintenant?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12" v-if="form.patientHeadacheNow === 'oui'">
                <v-radio-group v-model="form.patientHeadacheBefore" row>
                  <p>Avez-vous eu mal avant?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <p>Si vous comprenez ce que je dis, clignez des yeux une fois/serrez ma main.</p>
              </v-col>
              <v-col cols="12">
                <v-radio-group v-model="form.patientCanWrite" row>
                  <p>Êtes-vous capable d’écrire?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <p>Souffrez-vous :</p>
                <v-checkbox
                  label="a) de haute tension artérielle?"
                  v-model="form.patientHighBloodPressure"
                ></v-checkbox>
                <v-checkbox
                  label="b) d’autres problèmes médicaux?"
                  v-model="form.patientOtherMedicalIssues"
                ></v-checkbox>
              </v-col>
              <v-col cols="12">
                <v-radio-group v-model="form.patientSeizure" row>
                  <p>Avez-vous eu une convulsion ou des tremblements?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-radio-group v-model="form.patientStrokeHistory" row>
                  <p>Avez-vous déjà eu un AVC (accident vasculaire cérébral) ou un mini AVC (ICT, ischémie cérébrale transitoire)?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12" v-if="form.patientStrokeHistory === 'oui'">
                <v-text-field
                  label="Il y a combien de temps?"
                  v-model="form.patientStrokeWhen"
                ></v-text-field>
                <v-text-field
                  label="Est-ce que vous avez gardé des séquelles permanentes?"
                  v-model="form.patientStrokeSequelae"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-radio-group v-model="form.patientWeakness" row>
                  <p>Vous sentez-vous faible d’un côté?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-radio-group v-model="form.patientMobilityIssues" row>
                  <p>Avez-vous de la difficulté à vous déplacer?</p>
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
            Questions au Témoin/à la Témoin
          </v-card-title>
          <v-card-text>
            <!-- Questions pour le témoin -->
            <v-row>
              <v-col cols="12">
                <v-radio-group v-model="form.witnessSeizure" row>
                  <p>Est-ce qu’il/elle a eu une convulsion ou des tremblements?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Quand l’avez-vous vu/vue dans son état normal pour la dernière fois?"
                  v-model="form.witnessLastSeenNormal"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-radio-group v-model="form.witnessFoundInNormalState" row>
                  <p>Est-ce que vous l’avez trouvé/trouvée dans son état habituel?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-radio-group v-model="form.witnessSpeechNormal" row>
                  <p>Est-ce qu’il/elle parle/raisonne comme d’habitude et à la même vitesse que d’habitude?</p>
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
  name: 'WeaknessParalysis',
  data() {
    return {
      form: {
        patientFeeling: '',
        patientHeadacheNow: '',
        patientHeadacheBefore: '',
        patientCanWrite: '',
        patientHighBloodPressure: false,
        patientOtherMedicalIssues: false,
        patientSeizure: '',
        patientStrokeHistory: '',
        patientStrokeWhen: '',
        patientStrokeSequelae: '',
        patientWeakness: '',
        patientMobilityIssues: '',
        witnessSeizure: '',
        witnessLastSeenNormal: '',
        witnessFoundInNormalState: '',
        witnessSpeechNormal: '',
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

      // Génération du compte rendu pour le patient
      if (this.form.patientFeeling) {
        report += `Comment vous sentez-vous en ce moment? ${this.form.patientFeeling}\n`;
      }
      if (this.form.patientHeadacheNow) {
        report += `Avez-vous mal à la tête maintenant? ${this.form.patientHeadacheNow}\n`;
        if (this.form.patientHeadacheBefore && this.form.patientHeadacheNow === 'oui') {
          report += `- Avez-vous eu mal avant? ${this.form.patientHeadacheBefore}\n`;
        }
      }
      if (this.form.patientCanWrite) {
        report += `Êtes-vous capable d’écrire? ${this.form.patientCanWrite}\n`;
      }
      if (this.form.patientHighBloodPressure) {
        report += `Souffrez-vous de haute tension artérielle? Oui\n`;
      }
      if (this.form.patientOtherMedicalIssues) {
        report += `Souffrez-vous d’autres problèmes médicaux? Oui\n`;
      }
      if (this.form.patientSeizure) {
        report += `Avez-vous eu une convulsion ou des tremblements? ${this.form.patientSeizure}\n`;
      }
      if (this.form.patientStrokeHistory) {
        report += `Avez-vous déjà eu un AVC ou un mini AVC? ${this.form.patientStrokeHistory}\n`;
        if (this.form.patientStrokeHistory === 'oui') {
          if (this.form.patientStrokeWhen) {
            report += `- Il y a combien de temps? ${this.form.patientStrokeWhen}\n`;
          }
          if (this.form.patientStrokeSequelae) {
            report += `- Est-ce que vous avez gardé des séquelles permanentes? ${this.form.patientStrokeSequelae}\n`;
          }
        }
      }
      if (this.form.patientWeakness) {
        report += `Vous sentez-vous faible d’un côté? ${this.form.patientWeakness}\n`;
      }
      if (this.form.patientMobilityIssues) {
        report += `Avez-vous de la difficulté à vous déplacer? ${this.form.patientMobilityIssues}\n`;
      }

      // Génération du compte rendu pour le témoin
      if (this.form.witnessSeizure) {
        report += `Est-ce qu’il/elle a eu une convulsion ou des tremblements? ${this.form.witnessSeizure}\n`;
      }
      if (this.form.witnessLastSeenNormal) {
        report += `Quand l’avez-vous vu/vue dans son état normal pour la dernière fois? ${this.form.witnessLastSeenNormal}\n`;
      }
      if (this.form.witnessFoundInNormalState) {
        report += `Est-ce que vous l’avez trouvé/trouvée dans son état habituel? ${this.form.witnessFoundInNormalState}\n`;
      }
      if (this.form.witnessSpeechNormal) {
        report += `Est-ce qu’il/elle parle/raisonne comme d’habitude et à la même vitesse que d’habitude? ${this.form.witnessSpeechNormal}\n`;
      }

      // Émission du compte rendu au composant parent
      this.$emit('submit-report', report.trim());
    }
  }
};
</script>

<style>
.mb-5 {
  margin-bottom: 20px;
}
</style>
