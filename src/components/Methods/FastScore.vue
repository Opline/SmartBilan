<template>
  <v-container>
    <v-card class="mx-auto scrollY" max-width="700">
      <v-card-title>
        <span class="headline">Évaluation AVC Complète (Méthode FAST)</span>
      </v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid">
          <v-row>
            <!-- Critères FAST -->
            <v-col cols="12">
              <v-radio-group v-model="face" :rules="[rules.required]" label="Visage : Y a-t-il une asymétrie faciale ?">
                <v-radio label="Oui" value="oui"></v-radio>
                <v-radio label="Non" value="non"></v-radio>
              </v-radio-group>
            </v-col>

            <v-col cols="12">
              <v-radio-group v-model="arm" :rules="[rules.required]" label="Bras : Un bras est-il affaibli ?">
                <v-radio label="Oui" value="oui"></v-radio>
                <v-radio label="Non" value="non"></v-radio>
              </v-radio-group>
            </v-col>

            <v-col cols="12">
              <v-radio-group v-model="speech" :rules="[rules.required]" label="Parole : Y a-t-il des difficultés de parole ?">
                <v-radio label="Oui" value="oui"></v-radio>
                <v-radio label="Non" value="non"></v-radio>
              </v-radio-group>
            </v-col>

            <!-- Critères Additionnels -->
            <v-col cols="12">
              <v-radio-group v-model="vision" :rules="[rules.required]" label="Vision : Y a-t-il des troubles de la vision ?">
                <v-radio label="Oui" value="oui"></v-radio>
                <v-radio label="Non" value="non"></v-radio>
              </v-radio-group>
            </v-col>

            <v-col cols="12">
              <v-radio-group v-model="equilibrium" :rules="[rules.required]" label="Équilibre : Y a-t-il des problèmes de coordination ou de marche ?">
                <v-radio label="Oui" value="oui"></v-radio>
                <v-radio label="Non" value="non"></v-radio>
              </v-radio-group>
            </v-col>

            <v-col cols="12">
              <v-radio-group v-model="headache" :rules="[rules.required]" label="Mal de tête : Y a-t-il un mal de tête soudain et intense ?">
                <v-radio label="Oui" value="oui"></v-radio>
                <v-radio label="Non" value="non"></v-radio>
              </v-radio-group>
            </v-col>

            <v-col cols="12">
              <v-radio-group v-model="confusion" :rules="[rules.required]" label="Confusion : Y a-t-il de la confusion ou un état mental altéré ?">
                <v-radio label="Oui" value="oui"></v-radio>
                <v-radio label="Non" value="non"></v-radio>
              </v-radio-group>
            </v-col>

            <!-- Nouveaux Critères -->
            <v-col cols="12">
              <v-radio-group v-model="nausea" :rules="[rules.required]" label="Nausées : La personne ressent-elle des nausées ou des vomissements soudains ?">
                <v-radio label="Oui" value="oui"></v-radio>
                <v-radio label="Non" value="non"></v-radio>
              </v-radio-group>
            </v-col>

            <v-col cols="12">
              <v-radio-group v-model="numbness" :rules="[rules.required]" label="Engourdissement : Y a-t-il un engourdissement ou des picotements dans une partie du corps ?">
                <v-radio label="Oui" value="oui"></v-radio>
                <v-radio label="Non" value="non"></v-radio>
              </v-radio-group>
            </v-col>

            <v-col cols="12">
              <v-radio-group v-model="dizziness" :rules="[rules.required]" label="Vertiges : Y a-t-il des vertiges soudains ou une sensation de déséquilibre ?">
                <v-radio label="Oui" value="oui"></v-radio>
                <v-radio label="Non" value="non"></v-radio>
              </v-radio-group>
            </v-col>

            <v-col cols="12">
              <v-radio-group v-model="swallowing" :rules="[rules.required]" label="Troubles de la déglutition : La personne a-t-elle des difficultés à avaler ?">
                <v-radio label="Oui" value="oui"></v-radio>
                <v-radio label="Non" value="non"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="submitForm">Évaluer</v-btn>
      </v-card-actions>
    </v-card>

  </v-container>
</template>

<script>
export default {
  data() {
    return {
      // Variables pour les critères FAST
      face: null,
      arm: null,
      speech: null,
      vision: null,
      equilibrium: null,
      headache: null,
      confusion: null,
      // Variables pour les nouveaux critères
      nausea: null,
      numbness: null,
      dizziness: null,
      swallowing: null,
      // Autres variables
      valid: false,
      snackbar: false,
      snackbarMessage: '',
      rules: {
        required: value => !!value || 'Champ requis.',
      },
    };
  },
  methods: {
      submitForm() {
        if (this.$refs.form.validate()) {
          // Collecte et formatage des résultats avec des descriptions complètes
          const results = this.formatResults();
          console.log("Résultats du formulaire :", results);

          const resultText = `
        Visage: ${this.face === 'oui' ? 'Une asymétrie faciale est présente.' : 'normale' }
        Bras: ${this.arm === 'oui' ? 'Un bras montre des signes de faiblesse.' : 'normale'}
        Parole: ${this.speech === 'oui' ? 'Des difficultés de parole sont présentes.' : 'normale'}
        Vision: ${this.vision === 'oui' ? 'Des troubles de la vision ont été observés.' : 'normale'}
        Équilibre: ${this.equilibrium === 'oui' ? 'Des problèmes de coordination ou de marche sont présents.' : 'normale'}
        Mal de tête: ${this.headache === 'oui' ? 'Un mal de tête soudain et intense est présent.' : 'normale'}
        Confusion: ${this.confusion === 'oui' ? 'Il y a de la confusion ou un état mental altéré.' : 'normale'}
        Nausées: ${this.nausea === 'oui' ? 'La personne ressent des nausées ou des vomissements soudains.' :'normale'}
        Engourdissement: ${this.numbness === 'oui' ? 'Un engourdissement ou des picotements sont présents dans une partie du corps.' : 'normale'}
        Vertiges: ${this.dizziness === 'oui' ? 'Des vertiges soudains ou une sensation de déséquilibre sont présents.' : 'normale'}
        Troubles de la déglutition: ${this.swallowing === 'oui' ? 'La personne a des difficultés à avaler.' : 'normale'}
      `

          // Émettre les résultats au parent
          this.$emit("update-details", resultText.trim());

        }
      },


            formatResults() {
      return {
        face: this.face,
        arm: this.arm,
        speech: this.speech,
        vision: this.vision,
        equilibrium: this.equilibrium,
        headache: this.headache,
        confusion: this.confusion,
        nausea: this.nausea,
        numbness: this.numbness,
        dizziness: this.dizziness,
        swallowing: this.swallowing,
      };
    },
    }
};
</script>

<style scoped>
.scrollY {
  max-height: 800px;
  overflow-y: scroll;
}
</style>
