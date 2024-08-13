<template>
  <v-container class="pa-4">
    <v-card class="pa-4">
      <v-card-title>Calculateur de l'échelle de coma de Glasgow</v-card-title>

      <v-card-text>
        <v-row>
          <v-col cols="12" md="4">
            <v-select
              v-model="eyeOpening"
              item-value="value"
              item-title="text"
              :items="eyeOptions"
              label="Ouverture des yeux (E)"
              outlined
            ></v-select>
          </v-col>

          <v-col cols="12" md="4">
            <v-select
              v-model="verbalResponse"
              item-value="value"
              item-title="text"
              :items="verbalOptions"
              label="Réponse verbale (V)"
              outlined
            ></v-select>
          </v-col>

          <v-col cols="12" md="4">
            <v-select
              v-model="motorResponse"
              item-value="value"
              item-title="text"
              :items="motorOptions"
              label="Réponse motrice (M)"
              outlined
            ></v-select>
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-actions class="justify-center">
        <v-alert type="info" outlined>
          Score GCS total : <strong>{{ totalScore }}</strong>
        </v-alert>
      </v-card-actions>

      <!-- Bouton Soumettre -->
      <v-card-actions class="justify-center">
        <v-btn color="primary" @click="emitData">Soumettre</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Glasgowscore",
  props: {
    // Ajoutez ici des props si vous devez recevoir des données du parent
  },
  data() {
    return {
      eyeOpening: 4,
      verbalResponse: 5,
      motorResponse: 6,
      eyeOptions: [
        { value: 4, text: 'Spontanée (4)' },
        { value: 3, text: 'Au son (3)' },
        { value: 2, text: 'À la pression (2)' },
        { value: 1, text: 'Aucune (1)' },
      ],
      verbalOptions: [
        { value: 5, text: 'Orientée (5)' },
        { value: 4, text: 'Confuse (4)' },
        { value: 3, text: 'Mots (3)' },
        { value: 2, text: 'Sons (2)' },
        { value: 1, text: 'Aucune (1)' },
      ],
      motorOptions: [
        { value: 6, text: 'Obéit aux commandes (6)' },
        { value: 5, text: 'Localise la douleur (5)' },
        { value: 4, text: 'Se retire de la douleur (4)' },
        { value: 3, text: 'Flexion à la douleur (3)' },
        { value: 2, text: 'Extension à la douleur (2)' },
        { value: 1, text: 'Aucune (1)' },
      ],
    };
  },
  computed: {
    totalScore() {
      return this.eyeOpening + this.verbalResponse + this.motorResponse;
    },
  },
  methods: {
    emitData() {
      // Construire le texte à émettre
      const resultText = `Ouverture des yeux (E): ${this.eyeOpening}` +
        ` Réponse verbale (V): ${this.verbalResponse}` +
        ` Réponse motrice (M): ${this.motorResponse}` +
        ` Score GCS total : ${this.totalScore}`;

      // Émettre les données actuelles au parent sous forme de texte
      this.$emit("update-details",
        resultText
      );
    },
  },
};
</script>

<style scoped>
/* Votre CSS ici */
</style>
