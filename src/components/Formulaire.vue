<template>
  <div v-if="dialogSummary">
    <v-btn class="dowload" color="secondary" @click="generatePDF"><v-icon left>mdi-download</v-icon></v-btn>
    <div id="pdf-content">
  <div class="cr" >
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
    <v-btn class="invisibleBtn" color="secondary" @click="dialogSummary = false">Annuler</v-btn>
    <v-btn class="invisibleBtnBottom" color="secondary" @click="imprimerpage">Annuler</v-btn>
  </div>
  <div class="cr2">
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
    <v-btn class="invisibleBtn" color="secondary" @click="dialogSummary = false">Annuler</v-btn>
    <v-btn class="invisibleBtnBottom" color="secondary" @click="imprimerpage">Annuler</v-btn>
  </div>
    </div>

  </div>

  <div class="formvue" v-else>
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
                          <v-btn color="primary" v-bind="props">Ajouter Méthode</v-btn>
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
                  <v-btn color="primary" @click="reviewForm" >Soumettre</v-btn>
                  <v-btn color="secondary" @click="resetForm" class="ml-2">Réinitialiser</v-btn>
                  <v-btn color="secondary" @click="retrieveFromCache" class="ml-2">Récupérer</v-btn>
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

  <!-- Dialog de confirmation -->
  <v-dialog v-model="confirmDialogVisible" max-width="500">
    <v-card>
      <v-card-title class="headline">{{ confirmDialogTitle }}</v-card-title>
      <v-card-text>{{ confirmDialogMessage }}</v-card-text>
      <v-card-actions>
        <v-btn color="secondary" @click="confirmDialogVisible = false">Annuler</v-btn>
        <v-btn color="primary" @click="confirmAction">Confirmer</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import html2pdf from 'html2pdf.js';
import 'jspdf-autotable';
import ABCDE from "./Methods/ABCDE.vue";
import Melinas from "./Methods/Melinas.vue";
import ScoreAPGAR from "./Methods/ScoreAPGAR.vue";
import FastScore from "./Methods/FastScore.vue";
import Glasgowscore from "./Methods/Glasgowscore.vue";
import Tilt from "./Methods/Tilt.vue";
import Morse from "./Methods/Morse.vue";

export default {
  name: "FormulaireIndex",
  props: {
    sharedData: {
      type: Array,
      default: () => [],
    },
  },

  watch: {
    sharedData : {
  immediate: true,
    handler (newVal) {
    const infos = JSON.parse(JSON.stringify(newVal))
      this.form.examenClinique += infos.join(', ');
}
}

  },
  data() {
    return {
      valid: false,
      form: {
        responsable: "Robin Lortie Ambulancier (DEA) à SMA Quint",
        antecedents: "",
        allergies: "",
        traitement: "",
        modeVie: "",
        motifMedical: "",
        anamnese: "Vers h ",
        examenClinique: "Autres plaintes : Signe de gravité:",
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
      confirmDialogVisible: false, // Pour gérer l'affichage du dialogue de confirmation
      confirmDialogTitle: '', // Titre du dialogue de confirmation
      confirmDialogMessage: '', // Message du dialogue de confirmation
      confirmCallback: null, // Callback à exécuter si l'action est confirmée
    };
  },
  mounted() {
    // Ajouter l'événement beforeunload pour sauvegarder les données dans le cache avant de quitter la page
    window.addEventListener('beforeunload', this.saveToCache);
  },
  beforeDestroy() {
    // Supprimer l'événement beforeunload pour éviter les fuites de mémoire
    window.removeEventListener('beforeunload', this.saveToCache);
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
      this.saveToCache();
      // Afficher la boîte de dialogue récapitulative
      this.dialogSummary = true;
    },
    confirmAction() {
      if (this.confirmCallback) {
        this.confirmCallback();
      }
      this.confirmDialogVisible = false;
    },
    confirmBeforeAction(title, message, callback) {
      this.confirmDialogTitle = title;
      this.confirmDialogMessage = message;
      this.confirmCallback = callback;
      this.confirmDialogVisible = true;
    },
    resetForm() {
      this.confirmBeforeAction(
        'Réinitialiser le formulaire',
        'Êtes-vous sûr de vouloir réinitialiser le formulaire? Cette action est réversible.',
        () => {
          this.saveToCache();
          this.$refs.form.reset();
          this.valid = false;
          this.selectedMethod = "";
          this.currentComponent = null;
          this.addedMethods = []; // Réinitialiser les méthodes ajoutées
        }
      );
    },
    retrieveFromCache() {
      this.confirmBeforeAction(
        'Récupérer les données du cache',
        'Êtes-vous sûr de vouloir récupérer les données depuis le cache? Cela écrasera les données actuelles du formulaire.',
        () => {
          const cachedData = localStorage.getItem('formData');
          if (cachedData) {
            const parsedData = JSON.parse(cachedData);
            this.form = parsedData;
            this.addedMethods = parsedData.methods || [];
          } else {
            alert("Aucune donnée trouvée dans le cache.");
          }
        }
      );
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
    saveToCache() {
      const formData = { ...this.form, methods: this.addedMethods };
      // Enregistrer les données du formulaire dans localStorage
      localStorage.setItem('formData', JSON.stringify(formData));
    },
    generatePDF() {
      const element = document.getElementById('pdf-content');

      // Options pour html2pdf
      const options = {
        margin: 1,  // Réduisez les marges
        filename: 'CR_Ambulancier.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },  // Réduisez l'échelle pour éviter de trop augmenter la taille
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }  // Lettre (8.5 x 11 pouces)
      };

      // Générer et télécharger le PDF
      html2pdf().from(element).set(options).save();
    }
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
.cr2{
  max-height: 50vh;
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
.formvue{
  margin-bottom: 40px;
}
.dowload{
  opacity: 0;
  position: absolute;
  pointer-events: auto;
  right: 0;
}

</style>
