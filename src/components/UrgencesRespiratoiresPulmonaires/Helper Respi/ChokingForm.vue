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
                <v-text-field
                  label="Vous sentez-vous étouffé/étouffée ?"
                  v-model="form.patientChoking"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-select
                  label="Pouvez-vous :"
                  v-model="form.patientCanDo"
                  :items="['Parler', 'Tousser', 'Respirer']"
                  multiple
                ></v-select>
              </v-col>
              <v-col cols="12">
                <p>Étiez-vous en train de manger quand vous vous êtes étouffé/étouffée ?</p>
                <v-radio-group v-model="form.patientEating" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <p>Est-ce que ça vous arrive souvent ?</p>
                <v-radio-group v-model="form.patientOften" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>

            <!-- Instructions pour le patient dans un v-alert -->
            <v-alert type="info" dense>
              <p><strong>Instructions pour le patient :</strong></p>
              <p>Je vais me placer derrière vous pour :</p>
              <ul>
                <li>faire des poussées abdominales.</li>
                <li>faire des poussées thoraciques.</li>
                <li>vous taper dans le dos.</li>
              </ul>
              <p>Ne bougez pas.</p>
            </v-alert>

            <!-- Compressions thoraciques -->
            <v-row>
              <v-col cols="12">
                <v-checkbox
                  label="Des compressions thoraciques ont-elles été effectuées ?"
                  v-model="form.chestCompressionsDone"
                ></v-checkbox>
              </v-col>
              <v-col cols="12" v-if="form.chestCompressionsDone">
                <v-checkbox
                  label="Les compressions thoraciques ont-elles été efficaces ?"
                  v-model="form.chestCompressionsEffective"
                ></v-checkbox>
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
                <v-text-field
                  label="Depuis combien de temps s’est-il étouffé/s’est-elle étouffée ?"
                  v-model="form.witnessTime"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <p>Avez-vous donné des traitements avant notre arrivée ?</p>
                <v-radio-group v-model="form.witnessTreatment" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
                <v-text-field
                  v-if="form.witnessTreatment === 'oui'"
                  label="Qu’a-t-il/Qu’a-t-elle/Qu’avez-vous fait ?"
                  v-model="form.witnessAction"
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
  name: 'ChokingForm',
  data() {
    return {
      form: {
        patientChoking: '',
        patientCanDo: [],
        patientEating: '',
        patientOften: '',
        witnessTime: '',
        witnessTreatment: '',
        witnessAction: '',
        chestCompressionsDone: false,
        chestCompressionsEffective: false
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
      formatPatientSection() {
        return `
      Questions au Patient:
      - Étouffé(e) : ${this.form.patientChoking || 'Non renseigné'}
      - Peut : ${this.form.patientCanDo.length ? this.form.patientCanDo.join(', ') : 'Aucune sélection'}
      - Mangeait : ${this.form.patientEating || 'Non renseigné'}
      - Fréquence : ${this.form.patientOften || 'Non renseigné'}
    `;
      },
      formatWitnessSection() {
        return `
      Questions au Témoin:
      - Temps d'étouffement : ${this.form.witnessTime || 'Non renseigné'}
      - Traitement avant arrivée : ${this.form.witnessTreatment || 'Non renseigné'}
      - Action : ${this.form.witnessTreatment === 'oui' ? this.form.witnessAction : 'Aucune action enregistrée'}
    `;
      },
      formatChestCompressionsSection() {
        return `
      Compressions thoraciques:
      - Effectuées : ${this.form.chestCompressionsDone ? 'Oui' : 'Non'}
      - Efficaces : ${this.form.chestCompressionsDone ? (this.form.chestCompressionsEffective ? 'Oui' : 'Non') : 'Non applicable'}
    `;
      },
      submitForm() {
        this.isSubmitDisabled = true;
        const result = `
      ${this.formatPatientSection()}
      ${this.formatWitnessSection()}
      ${this.formatChestCompressionsSection()}
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
