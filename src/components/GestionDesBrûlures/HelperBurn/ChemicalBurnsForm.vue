<template>
  <v-app>
    <v-container>
      <v-form ref="form" @submit.prevent="submitForm">
        <!-- Section pour le patient/la patiente concernant le produit chimique -->
        <v-card class="mb-5">
          <v-card-title class="headline grey lighten-2">
            Questions sur le produit chimique
          </v-card-title>
          <v-card-text>
            <!-- Questions pour le patient/la patiente -->
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Avec quel produit avez-vous été en contact?"
                  v-model="form.productContact"
                  :rules="[v => !!v || 'Ce champ est requis']"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <p>Avez-vous la fiche d'information du produit?</p>
                <v-radio-group v-model="form.productInfoAvailable" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Avez-vous le nom du produit chimique?"
                  v-model="form.chemicalName"
                  :rules="[v => !!v || 'Ce champ est requis']"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <p>Est-ce un produit chimique sous forme de liquide ou de poudre?</p>
                <v-radio-group v-model="form.chemicalForm" row>
                  <v-radio label="Liquide" value="liquide"></v-radio>
                  <v-radio label="Poudre" value="poudre"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <p>Avez-vous eu du produit chimique dans les yeux?</p>
                <v-radio-group v-model="form.chemicalInEyes" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12" v-if="form.chemicalInEyes === 'oui'">
                <p>Portez-vous des verres de contact?</p>
                <v-radio-group v-model="form.contactLenses" row>
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
  name: 'ChemicalBurnsForm',
  data() {
    return {
      form: {
        productContact: '',
        productInfoAvailable: '',
        chemicalName: '',
        chemicalForm: '',
        chemicalInEyes: '',
        contactLenses: ''
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
    formatChemicalSection() {
      return `
      Questions sur le produit chimique:
      - Produit en contact : ${this.form.productContact || 'Non renseigné'}
      - Fiche d'information disponible : ${this.form.productInfoAvailable || 'Non renseigné'}
      - Nom du produit chimique : ${this.form.chemicalName || 'Non renseigné'}
      - Forme du produit chimique : ${this.form.chemicalForm || 'Non renseigné'}
      - Produit chimique dans les yeux : ${this.form.chemicalInEyes || 'Non renseigné'}
      - Verres de contact : ${this.form.chemicalInEyes === 'oui' ? (this.form.contactLenses || 'Non renseigné') : 'Non applicable'}
      `;
    },
    submitForm() {
      this.isSubmitDisabled = true;
      const result = `
      ${this.formatChemicalSection()}
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
