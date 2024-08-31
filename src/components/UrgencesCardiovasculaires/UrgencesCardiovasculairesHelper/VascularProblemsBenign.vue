<template>
  <v-app>
    <v-container>
      <v-form ref="form" @submit.prevent="submitForm">
        <!-- Section pour le patient/la patiente -->
        <v-card class="mb-5">
          <v-card-title class="headline grey lighten-2">
            Questions au Patient/à la Patiente
          </v-card-title>
          <v-card-text>
            <!-- Questions pour le patient/la patiente -->
            <v-row>
              <v-col cols="12">
                <p>Avez-vous des varices aux jambes?</p>
                <v-radio-group v-model="form.hasVaricoseVeins" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <!-- Sous-questions si le patient/la patiente a des varices -->
              <v-col cols="12" v-if="form.hasVaricoseVeins === 'oui'">
                <p>a) Avez-vous reçu des traitements pour vos varices, comme des injections d’agents sclérosants?</p>
                <v-radio-group v-model="form.receivedSclerotherapy" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12" v-if="form.receivedSclerotherapy === 'oui'">
                <p>b) Avez-vous marché pendant trente minutes après vos injections?</p>
                <v-radio-group v-model="form.walkedAfterInjection" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <p>Avez-vous déjà eu une phlébite?</p>
                <v-radio-group v-model="form.hasHadPhlebitis" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <p>Avez-vous eu des douleurs aux jambes récemment?</p>
                <v-radio-group v-model="form.recentLegPain" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <p>Avez-vous des rougeurs aux jambes?</p>
                <v-radio-group v-model="form.hasLegRedness" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <p>Ressentez-vous de la chaleur là où vous avez des douleurs?</p>
                <v-radio-group v-model="form.feelingHeatAtPain" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <p>Avez-vous récemment été inactif/inactive pendant longtemps?</p>
                <v-radio-group v-model="form.recentlyInactive" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <p>Prenez-vous la pilule contraceptive?</p>
                <v-radio-group v-model="form.takingContraceptive" row>
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
  name: 'VascularProblemsBenign',
  data() {
    return {
      isSubmitDisabled: false,
      form: {
        hasVaricoseVeins: '',
        receivedSclerotherapy: '',
        walkedAfterInjection: '',
        hasHadPhlebitis: '',
        recentLegPain: '',
        hasLegRedness: '',
        feelingHeatAtPain: '',
        recentlyInactive: '',
        takingContraceptive: '',
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
    submitForm() {
      this.isSubmitDisabled = true;
      let result = '';

      if (this.form.hasVaricoseVeins) {
        result += `- Varices aux jambes : ${this.form.hasVaricoseVeins}\n`;
        if (this.form.hasVaricoseVeins === 'oui' && this.form.receivedSclerotherapy) {
          result += `  a) Traitement des varices : ${this.form.receivedSclerotherapy}\n`;
          if (this.form.receivedSclerotherapy === 'oui' && this.form.walkedAfterInjection) {
            result += `  b) Marche après injections : ${this.form.walkedAfterInjection}\n`;
          }
        }
      }

      if (this.form.hasHadPhlebitis) {
        result += `- Phlébite : ${this.form.hasHadPhlebitis}\n`;
      }

      if (this.form.recentLegPain) {
        result += `- Douleurs aux jambes récemment : ${this.form.recentLegPain}\n`;
      }

      if (this.form.hasLegRedness) {
        result += `- Rougeurs aux jambes : ${this.form.hasLegRedness}\n`;
      }

      if (this.form.feelingHeatAtPain) {
        result += `- Chaleur là où il y a des douleurs : ${this.form.feelingHeatAtPain}\n`;
      }

      if (this.form.recentlyInactive) {
        result += `- Inactivité récente prolongée : ${this.form.recentlyInactive}\n`;
      }

      if (this.form.takingContraceptive) {
        result += `- Prise de la pilule contraceptive : ${this.form.takingContraceptive}\n`;
      }

      // Émettre l'événement avec le résultat du formulaire au parent
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
