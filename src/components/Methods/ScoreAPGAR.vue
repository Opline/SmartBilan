<template>
  <v-container>
    <v-form>
      <v-row>
        <v-col cols="12" sm="6" md="4" v-for="(category, index) in categories" :key="index">
          <v-card>
            <v-card-title>{{ category.name }}</v-card-title>
            <v-card-text>
              <v-radio-group v-model="category.score">
                <v-radio :label="category.options[0].label" :value="0"></v-radio>
                <v-radio :label="category.options[1].label" :value="1"></v-radio>
                <v-radio :label="category.options[2].label" :value="2"></v-radio>
              </v-radio-group>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title>
              Score total: {{ totalScore }}
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-btn color="primary" @click="submitForm">Soumettre</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: "ScoreAPGAR",
  data() {
    return {
      categories: [
        {
          name: "Apparence (Couleur de la peau)",
          score: 2,
          options: [
            { label: "Bleu pâle ou bleuâtre", value: 0 },
            { label: "Corps rose, extrémités bleues", value: 1 },
            { label: "Complètement rose", value: 2 }
          ]
        },
        {
          name: "Pouls (Fréquence cardiaque)",
          score: 2,
          options: [
            { label: "Absent", value: 0 },
            { label: "Moins de 100 battements/min", value: 1 },
            { label: "Plus de 100 battements/min", value: 2 }
          ]
        },
        {
          name: "Grimace (Réactivité à la stimulation)",
          score: 2,
          options: [
            { label: "Aucune réponse", value: 0 },
            { label: "Grimace", value: 1 },
            { label: "Pleure vigoureusement", value: 2 }
          ]
        },
        {
          name: "Activité (Tonus musculaire)",
          score: 2,
          options: [
            { label: "Mou, sans tonus", value: 0 },
            { label: "Légère flexion des membres", value: 1 },
            { label: "Mouvements actifs", value: 2 }
          ]
        },
        {
          name: "Respiration",
          score: 2,
          options: [
            { label: "Absente", value: 0 },
            { label: "Respiration irrégulière, faible cri", value: 1 },
            { label: "Bonne respiration, fort cri", value: 2 }
          ]
        }
      ]
    };
  },
  computed: {
    totalScore() {
      return this.categories.reduce((total, category) => total + category.score, 0);
    }
  },
  methods: {
    submitForm() {
      const formattedResult = this.categories.reduce((result, category) => {
        result[category.name] = category.score;
        return result;
      }, {});

      // Ajouter le score total au résultat formaté
      formattedResult.totalScore = this.totalScore;

      // Convertir le résultat formaté en une chaîne de caractères
      const resultText = Object.entries(formattedResult)
        .map(([key, value]) => `${key}: ${value}`)
        .join('\n');

      console.log("Résultat formaté sous forme de texte:", resultText);
      this.$emit("update-details", resultText);
      // Vous pouvez envoyer cette chaîne de caractères à un backend ou l'utiliser comme bon vous semble
    }
  },
};
</script>

<style scoped>
</style>
