<template>
    <v-container>
      teqsr
      <v-form ref="form" @submit.prevent="submitForm">
        <!-- Section pour le patient/patiente -->
        <v-card class="mb-5">
          <v-card-title class="headline grey lighten-2">
            Cancer du poumon - Questions au Patient/à la Patiente
          </v-card-title>
          <v-card-text>
            <!-- Questions pour le patient -->
            <v-row>
              <v-col cols="12">
                <v-radio-group
                  v-model="form.hasChemotherapy"
                  row
                  :rules="[v => v !== '' || 'Ce champ est requis']"
                  label="Avez-vous fait de la chimiothérapie ?"
                >
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-radio-group
                  v-model="form.hasRadiotherapy"
                  row
                  :rules="[v => v !== '' || 'Ce champ est requis']"
                  label="Avez-vous fait de la radiothérapie ?"
                >
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-radio-group
                  v-model="form.takesMedication"
                  row
                  :rules="[v => v !== '' || 'Ce champ est requis']"
                  label="Prenez-vous des médicaments pour votre cancer du poumon ?"
                >
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12" v-if="form.takesMedication === 'oui'">
                <v-text-field
                  label="Lesquels ?"
                  v-model="form.medicationDetails"
                  :rules="[v => !!v || 'Veuillez spécifier les médicaments']"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-radio-group
                  v-model="form.hasSurgery"
                  row
                  :rules="[v => v !== '' || 'Ce champ est requis']"
                  label="Avez-vous subi une chirurgie ?"
                >
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-radio-group
                  v-model="form.hasLostWeight"
                  row
                  :rules="[v => v !== '' || 'Ce champ est requis']"
                  label="Avez-vous récemment perdu beaucoup de poids ?"
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
</template>

<script>
export default {
  name: 'LungCancerQuestionnaire',
  data() {
    return {
      form: {
        hasChemotherapy: '',
        hasRadiotherapy: '',
        takesMedication: '',
        medicationDetails: '',
        hasSurgery: '',
        hasLostWeight: ''
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
      const formattedResponse = `
      Cancer du poumon - Questions au Patient/à la Patiente:
      - Chimiothérapie : ${this.form.hasChemotherapy === 'oui' ? 'Oui' : 'Non'}
      - Radiothérapie : ${this.form.hasRadiotherapy === 'oui' ? 'Oui' : 'Non'}
      - Médicaments : ${this.form.takesMedication === 'oui' ? 'Oui, ' + this.form.medicationDetails : 'Non'}
      - Chirurgie : ${this.form.hasSurgery === 'oui' ? 'Oui' : 'Non'}
      - Perte de poids récente : ${this.form.hasLostWeight === 'oui' ? 'Oui' : 'Non'}
    `;

      // Émet l'événement de soumission avec le résultat formaté
      this.$emit('submit-form', formattedResponse.trim());
    }
  }
};
</script>

<style>
.mb-5 {
  margin-bottom: 20px;
}
</style>
