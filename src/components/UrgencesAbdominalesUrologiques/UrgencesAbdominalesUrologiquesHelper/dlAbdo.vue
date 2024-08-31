<template>
  <v-app>
    <v-container>
      <v-form ref="form" @submit.prevent="submitForm">
        <!-- Section Douleur -->
        <v-card class="mb-5">
          <v-card-title class="headline grey lighten-2">
            Évaluation de la douleur
          </v-card-title>
          <v-card-text>
            <v-row>
              <!-- Question sur la douleur -->
              <v-col cols="12">
                <p>Avez-vous/As-tu de la douleur?</p>
                <v-radio-group v-model="form.hasPain" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <!-- Décrire la douleur -->
              <v-col cols="12" v-if="form.hasPain === 'oui'">
                <v-select
                  label="Pouvez-vous/Peux-tu décrire votre/ta douleur? Sensation :"
                  v-model="form.painDescription"
                  :items="painDescriptions"
                  multiple
                ></v-select>
              </v-col>

              <!-- Durée de la douleur -->
              <v-col cols="12" v-if="form.hasPain === 'oui'">
                <v-text-field
                  label="Depuis combien de temps avez-vous/as-tu cette douleur?"
                  v-model="form.painDuration"
                ></v-text-field>
              </v-col>

              <!-- Localisation de la douleur -->
              <v-col cols="12" v-if="form.hasPain === 'oui'">
                <v-text-field
                  label="Montrez-moi/montre-moi avec un doigt où est située votre/ta douleur."
                  v-model="form.painLocation"
                ></v-text-field>
              </v-col>

              <!-- Douleur se déplace -->
              <v-col cols="12" v-if="form.hasPain === 'oui'">
                <p>Est-ce que la douleur se déplace?</p>
                <v-radio-group v-model="form.painMoving" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <!-- Première fois avec cette douleur -->
              <v-col cols="12" v-if="form.hasPain === 'oui'">
                <p>Est-ce la première fois que vous ressentez/tu ressens cette douleur?</p>
                <v-radio-group v-model="form.firstTimePain" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <!-- Question sur le traumatisme -->
              <v-col cols="12">
                <p>Avez-vous/As-tu eu un traumatisme?</p>
                <v-radio-group v-model="form.hasTrauma" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <!-- Détails sur le traumatisme -->
              <v-col cols="12" v-if="form.hasTrauma === 'oui'">
                <v-checkbox
                  label="Un coup?"
                  v-model="form.traumaHit"
                ></v-checkbox>
                <v-checkbox
                  label="Une chute?"
                  v-model="form.traumaFall"
                ></v-checkbox>
                <v-checkbox
                  label="Avez-vous/As-tu eu un accident?"
                  v-model="form.traumaAccident"
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
  name: 'dlAbdo',
  data() {
    return {
      form: {
        hasPain: '',
        painDescription: [],
        painDuration: '',
        painLocation: '',
        painMoving: '',
        firstTimePain: '',
        hasTrauma: '',
        traumaHit: false,
        traumaFall: false,
        traumaAccident: false
      },
      painDescriptions: [
        'd’avoir reçu un coup', 'de ballonnement', 'de brûlure', 'de coup de couteau',
        'de coupure', 'de crampe', 'de déchirement', 'd’écrasement', 'd’indigestion',
        'nouée', 'de piqûre d’aiguille', 'de pression', 'sourde', 'de tiraillement',
        'de torsion'
      ],
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
      this.isSubmitDisabled = true; // Désactive le bouton lors de la soumission

      const sections = [];

      if (this.form.hasPain) {
        let painSection = `Douleur:`;
        if (this.form.hasPain === 'oui') {
          if (this.form.painDescription.length) {
            painSection += `\n  - Description: ${this.form.painDescription.join(', ')}`;
          }
          if (this.form.painDuration) {
            painSection += `\n  - Durée: ${this.form.painDuration}`;
          }
          if (this.form.painLocation) {
            painSection += `\n  - Localisation: ${this.form.painLocation}`;
          }
          if (this.form.painMoving) {
            painSection += `\n  - Douleur se déplace: ${this.form.painMoving}`;
          }
          if (this.form.firstTimePain) {
            painSection += `\n  - Première occurrence: ${this.form.firstTimePain}`;
          }
        } else {
          painSection += `\n  - Douleur: Non`;
        }
        sections.push(painSection);
      }

      if (this.form.hasTrauma) {
        let traumaSection = `Traumatisme:`;
        if (this.form.hasTrauma === 'oui') {
          traumaSection += `\n  - Un coup: ${this.form.traumaHit ? 'Oui' : 'Non'}`;
          traumaSection += `\n  - Une chute: ${this.form.traumaFall ? 'Oui' : 'Non'}`;
          traumaSection += `\n  - Accident: ${this.form.traumaAccident ? 'Oui' : 'Non'}`;
        } else {
          traumaSection += `\n  - Traumatisme: Non`;
        }
        sections.push(traumaSection);
      }

      const result = sections.join('\n\n');
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
