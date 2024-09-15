<template>
  <v-app>
    <v-container>
      <v-form ref="form" @submit.prevent="submitForm">
        <!-- Section Grossesse -->
        <v-card class="mb-5">
          <v-card-title class="headline grey lighten-2">Grossesse</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <v-radio-group v-model="form.pregnant" label="Êtes-vous enceinte ?">
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <!-- Affichage conditionnel si la patiente est enceinte -->
              <template v-if="form.pregnant === 'oui'">
                <v-col cols="12">
                  <v-text-field label="Est-ce qu’un médecin ou une sage-femme fait le suivi de votre grossesse ?" v-model="form.followedBy"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="À quel endroit aviez-vous prévu accoucher ?" v-model="form.deliveryPlace"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-radio-group v-model="form.prenatalClass" label="Avez-vous suivi un cours prénatal ?">
                    <v-radio label="Oui" value="oui"></v-radio>
                    <v-radio label="Non" value="non"></v-radio>
                  </v-radio-group>
                </v-col>
                <v-col cols="12">
                  <v-radio-group v-model="form.complicationsDelivery" label="Prévoyez-vous des complications lors de l’accouchement ?">
                    <v-radio label="Oui" value="oui"></v-radio>
                    <v-radio label="Non" value="non"></v-radio>
                  </v-radio-group>
                </v-col>
                <v-col cols="12">
                  <v-radio-group v-model="form.complicationsBaby" label="Prévoyez-vous des complications avec le bébé ?">
                    <v-radio label="Oui" value="oui"></v-radio>
                    <v-radio label="Non" value="non"></v-radio>
                  </v-radio-group>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Vous êtes enceinte de combien de semaines ?" v-model="form.weeksPregnant"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="De quand datent vos dernières menstruations ?" v-model="form.lastPeriod"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-radio-group v-model="form.swelling" label="Avez-vous remarqué de l’enflure au niveau des mains, des chevilles ou des pieds ?">
                    <v-radio label="Oui" value="oui"></v-radio>
                    <v-radio label="Non" value="non"></v-radio>
                  </v-radio-group>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Vous avez eu combien de grossesses ?" v-model="form.pregnancies"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Combien de fois avez-vous accouché ?" v-model="form.deliveries"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Combien d’avortements avez-vous eus ?" v-model="form.abortions"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Combien d’accouchements à terme avez-vous eus ?" v-model="form.fullTermDeliveries"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Combien d’accouchements prématurés avez-vous eus ?" v-model="form.preTermDeliveries"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-radio-group v-model="form.babyLoss" label="Avez-vous déjà perdu un bébé après plus de 20 semaines de grossesse ?">
                    <v-radio label="Oui" value="oui"></v-radio>
                    <v-radio label="Non" value="non"></v-radio>
                  </v-radio-group>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Combien d’enfants avez-vous ?" v-model="form.children"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Combien de bébés attendez-vous (jumeaux/jumelles, triplés/triplées) ?" v-model="form.multipleBabies"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-radio-group v-model="form.cesarean" label="Avez-vous déjà eu une césarienne ?">
                    <v-radio label="Oui" value="oui"></v-radio>
                    <v-radio label="Non" value="non"></v-radio>
                  </v-radio-group>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Quel genre d’accouchement avez-vous prévu avec votre médecin : naturel ou par césarienne ?" v-model="form.deliveryPlan"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Quelle était la position du bébé lors de votre dernière échographie ?" v-model="form.babyPosition"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-radio-group v-model="form.consumedSubstances" label="Avez-vous fumé, bu de l’alcool ou consommé de la drogue pendant votre grossesse ?">
                    <v-radio label="Oui" value="oui"></v-radio>
                    <v-radio label="Non" value="non"></v-radio>
                  </v-radio-group>
                </v-col>
              </template>
            </v-row>
          </v-card-text>
        </v-card>

        <!-- Section Urgences obstétricales -->
        <v-card class="mb-5">
          <v-card-title class="headline grey lighten-2">Urgences obstétricales</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <v-radio-group v-model="form.contractions" label="Avez-vous des contractions ou des douleurs maintenant ?">
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <!-- Affichage conditionnel si des contractions sont présentes -->
              <v-col cols="12" v-if="form.contractions === 'oui'">
                <v-text-field label="À quelle fréquence ?" v-model="form.contractionFrequency"></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.bleeding" label="Avez-vous eu des saignements vaginaux ?">
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <!-- Affichage conditionnel si des saignements sont présents -->
              <v-col cols="12" v-if="form.bleeding === 'oui'">
                <v-text-field label="Combien de serviettes hygiéniques avez-vous utilisées ?" v-model="form.sanitaryPads"></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.waterBroken" label="Avez-vous perdu vos eaux ?">
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <!-- Affichage conditionnel si la patiente a perdu ses eaux -->
              <v-col cols="12" v-if="form.waterBroken === 'oui'">
                <v-text-field label="Avez-vous remarqué la présence de sang ou d’une substance verdâtre dans vos eaux ?" v-model="form.waterSubstance"></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.pushing" label="Sentez-vous le besoin de pousser ?">
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>

              <!-- Affichage conditionnel si la patiente ressent le besoin de pousser -->
              <v-col cols="12" v-if="form.pushing === 'oui'">
                <v-text-field label="Avez-vous envie d’aller à la selle ?" v-model="form.bowelMovement"></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <!-- Bouton de soumission -->
        <v-btn type="submit" color="primary">Soumettre</v-btn>
        <memoPregnancy></memoPregnancy>
      </v-form>
    </v-container>
  </v-app>
</template>

<script>
import memoPregnancy from "@/components/UrgencesObstetricales/UrgencesObstetricalesHelper/memoPregnancy.vue";
export default {
  name: 'Pregnancy',
  components: {memoPregnancy},
  data() {
    return {
      form: {
        // Grossesse
        pregnant: '',
        followedBy: '',
        deliveryPlace: '',
        prenatalClass: '',
        complicationsDelivery: '',
        complicationsBaby: '',
        weeksPregnant: '',
        lastPeriod: '',
        swelling: '',
        pregnancies: '',
        deliveries: '',
        abortions: '',
        fullTermDeliveries: '',
        preTermDeliveries: '',
        babyLoss: '',
        children: '',
        multipleBabies: '',
        cesarean: '',
        deliveryPlan: '',
        babyPosition: '',
        consumedSubstances: '',
        // Urgences obstétricales
        contractions: '',
        contractionFrequency: '',
        bleeding: '',
        sanitaryPads: '',
        waterBroken: '',
        waterSubstance: '',
        pushing: '',
        bowelMovement: ''
      }
    };
  },
  methods: {
    formatSection(title, fields) {
      const filledFields = fields.filter(([_, value]) => value);
      if (filledFields.length === 0) return '';
      const formattedFields = filledFields.map(([label, value]) => `- ${label} : ${value}`).join('\n');
      return `${title}:\n${formattedFields}\n`;
    },
    submitForm() {
      const pregnancyFields = [
        ["Êtes-vous enceinte", this.form.pregnant],
        ["Suivi par un médecin ou une sage-femme", this.form.followedBy],
        ["Lieu prévu pour accoucher", this.form.deliveryPlace],
        ["Cours prénatal", this.form.prenatalClass],
        ["Complications prévues à l'accouchement", this.form.complicationsDelivery],
        ["Complications prévues avec le bébé", this.form.complicationsBaby],
        ["Nombre de semaines de grossesse", this.form.weeksPregnant],
        ["Dernières menstruations", this.form.lastPeriod],
        ["Enflure des mains, chevilles ou pieds", this.form.swelling],
        ["Nombre de grossesses", this.form.pregnancies],
        ["Nombre d'accouchements", this.form.deliveries],
        ["Nombre d'avortements", this.form.abortions],
        ["Nombre d'accouchements à terme", this.form.fullTermDeliveries],
        ["Nombre d'accouchements prématurés", this.form.preTermDeliveries],
        ["Perte de bébé après 20 semaines", this.form.babyLoss],
        ["Nombre d'enfants", this.form.children],
        ["Nombre de bébés attendus", this.form.multipleBabies],
        ["Césarienne antérieure", this.form.cesarean],
        ["Plan d'accouchement", this.form.deliveryPlan],
        ["Position du bébé", this.form.babyPosition],
        ["Consommation de substances pendant la grossesse", this.form.consumedSubstances]
      ];

      const emergencyFields = [
        ["Contractions actuelles", this.form.contractions],
        ["Fréquence des contractions", this.form.contractionFrequency],
        ["Saignements vaginaux", this.form.bleeding],
        ["Nombre de serviettes hygiéniques utilisées", this.form.sanitaryPads],
        ["Perte des eaux", this.form.waterBroken],
        ["Présence de sang ou substance verdâtre dans les eaux", this.form.waterSubstance],
        ["Besoin de pousser", this.form.pushing],
        ["Envie d'aller à la selle", this.form.bowelMovement]
      ];

      const result = `
        ${this.formatSection("Grossesse", pregnancyFields)}
        ${this.formatSection("Urgences obstétricales", emergencyFields)}
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
