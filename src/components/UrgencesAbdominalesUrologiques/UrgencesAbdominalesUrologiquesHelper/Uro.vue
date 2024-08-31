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
                  label="À quand remonte la dernière fois que vous avez uriné?"
                  v-model="form.lastUrination"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-select
                  label="De quelle couleur est votre urine?"
                  v-model="form.urineColor"
                  :items="['Jaune', 'Orange', 'Rouge', 'Transparente']"
                ></v-select>
              </v-col>
              <v-col cols="12">
                <v-checkbox
                  label="Est-ce que votre urine est trouble?"
                  v-model="form.urineCloudy"
                ></v-checkbox>
              </v-col>
              <v-col cols="12">
                <v-checkbox
                  label="Avez-vous remarqué une odeur étrange?"
                  v-model="form.urineSmell"
                ></v-checkbox>
              </v-col>
              <v-col cols="12">
                <v-checkbox
                  label="Avez-vous ressenti de la douleur lorsque vous avez uriné?"
                  v-model="form.painUrination"
                ></v-checkbox>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Combien de fois avez-vous uriné aujourd’hui?"
                  v-model="form.urinationFrequency"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-radio-group v-model="form.urinationFrequencyChange" row>
                  <v-radio label="Est-ce plus souvent que d’habitude?" value="plus"></v-radio>
                  <v-radio label="Est-ce moins souvent que d’habitude?" value="moins"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-checkbox
                  label="Est-ce que la quantité d’urine a changé?"
                  v-model="form.urineAmountChange"
                ></v-checkbox>
              </v-col>
              <v-col cols="12">
                <v-checkbox
                  label="Y avait-il de petits cristaux dans votre urine?"
                  v-model="form.urineCrystals"
                ></v-checkbox>
              </v-col>
              <v-col cols="12">
                <v-checkbox
                  label="Avez-vous déjà eu des pierres aux reins?"
                  v-model="form.kidneyStones"
                ></v-checkbox>
              </v-col>
              <v-col cols="12">
                <v-checkbox
                  label="Faites-vous fréquemment des infections urinaires?"
                  v-model="form.frequentUTIs"
                ></v-checkbox>
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
  name: 'Uro',
  data() {
    return {
      form: {
        lastUrination: '',
        urineColor: '',
        urineCloudy: false,
        urineSmell: false,
        painUrination: false,
        urinationFrequency: '',
        urinationFrequencyChange: '',
        urineAmountChange: false,
        urineCrystals: false,
        kidneyStones: false,
        frequentUTIs: false
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

      if (this.form.lastUrination) {
        sections.push(`- Dernière fois que vous avez uriné : ${this.form.lastUrination}`);
      }

      if (this.form.urineColor) {
        sections.push(`- Couleur de l'urine : ${this.form.urineColor}`);
      }

      if (this.form.urineCloudy) {
        sections.push(`- Urine trouble : Oui`);
      }

      if (this.form.urineSmell) {
        sections.push(`- Odeur étrange : Oui`);
      }

      if (this.form.painUrination) {
        sections.push(`- Douleur à la miction : Oui`);
      }

      if (this.form.urinationFrequency) {
        sections.push(`- Fréquence des mictions aujourd’hui : ${this.form.urinationFrequency}`);
      }

      if (this.form.urinationFrequencyChange) {
        sections.push(`- Changement de fréquence : ${this.form.urinationFrequencyChange === 'plus' ? 'Plus souvent' : 'Moins souvent'} que d’habitude`);
      }

      if (this.form.urineAmountChange) {
        sections.push(`- Changement de quantité d’urine : Oui`);
      }

      if (this.form.urineCrystals) {
        sections.push(`- Présence de cristaux dans l'urine : Oui`);
      }

      if (this.form.kidneyStones) {
        sections.push(`- Antécédents de pierres aux reins : Oui`);
      }

      if (this.form.frequentUTIs) {
        sections.push(`- Infections urinaires fréquentes : Oui`);
      }

      const result = sections.join('\n');

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
