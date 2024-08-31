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
                <v-radio-group v-model="form.unprotectedSex" row>
                  <p>Avez-vous eu des relations sexuelles non protégées ?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.thinksPregnant" row>
                  <p>Pensez-vous être enceinte ?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                  <v-radio label="Peut-être" value="peut-être"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12" v-if="form.thinksPregnant === 'oui' || form.thinksPregnant === 'peut-être'">
                <v-text-field
                  label="Depuis combien de semaines ?"
                  v-model="form.weeksPregnant"
                  type="number"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.vaginalDischarge" row>
                  <p>Avez-vous des pertes vaginales ?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12" v-if="form.vaginalDischarge === 'oui'">
                <v-checkbox
                  label="Du sang"
                  v-model="form.dischargeTypes.blood"
                ></v-checkbox>
                <v-checkbox
                  label="Écoulements épais blanchâtres (ressemblant à du fromage cottage)"
                  v-model="form.dischargeTypes.thickWhite"
                ></v-checkbox>
              </v-col>

              <v-col cols="12" v-if="form.vaginalDischarge === 'oui'">
                <v-text-field
                  label="De quelle couleur sont les pertes ?"
                  v-model="form.dischargeColor"
                ></v-text-field>
                <v-text-field
                  label="Y avait-il une odeur ?"
                  v-model="form.dischargeOdor"
                ></v-text-field>
                <v-text-field
                  label="Quantité des pertes ? Combien de serviettes hygiéniques avez-vous utilisées ?"
                  v-model="form.dischargeQuantity"
                  type="number"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.itching" row>
                  <p>Ressentez-vous des démangeaisons ?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.sores" row>
                  <p>Est-ce qu’il y a présence d’une plaie, d’abrasion en bas/entre les jambes ?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.recentAbortion" row>
                  <p>Avez-vous eu un avortement dernièrement ?</p>
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
  name: 'Bloodvigina',
  data() {
    return {
      form: {
        unprotectedSex: '',
        thinksPregnant: '',
        weeksPregnant: '',
        vaginalDischarge: '',
        dischargeTypes: {
          blood: false,
          thickWhite: false
        },
        dischargeColor: '',
        dischargeOdor: '',
        dischargeQuantity: '',
        itching: '',
        sores: '',
        recentAbortion: ''
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
      const reportParts = [];

      if (this.form.unprotectedSex) {
        reportParts.push(`- Relations sexuelles non protégées: ${this.form.unprotectedSex}`);
      }
      if (this.form.thinksPregnant) {
        reportParts.push(`- Pense être enceinte: ${this.form.thinksPregnant}`);
      }
      if (this.form.weeksPregnant) {
        reportParts.push(`- Nombre de semaines: ${this.form.weeksPregnant}`);
      }
      if (this.form.vaginalDischarge) {
        reportParts.push(`- Pertes vaginales: ${this.form.vaginalDischarge}`);
        const dischargeDetails = [];
        if (this.form.dischargeTypes.blood) {
          dischargeDetails.push('du sang');
        }
        if (this.form.dischargeTypes.thickWhite) {
          dischargeDetails.push('écoulements épais blanchâtres');
        }
        if (dischargeDetails.length > 0) {
          reportParts.push(`  - Types de pertes: ${dischargeDetails.join(', ')}`);
        }
        if (this.form.dischargeColor) {
          reportParts.push(`  - Couleur des pertes: ${this.form.dischargeColor}`);
        }
        if (this.form.dischargeOdor) {
          reportParts.push(`  - Odeur des pertes: ${this.form.dischargeOdor}`);
        }
        if (this.form.dischargeQuantity) {
          reportParts.push(`  - Quantité des pertes: ${this.form.dischargeQuantity} serviettes`);
        }
      }
      if (this.form.itching) {
        reportParts.push(`- Démangeaisons: ${this.form.itching}`);
      }
      if (this.form.sores) {
        reportParts.push(`- Présence de plaies/abrasions: ${this.form.sores}`);
      }
      if (this.form.recentAbortion) {
        reportParts.push(`- Avortement récent: ${this.form.recentAbortion}`);
      }

      // Compile the final report
      const result = reportParts.join('\n');

      // Emit the formatted report to parent
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
