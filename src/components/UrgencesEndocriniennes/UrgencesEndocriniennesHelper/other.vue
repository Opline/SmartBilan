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
            <!-- Questions pour le patient -->
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Faites-vous de l’hypo ou de l’hyperthyroïdie ?"
                  v-model="form.thyroidCondition"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-radio-group v-model="form.synthroid" row>
                  <v-radio label="Prenez-vous du SynthroidMD ?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-radio-group v-model="form.laserTreatment" row>
                  <v-radio label="Avez-vous reçu des traitements au laser pour votre hyperthyroïdie ?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-radio-group v-model="form.thyroidSurgery" row>
                  <v-radio label="Avez-vous été opéré/opérée pour vos problèmes de glande thyroïde ?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-radio-group v-model="form.cushingDisease" row>
                  <v-radio label="Avez-vous la maladie de Cushing ?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-radio-group v-model="form.corticosteroids" row>
                  <v-radio label="Prenez-vous des corticostéroïdes ?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-radio-group v-model="form.addisonDisease" row>
                  <v-radio label="Avez-vous la maladie d’Addison ?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-radio-group v-model="form.steroidsStopped" row>
                  <v-radio label="Avez-vous cessé subitement de prendre vos corticostéroïdes ?" value="oui"></v-radio>
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
  name: 'other',
  data() {
    return {
      form: {
        thyroidCondition: '',
        synthroid: '',
        laserTreatment: '',
        thyroidSurgery: '',
        cushingDisease: '',
        corticosteroids: '',
        addisonDisease: '',
        steroidsStopped: ''
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
      let result = '';

      if (this.form.thyroidCondition) {
        result += `- Hypo/Hyperthyroïdie : ${this.form.thyroidCondition}\n`;
      }
      if (this.form.synthroid) {
        result += `- Synthroid : ${this.form.synthroid === 'oui' ? 'Oui' : 'Non'}\n`;
      }
      if (this.form.laserTreatment) {
        result += `- Traitement au laser : ${this.form.laserTreatment === 'oui' ? 'Oui' : 'Non'}\n`;
      }
      if (this.form.thyroidSurgery) {
        result += `- Chirurgie de la thyroïde : ${this.form.thyroidSurgery === 'oui' ? 'Oui' : 'Non'}\n`;
      }
      if (this.form.cushingDisease) {
        result += `- Maladie de Cushing : ${this.form.cushingDisease === 'oui' ? 'Oui' : 'Non'}\n`;
      }
      if (this.form.corticosteroids) {
        result += `- Corticostéroïdes : ${this.form.corticosteroids === 'oui' ? 'Oui' : 'Non'}\n`;
      }
      if (this.form.addisonDisease) {
        result += `- Maladie d’Addison : ${this.form.addisonDisease === 'oui' ? 'Oui' : 'Non'}\n`;
      }
      if (this.form.steroidsStopped) {
        result += `- Cessation des corticostéroïdes : ${this.form.steroidsStopped === 'oui' ? 'Oui' : 'Non'}\n`;
      }

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
