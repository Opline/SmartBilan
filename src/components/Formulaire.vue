<template>
  <v-container fluid >
    <div class="cr" v-if="dialogSummary">
      <h3 class="headline">CR Ambulancier</h3>
      <p><strong>Responsable de la prise en charge:</strong> {{ form.responsable }}</p>
      <p><strong>Antécédents:</strong> {{ form.antecedents }}</p>
      <p><strong>Allergies:</strong> {{ form.allergies }}</p>
      <p><strong>Traitement en cours:</strong> {{ form.traitement }}</p>
      <p><strong>Mode de vie, suivi, souhait:</strong> {{ form.modeVie }}</p>
      <p><strong>Motif Médical:</strong> {{ form.motifMedical }}</p>
      <p><strong>Anamnèse:</strong> {{ form.anamnese }}</p>
      <p><strong>Examen Clinique:</strong> {{ form.examenClinique }}</p>
      <div v-if="addedMethods.length">
        <ul>
          <li v-for="(item, index) in addedMethods" :key="index">
            <strong>{{ item.method }}:</strong> {{ item.details }}
          </li>
        </ul>
      </div>
      <v-btn  class="invisibleBtn" color="secondary" @click="dialogSummary = false">Annuler</v-btn>
      <v-btn  class="invisibleBtnBottom" color="secondary" @click="imprimerpage">Annuler</v-btn>
    </div>
    <div class="cr" v-if="dialogSummary">
      <h3 class="headline">CR Ambulancier</h3>
      <p><strong>Responsable:</strong> {{ form.responsable }}</p>
      <p><strong>Antécédents:</strong> {{ form.antecedents }}</p>
      <p><strong>Allergies:</strong> {{ form.allergies }}</p>
      <p><strong>Traitement en cours:</strong> {{ form.traitement }}</p>
      <p><strong>Mode de vie, suivi, souhait:</strong> {{ form.modeVie }}</p>
      <p><strong>Motif Médical:</strong> {{ form.motifMedical }}</p>
      <p><strong>Anamnèse:</strong> {{ form.anamnese }}</p>
      <p><strong>Examen Clinique:</strong> {{ form.examenClinique }}</p>
      <div v-if="addedMethods.length">
        <ul>
          <li v-for="(item, index) in addedMethods" :key="index">
            <strong>{{ item.method }}:</strong> {{ item.details }}
          </li>
        </ul>
      </div>
    </div>
    <div v-else>
    <v-row class="fill-height">
      <v-col cols="12">
        <v-card class="overflow-y-auto" style="height: 100%;">
          <v-card-text>
            <v-form v-model="valid" ref="form">
              <v-row>
                <!-- Responsable -->
                <v-col cols="12">
                  <v-text-field
                    v-model="form.responsable"
                    label="Responsable"
                    :rules="[rules.required]"
                    required
                  ></v-text-field>
                </v-col>

                <!-- Antécédents, Allergies, et Traitement en cours sur la même ligne -->
                <v-col cols="4">
                  <v-textarea
                    v-model="form.antecedents"
                    label="Antécédents"
                    :rules="[rules.required]"
                    required
                  ></v-textarea>
                </v-col>

                <v-col cols="4">
                  <v-textarea
                    v-model="form.allergies"
                    label="Allergies"
                    :rules="[rules.required]"
                    required
                  ></v-textarea>
                </v-col>

                <v-col cols="4">
                  <v-textarea
                    v-model="form.traitement"
                    label="Traitement en cours"
                    :rules="[rules.required]"
                    required
                  ></v-textarea>
                </v-col>

                <!-- Mode de vie -->
                <v-col cols="12">
                  <v-textarea
                    v-model="form.modeVie"
                    label="Mode de vie, suivi, souhait:"
                    :rules="[rules.required]"
                    required
                  ></v-textarea>
                </v-col>

                <!-- Motif Médical -->
                <v-col cols="12">
                  <v-textarea
                    v-model="form.motifMedical"
                    label="Motif Médical"
                    :rules="[rules.required]"
                    required
                  ></v-textarea>
                </v-col>

                <!-- Anamnèse -->
                <v-col cols="12">
                  <v-textarea
                    v-model="form.anamnese"
                    label="Anamnèse"
                    :rules="[rules.required]"
                    required
                  ></v-textarea>
                </v-col>

                <!-- Examen Clinique avec un bouton pour afficher le menu déroulant -->
                <v-col cols="12">
                  <v-row>
                    <v-col cols="9">
                      <v-textarea
                        v-model="form.examenClinique"
                        label="Examen Clinique"
                        :rules="[rules.required]"
                        required
                      ></v-textarea>
                    </v-col>
                    <v-col cols="3" class="d-flex align-center">
                      <v-menu>
                        <template v-slot:activator="{ props }">
                          <v-btn color="primary"  v-bind="props">Ajouter Méthode</v-btn>
                        </template>
                        <v-list>
                          <v-list-item
                            v-for="method in methods"
                            :key="method"
                            @click="openDialog(method)"
                          >
                            <v-list-item-title>{{ method }}</v-list-item-title>
                          </v-list-item>
                        </v-list>
                      </v-menu>

                    </v-col>
                  </v-row>

                  <!-- Affichage des chips pour chaque méthode ajoutée -->
                  <v-row>
                    <v-col cols="12">
                      <v-chip
                        v-for="(item, index) in addedMethods"
                        :key="index"
                        class="ma-2"
                        close
                        @click:close="removeMethod(index)"
                      >
                        {{ item.method }}
                        <v-icon right @click="removeMethod(index)">mdi-delete</v-icon>
                      </v-chip>
                    </v-col>
                  </v-row>
                </v-col>

                <!-- Boutons d'action -->
                <v-col cols="12" class="d-flex justify-end">
                  <v-btn  color="primary" @click="reviewForm">Soumettre</v-btn>
                  <v-btn color="secondary" @click="resetForm" class="ml-2">Réinitialiser</v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Dialog pour afficher les composants -->
    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-card-title class="headline">{{ selectedMethod }}</v-card-title>
        <v-card-text>
          <!-- Affichage conditionnel des composants -->
          <component :is="currentComponent"
                     :method="selectedMethod"
                     :form-data="form"
                     @update-details="handleUpdateDetails"></component>
        </v-card-text>
        <v-card-actions>
          <v-btn color="secondary" @click="dialog = false">Annuler</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </div>
    <!-- Dialog pour afficher le résumé du formulaire -->
  </v-container>
</template>

<script>
import ABCDE from "./Methods/ABCDE.vue";
import Melinas from "./Methods/Melinas.vue";
import ScoreAPGAR from "./Methods/ScoreAPGAR.vue";
import FastScore from "./Methods/FastScore.vue";
import Glasgowscore from "./Methods/Glasgowscore.vue";
import Tilt from "./Methods/Tilt.vue";
import Morse from "./Methods/Morse.vue";
export default {
  name: "FormulaireIndex",
  data() {
    return {
      valid: false,
      form: {
        responsable: "Robin Khalil-Lortie Ambulancier (DEA)",
        antecedents: "",
        allergies: "",
        traitement: "",
        modeVie: "",
        motifMedical: "",
        anamnese: "",
        examenClinique: "",
      },
      rules: {
        required: (value) => !!value || "Ce champ est requis.",
      },
      methods: ["Glasgow", "FAST", "APGAR", "Melinas", "Tilt", "Morse", "ABCDE"], // Liste des méthodes
      addedMethods: [], // Tableau pour stocker les méthodes ajoutées et leurs détails
      menu: false, // Pour gérer l'affichage du menu
      dialog: false, // Pour gérer l'affichage de la boîte de dialogue pour les méthodes
      dialogSummary: false, // Pour gérer l'affichage de la boîte de dialogue de résumé
      selectedMethod: "", // Méthode sélectionnée
      currentComponent: null, // Composant actuel à afficher dans le dialog
    };
  },
  components: { Melinas, FastScore, ScoreAPGAR, Glasgowscore, Tilt, ABCDE },
  methods: {
    imprimerpage() {
      window.print();
    },
    handleUpdateDetails(details) {
      // Ajoutez la méthode et les détails associés à addedMethods
      this.addedMethods.push({
        method: this.selectedMethod,
        details: details,
      });

      this.dialog = false;
    },
    reviewForm() {
        // Afficher la boîte de dialogue récapitulative
        this.dialogSummary = true;
    },
    submitForm() {
      const formData = { ...this.form, methods: this.addedMethods };
      console.log(formData);
      alert("Formulaire soumis avec succès !");
      this.dialogSummary = false; // Fermer le dialogue après la soumission
    },
    resetForm() {
      this.$refs.form.reset();
      this.valid = false;
      this.selectedMethod = "";
      this.currentComponent = null;
      this.addedMethods = []; // Réinitialiser les méthodes ajoutées
    },
    openDialog(method) {
      this.selectedMethod = method;

      switch (method) {
        case "Glasgow":
          this.currentComponent = Glasgowscore;
          break;
        case "FAST":
          this.currentComponent = FastScore;
          break;
        case "APGAR":
          this.currentComponent = ScoreAPGAR;
          break;
        case "Tilt":
          this.currentComponent = Tilt;
          break;
        case "Melinas":
          this.currentComponent = Melinas;
          break;
          case "ABCDE":
            this.currentComponent = ABCDE;
            break;
          case "Morse":
            this.currentComponent = Morse;
            break;
        default:
          console.warn(`Méthode non reconnue: ${method}`);
          this.currentComponent = null;
          break;
      }

      this.dialog = true;
      this.menu = false; // Fermer le menu après sélection
    },
    removeMethod(index) {
      this.addedMethods.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.fill-height {
  height: 100vh;
}

.overflow-y-auto {
  max-height: 100vh;
  overflow-y: auto;
}
.cr{
  height: 50vh;
}
.headline{
  text-align: center;
}
.invisibleBtn{
    opacity: 0; /* Rendre le bouton transparent */
    position: absolute; /* Positionner le bouton si nécessaire */
  top: 0;
    pointer-events: auto; /* Assurer que le bouton reste cliquable */
}
.invisibleBtnBottom{
  opacity: 0; /* Rendre le bouton transparent */
  position: absolute; /* Positionner le bouton si nécessaire */
  bottom: 0;
  pointer-events: auto; /* Assurer que le bouton reste cliquable */
}
</style>
