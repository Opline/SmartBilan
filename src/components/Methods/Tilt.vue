<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card>
          <v-card-title>
            Évaluation de la douleur
          </v-card-title>
          <v-card-text>
            <v-form ref="form">
              <!-- Slider pour l'END -->
              <v-slider
                v-model="painLevel"
                :max="10"
                :min="0"
                step="1"
                thumb-label="always"
                label="Niveau de douleur (END)"
                class="my-4"
              >
                <template v-slot:append>
                  <span>{{ painLevel }}</span>
                </template>
              </v-slider>

              <!-- Champ de texte pour la localisation -->
              <v-text-field
                v-model="location"
                label="Localisation de la douleur"
                :rules="[rules.required]"
                class="my-4"
              ></v-text-field>

              <!-- Champ de texte pour le type de douleur -->
              <v-text-field
                v-model="painType"
                label="Type de douleur"
                :rules="[rules.required]"
                class="my-4"
              ></v-text-field>

              <!-- Champ de sélection pour la durée de la douleur -->
              <v-select
                v-model="painDuration"
                :items="durationOptions"
                label="Depuis combien de temps ?"
                :rules="[rules.required]"
                class="my-4"
              ></v-select>

              <!-- Bouton pour soumettre le formulaire -->
              <v-btn color="primary" @click="submitForm">Soumettre</v-btn>
            </v-form>

            <!-- Message de soumission -->
            <v-alert v-if="submissionMessage" type="success" class="mt-4">
              {{ submissionMessage }}
            </v-alert>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      painLevel: 0, // Valeur par défaut pour l'END
      location: '',
      painType: '',
      painDuration: '',
      submissionMessage: '',
      durationOptions: ['< 1 heure', '1-6 heures', '6-12 heures', '12-24 heures', '> 24 heures'],
      rules: {
        required: value => !!value || 'Ce champ est requis',
      },
    };
  },
  methods: {
    submitForm() {
      if (this.$refs.form.validate()) {
        // Soumission du formulaire et affichage du message
        this.submissionMessage = `Niveau de douleur : ${this.painLevel}/10,
          Localisation : ${this.location},
          Type de douleur : ${this.painType},
          Depuis : ${this.painDuration}`;
        this.$emit("update-details", this.submissionMessage);
      } else {
        this.submissionMessage = '';
      }
    },
  },
};
</script>

<style scoped>
.my-4 {
  margin-top: 16px;
  margin-bottom: 16px;
}
</style>
