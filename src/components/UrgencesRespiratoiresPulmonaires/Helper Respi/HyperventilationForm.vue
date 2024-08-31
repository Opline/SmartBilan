<template>
  <v-app>
    <v-container>
      <v-form ref="form" @submit.prevent="submitForm">
        <!-- Section pour le syndrome d'hyperventilation -->
        <v-card class="mb-5">
          <v-card-title class="headline grey lighten-2">
            Questions au Patient - Syndrome d’hyperventilation
          </v-card-title>
          <v-card-text>
            <!-- Questions pour le patient concernant le syndrome d'hyperventilation -->
            <v-row>
              <v-col cols="12">
                <v-radio-group v-model="form.hyperventilationFirstTime" row>
                  <p>Est-ce la première fois que ça arrive?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Comment le problème a-t-il commencé?"
                  v-model="form.hyperventilationStart"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-radio-group v-model="form.hyperventilationNumbness" row>
                  <p>Avez-vous des engourdissements au visage, aux doigts, aux orteils ou ailleurs?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-radio-group v-model="form.hyperventilationChestPain" row>
                  <p>Avez-vous une douleur thoracique?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>

            <!-- Instructions pour le patient dans un v-alert -->
            <v-alert type="info" dense>
              <p><strong>Instructions pour le patient :</strong></p>
              <p>Les spasmes aux doigts et aux orteils sont présents parce que vous respirez trop rapidement.</p>
              <p>Aussi longtemps que vous allez respirer rapidement, les engourdissements et les spasmes vont rester.</p>
              <p>Vous devez ralentir votre respiration.</p>
              <p>S’il vous plaît : </p>
              <ul>
                <li>prenez une grande respiration par le nez ;</li>
                <li>retenez votre respiration pendant (nombre) secondes ; et</li>
                <li>expirez lentement par la bouche.</li>
              </ul>
            </v-alert>
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
  name:'HyperventilationForm ',
  data() {
    return {
      form: {
        // Nouveau formulaire pour le syndrome d'hyperventilation
        hyperventilationFirstTime: '',
        hyperventilationStart: '',
        hyperventilationNumbness: '',
        hyperventilationChestPain: '',
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
    formatHyperventilationSection() {
      return `
      Questions au Patient - Syndrome d’hyperventilation:
      - Première fois : ${this.form.hyperventilationFirstTime || 'Non renseigné'}
      - Début du problème : ${this.form.hyperventilationStart || 'Non renseigné'}
      - Engourdissements : ${this.form.hyperventilationNumbness || 'Non renseigné'}
      - Douleur thoracique : ${this.form.hyperventilationChestPain || 'Non renseigné'}
    `;
    },
    submitForm() {
      this.isSubmitDisabled = true;
      const result = `
      ${this.formatHyperventilationSection()}
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
