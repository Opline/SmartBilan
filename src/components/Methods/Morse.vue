<template>
  <v-container>
    <v-form>
      <v-row>
        <v-col cols="12" sm="6" md="4" v-for="(category, index) in categories" :key="index">
          <v-card>
            <v-card-title>{{ category.name }}</v-card-title>
            <v-card-text>
              <v-radio-group v-model="category.score">
                <v-radio :label="option.label" :value="option.value" v-for="(option, i) in category.options" :key="i"></v-radio>
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
  data() {
    return {
      categories: [
        {
          name: "Historique des chutes",
          score: 0,
          options: [
            { label: "Non", value: 0 },
            { label: "Oui", value: 25 }
          ]
        },
        {
          name: "Secondaire à une pathologie",
          score: 0,
          options: [
            { label: "Non", value: 0 },
            { label: "Oui", value: 15 }
          ]
        },
        {
          name: "Aide à la marche",
          score: 0,
          options: [
            { label: "Lit/canapé", value: 0 },
            { label: "Béquilles/canne/marchette", value: 15 },
            { label: "Mobilisation sans aide ou avec aide inappropriée", value: 30 }
          ]
        },
        {
          name: "Thérapie intraveineuse (IV)/Alimentation parentérale",
          score: 0,
          options: [
            { label: "Non", value: 0 },
            { label: "Oui", value: 20 }
          ]
        },
        {
          name: "Démarche",
          score: 0,
          options: [
            { label: "Normale/bedrest/fauteuil roulant", value: 0 },
            { label: "Faible", value: 10 },
            { label: "Altérée", value: 20 }
          ]
        },
        {
          name: "État mental",
          score: 0,
          options: [
            { label: "Connaît ses limites", value: 0 },
            { label: "Surévalue ses capacités", value: 15 }
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
    }
  }
};
</script>

