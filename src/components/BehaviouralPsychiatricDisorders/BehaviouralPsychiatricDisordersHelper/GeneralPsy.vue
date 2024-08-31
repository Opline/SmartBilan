<template>
  <v-app>
    <v-container>
      <v-form ref="form" @submit.prevent="submitForm">
        <!-- Section pour le témoin -->
        <v-card class="mb-5">
          <v-card-title class="headline grey lighten-2">
            AU TÉMOIN/À LA TÉMOIN
          </v-card-title>
          <v-card-text>
            <!-- Questions pour le témoin -->
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Est-ce que le patient/la patiente a des antécédents psychiatriques ou des troubles comportementaux?"
                  v-model="form.witnessPsychiatricHistory"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Quel hôpital ou médecin fait le suivi de son état de santé?"
                  v-model="form.witnessFollowUp"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Qu’est-ce qui a changé dans son comportement qui vous fait croire qu’il y a un problème?"
                  v-model="form.witnessBehaviorChange"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-radio-group v-model="form.witnessMedicationCompliance" row>
                  <v-radio label="Est-ce qu’il/elle prend ses médicaments tels que prescrits?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <!-- Section pour le patient -->
        <v-card class="mb-5">
          <v-card-title class="headline grey lighten-2">
            AU PATIENT/À LA PATIENTE
          </v-card-title>
          <v-card-text>
            <!-- Questions pour le patient -->
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Quel est votre nom?"
                  v-model="form.patientName"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Quel jour sommes-nous?"
                  v-model="form.patientCurrentDay"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Savez-vous où vous êtes?"
                  v-model="form.patientLocation"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Pouvez-vous me dire ce qui s’est passé aujourd’hui et pourquoi vous avez appelé une ambulance?"
                  v-model="form.patientIncident"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-radio-group v-model="form.patientAwareness" row>
                  <v-radio label="Savez-vous qui je suis?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-radio-group v-model="form.patientReason" row>
                  <v-radio label="Savez-vous pourquoi je suis ici?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Pouvez-vous me dire dans quel état d’esprit vous êtes?"
                  v-model="form.patientMood"
                  :items="['Anxieux/anxieuse', 'En colère', 'Déprimé/déprimée', 'Effrayé/effrayée', 'Excité/excitée', 'Heureux/heureuse', 'Triste', 'Autres']"
                  multiple
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-radio-group v-model="form.patientStrangeSights" row>
                  <v-radio label="Voyez-vous des choses qui vous semblent étranges?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-radio-group v-model="form.patientStrangeSounds" row>
                  <v-radio label="Entendez-vous des voix ou des bruits qui vous semblent étranges?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-radio-group v-model="form.patientHarmVoices" row>
                  <v-radio label="Est-ce qu’il y a des voix qui vous dictent de vous faire du mal ou de faire mal à quelqu’un?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Quel hôpital ou médecin fait le suivi de votre état de santé?"
                  v-model="form.patientFollowUp"
                ></v-text-field>
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
  name: 'GeneralPsy',
  data() {
    return {
      form: {
        witnessPsychiatricHistory: '',
        witnessFollowUp: '',
        witnessBehaviorChange: '',
        witnessMedicationCompliance: '',
        patientName: '',
        patientCurrentDay: '',
        patientLocation: '',
        patientIncident: '',
        patientAwareness: '',
        patientReason: '',
        patientMood: [],
        patientStrangeSights: '',
        patientStrangeSounds: '',
        patientHarmVoices: '',
        patientFollowUp: ''
      },
      isSubmitDisabled: false
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
      let result = '';

      // Section témoin
      if (this.form.witnessPsychiatricHistory) {
        result += `Antécédents psychiatriques ou troubles comportementaux: ${this.form.witnessPsychiatricHistory}\n`;
      }
      if (this.form.witnessFollowUp) {
        result += `Suivi médical: ${this.form.witnessFollowUp}\n`;
      }
      if (this.form.witnessBehaviorChange) {
        result += `Changement de comportement: ${this.form.witnessBehaviorChange}\n`;
      }
      if (this.form.witnessMedicationCompliance) {
        result += `Prise des médicaments tels que prescrits: ${this.form.witnessMedicationCompliance === 'oui' ? 'Oui' : 'Non'}\n`;
      }

      // Section patient
      if (this.form.patientName) {
        result += `Nom du patient: ${this.form.patientName}\n`;
      }
      if (this.form.patientCurrentDay) {
        result += `Jour actuel: ${this.form.patientCurrentDay}\n`;
      }
      if (this.form.patientLocation) {
        result += `Localisation: ${this.form.patientLocation}\n`;
      }
      if (this.form.patientIncident) {
        result += `Incident: ${this.form.patientIncident}\n`;
      }
      if (this.form.patientAwareness) {
        result += `Connaissance de qui je suis: ${this.form.patientAwareness === 'oui' ? 'Oui' : 'Non'}\n`;
      }
      if (this.form.patientReason) {
        result += `Connaissance de la raison de ma présence: ${this.form.patientReason === 'oui' ? 'Oui' : 'Non'}\n`;
      }
      if (this.form.patientMood.length) {
        result += `État d'esprit: ${this.form.patientMood.join(', ')}\n`;
      }
      if (this.form.patientStrangeSights) {
        result += `Perception de choses étranges: ${this.form.patientStrangeSights === 'oui' ? 'Oui' : 'Non'}\n`;
      }
      if (this.form.patientStrangeSounds) {
        result += `Perception de sons étranges: ${this.form.patientStrangeSounds === 'oui' ? 'Oui' : 'Non'}\n`;
      }
      if (this.form.patientHarmVoices) {
        result += `Voix dictant de faire du mal: ${this.form.patientHarmVoices === 'oui' ? 'Oui' : 'Non'}\n`;
      }
      if (this.form.patientFollowUp) {
        result += `Suivi médical: ${this.form.patientFollowUp}\n`;
      }

      // Émettre le résultat si ce n'est pas vide
      if (result.trim()) {
        this.$emit('submit-form', result.trim());
      }
    }
  }
};
</script>

<style>
.mb-5 {
  margin-bottom: 20px;
}
</style>
