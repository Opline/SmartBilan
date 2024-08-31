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
            <v-row>
              <!-- Palpitations question -->
              <v-col cols="12">
                <p>Avez-vous des palpitations?</p>
                <v-radio-group v-model="form.hasPalpitations" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <!-- Questions supplémentaires si palpitations -->
              <v-col cols="12" v-if="form.hasPalpitations === 'oui'">
                <v-text-field
                  label="Depuis quand?"
                  v-model="form.palpitationsDuration"
                ></v-text-field>
                <v-text-field
                  label="Est-ce nouveau pour vous?"
                  v-model="form.isNewPalpitations"
                ></v-text-field>
              </v-col>

              <!-- Étourdissements ou transpiration question -->
              <v-col cols="12">
                <p>
                  Quand vous avez des palpitations, est-ce que vous êtes étourdi/étourdie ou transpirez-vous abondamment?
                </p>
                <v-radio-group v-model="form.dizzyOrSweating" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <!-- Saut de battement de coeur question -->
              <v-col cols="12">
                <v-text-field
                  label="Sentez-vous votre cœur sauter un battement?"
                  v-model="form.heartSkipping"
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
  name: 'Palpitations',
  data() {
    return {
      form: {
        hasPalpitations: '',
        palpitationsDuration: '',
        isNewPalpitations: '',
        dizzyOrSweating: '',
        heartSkipping: '',
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
      // Initialisation du compte rendu
      let report = [];

      // Ajout des réponses au compte rendu seulement si elles existent
      if (this.form.hasPalpitations) {
        report.push(`- Palpitations : ${this.form.hasPalpitations === 'oui' ? 'Oui' : 'Non'}`);
      }

      if (this.form.hasPalpitations === 'oui') {
        if (this.form.palpitationsDuration) {
          report.push(`  - Depuis quand : ${this.form.palpitationsDuration}`);
        }
        if (this.form.isNewPalpitations) {
          report.push(`  - Est-ce nouveau pour vous : ${this.form.isNewPalpitations}`);
        }
      }

      if (this.form.dizzyOrSweating) {
        report.push(`- Étourdi(e) ou transpiration lors de palpitations : ${this.form.dizzyOrSweating === 'oui' ? 'Oui' : 'Non'}`);
      }

      if (this.form.heartSkipping) {
        report.push(`- Cœur qui saute un battement : ${this.form.heartSkipping}`);
      }

      // Conversion du tableau de compte rendu en chaîne de caractères
      const result = report.join('\n');

      // Émettre l'événement au parent avec le compte rendu
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
