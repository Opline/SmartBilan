<template>
  <v-app>
    <v-container>
      <v-form ref="form" @submit.prevent="submitForm">
        <!-- Section pour le patient -->
        <v-card class="mb-5">
          <v-card-title class="headline grey lighten-2">
            AU PATIENT/À LA PATIENTE
          </v-card-title>
          <v-card-text>
            <!-- Antécédents de problèmes cardiaques -->
            <v-row>
              <v-col cols="12">
                <v-radio-group v-model="form.heartIssues" row>
                  <v-radio label="Avez-vous des antécédents de problèmes cardiaques?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <!-- Description de la douleur -->
              <v-col cols="12">
                <v-text-field
                  label="Où exactement avez-vous mal?"
                  v-model="form.painLocation"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Pouvez-vous décrire votre douleur?"
                  v-model="form.painDescription"
                ></v-text-field>
              </v-col>

              <!-- Sensation de la douleur -->
              <v-col cols="12">
                <v-select
                  label="Sensation de la douleur"
                  v-model="form.painSensation"
                  :items="[
                    'de brûlure', 'de coup de couteau', 'de coup de poing', 'de coupure',
                    'de déchirement', 'd’écrasement', 'd’étau', 'd’étouffement',
                    'd’indigestion', 'nouée', 'de pincement', 'de piqûre d’aiguille',
                    'de pression', 'de serrement', 'de tiraillement'
                  ]"
                  multiple
                ></v-select>
              </v-col>

              <!-- Douleur déplacée -->
              <v-col cols="12">
                <v-radio-group v-model="form.painMoves" row>
                  <v-radio label="Est-ce que votre douleur se déplace?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <!-- Douleur à la poitrine -->
              <v-col cols="12">
                <v-radio-group v-model="form.chestPainHistory" row>
                  <v-radio label="Avez-vous déjà eu de la douleur à la poitrine?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12" v-if="form.chestPainHistory === 'oui'">
                <v-radio-group v-model="form.samePainAsUsual" row>
                  <v-radio label="Est-ce que c’est la même douleur que d’habitude?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12" v-if="form.samePainAsUsual === 'oui'">
                <v-text-field
                  label="Quel diagnostic aviez-vous reçu?"
                  v-model="form.previousDiagnosis"
                ></v-text-field>
              </v-col>
              <v-col cols="12" v-if="form.samePainAsUsual === 'non'">
                <v-text-field
                  label="Qu’est-ce qui est différent aujourd’hui?"
                  v-model="form.differentToday"
                ></v-text-field>
              </v-col>

              <!-- Début et évolution de la douleur -->
              <v-col cols="12">
                <v-text-field
                  label="Que faisiez-vous quand la douleur a commencé?"
                  v-model="form.activityWhenPainStarted"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-radio-group v-model="form.painOnset" row>
                  <v-radio label="Est-elle apparue graduellement?" value="graduellement"></v-radio>
                  <v-radio label="Soudainement" value="soudainement"></v-radio>
                </v-radio-group>
              </v-col>

              <!-- Effet du repos et respiration -->
              <v-col cols="12">
                <v-radio-group v-model="form.painDecreasesWithRest" row>
                  <v-radio label="Est-ce que la douleur diminue au repos?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-radio-group v-model="form.painChangesWithBreathing" row>
                  <v-radio label="Est-ce que votre douleur change lorsque vous inspirez profondément?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <!-- Coup à la poitrine -->
              <v-col cols="12">
                <v-radio-group v-model="form.chestTrauma" row>
                  <v-radio label="Avez-vous reçu un coup à la poitrine/au thorax?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <!-- Antécédents de procédures cardiaques -->
              <v-col cols="12">
                <v-checkbox
                  label="Avez-vous déjà eu un pontage?"
                  v-model="form.hasHadBypass"
                ></v-checkbox>
                <v-checkbox
                  label="Avez-vous déjà eu une dilatation?"
                  v-model="form.hasHadDilation"
                ></v-checkbox>
              </v-col>

              <!-- Médicaments cardiaques et nitroglycérine -->
              <v-col cols="12">
                <v-radio-group v-model="form.takesHeartMeds" row>
                  <v-radio label="Prenez-vous des médicaments pour le cœur?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-radio-group v-model="form.tookNitroglycerin" row>
                  <v-radio label="Avez-vous pris de la nitroglycérine avant notre arrivée?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12" v-if="form.tookNitroglycerin === 'oui'">
                <v-text-field
                  label="Combien?"
                  v-model="form.nitroglycerinAmount"
                ></v-text-field>
              </v-col>

              <!-- Antécédents familiaux et symptômes récents -->
              <v-col cols="12">
                <v-radio-group v-model="form.familyHeartIssues" row>
                  <v-radio label="Est-ce qu’il y a des antécédents de maladies cardiaques dans votre famille?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="À quand remonte votre dernier épisode?"
                  v-model="form.lastEpisode"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-radio-group v-model="form.sweatingBeforeArrival" row>
                  <v-radio label="Avez-vous transpiré beaucoup avant notre arrivée?" value="oui"></v-radio>
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
  name: 'GeneralCardio',
  data() {
    return {
      form: {
        heartIssues: '',
        painLocation: '',
        painDescription: '',
        painSensation: [],
        painMoves: '',
        chestPainHistory: '',
        samePainAsUsual: '',
        previousDiagnosis: '',
        differentToday: '',
        activityWhenPainStarted: '',
        painOnset: '',
        painDecreasesWithRest: '',
        painChangesWithBreathing: '',
        chestTrauma: '',
        hasHadBypass: false,
        hasHadDilation: false,
        takesHeartMeds: '',
        tookNitroglycerin: '',
        nitroglycerinAmount: '',
        familyHeartIssues: '',
        lastEpisode: '',
        sweatingBeforeArrival: '',
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
      const result = [];

      if (this.form.heartIssues) {
        result.push(`Antécédents de problèmes cardiaques : ${this.form.heartIssues === 'oui' ? 'Oui' : 'Non'}`);
      }

      if (this.form.painLocation) {
        result.push(`Emplacement de la douleur : ${this.form.painLocation}`);
      }

      if (this.form.painDescription) {
        result.push(`Description de la douleur : ${this.form.painDescription}`);
      }

      if (this.form.painSensation.length > 0) {
        result.push(`Sensation de la douleur : ${this.form.painSensation.join(', ')}`);
      }

      if (this.form.painMoves) {
        result.push(`La douleur se déplace : ${this.form.painMoves === 'oui' ? 'Oui' : 'Non'}`);
      }

      if (this.form.chestPainHistory) {
        result.push(`Douleur à la poitrine précédente : ${this.form.chestPainHistory === 'oui' ? 'Oui' : 'Non'}`);
      }

      if (this.form.samePainAsUsual) {
        result.push(`Même douleur que d'habitude : ${this.form.samePainAsUsual === 'oui' ? 'Oui' : 'Non'}`);
      }

      if (this.form.previousDiagnosis) {
        result.push(`Diagnostic précédent : ${this.form.previousDiagnosis}`);
      }

      if (this.form.differentToday) {
        result.push(`Différence aujourd'hui : ${this.form.differentToday}`);
      }

      if (this.form.activityWhenPainStarted) {
        result.push(`Activité lorsque la douleur a commencé : ${this.form.activityWhenPainStarted}`);
      }

      if (this.form.painOnset) {
        result.push(`Début de la douleur : ${this.form.painOnset}`);
      }

      if (this.form.painDecreasesWithRest) {
        result.push(`Douleur diminue au repos : ${this.form.painDecreasesWithRest === 'oui' ? 'Oui' : 'Non'}`);
      }

      if (this.form.painChangesWithBreathing) {
        result.push(`Douleur change en respirant : ${this.form.painChangesWithBreathing === 'oui' ? 'Oui' : 'Non'}`);
      }

      if (this.form.chestTrauma) {
        result.push(`Coup à la poitrine : ${this.form.chestTrauma === 'oui' ? 'Oui' : 'Non'}`);
      }

      if (this.form.hasHadBypass) {
        result.push('A déjà eu un pontage : Oui');
      }

      if (this.form.hasHadDilation) {
        result.push('A déjà eu une dilatation : Oui');
      }

      if (this.form.takesHeartMeds) {
        result.push(`Prend des médicaments pour le cœur : ${this.form.takesHeartMeds === 'oui' ? 'Oui' : 'Non'}`);
      }

      if (this.form.tookNitroglycerin) {
        result.push(`A pris de la nitroglycérine : ${this.form.tookNitroglycerin === 'oui' ? 'Oui' : 'Non'}`);
      }

      if (this.form.nitroglycerinAmount) {
        result.push(`Quantité de nitroglycérine prise : ${this.form.nitroglycerinAmount}`);
      }

      if (this.form.familyHeartIssues) {
        result.push(`Antécédents familiaux de maladies cardiaques : ${this.form.familyHeartIssues === 'oui' ? 'Oui' : 'Non'}`);
      }

      if (this.form.lastEpisode) {
        result.push(`Dernier épisode : ${this.form.lastEpisode}`);
      }

      if (this.form.sweatingBeforeArrival) {
        result.push(`A transpiré avant l'arrivée : ${this.form.sweatingBeforeArrival === 'oui' ? 'Oui' : 'Non'}`);
      }

      // Émettre le compte rendu au parent
      this.$emit('submit-form', result.join('\n'));
    }
  }
};
</script>

