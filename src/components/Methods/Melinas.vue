<template>
  <v-container>
    <v-form v-model="valid" @submit.prevent="calculateScore">
      <v-row>
        <v-col cols="12" sm="6">
          <v-select
            v-model="form.parity"
            :items="parityOptions"
            item-value="value"
            item-title="text"
            label="Parité"
            required
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6">
          <v-select
            item-value="value"
            item-title="text"
            v-model="form.contractionDuration"
            :items="contractionDurationOptions"
            label="Durée des contractions (secondes)"
            required
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6">
          <v-select
            item-value="value"
            item-title="text"
            v-model="form.laborDuration"
            :items="laborDurationOptions"
            label="Durée du travail (heures)"
            required
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6">
          <v-select
            v-model="form.waterBreak"
            item-value="value"
            item-title="text"
            :items="waterBreakOptions"
            label="Perte des eaux"
            required
          ></v-select>
        </v-col>
      </v-row>

      <v-btn :disabled="!valid" color="primary" type="submit">Calculer le score</v-btn>
    </v-form>

    <v-divider class="my-4"></v-divider>

    <div v-if="score !== null">
      <h2>Score de Melinas: {{ score }}</h2>
      <pre>{{ result }}</pre>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Melinas",
  data() {
    return {
      valid: false,
      form: {
        parity: null,
        contractionDuration: null,
        laborDuration: null,
        waterBreak: null,
      },
      parityOptions: [
        { text: '0 accouchement antérieur', value: 2 },
        { text: '1 à 3 accouchements antérieurs', value: 1 },
        { text: '4 accouchements ou plus', value: 0 },
      ],
      contractionDurationOptions: [
        { text: 'Moins de 20 secondes', value: 0 },
        { text: 'Entre 20 et 40 secondes', value: 1 },
        { text: 'Plus de 40 secondes', value: 2 },
      ],
      laborDurationOptions: [
        { text: 'Moins de 3 heures', value: 2 },
        { text: 'Entre 3 et 5 heures', value: 1 },
        { text: 'Plus de 5 heures', value: 0 },
      ],
      waterBreakOptions: [
        { text: 'Perte des eaux confirmée', value: 2 },
        { text: 'Pas de perte des eaux', value: 0 },
      ],
      score: null,
      result: null,
    };
  },
  methods: {
    calculateScore() {
      this.score =
        this.form.parity +
        this.form.contractionDuration +
        this.form.laborDuration +
        this.form.waterBreak;

      const parityText = this.parityOptions.find(
        (option) => option.value === this.form.parity
      )?.text;
      const contractionDurationText = this.contractionDurationOptions.find(
        (option) => option.value === this.form.contractionDuration
      )?.text;
      const laborDurationText = this.laborDurationOptions.find(
        (option) => option.value === this.form.laborDuration
      )?.text;
      const waterBreakText = this.waterBreakOptions.find(
        (option) => option.value === this.form.waterBreak
      )?.text;

      this.result = `Parité : ${parityText}\nDurée des contractions : ${contractionDurationText}\nDurée du travail : ${laborDurationText}\nPerte des eaux : ${waterBreakText}\n\nScore total : ${this.score}`;

      // Émettre les données calculées au parent
      this.$emit("update-details", this.result);
    },
  },
};
</script>


<style scoped>
/* Ajoutez ici des styles supplémentaires si nécessaire */
</style>
