<template>
  <v-app>
    <v-container>
      <v-form ref="form" @submit.prevent="submitForm">
        <!-- Section pour le patient -->
        <v-card class="mb-5">
          <v-card-title class="headline grey lighten-2">
            Questions au Patient
          </v-card-title>
          <v-card-text>
            <!-- Questions pour le patient -->
            <v-row>
              <v-col cols="12">
                <v-radio-group v-model="form.canHear" row>
                  <p>Pouvez-vous m’entendre?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.canSpeak" row>
                  <p>Pouvez-vous parler?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12" v-if="form.canSpeak === 'non'">
                <v-radio-group v-model="form.canBlink" row>
                  <p>Pouvez-vous cligner des yeux?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
                <v-alert type="info" v-if="form.canBlink === 'oui'" dense>
                  Clignez une fois pour oui et deux fois pour non.
                </v-alert>

                <v-radio-group v-model="form.canSqueezeFingers" row>
                  <p>Pouvez-vous serrer mes doigts?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
                <v-alert type="info" v-if="form.canSqueezeFingers === 'oui'" dense>
                  Serrez une fois pour oui et deux fois pour non.
                </v-alert>

                <v-radio-group v-model="form.canMoveHand" row>
                  <p>Pouvez-vous bouger votre main?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
                <v-alert type="info" v-if="form.canMoveHand === 'oui'" dense>
                  Levez le pouce pour oui et baissez le pouce pour non.
                </v-alert>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  label="Quel est votre nom?"
                  v-model="form.patientName"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.knowsLocation" row>
                  <p>Savez-vous où vous êtes?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  label="Quelle est la date d’aujourd’hui?"
                  v-model="form.currentDate"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="L’année?"
                  v-model="form.currentYear"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Le mois?"
                  v-model="form.currentMonth"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Le jour?"
                  v-model="form.currentDay"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.hasEpilepsy" row>
                  <p>Souffrez-vous d’épilepsie?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.hasDiabetes" row>
                  <p>Souffrez-vous de diabète?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.canMoveFeet" row>
                  <p>Pouvez-vous bouger les pieds?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
                <v-alert type="info" v-if="form.canMoveFeet === 'oui'" dense>
                  Pouvez-vous pousser sur mes mains? Pouvez-vous tirer mes mains?
                </v-alert>
              </v-col>

              <v-col cols="12">
                <v-checkbox
                  label="Pouvez-vous sourire s’il vous plaît?"
                  v-model="form.canSmile"
                ></v-checkbox>
              </v-col>
              <v-col cols="12">
                <v-checkbox
                  label="Pouvez-vous me montrer vos gencives?"
                  v-model="form.canShowGums"
                ></v-checkbox>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  label="Répétez après moi « Le ciel est bleu à Cincinnati »"
                  v-model="form.repeatPhrase"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-checkbox
                  label="Pouvez-vous serrer mes doigts le plus fort possible?"
                  v-model="form.canSqueezeHard"
                ></v-checkbox>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  label="À quelle heure les signes et les symptômes sont-ils apparus?"
                  v-model="form.symptomsTime"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.feelsSame" row>
                  <p>Quand je vous examine les bras, ressentez-vous la même chose de chaque côté?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.incontinence" row>
                  <p>Avez-vous souffert d’incontinence urinaire ou fécale récemment?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
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
  name: 'GeneralNeuro',
  data() {
    return {
      form: {
        canHear: '',
        canSpeak: '',
        canBlink: '',
        canSqueezeFingers: '',
        canMoveHand: '',
        patientName: '',
        knowsLocation: '',
        currentDate: '',
        currentYear: '',
        currentMonth: '',
        currentDay: '',
        hasEpilepsy: '',
        hasDiabetes: '',
        canMoveFeet: '',
        canSmile: false,
        canShowGums: false,
        repeatPhrase: '',
        canSqueezeHard: false,
        symptomsTime: '',
        feelsSame: '',
        incontinence: '',
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
      let report = '';

      if (this.form.canHear) {
        report += `Pouvez-vous m’entendre? ${this.form.canHear === 'oui' ? 'Oui' : 'Non'}\n`;
      }

      if (this.form.canSpeak) {
        report += `Pouvez-vous parler? ${this.form.canSpeak === 'oui' ? 'Oui' : 'Non'}\n`;
      }

      if (this.form.canSpeak === 'non' && this.form.canBlink) {
        report += `Pouvez-vous cligner des yeux? ${this.form.canBlink === 'oui' ? 'Oui' : 'Non'}\n`;
      }

      if (this.form.canSpeak === 'non' && this.form.canSqueezeFingers) {
        report += `Pouvez-vous serrer mes doigts? ${this.form.canSqueezeFingers === 'oui' ? 'Oui' : 'Non'}\n`;
      }

      if (this.form.canSpeak === 'non' && this.form.canMoveHand) {
        report += `Pouvez-vous bouger votre main? ${this.form.canMoveHand === 'oui' ? 'Oui' : 'Non'}\n`;
      }

      if (this.form.patientName) {
        report += `Nom du patient: ${this.form.patientName}\n`;
      }

      if (this.form.knowsLocation) {
        report += `Savez-vous où vous êtes? ${this.form.knowsLocation === 'oui' ? 'Oui' : 'Non'}\n`;
      }

      if (this.form.currentDate) {
        report += `Date d'aujourd'hui: ${this.form.currentDate}\n`;
      }

      if (this.form.currentYear) {
        report += `Année: ${this.form.currentYear}\n`;
      }

      if (this.form.currentMonth) {
        report += `Mois: ${this.form.currentMonth}\n`;
      }

      if (this.form.currentDay) {
        report += `Jour: ${this.form.currentDay}\n`;
      }

      if (this.form.hasEpilepsy) {
        report += `Souffrez-vous d’épilepsie? ${this.form.hasEpilepsy === 'oui' ? 'Oui' : 'Non'}\n`;
      }

      if (this.form.hasDiabetes) {
        report += `Souffrez-vous de diabète? ${this.form.hasDiabetes === 'oui' ? 'Oui' : 'Non'}\n`;
      }

      if (this.form.canMoveFeet) {
        report += `Pouvez-vous bouger les pieds? ${this.form.canMoveFeet === 'oui' ? 'Oui' : 'Non'}\n`;
      }

      if (this.form.canSmile) {
        report += `Pouvez-vous sourire? Oui\n`;
      }

      if (this.form.canShowGums) {
        report += `Pouvez-vous montrer vos gencives? Oui\n`;
      }

      if (this.form.repeatPhrase) {
        report += `Phrase répétée: ${this.form.repeatPhrase}\n`;
      }

      if (this.form.canSqueezeHard) {
        report += `Pouvez-vous serrer mes doigts le plus fort possible? Oui\n`;
      }

      if (this.form.symptomsTime) {
        report += `Heure d'apparition des symptômes: ${this.form.symptomsTime}\n`;
      }

      if (this.form.feelsSame) {
        report += `Ressentez-vous la même chose de chaque côté lors de l'examen des bras? ${this.form.feelsSame === 'oui' ? 'Oui' : 'Non'}\n`;
      }

      if (this.form.incontinence) {
        report += `Avez-vous souffert d’incontinence urinaire ou fécale récemment? ${this.form.incontinence === 'oui' ? 'Oui' : 'Non'}\n`;
      }

      // Émettre le rapport au parent
      this.$emit('submit-form', report.trim());
    }
  }
};
</script>

<style>
.mb-5 {
  margin-bottom: 20px;
}
</style>
