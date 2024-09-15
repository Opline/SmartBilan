<template>
  <v-app>
    <v-container>
      <v-form ref="form" @submit.prevent="submitForm">
        <!-- Section pour le témoin -->
        <v-card class="mb-5">
          <v-card-title class="headline grey lighten-2">
            Réanimation du nouveau-né/de la nouveau-née en détresse
          </v-card-title>
          <v-card-text>
            <!-- Questions pour le témoin -->
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Depuis combien de temps le nouveau-né/la nouveau-née est-il/elle en détresse ?"
                  v-model="form.distressDuration"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <p>Est-ce la première fois que ça arrive ?</p>
                <v-radio-group v-model="form.firstTime" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <p>Y a-t-il eu des complications à la naissance ?</p>
                <v-radio-group v-model="form.birthComplications" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <p>Est-ce que le bébé a vomi ?</p>
                <v-radio-group v-model="form.babyVomited" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-checkbox
                  label="Nous effectuons des manœuvres de réanimation/la RCR."
                  v-model="form.performingCPR"
                ></v-checkbox>
              </v-col>
              <v-col cols="12">
                <p>Avez-vous fait des manœuvres de réanimation avant notre arrivée ?</p>
                <v-radio-group v-model="form.witnessCPR" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <!-- Bouton de soumission -->
        <v-btn type="submit" color="primary">Soumettre</v-btn>
        <ACRPeadiaMemo></ACRPeadiaMemo>
      </v-form>
    </v-container>
  </v-app>
</template>

<script>
import ACRPeadiaMemo
  from "@/components/UrgencesNéonatalesPédiatriques/UrgencesNéonatalesPédiatriqueHelper/ACRPeadiaMemo.vue";
export default {
  name: "ACRPedia",
  components: {ACRPeadiaMemo},
  data() {
    return {
      form: {
        distressDuration: '',
        firstTime: '',
        birthComplications: '',
        babyVomited: '',
        performingCPR: false,
        witnessCPR: ''
      }
    };
  },
  methods: {
    // Fonction pour formater la section avec des valeurs définies uniquement
    formatSection(label, value) {
      return value ? `${label} ${value}` : '';
    },
    submitForm() {
      // Création du compte rendu en omettant les champs non remplis
      const report = [];

      const distressDuration = this.formatSection(
        'Depuis combien de temps le nouveau-né/la nouveau-née est-il/elle en détresse ?',
        this.form.distressDuration
      );
      if (distressDuration) report.push(distressDuration);

      const firstTime = this.formatSection(
        'Est-ce la première fois que ça arrive ?',
        this.form.firstTime
      );
      if (firstTime) report.push(firstTime);

      const birthComplications = this.formatSection(
        'Y a-t-il eu des complications à la naissance ?',
        this.form.birthComplications
      );
      if (birthComplications) report.push(birthComplications);

      const babyVomited = this.formatSection(
        'Est-ce que le bébé a vomi ?',
        this.form.babyVomited
      );
      if (babyVomited) report.push(babyVomited);

      if (this.form.performingCPR) {
        report.push('Nous effectuons des manœuvres de réanimation/la RCR.');
      }

      const witnessCPR = this.formatSection(
        'Avez-vous fait des manœuvres de réanimation avant notre arrivée ?',
        this.form.witnessCPR
      );
      if (witnessCPR) report.push(witnessCPR);

      // Émettre le rapport formaté
      this.$emit('submit-form', report.join('\n').trim());
    }
  }
};
</script>

<style>
.mb-5 {
  margin-bottom: 20px;
}
</style>


