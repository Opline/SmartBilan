<template>
  <v-app>
    <v-container>
      <v-form ref="form" @submit.prevent="submitForm">
        <!-- Section pour le patient -->
        <v-card class="mb-5">
          <v-card-title class="headline grey lighten-2">
            Questions au Patient/À la Patiente
          </v-card-title>
          <v-card-text>
            <!-- Questions pour la dépendance à l'alcool -->
            <v-row>
              <v-col cols="12">
                <v-radio-group
                  v-model="form.alcoholDependency"
                  row
                  :rules="[v => v !== '' || 'Veuillez sélectionner une option']"
                  label="Avez-vous une dépendance à l’alcool?"
                >
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12" v-if="form.alcoholDependency === 'oui'">
                <v-radio-group
                  v-model="form.drunkToday"
                  row
                  label="Avez-vous bu aujourd’hui?"
                >
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12" v-if="form.drunkToday === 'oui'">
                <v-text-field
                  label="Qu’est-ce que vous avez bu?"
                  v-model="form.whatDrank"
                ></v-text-field>
                <v-text-field
                  label="Quelle quantité avez-vous bue?"
                  v-model="form.quantityDrank"
                ></v-text-field>
                <v-text-field
                  label="Quelle quantité buvez-vous d’habitude?"
                  v-model="form.usualQuantity"
                ></v-text-field>
              </v-col>

              <v-col cols="12" v-if="form.drunkToday === 'non' && form.alcoholDependency === 'oui'">
                <v-radio-group
                  v-model="form.withdrawalSymptoms"
                  row
                  label="Avez-vous eu des signes ou des symptômes de sevrage?"
                >
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12" v-if="form.alcoholDependency === 'oui'">
                <v-text-field
                  label="Quand avez-vous pris votre dernier verre?"
                  v-model="form.lastDrinkTime"
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
  name: 'Alcohol',
  data() {
    return {
      form: {
        alcoholDependency: '',
        drunkToday: '',
        whatDrank: '',
        quantityDrank: '',
        usualQuantity: '',
        withdrawalSymptoms: '',
        lastDrinkTime: ''
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
      const sections = [];

      if (this.form.alcoholDependency) {
        sections.push(`- Dépendance à l'alcool : ${this.form.alcoholDependency}`);

        if (this.form.alcoholDependency === 'oui') {
          if (this.form.drunkToday) {
            sections.push(`- A bu aujourd'hui : ${this.form.drunkToday}`);

            if (this.form.drunkToday === 'oui') {
              if (this.form.whatDrank) sections.push(`  - Ce qui a été bu : ${this.form.whatDrank}`);
              if (this.form.quantityDrank) sections.push(`  - Quantité bue : ${this.form.quantityDrank}`);
              if (this.form.usualQuantity) sections.push(`  - Quantité habituelle : ${this.form.usualQuantity}`);
            } else if (this.form.withdrawalSymptoms) {
              sections.push(`  - Symptômes de sevrage : ${this.form.withdrawalSymptoms}`);
            }

            if (this.form.lastDrinkTime) {
              sections.push(`- Dernier verre : ${this.form.lastDrinkTime}`);
            }
          }
        }
      }

      const result = sections.join('\n');

      this.$emit('submit-form', result);
    }
  }
};
</script>

<style>
.mb-5 {
  margin-bottom: 20px;
}
</style>
