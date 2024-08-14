<template>
  <v-container>
    <v-card class="mx-auto scrollY" max-width="700">
      <v-card-title>
        <span class="headline">Évaluation AVC Complète (Méthode FAST)</span>
      </v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid">
          <v-row>
            <!-- Groupe Facial -->
            <v-col cols="12">
              <v-card outlined>
                <v-card-title>
                  <span class="headline">Facial (Face)</span>
                </v-card-title>
                <v-card-text>
                  <v-radio-group v-model="smile" :rules="[rules.required]" label="Sourire : Le sourire est-il asymétrique ou anormal ?">
                    <v-radio label="Oui" value="oui"></v-radio>
                    <v-radio label="Non" value="non"></v-radio>
                  </v-radio-group>

                  <v-radio-group v-model="cheeks" :rules="[rules.required]" label="Joues : Les joues montrent-elles une faiblesse ou une asymétrie ?">
                    <v-radio label="Oui" value="oui"></v-radio>
                    <v-radio label="Non" value="non"></v-radio>
                  </v-radio-group>

                  <v-radio-group v-model="tongue" :rules="[rules.required]" label="Langue : La langue est-elle déviée ou a-t-elle des mouvements anormaux ?">
                    <v-radio label="Oui" value="oui"></v-radio>
                    <v-radio label="Non" value="non"></v-radio>
                  </v-radio-group>

                  <v-radio-group v-model="vision" :rules="[rules.required]" label="Vision : Y a-t-il des troubles de la vision ?">
                    <v-radio label="Oui" value="oui"></v-radio>
                    <v-radio label="Non" value="non"></v-radio>
                  </v-radio-group>

                  <v-text-field
                    v-model="pupils"
                    :rules="[rules.required]"
                    label="Examen des pupilles : Décrivez l'état des pupilles (taille, réactivité, etc.)"
                  ></v-text-field>

                  <v-radio-group v-model="confusion" :rules="[rules.required]" label="Confusion : Y a-t-il de la confusion ou un état mental altéré ?">
                    <v-radio label="Oui" value="oui"></v-radio>
                    <v-radio label="Non" value="non"></v-radio>
                  </v-radio-group>

                  <v-radio-group v-model="headache" :rules="[rules.required]" label="Mal de tête : Y a-t-il un mal de tête soudain et intense ?">
                    <v-radio label="Oui" value="oui"></v-radio>
                    <v-radio label="Non" value="non"></v-radio>
                  </v-radio-group>
                </v-card-text>
              </v-card>
            </v-col>

            <!-- Groupe Arm -->
            <v-col cols="12">
              <v-card outlined>
                <v-card-title>
                  <span class="headline">Arm (Bras)</span>
                </v-card-title>
                <v-card-text>
                  <v-radio-group v-model="arm" :rules="[rules.required]" label="Bras : Un bras est-il affaibli ?">
                    <v-radio label="Oui" value="oui"></v-radio>
                    <v-radio label="Non" value="non"></v-radio>
                  </v-radio-group>

                  <v-radio-group v-model="equilibrium" :rules="[rules.required]" label="Équilibre : Y a-t-il des problèmes de coordination ou de marche ?">
                    <v-radio label="Oui" value="oui"></v-radio>
                    <v-radio label="Non" value="non"></v-radio>
                  </v-radio-group>

                  <v-radio-group v-model="numbness" :rules="[rules.required]" label="Engourdissement : Y a-t-il un engourdissement ou des picotements dans une partie du corps ?">
                    <v-radio label="Oui" value="oui"></v-radio>
                    <v-radio label="Non" value="non"></v-radio>
                  </v-radio-group>

                  <v-radio-group v-model="dizziness" :rules="[rules.required]" label="Vertiges : Y a-t-il des vertiges soudains ou une sensation de déséquilibre ?">
                    <v-radio label="Oui" value="oui"></v-radio>
                    <v-radio label="Non" value="non"></v-radio>
                  </v-radio-group>

                  <v-radio-group v-model="sensorimotorDeficit" :rules="[rules.required]" label="Déficit sensitivomoteur : Y a-t-il un déficit sensitivomoteur ?">
                    <v-radio label="Oui" value="oui"></v-radio>
                    <v-radio label="Non" value="non"></v-radio>
                  </v-radio-group>
                </v-card-text>
              </v-card>
            </v-col>

            <!-- Groupe Speech -->
            <v-col cols="12">
              <v-card outlined>
                <v-card-title>
                  <span class="headline">Speech (Parole)</span>
                </v-card-title>
                <v-card-text>
                  <v-radio-group v-model="speech" :rules="[rules.required]" label="Parole : Y a-t-il des difficultés de parole ?">
                    <v-radio label="Oui" value="oui"></v-radio>
                    <v-radio label="Non" value="non"></v-radio>
                  </v-radio-group>

                  <v-radio-group v-model="nausea" :rules="[rules.required]" label="Nausées : La personne ressent-elle des nausées ou des vomissements soudains ?">
                    <v-radio label="Oui" value="oui"></v-radio>
                    <v-radio label="Non" value="non"></v-radio>
                  </v-radio-group>

                  <v-radio-group v-model="swallowing" :rules="[rules.required]" label="Troubles de la déglutition : La personne a-t-elle des difficultés à avaler ?">
                    <v-radio label="Oui" value="oui"></v-radio>
                    <v-radio label="Non" value="non"></v-radio>
                  </v-radio-group>
                </v-card-text>
              </v-card>
            </v-col>

            <!-- Groupe Temps -->
            <v-col cols="12">
              <v-card outlined>
                <v-card-title>
                  <span class="headline">Times (Temps)</span>
                </v-card-title>
                <v-card-text>
                  <v-text-field
                    v-model="symptomTime"
                    :rules="[rules.required]"
                    label="Temps écoulé depuis l'apparition des symptômes (en minutes ou heures)"
                  ></v-text-field>
                </v-card-text>
              </v-card>
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
  name: "FastScore",
  data() {
    return {
      // Variables pour les critères regroupés
      smile: null,
      cheeks: null,
      tongue: null,
      vision: null,
      pupils: '',
      confusion: null,
      headache: null,
      arm: null,
      equilibrium: null,
      numbness: null,
      dizziness: null,
      sensorimotorDeficit: null,
      speech: null,
      nausea: null,
      swallowing: null,
      symptomTime: '', // Ajout du temps depuis l'apparition des symptômes
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
          \n**Facial (Face)**
          Sourire: ${this.smile === 'oui' ? 'Le sourire est asymétrique ou anormal.' : 'normal'}
          Joues: ${this.cheeks === 'oui' ? 'Les joues montrent une faiblesse ou une asymétrie.' : 'normales'}
          Langue: ${this.tongue === 'oui' ? 'La langue est déviée ou a des mouvements anormaux.' : 'normale'}
          Vision: ${this.vision === 'oui' ? 'Des troubles de la vision ont été observés.' : 'normale'}
          Pupilles: ${this.pupils ? `État des pupilles: ${this.pupils}.` : 'normales'}
          Confusion: ${this.confusion === 'oui' ? 'Il y a de la confusion ou un état mental altéré.' : 'normal'}
          Mal de tête: ${this.headache === 'oui' ? 'Un mal de tête soudain et intense est présent.' : 'normal'}

          \n**Arm (Bras)**
          Bras: ${this.arm === 'oui' ? 'Un bras montre des signes de faiblesse.' : 'normal'}
          Équilibre: ${this.equilibrium === 'oui' ? 'Des problèmes de coordination ou de marche sont présents.' : 'normal'}
          Engourdissement: ${this.numbness === 'oui' ? 'Un engourdissement ou des picotements sont présents dans une partie du corps.' : 'normal'}
          Vertiges: ${this.dizziness === 'oui' ? 'Des vertiges soudains ou une sensation de déséquilibre sont présents.' : 'normal'}
          Déficit sensitivomoteur: ${this.sensorimotorDeficit === 'oui' ? 'Un déficit sensitivomoteur est présent.' : 'normal'}

          \n**Speech (Parole)**
          Parole: ${this.speech === 'oui' ? 'Des difficultés de parole sont présentes.' : 'normale'}
          Nausées: ${this.nausea === 'oui' ? 'La personne ressent des nausées ou des vomissements soudains.' : 'normal'}
          Troubles de la déglutition: ${this.swallowing === 'oui' ? 'La personne a des difficultés à avaler.' : 'normale'}

          \n**Temps depuis l'apparition des symptômes**
          Temps écoulé: ${this.symptomTime ? `${this.symptomTime}` : 'Non spécifié'}
        `;

        // Émettre les résultats au parent
        this.$emit("update-details", resultText.trim());
      }
    },

    formatResults() {
      return {
        smile: this.smile,
        cheeks: this.cheeks,
        tongue: this.tongue,
        vision: this.vision,
        pupils: this.pupils,
        confusion: this.confusion,
        headache: this.headache,
        arm: this.arm,
        equilibrium: this.equilibrium,
        numbness: this.numbness,
        dizziness: this.dizziness,
        sensorimotorDeficit: this.sensorimotorDeficit,
        speech: this.speech,
        nausea: this.nausea,
        swallowing: this.swallowing,
        symptomTime: this.symptomTime, // Ajout du temps depuis l'apparition des symptômes
      };
    },
  },
};
</script>

<style scoped>
.scrollY {
  max-height: 800px;
  overflow-y: scroll;
}
</style>
