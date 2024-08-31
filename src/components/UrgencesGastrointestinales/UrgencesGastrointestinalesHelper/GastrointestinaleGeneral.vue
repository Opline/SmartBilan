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
                <v-radio-group v-model="form.hasPain" row>
                  <v-radio label="Avez-vous/As-tu de la douleur?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12" v-if="form.hasPain === 'oui'">
                <v-select
                  label="Pouvez-vous/peux-tu décrire votre/ta douleur?"
                  v-model="form.painDescription"
                  :items="['d’avoir reçu un coup', 'de ballonnement', 'de brûlure', 'de coup de couteau', 'de coupure', 'de crampe', 'de déchirement', 'd’écrasement', 'd’indigestion', 'nouée', 'de piqûre d’aiguille', 'de pression', 'sourde', 'de tiraillement', 'de torsion']"
                  multiple
                ></v-select>
              </v-col>

              <v-col cols="12" v-if="form.hasPain === 'oui'">
                <v-text-field
                  label="Depuis combien de temps avez-vous/as-tu cette douleur?"
                  v-model="form.painDuration"
                ></v-text-field>
              </v-col>

              <v-col cols="12" v-if="form.hasPain === 'oui'">
                <v-text-field
                  label="Montrez-moi/montre-moi avec un doigt où est située votre/ta douleur."
                  v-model="form.painLocation"
                ></v-text-field>
              </v-col>

              <v-col cols="12" v-if="form.hasPain === 'oui'">
                <v-radio-group v-model="form.painToBack" row>
                  <v-radio label="Est-ce que la douleur va dans le dos?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12" v-if="form.hasPain === 'oui'">
                <v-radio-group v-model="form.painMoves" row>
                  <v-radio label="Est-ce que la douleur se déplace?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.firstTimePain" row>
                  <v-radio label="Est-ce la première fois que vous ressentez/tu ressens cette douleur?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.hasTrauma" row>
                  <v-radio label="Avez-vous/as-tu eu un traumatisme?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12" v-if="form.hasTrauma === 'oui'">
                <v-checkbox
                  label="Un coup?"
                  v-model="form.traumaBlow"
                ></v-checkbox>
                <v-checkbox
                  label="Une chute?"
                  v-model="form.traumaFall"
                ></v-checkbox>
                <v-checkbox
                  label="Avez-vous/as-tu eu un accident?"
                  v-model="form.traumaAccident"
                ></v-checkbox>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.unprotectedSex" row>
                  <v-radio label="Avez-vous/as-tu eu des relations sexuelles non protégées?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.pregnancyPossible" row>
                  <v-radio label="Pourriez-vous être enceinte?" value="oui"></v-radio>
                  <v-radio label="Peut-être" value="peut-être"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12" v-if="form.pregnancyPossible === 'oui' || form.pregnancyPossible === 'peut-être'">
                <v-text-field
                  label="Depuis combien de semaines?"
                  v-model="form.pregnancyWeeks"
                ></v-text-field>
                <v-text-field
                  label="Quelle est la date du début de votre dernière menstruation?"
                  v-model="form.lastMenstruation"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.vomited" row>
                  <v-radio label="Avez-vous vomi?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12" v-if="form.vomited === 'oui'">
                <v-select
                  label="Qu’est-ce que vous avez vomi?"
                  v-model="form.vomitType"
                  :items="['De la nourriture', 'De la bile, jaunâtre ou verdâtre', 'De la salive', 'Du sang', 'Des vomissures qui ressemblent à des grains de café/des restes de café']"
                  multiple
                ></v-select>
                <v-text-field
                  label="Combien de fois avez-vous vomi?"
                  v-model="form.vomitFrequency"
                ></v-text-field>
                <v-text-field
                  label="Quelle quantité avez-vous vomie?"
                  v-model="form.vomitAmount"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.hasEaten" row>
                  <v-radio label="Avez-vous mangé?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.hasDrunk" row>
                  <v-radio label="Avez-vous bu?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12" v-if="form.hasDrunk === 'oui'">
                <v-text-field
                  label="Quoi et quelle quantité?"
                  v-model="form.drinkDetails"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  label="Quelle est la dernière fois que vous êtes allé/allée à la selle?"
                  v-model="form.lastBowelMovement"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.hasDiarrhea" row>
                  <v-radio label="Avez-vous de la diarrhée?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12" v-if="form.hasDiarrhea === 'oui'">
                <v-text-field
                  label="Depuis combien de temps avez-vous de la diarrhée?"
                  v-model="form.diarrheaDuration"
                ></v-text-field>
                <v-text-field
                  label="Combien de fois?"
                  v-model="form.diarrheaFrequency"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-select
                  label="Quelle est la couleur de vos selles?"
                  v-model="form.stoolColor"
                  :items="['Brun', 'Gris', 'Jaune', 'Noir']"
                ></v-select>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.bloodInStool" row>
                  <v-radio label="Y avait-il du sang dans vos selles?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.vaginalDischarge" row>
                  <v-radio label="Avez-vous eu des pertes vaginales?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12" v-if="form.vaginalDischarge === 'oui'">
                <v-select
                  label="Quel type de pertes?"
                  v-model="form.dischargeType"
                  :items="['Du sang', 'Des écoulements épais blanchâtres qui ressemblent à du fromage cottage']"
                  multiple
                ></v-select>
                <v-text-field
                  label="De quelle couleur étaient les pertes?"
                  v-model="form.dischargeColor"
                ></v-text-field>
                <v-text-field
                  label="Y avait-il une odeur?"
                  v-model="form.dischargeOdor"
                ></v-text-field>
                <v-text-field
                  label="Quelle quantité de pertes avez-vous eue?"
                  v-model="form.dischargeQuantity"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.hasItching" row>
                  <v-radio label="Ressentez-vous des démangeaisons?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.hasLesion" row>
                  <v-radio label="Est-ce qu’il y a présence de plaie, d’abrasion en bas/entre les jambes?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.recentAbortion" row>
                  <v-radio label="Avez-vous eu un avortement dernièrement?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.hasUrinated" row>
                  <v-radio label="Avez-vous uriné?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12" v-if="form.hasUrinated === 'oui'">
                <v-select
                  label="De quelle couleur était votre urine?"
                  v-model="form.urineColor"
                  :items="['Jaune', 'Orange', 'Rouge', 'Transparente']"
                ></v-select>
                <v-radio-group v-model="form.urineCloudy" row>
                  <v-radio label="Est-ce que votre urine était trouble?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
                <v-radio-group v-model="form.urineOdor" row>
                  <v-radio label="Avez-vous remarqué une odeur étrange?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
                <v-radio-group v-model="form.urinePain" row>
                  <v-radio label="Avez-vous ressenti de la douleur quand vous avez uriné?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
                <v-text-field
                  label="Combien de fois avez-vous uriné?"
                  v-model="form.urineFrequency"
                ></v-text-field>
                <v-radio-group v-model="form.urineChange" row>
                  <v-radio label="Est-ce que c’est plus souvent ou moins souvent que d’habitude?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
                <v-radio-group v-model="form.urineQuantityChange" row>
                  <v-radio label="Est-ce que la quantité d’urine a changé?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.painMedication" row>
                  <v-radio label="Avez-vous pris des médicaments pour soulager votre douleur?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12" v-if="form.painMedication === 'oui'">
                <v-text-field
                  label="Lesquels?"
                  v-model="form.medicationType"
                ></v-text-field>
                <v-radio-group v-model="form.medicationEffective" row>
                  <v-radio label="Est-ce que les médicaments ont soulagé votre douleur?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  label="Y a-t-il une position qui soulage votre douleur?"
                  v-model="form.painRelievingPosition"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.pastPain" row>
                  <v-radio label="Avez-vous déjà eu cette douleur dans le passé?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.gastricProblems" row>
                  <v-radio label="Avez-vous des problèmes gastriques?" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.abdomenNormal" row>
                  <v-radio label="Votre abdomen est-il comme d’habitude?" value="oui"></v-radio>
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
  name: 'GastrointestinaleGeneral',
  data() {
    return {
      form: {
        hasPain: '',
        painDescription: [],
        painDuration: '',
        painLocation: '',
        painToBack: '',
        painMoves: '',
        firstTimePain: '',
        hasTrauma: '',
        traumaBlow: false,
        traumaFall: false,
        traumaAccident: false,
        unprotectedSex: '',
        pregnancyPossible: '',
        pregnancyWeeks: '',
        lastMenstruation: '',
        vomited: '',
        vomitType: [],
        vomitFrequency: '',
        vomitAmount: '',
        hasEaten: '',
        hasDrunk: '',
        drinkDetails: '',
        lastBowelMovement: '',
        hasDiarrhea: '',
        diarrheaDuration: '',
        diarrheaFrequency: '',
        stoolColor: '',
        bloodInStool: '',
        vaginalDischarge: '',
        dischargeType: [],
        dischargeColor: '',
        dischargeOdor: '',
        dischargeQuantity: '',
        hasItching: '',
        hasLesion: '',
        recentAbortion: '',
        hasUrinated: '',
        urineColor: '',
        urineCloudy: '',
        urineOdor: '',
        urinePain: '',
        urineFrequency: '',
        urineChange: '',
        urineQuantityChange: '',
        painMedication: '',
        medicationType: '',
        medicationEffective: '',
        painRelievingPosition: '',
        pastPain: '',
        gastricProblems: '',
        abdomenNormal: ''
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
    formatSection(title, fields) {
      const content = fields
        .filter(
          (field) =>
            this.form[field.key] !== undefined &&
            this.form[field.key] !== '' &&
            (typeof this.form[field.key] !== 'boolean' || this.form[field.key] === true)
        )
        .map((field) => {
          if (typeof this.form[field.key] === 'boolean') {
            return `${field.label} : Oui`;
          } else if (Array.isArray(this.form[field.key])) {
            return `${field.label} : ${this.form[field.key].join(', ')}`;
          } else {
            return `${field.label} : ${this.form[field.key]}`;
          }
        })
        .join('\n');
      return content ? `${title}:\n${content}` : '';
    },
    submitForm() {
      this.isSubmitDisabled = true;
      const patientFields = [
        { key: 'hasPain', label: 'Douleur' },
        { key: 'painDescription', label: 'Description de la douleur' },
        { key: 'painDuration', label: 'Durée de la douleur' },
        { key: 'painLocation', label: 'Emplacement de la douleur' },
        { key: 'painToBack', label: 'Douleur va dans le dos' },
        { key: 'painMoves', label: 'Douleur se déplace' },
        { key: 'firstTimePain', label: 'Première fois ressentie' },
        { key: 'hasTrauma', label: 'Traumatisme' },
        { key: 'traumaBlow', label: 'Un coup' },
        { key: 'traumaFall', label: 'Une chute' },
        { key: 'traumaAccident', label: 'Accident' },
        { key: 'unprotectedSex', label: 'Relations sexuelles non protégées' },
        { key: 'pregnancyPossible', label: 'Possibilité de grossesse' },
        { key: 'pregnancyWeeks', label: 'Semaines de grossesse' },
        { key: 'lastMenstruation', label: 'Dernière menstruation' },
        { key: 'vomited', label: 'Vomissement' },
        { key: 'vomitType', label: 'Type de vomissement' },
        { key: 'vomitFrequency', label: 'Fréquence des vomissements' },
        { key: 'vomitAmount', label: 'Quantité vomie' },
        { key: 'hasEaten', label: 'A mangé' },
        { key: 'hasDrunk', label: 'A bu' },
        { key: 'drinkDetails', label: 'Détails de boisson' },
        { key: 'lastBowelMovement', label: 'Dernière selle' },
        { key: 'hasDiarrhea', label: 'Diarrhée' },
        { key: 'diarrheaDuration', label: 'Durée de la diarrhée' },
        { key: 'diarrheaFrequency', label: 'Fréquence de la diarrhée' },
        { key: 'stoolColor', label: 'Couleur des selles' },
        { key: 'bloodInStool', label: 'Sang dans les selles' },
        { key: 'vaginalDischarge', label: 'Pertes vaginales' },
        { key: 'dischargeType', label: 'Type de pertes' },
        { key: 'dischargeColor', label: 'Couleur des pertes' },
        { key: 'dischargeOdor', label: 'Odeur des pertes' },
        { key: 'dischargeQuantity', label: 'Quantité de pertes' },
        { key: 'hasItching', label: 'Démangeaisons' },
        { key: 'hasLesion', label: 'Présence de plaie' },
        { key: 'recentAbortion', label: 'Avortement récent' },
        { key: 'hasUrinated', label: 'A uriné' },
        { key: 'urineColor', label: 'Couleur de l’urine' },
        { key: 'urineCloudy', label: 'Urine trouble' },
        { key: 'urineOdor', label: 'Odeur de l’urine' },
        { key: 'urinePain', label: 'Douleur en urinant' },
        { key: 'urineFrequency', label: 'Fréquence des urinations' },
        { key: 'urineChange', label: 'Changement de fréquence des urinations' },
        { key: 'urineQuantityChange', label: 'Changement de quantité d’urine' },
        { key: 'painMedication', label: 'Médicaments contre la douleur' },
        { key: 'medicationType', label: 'Type de médicaments' },
        { key: 'medicationEffective', label: 'Efficacité des médicaments' },
        { key: 'painRelievingPosition', label: 'Position soulageant la douleur' },
        { key: 'pastPain', label: 'Douleur passée' },
        { key: 'gastricProblems', label: 'Problèmes gastriques' },
        { key: 'abdomenNormal', label: 'Abdomen normal' }
      ];

      const result = `
        ${this.formatSection('Questions au Patient', patientFields)}
      `.trim();

      this.$emit('submit-form', result);
    }
  }
};
</script>

<style>
.mb-5 {
  margin-bottom: 20px;
}
</style>
