<template>
  <v-app>
    <v-container>
      <v-form ref="form" @submit.prevent="submitForm">
        <!-- Section pour les antécédents respiratoires -->
        <v-card class="mb-5">
          <v-card-title class="headline grey lighten-2">
            Antécédents respiratoires
          </v-card-title>
          <v-card-text>
            <!-- Questions sur les antécédents respiratoires -->
            <v-row>
              <v-col cols="12">
                <p>Avez-vous des antécédents respiratoires chroniques ?</p>
                <v-radio-group v-model="form.chronicRespiratoryHistory" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12" v-if="form.chronicRespiratoryHistory === 'oui'">
                <p>Lesquels :</p>
                <v-checkbox-group v-model="form.respiratoryConditions">
                  <v-checkbox label="Asthme" value="asthme"></v-checkbox>
                  <v-checkbox label="Bronchite chronique" value="bronchite chronique"></v-checkbox>
                  <v-checkbox label="Emphysème" value="emphysème"></v-checkbox>
                  <v-checkbox label="MPOC" value="MPOC"></v-checkbox>
                </v-checkbox-group>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <!-- Section pour la difficulté respiratoire -->
        <v-card class="mb-5">
          <v-card-title class="headline grey lighten-2">
            Difficulté respiratoire
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <p>Avez-vous régulièrement de la difficulté à respirer ?</p>
                <v-radio-group v-model="form.regularBreathingDifficulty" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12" v-if="form.regularBreathingDifficulty === 'oui'">
                <p>Avez-vous plus de difficulté que d’habitude ?</p>
                <v-radio-group v-model="form.moreThanUsualDifficulty" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12" v-if="form.regularBreathingDifficulty === 'oui'">
                <v-text-field
                  label="Sur une échelle de 0 à 10, combien donneriez-vous à votre difficulté aujourd’hui ?"
                  type="number"
                  v-model="form.difficultyScale"
                ></v-text-field>
              </v-col>
              <v-col cols="12" v-if="form.regularBreathingDifficulty === 'oui'">
                <v-select
                  label="Est-elle apparue graduellement ou soudainement ?"
                  v-model="form.appearance"
                  :items="['Graduellement', 'Soudainement']"
                ></v-select>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Depuis combien de temps avez-vous de la difficulté à respirer ?"
                  v-model="form.breathingDifficultyDuration"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <p>Est-ce que la difficulté augmente lorsque vous êtes actif/active ?</p>
                <v-radio-group v-model="form.difficultyIncreasesWithActivity" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <p>Est-ce que votre respiration s’améliore au repos ?</p>
                <v-radio-group v-model="form.breathingImprovesAtRest" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <p>Avez-vous plus de difficulté à respirer en position couchée ?</p>
                <v-radio-group v-model="form.difficultyLyingDown" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12" v-if="form.difficultyLyingDown === 'oui'">
                <v-text-field
                  label="Depuis quand ?"
                  v-model="form.difficultyLyingDownSince"
                ></v-text-field>
                <v-text-field
                  label="Avec combien d’oreillers dormez-vous ?"
                  type="number"
                  v-model="form.numberOfPillows"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <p>Est-ce que votre crise ressemble aux précédentes ?</p>
                <v-radio-group v-model="form.similarPreviousCrisis" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <p>Prenez une grande respiration :</p>
                <v-checkbox
                  label="Est-ce que vous ressentez une douleur ?"
                  v-model="form.painWhenBreathingDeeply"
                ></v-checkbox>
                <v-checkbox
                  label="Est-ce que l’air entre bien ?"
                  v-model="form.airEntersWell"
                ></v-checkbox>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <!-- Section pour les traitements et médicaments reçus -->
        <v-card class="mb-5">
          <v-card-title class="headline grey lighten-2">
            Traitements et médicaments reçus
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <p>Avez-vous de l’oxygène à la maison ?</p>
                <v-radio-group v-model="form.oxygenAtHome" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12" v-if="form.oxygenAtHome === 'oui'">
                <v-select
                  label="Est-ce que vous utilisez de l’oxygène avec un concentrateur d’oxygène ou un système cryogénique ?"
                  v-model="form.oxygenSystem"
                  :items="['Concentrateur d’oxygène', 'Système cryogénique']"
                ></v-select>
                <v-text-field
                  label="Pendant combien d’heures par jour utilisez-vous de l’oxygène ?"
                  type="number"
                  v-model="form.oxygenHoursPerDay"
                ></v-text-field>
                <v-text-field
                  label="Combien de litres utilisez-vous par minute ?"
                  type="number"
                  v-model="form.oxygenLitersPerMinute"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <p>Utilisez-vous un appareil respiratoire la nuit ou le jour, comme un CPAP ou BiPAP ?</p>
                <v-radio-group v-model="form.usesRespiratoryDevice" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <p>Prenez-vous des médicaments pour vos problèmes respiratoires ?</p>
                <v-radio-group v-model="form.takesRespiratoryMedications" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12" v-if="form.takesRespiratoryMedications === 'oui'">
                <v-text-field
                  label="Lesquels ?"
                  v-model="form.respiratoryMedications"
                ></v-text-field>
                <v-select
                  label="Comment :"
                  v-model="form.medicationAdministration"
                  :items="['Comprimé', 'Nébulisateur', 'Pompe']"
                ></v-select>
                <v-checkbox
                  v-if="form.medicationAdministration === 'Pompe'"
                  label="Utilisez-vous une chambre AeroChamberMD/chambre d’inhalation lorsque vous prenez votre pompe ?"
                  v-model="form.usesInhalationChamber"
                ></v-checkbox>
              </v-col>
              <v-col cols="12">
                <p>Prenez-vous de la cortisone ou en avez-vous pris pendant plus de 10 jours au cours des 6 derniers mois ?</p>
                <v-radio-group v-model="form.takesCortisone" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12" v-if="form.takesCortisone === 'oui'">
                <p>Prenez-vous votre médicament tel qu’il est recommandé par votre médecin ?</p>
                <v-radio-group v-model="form.followsMedicationAdvice" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <p>Avez-vous pris vos médicaments aujourd’hui ?</p>
                <v-radio-group v-model="form.tookMedicationsToday" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12" v-if="form.tookMedicationsToday === 'oui'">
                <p>Avez-vous pris le même dosage que d’habitude ?</p>
                <v-radio-group v-model="form.sameDosageAsUsual" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
                <p>Est-ce que votre respiration s’est améliorée ?</p>
                <v-radio-group v-model="form.breathingImproved" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <!-- Section pour l'hospitalisation -->
        <v-card class="mb-5">
          <v-card-title class="headline grey lighten-2">
            Hospitalisation
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <p>Avez-vous déjà été hospitalisé/hospitalisée pour des difficultés respiratoires ?</p>
                <v-radio-group v-model="form.hospitalizedForBreathing" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12" v-if="form.hospitalizedForBreathing === 'oui'">
                <v-select
                  label="À l’urgence ou aux soins intensifs ?"
                  v-model="form.hospitalizationLocation"
                  :items="['Urgence', 'Soins intensifs']"
                ></v-select>
              </v-col>
              <v-col cols="12">
                <p>Avez-vous déjà été intubé/intubée ?</p>
                <v-radio-group v-model="form.intubatedBefore" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <!-- Section pour les infections ou maladies -->
        <v-card class="mb-5">
          <v-card-title class="headline grey lighten-2">
            Infection ou maladie
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <p>Est-ce que vous toussez ?</p>
                <v-radio-group v-model="form.coughs" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12" v-if="form.coughs === 'oui'">
                <p>Est-ce que vous crachez ?</p>
                <v-radio-group v-model="form.sputum" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
                <v-col cols="12" v-if="form.sputum === 'oui'">
                  <v-select
                    label="De quelle couleur sont les crachats/expectorations ?"
                    v-model="form.sputumColor"
                    :items="['Blanche', 'Jaune', 'Rose', 'Verte']"
                  ></v-select>
                  <v-checkbox
                    label="Y avait-il du sang dans les crachats/expectorations ?"
                    v-model="form.bloodInSputum"
                  ></v-checkbox>
                </v-col>
              </v-col>
              <v-col cols="12">
                <p>Est-ce que vous dormez bien ?</p>
                <v-radio-group v-model="form.sleepsWell" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <p>Avez-vous plus de difficulté à respirer en position couchée ?</p>
                <v-radio-group v-model="form.difficultyBreathingLyingDown" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12" v-if="form.difficultyBreathingLyingDown === 'oui'">
                <v-text-field
                  label="Depuis quand ?"
                  v-model="form.difficultyBreathingLyingDownSince"
                ></v-text-field>
                <v-text-field
                  label="Avec combien d’oreillers dormez-vous ?"
                  type="number"
                  v-model="form.pillowsWhileSleeping"
                ></v-text-field>
                <v-checkbox
                  label="Est-ce que la difficulté à respirer vous réveille la nuit ?"
                  v-model="form.breathingDifficultyWakesUp"
                ></v-checkbox>
              </v-col>
              <v-col cols="12">
                <p>Prenez-vous des antibiotiques ?</p>
                <v-radio-group v-model="form.takesAntibiotics" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <p>Avez-vous fait de la fièvre ?</p>
                <v-radio-group v-model="form.hadFever" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <p>Avez-vous eu :</p>
                <v-checkbox
                  label="Des frissons/des grelottements ?"
                  v-model="form.hadChills"
                ></v-checkbox>
                <v-checkbox
                  label="Chaud ?"
                  v-model="form.feltHot"
                ></v-checkbox>
              </v-col>
              <v-col cols="12">
                <p>Avez-vous de la douleur quand vous prenez une grande respiration ?</p>
                <v-radio-group v-model="form.painWhenBreathingDeep" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <!-- Section pour les habitudes de vie -->
        <v-card class="mb-5">
          <v-card-title class="headline grey lighten-2">
            Habitudes de vie
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <p>Êtes-vous un fumeur/une fumeuse ?</p>
                <v-radio-group v-model="form.smoker" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12" v-if="form.smoker === 'oui'">
                <v-text-field
                  label="Combien de cigarettes fumez-vous par jour ?"
                  type="number"
                  v-model="form.cigarettesPerDay"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <p>Avez-vous déjà fumé ?</p>
                <v-radio-group v-model="form.everSmoked" row>
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
  name: 'BPCO',
  data() {
    return {
      isSubmitDisabled: false, // Nouveau état pour le bouton de soumission
      form: {
        chronicRespiratoryHistory: '',
        respiratoryConditions: [],
        regularBreathingDifficulty: '',
        moreThanUsualDifficulty: '',
        difficultyScale: null,
        appearance: '',
        breathingDifficultyDuration: '',
        difficultyIncreasesWithActivity: '',
        breathingImprovesAtRest: '',
        difficultyLyingDown: '',
        difficultyLyingDownSince: '',
        numberOfPillows: null,
        similarPreviousCrisis: '',
        painWhenBreathingDeeply: false,
        airEntersWell: false,
        oxygenAtHome: '',
        oxygenSystem: '',
        oxygenHoursPerDay: null,
        oxygenLitersPerMinute: null,
        usesRespiratoryDevice: '',
        takesRespiratoryMedications: '',
        respiratoryMedications: '',
        medicationAdministration: '',
        usesInhalationChamber: false,
        takesCortisone: '',
        followsMedicationAdvice: '',
        tookMedicationsToday: '',
        sameDosageAsUsual: '',
        breathingImproved: '',
        hospitalizedForBreathing: '',
        hospitalizationLocation: '',
        intubatedBefore: '',
        coughs: '',
        sputum: '',
        sputumColor: '',
        bloodInSputum: false,
        sleepsWell: '',
        difficultyBreathingLyingDown: '',
        difficultyBreathingLyingDownSince: '',
        pillowsWhileSleeping: null,
        breathingDifficultyWakesUp: false,
        takesAntibiotics: '',
        hadFever: '',
        hadChills: false,
        feltHot: false,
        painWhenBreathingDeep: '',
        smoker: '',
        cigarettesPerDay: null,
        everSmoked: ''
      }
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

      if (this.form.chronicRespiratoryHistory) {
        report += `Antécédents respiratoires chroniques: ${this.form.chronicRespiratoryHistory}\n`;
        if (this.form.respiratoryConditions.length) {
          report += `  - Conditions respiratoires: ${this.form.respiratoryConditions.join(', ')}\n`;
        }
      }

      if (this.form.regularBreathingDifficulty) {
        report += `Difficulté respiratoire régulière: ${this.form.regularBreathingDifficulty}\n`;
        if (this.form.moreThanUsualDifficulty) {
          report += `  - Plus de difficulté que d’habitude: ${this.form.moreThanUsualDifficulty}\n`;
        }
        if (this.form.difficultyScale !== null) {
          report += `  - Échelle de difficulté respiratoire: ${this.form.difficultyScale}/10\n`;
        }
        if (this.form.appearance) {
          report += `  - Apparition de la difficulté: ${this.form.appearance}\n`;
        }
        if (this.form.breathingDifficultyDuration) {
          report += `  - Durée de la difficulté respiratoire: ${this.form.breathingDifficultyDuration}\n`;
        }
        if (this.form.difficultyIncreasesWithActivity) {
          report += `  - Difficulté augmente avec l'activité: ${this.form.difficultyIncreasesWithActivity}\n`;
        }
        if (this.form.breathingImprovesAtRest) {
          report += `  - Amélioration au repos: ${this.form.breathingImprovesAtRest}\n`;
        }
        if (this.form.difficultyLyingDown) {
          report += `  - Difficulté à respirer en position couchée: ${this.form.difficultyLyingDown}\n`;
          if (this.form.difficultyLyingDownSince) {
            report += `    - Depuis quand: ${this.form.difficultyLyingDownSince}\n`;
          }
          if (this.form.numberOfPillows !== null) {
            report += `    - Nombre d'oreillers: ${this.form.numberOfPillows}\n`;
          }
        }
        if (this.form.similarPreviousCrisis) {
          report += `  - Crise similaire aux précédentes: ${this.form.similarPreviousCrisis}\n`;
        }
        if (this.form.painWhenBreathingDeeply) {
          report += `  - Douleur lors d'une grande respiration: Oui\n`;
        }
        if (this.form.airEntersWell) {
          report += `  - L'air entre bien: Oui\n`;
        }
      }

      if (this.form.oxygenAtHome) {
        report += `Oxygène à la maison: ${this.form.oxygenAtHome}\n`;
        if (this.form.oxygenSystem) {
          report += `  - Système d'oxygène: ${this.form.oxygenSystem}\n`;
        }
        if (this.form.oxygenHoursPerDay !== null) {
          report += `  - Heures d'utilisation par jour: ${this.form.oxygenHoursPerDay}\n`;
        }
        if (this.form.oxygenLitersPerMinute !== null) {
          report += `  - Litres d'oxygène par minute: ${this.form.oxygenLitersPerMinute}\n`;
        }
      }

      if (this.form.usesRespiratoryDevice) {
        report += `Appareil respiratoire utilisé: ${this.form.usesRespiratoryDevice}\n`;
      }

      if (this.form.takesRespiratoryMedications) {
        report += `Médicaments pour les problèmes respiratoires: ${this.form.takesRespiratoryMedications}\n`;
        if (this.form.respiratoryMedications) {
          report += `  - Médicaments: ${this.form.respiratoryMedications}\n`;
        }
        if (this.form.medicationAdministration) {
          report += `  - Mode d'administration: ${this.form.medicationAdministration}\n`;
          if (this.form.medicationAdministration === 'Pompe' && this.form.usesInhalationChamber) {
            report += `    - Utilisation de chambre d'inhalation: Oui\n`;
          }
        }
      }

      if (this.form.takesCortisone) {
        report += `Utilisation de cortisone: ${this.form.takesCortisone}\n`;
        if (this.form.followsMedicationAdvice) {
          report += `  - Suivi des recommandations du médecin: ${this.form.followsMedicationAdvice}\n`;
        }
      }

      if (this.form.tookMedicationsToday) {
        report += `Médicaments pris aujourd'hui: ${this.form.tookMedicationsToday}\n`;
        if (this.form.sameDosageAsUsual) {
          report += `  - Même dosage que d'habitude: ${this.form.sameDosageAsUsual}\n`;
        }
        if (this.form.breathingImproved) {
          report += `  - Amélioration de la respiration: ${this.form.breathingImproved}\n`;
        }
      }

      if (this.form.hospitalizedForBreathing) {
        report += `Hospitalisation pour difficultés respiratoires: ${this.form.hospitalizedForBreathing}\n`;
        if (this.form.hospitalizationLocation) {
          report += `  - Lieu de l'hospitalisation: ${this.form.hospitalizationLocation}\n`;
        }
      }

      if (this.form.intubatedBefore) {
        report += `Intubation antérieure: ${this.form.intubatedBefore}\n`;
      }

      if (this.form.coughs) {
        report += `Toux: ${this.form.coughs}\n`;
        if (this.form.sputum) {
          report += `  - Crachats: ${this.form.sputum}\n`;
          if (this.form.sputumColor) {
            report += `    - Couleur des crachats: ${this.form.sputumColor}\n`;
          }
          if (this.form.bloodInSputum) {
            report += `    - Sang dans les crachats: Oui\n`;
          }
        }
      }

      if (this.form.sleepsWell) {
        report += `Sommeil de qualité: ${this.form.sleepsWell}\n`;
      }

      if (this.form.difficultyBreathingLyingDown) {
        report += `Difficulté à respirer en position couchée: ${this.form.difficultyBreathingLyingDown}\n`;
        if (this.form.difficultyBreathingLyingDownSince) {
          report += `  - Depuis quand: ${this.form.difficultyBreathingLyingDownSince}\n`;
        }
        if (this.form.pillowsWhileSleeping !== null) {
          report += `  - Nombre d'oreillers: ${this.form.pillowsWhileSleeping}\n`;
        }
        if (this.form.breathingDifficultyWakesUp) {
          report += `  - Réveil nocturne dû à la difficulté respiratoire: Oui\n`;
        }
      }

      if (this.form.takesAntibiotics) {
        report += `Utilisation d'antibiotiques: ${this.form.takesAntibiotics}\n`;
      }

      if (this.form.hadFever) {
        report += `Fièvre: ${this.form.hadFever}\n`;
      }

      if (this.form.hadChills) {
        report += `Frissons/grelottements: Oui\n`;
      }

      if (this.form.feltHot) {
        report += `Sensation de chaleur: Oui\n`;
      }

      if (this.form.painWhenBreathingDeep) {
        report += `Douleur lors d'une grande respiration: ${this.form.painWhenBreathingDeep}\n`;
      }

      if (this.form.smoker) {
        report += `Fumeur/fumeuse: ${this.form.smoker}\n`;
        if (this.form.cigarettesPerDay !== null) {
          report += `  - Cigarettes fumées par jour: ${this.form.cigarettesPerDay}\n`;
        }
      }

      if (this.form.everSmoked) {
        report += `A déjà fumé: ${this.form.everSmoked}\n`;
      }

      // Output or emit the generated report
      console.log(report.trim());
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
