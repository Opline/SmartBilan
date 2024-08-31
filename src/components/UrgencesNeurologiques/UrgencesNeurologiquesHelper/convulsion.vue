<template>
  <v-app>
    <v-container>
      <v-form ref="form" @submit.prevent="submitForm">
        <!-- Section pour le témoin -->
        <v-card class="mb-5">
          <v-card-title class="headline grey lighten-2">
            Questions au Témoin/À la Témoin
          </v-card-title>
          <v-card-text>
            <!-- Questions pour le témoin -->
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Combien de temps a duré la convulsion ?"
                  v-model="form.convulsionDuration"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="C’est arrivé quand ?"
                  v-model="form.whenHappened"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <p>Souffre-t-il/elle d’épilepsie ?</p>
                <v-radio-group v-model="form.epilepsy" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Quand est-ce qu’il/elle a eu sa dernière convulsion ?"
                  v-model="form.lastConvulsion"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Combien de convulsions est-ce qu’il/elle a eues ?"
                  v-model="form.numberOfConvulsions"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <p>Est-ce que la convulsion était semblable aux précédentes ?</p>
                <v-radio-group v-model="form.similarConvulsions" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12" v-if="form.similarConvulsions === 'non'">
                <v-text-field
                  label="Qu’est-ce qui était différent ?"
                  v-model="form.differences"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Quelle partie de son corps a commencé à trembler en premier ?"
                  v-model="form.bodyPartFirst"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <p>Est-ce que ses yeux ont roulé vers l’arrière ?</p>
                <v-radio-group v-model="form.eyesRolledBack" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <p>Est-ce que c’est tout son corps qui tremblait ou seulement un bras ou une jambe ?</p>
                <v-radio-group v-model="form.bodyShaking" row>
                  <v-radio label="Tout le corps" value="tout"></v-radio>
                  <v-radio label="Seulement un bras ou une jambe" value="partiel"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <p>Est-ce que le patient/la patiente s’est cogné la tête pendant la convulsion ?</p>
                <v-radio-group v-model="form.headHit" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <p>Est-ce qu’il/elle a fait de la fièvre ?</p>
                <v-radio-group v-model="form.hadFever" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <p>Le patient/La patiente a-t-il/elle consommé de la drogue ?</p>
                <v-radio-group v-model="form.drugUse" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <p>Est-ce qu’il/elle a souffert d’incontinence urinaire ou fécale dernièrement ?</p>
                <v-radio-group v-model="form.incontinence" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Combien de temps est-ce qu’il lui faut habituellement pour revenir à la normale ?"
                  v-model="form.timeToRecover"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <p>Est-ce qu’il/elle a eu un changement de comportement avant sa convulsion ?</p>
                <v-radio-group v-model="form.behaviorChangeBefore" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Quels médicaments prend-il/elle pour son épilepsie ?"
                  v-model="form.medications"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <p>Est-ce qu’il/elle a pris ses médicaments tels que prescrits ?</p>
                <v-radio-group v-model="form.medicationsTaken" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12" v-if="form.medicationsTaken === 'oui'">
                <v-radio-group v-model="form.medicationDoseChanged" row>
                  <v-radio label="Le dosage de médicament a été changé récemment" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <p>Est-ce qu’il s’est plaint/elle s’est plainte récemment de maux de tête, de fièvre ou de douleurs au cou ?</p>
                <v-radio-group v-model="form.recentSymptoms" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <!-- Section pour le patient -->
        <v-card class="mb-5">
          <v-card-title class="headline grey lighten-2">
            Questions au Patient/À la Patiente
          </v-card-title>
          <v-card-text>
            <!-- Questions pour le patient -->
            <v-row>
              <v-col cols="12">
                <p>Il semble que vous ayez fait une convulsion. Restez où vous êtes un instant.</p>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Avez-vous des douleurs quelque part ?"
                  v-model="form.patientPain"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <p>Vous êtes-vous mordu la langue ?</p>
                <v-radio-group v-model="form.bittenTongue" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <p>Souffrez-vous d’épilepsie ?</p>
                <v-radio-group v-model="form.patientEpilepsy" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12" v-if="form.patientEpilepsy === 'oui'">
                <v-text-field
                  label="Quels médicaments prenez-vous pour votre épilepsie ?"
                  v-model="form.patientMedications"
                ></v-text-field>
                <p>Est-ce que vous les avez pris tels que prescrits ?</p>
                <v-radio-group v-model="form.patientMedicationsTaken" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
                <v-radio-group v-if="form.patientMedicationsTaken === 'oui'" v-model="form.patientDoseChanged" row>
                  <v-radio label="Est-ce que votre dosage a été changé récemment ?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <p>Avez-vous ressenti une aura avant la convulsion ?</p>
                <v-radio-group v-model="form.auraBefore" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <p>Avez-vous eu récemment des maux de tête, de la fièvre ou des douleurs au cou ?</p>
                <v-radio-group v-model="form.recentHeadacheFeverNeckPain" row>
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
  name: 'convulsion',
  data() {
    return {
      form: {
        convulsionDuration: '',
        whenHappened: '',
        epilepsy: '',
        lastConvulsion: '',
        numberOfConvulsions: '',
        similarConvulsions: '',
        differences: '',
        bodyPartFirst: '',
        eyesRolledBack: '',
        bodyShaking: '',
        headHit: '',
        hadFever: '',
        drugUse: '',
        incontinence: '',
        timeToRecover: '',
        behaviorChangeBefore: '',
        medications: '',
        medicationsTaken: '',
        medicationDoseChanged: '',
        recentSymptoms: '',
        patientPain: '',
        bittenTongue: '',
        patientEpilepsy: '',
        patientMedications: '',
        patientMedicationsTaken: '',
        patientDoseChanged: '',
        auraBefore: '',
        recentHeadacheFeverNeckPain: ''
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
      let compteRendu = '';

      // Questions au Témoin
      if (this.form.convulsionDuration) {
        compteRendu += `Combien de temps a duré la convulsion : ${this.form.convulsionDuration}\n`;
      }
      if (this.form.whenHappened) {
        compteRendu += `C’est arrivé quand : ${this.form.whenHappened}\n`;
      }
      if (this.form.epilepsy) {
        compteRendu += `Souffre-t-il/elle d’épilepsie : ${this.form.epilepsy === 'oui' ? 'Oui' : 'Non'}\n`;
      }
      if (this.form.lastConvulsion) {
        compteRendu += `Dernière convulsion : ${this.form.lastConvulsion}\n`;
      }
      if (this.form.numberOfConvulsions) {
        compteRendu += `Nombre de convulsions : ${this.form.numberOfConvulsions}\n`;
      }
      if (this.form.similarConvulsions) {
        compteRendu += `Convulsion semblable aux précédentes : ${this.form.similarConvulsions === 'oui' ? 'Oui' : 'Non'}\n`;
      }
      if (this.form.similarConvulsions === 'non' && this.form.differences) {
        compteRendu += `Différences par rapport aux convulsions précédentes : ${this.form.differences}\n`;
      }
      if (this.form.bodyPartFirst) {
        compteRendu += `Première partie du corps à trembler : ${this.form.bodyPartFirst}\n`;
      }
      if (this.form.eyesRolledBack) {
        compteRendu += `Les yeux ont roulé vers l’arrière : ${this.form.eyesRolledBack === 'oui' ? 'Oui' : 'Non'}\n`;
      }
      if (this.form.bodyShaking) {
        compteRendu += `Tremblements du corps : ${this.form.bodyShaking === 'tout' ? 'Tout le corps' : 'Seulement un bras ou une jambe'}\n`;
      }
      if (this.form.headHit) {
        compteRendu += `Le patient s’est cogné la tête : ${this.form.headHit === 'oui' ? 'Oui' : 'Non'}\n`;
      }
      if (this.form.hadFever) {
        compteRendu += `A fait de la fièvre : ${this.form.hadFever === 'oui' ? 'Oui' : 'Non'}\n`;
      }
      if (this.form.drugUse) {
        compteRendu += `Consommation de drogue : ${this.form.drugUse === 'oui' ? 'Oui' : 'Non'}\n`;
      }
      if (this.form.incontinence) {
        compteRendu += `Incontinence urinaire ou fécale : ${this.form.incontinence === 'oui' ? 'Oui' : 'Non'}\n`;
      }
      if (this.form.timeToRecover) {
        compteRendu += `Temps pour revenir à la normale : ${this.form.timeToRecover}\n`;
      }
      if (this.form.behaviorChangeBefore) {
        compteRendu += `Changement de comportement avant la convulsion : ${this.form.behaviorChangeBefore === 'oui' ? 'Oui' : 'Non'}\n`;
      }
      if (this.form.medications) {
        compteRendu += `Médicaments pour l'épilepsie : ${this.form.medications}\n`;
      }
      if (this.form.medicationsTaken) {
        compteRendu += `Médicaments pris tels que prescrits : ${this.form.medicationsTaken === 'oui' ? 'Oui' : 'Non'}\n`;
      }
      if (this.form.medicationsTaken === 'oui' && this.form.medicationDoseChanged) {
        compteRendu += `Le dosage de médicament a été changé récemment : ${this.form.medicationDoseChanged === 'oui' ? 'Oui' : 'Non'}\n`;
      }
      if (this.form.recentSymptoms) {
        compteRendu += `Plaintes de maux de tête, de fièvre ou de douleurs au cou récemment : ${this.form.recentSymptoms === 'oui' ? 'Oui' : 'Non'}\n`;
      }

      // Questions au Patient
      if (this.form.patientPain) {
        compteRendu += `Douleurs quelque part : ${this.form.patientPain}\n`;
      }
      if (this.form.bittenTongue) {
        compteRendu += `Langue mordue : ${this.form.bittenTongue === 'oui' ? 'Oui' : 'Non'}\n`;
      }
      if (this.form.patientEpilepsy) {
        compteRendu += `Souffre d’épilepsie : ${this.form.patientEpilepsy === 'oui' ? 'Oui' : 'Non'}\n`;
      }
      if (this.form.patientEpilepsy === 'oui' && this.form.patientMedications) {
        compteRendu += `Médicaments pour l'épilepsie : ${this.form.patientMedications}\n`;
      }
      if (this.form.patientEpilepsy === 'oui' && this.form.patientMedicationsTaken) {
        compteRendu += `Médicaments pris tels que prescrits : ${this.form.patientMedicationsTaken === 'oui' ? 'Oui' : 'Non'}\n`;
      }
      if (this.form.patientEpilepsy === 'oui' && this.form.patientMedicationsTaken === 'oui' && this.form.patientDoseChanged) {
        compteRendu += `Le dosage de médicament a été changé récemment : ${this.form.patientDoseChanged === 'oui' ? 'Oui' : 'Non'}\n`;
      }
      if (this.form.auraBefore) {
        compteRendu += `Aura ressentie avant la convulsion : ${this.form.auraBefore === 'oui' ? 'Oui' : 'Non'}\n`;
      }
      if (this.form.recentHeadacheFeverNeckPain) {
        compteRendu += `Maux de tête, fièvre ou douleurs au cou récents : ${this.form.recentHeadacheFeverNeckPain === 'oui' ? 'Oui' : 'Non'}\n`;
      }

      // Émettre le compte rendu au parent
      this.$emit('submit-form', compteRendu.trim());
    }
  }
};
</script>

