<template>
  <v-app>
    <v-container>
      <v-form ref="form" @submit.prevent="submitForm">
        <!-- Section pour le témoin -->
        <v-card class="mb-5">
          <v-card-title class="headline grey lighten-2">
            Questions au Témoin
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <v-radio-group v-model="form.witnessSuicideTalk" row>
                  <p>Est-ce qu’il/elle a déjà parlé de son désir de se suicider ou de mourir?</p>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-radio-group v-model="form.witnessHasWeapons" row>
                  <p>Est-ce qu’il/elle possède des armes à la maison?</p>
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
            Questions au Patient
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <p>Avez-vous des pensées suicidaires?</p>
                <v-radio-group v-model="form.patientSuicidalThoughts" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12" v-if="form.patientSuicidalThoughts === 'oui'">
                <v-checkbox
                  label="En avez-vous souvent?"
                  v-model="form.patientFrequentThoughts"
                ></v-checkbox>
                <v-text-field
                  label="Depuis combien de temps?"
                  v-model="form.patientThoughtsDuration"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <p>Avez-vous des pensées meurtrières?</p>
                <v-radio-group v-model="form.patientMurderousThoughts" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <p>Avez-vous déjà tenté de vous suicider?</p>
                <v-radio-group v-model="form.patientAttemptedSuicide" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12" v-if="form.patientAttemptedSuicide === 'oui'">
                <v-text-field
                  label="De quelle manière?"
                  v-model="form.patientSuicideMethod"
                ></v-text-field>
                <v-text-field
                  label="Combien de fois?"
                  v-model="form.patientSuicideAttemptsCount"
                ></v-text-field>
                <v-text-field
                  label="Quand?"
                  v-model="form.patientLastAttempt"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <p>Est-ce qu’un proche de vous a fait une tentative de suicide?</p>
                <v-radio-group v-model="form.patientRelativeAttempt" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12" v-if="form.patientRelativeAttempt === 'oui'">
                <v-text-field
                  label="De quelle manière?"
                  v-model="form.patientRelativeMethod"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <p>Avez-vous un plan précis sur la manière de vous suicider?</p>
                <v-radio-group v-model="form.patientHasPlan" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12" v-if="form.patientHasPlan === 'oui'">
                <v-text-field
                  label="Avez-vous décidé quand vous voulez vous suicider?"
                  v-model="form.patientPlanTiming"
                ></v-text-field>
                <v-text-field
                  label="Avez-vous tout ce qu’il vous faut pour exécuter votre plan?"
                  v-model="form.patientPlanResources"
                ></v-text-field>
                <v-text-field
                  label="Où voulez-vous le faire?"
                  v-model="form.patientPlanLocation"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Dites-moi la raison pour laquelle vous voulez tenter de vous suicider."
                  v-model="form.patientReasonForSuicide"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Pourquoi voulez-vous mourir?"
                  v-model="form.patientReasonForDying"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <p>Est-ce qu’il y a eu de grands changements dans votre vie récemment?</p>
                <v-radio-group v-model="form.patientRecentChanges" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Depuis combien de temps êtes-vous déprimé/déprimée?"
                  v-model="form.patientDepressionDuration"
                ></v-text-field>
                <v-text-field
                  label="Quels médicaments prenez-vous pour votre dépression?"
                  v-model="form.patientDepressionMeds"
                ></v-text-field>
                <v-text-field
                  label="Depuis combien de temps prenez-vous ces médicaments?"
                  v-model="form.patientMedsDuration"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <p>Avez-vous bu de l’alcool aujourd’hui?</p>
                <v-radio-group v-model="form.patientAlcoholToday" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <p>Aviez-vous l’intention de vous réveiller demain matin?</p>
                <v-radio-group v-model="form.patientWantsToWakeUp" row>
                  <v-radio label="Oui" value="oui"></v-radio>
                  <v-radio label="Non" value="non"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <p>Souvent les gens pensent que leurs problèmes sont permanents et n’ont pas de solution alors qu’ils sont plutôt temporaires. La vie a tendance à revenir à la norme/s’améliorer : êtes-vous d’accord?</p>
                <v-radio-group v-model="form.patientBeliefInImprovement" row>
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
  name: 'Suicide',
  data() {
    return {
      form: {
        witnessSuicideTalk: '',
        witnessHasWeapons: '',
        patientSuicidalThoughts: '',
        patientFrequentThoughts: false,
        patientThoughtsDuration: '',
        patientMurderousThoughts: '',
        patientAttemptedSuicide: '',
        patientSuicideMethod: '',
        patientSuicideAttemptsCount: '',
        patientLastAttempt: '',
        patientRelativeAttempt: '',
        patientRelativeMethod: '',
        patientHasPlan: '',
        patientPlanTiming: '',
        patientPlanResources: '',
        patientPlanLocation: '',
        patientReasonForSuicide: '',
        patientReasonForDying: '',
        patientRecentChanges: '',
        patientDepressionDuration: '',
        patientDepressionMeds: '',
        patientMedsDuration: '',
        patientAlcoholToday: '',
        patientWantsToWakeUp: '',
        patientBeliefInImprovement: '',
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
    formatSection(title, content) {
      return content ? `${title}:\n${content}\n` : '';
    },
    submitForm() {
      this.isSubmitDisabled = true;
      const result = `
        ${this.formatSection('Questions au Témoin', `
          ${this.form.witnessSuicideTalk ? `- A parlé de désir de se suicider ou de mourir : ${this.form.witnessSuicideTalk}` : ''}
          ${this.form.witnessHasWeapons ? `- Possède des armes à la maison : ${this.form.witnessHasWeapons}` : ''}
        `)}
        ${this.formatSection('Questions au Patient', `
          ${this.form.patientSuicidalThoughts ? `- Pensées suicidaires : ${this.form.patientSuicidalThoughts}` : ''}
          ${this.form.patientSuicidalThoughts === 'oui' && this.form.patientFrequentThoughts ? `- Pensées suicidaires fréquentes : Oui` : ''}
          ${this.form.patientSuicidalThoughts === 'oui' && this.form.patientThoughtsDuration ? `- Durée des pensées suicidaires : ${this.form.patientThoughtsDuration}` : ''}
          ${this.form.patientMurderousThoughts ? `- Pensées meurtrières : ${this.form.patientMurderousThoughts}` : ''}
          ${this.form.patientAttemptedSuicide ? `- Tentative de suicide : ${this.form.patientAttemptedSuicide}` : ''}
          ${this.form.patientAttemptedSuicide === 'oui' && this.form.patientSuicideMethod ? `- Méthode de tentative de suicide : ${this.form.patientSuicideMethod}` : ''}
          ${this.form.patientAttemptedSuicide === 'oui' && this.form.patientSuicideAttemptsCount ? `- Nombre de tentatives : ${this.form.patientSuicideAttemptsCount}` : ''}
          ${this.form.patientAttemptedSuicide === 'oui' && this.form.patientLastAttempt ? `- Dernière tentative : ${this.form.patientLastAttempt}` : ''}
          ${this.form.patientRelativeAttempt ? `- Proche ayant tenté de se suicider : ${this.form.patientRelativeAttempt}` : ''}
          ${this.form.patientRelativeAttempt === 'oui' && this.form.patientRelativeMethod ? `- Méthode du proche : ${this.form.patientRelativeMethod}` : ''}
          ${this.form.patientHasPlan ? `- A un plan pour se suicider : ${this.form.patientHasPlan}` : ''}
          ${this.form.patientHasPlan === 'oui' && this.form.patientPlanTiming ? `- Moment prévu pour le suicide : ${this.form.patientPlanTiming}` : ''}
          ${this.form.patientHasPlan === 'oui' && this.form.patientPlanResources ? `- Ressources pour le plan : ${this.form.patientPlanResources}` : ''}
          ${this.form.patientHasPlan === 'oui' && this.form.patientPlanLocation ? `- Lieu prévu pour le suicide : ${this.form.patientPlanLocation}` : ''}
          ${this.form.patientReasonForSuicide ? `- Raison pour tenter de se suicider : ${this.form.patientReasonForSuicide}` : ''}
          ${this.form.patientReasonForDying ? `- Raison pour vouloir mourir : ${this.form.patientReasonForDying}` : ''}
          ${this.form.patientRecentChanges ? `- Changements récents dans la vie : ${this.form.patientRecentChanges}` : ''}
          ${this.form.patientDepressionDuration ? `- Durée de la dépression : ${this.form.patientDepressionDuration}` : ''}
          ${this.form.patientDepressionMeds ? `- Médicaments pour la dépression : ${this.form.patientDepressionMeds}` : ''}
          ${this.form.patientMedsDuration ? `- Durée de la prise des médicaments : ${this.form.patientMedsDuration}` : ''}
          ${this.form.patientAlcoholToday ? `- A bu de l'alcool aujourd'hui : ${this.form.patientAlcoholToday}` : ''}
          ${this.form.patientWantsToWakeUp ? `- Intention de se réveiller demain matin : ${this.form.patientWantsToWakeUp}` : ''}
          ${this.form.patientBeliefInImprovement ? `- Croyance que les problèmes sont temporaires : ${this.form.patientBeliefInImprovement}` : ''}
        `)}
      `.trim();

      this.$emit('submit-form', result);
    }
  }
};
</script>

