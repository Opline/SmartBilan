<template>
  <v-container>
    <v-form v-model="valid" ref="form">
      <v-card>
        <v-card-title>
          <span class="headline">Description de la Plaie - Méthode ABCDE</span>
        </v-card-title>

        <v-card-text>
          <!-- Aspect -->
          <v-row>
            <v-col cols="12">
              <v-text-field
                label="Aspect (forme, taille)"
                v-model="wound.aspect"
                :rules="rules.required"
              ></v-text-field>
            </v-col>
          </v-row>

          <!-- Bords -->
          <v-row>
            <v-col cols="12">
              <v-text-field
                label="Bords (délimités, sains ou macérés)"
                v-model="wound.edges"
                :rules="rules.required"
              ></v-text-field>
            </v-col>
          </v-row>

          <!-- Coloration -->
          <v-row>
            <v-col cols="12">
              <v-text-field
                label="Coloration (érythème, nécrose, granulation)"
                v-model="wound.color"
                :rules="rules.required"
              ></v-text-field>
            </v-col>
          </v-row>

          <!-- Drainage -->
          <v-row>
            <v-col cols="12">
              <v-text-field
                label="Drainage (type, quantité, odeur)"
                v-model="wound.drainage"
                :rules="rules.required"
              ></v-text-field>
            </v-col>
          </v-row>

          <!-- Environnement -->
          <v-row>
            <v-col cols="12">
              <v-text-field
                label="Environnement (peau périlésionnelle, infection)"
                v-model="wound.environment"
                :rules="rules.required"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="submitForm">Soumettre</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      wound: {
        aspect: '',
        edges: '',
        color: '',
        drainage: '',
        environment: ''
      },
      rules: {
        required: value => !!value || 'Ce champ est requis.',
      },
      description: '', // Ajout d'une variable pour stocker la description
    };
  },
  methods: {
    submitForm() {
      if (this.$refs.form.validate()) {
        // Construction du texte descriptif
        this.description = `Description de la plaie :
        - Aspect : ${this.wound.aspect}
        - Bords : ${this.wound.edges}
        - Coloration : ${this.wound.color}
        - Drainage : ${this.wound.drainage}
        - Environnement : ${this.wound.environment}`;

        // Affichage dans la console (peut être remplacé par un autre traitement)
        console.log(this.description);
        this.$emit("update-details",
          this.description
        );
        // Réinitialiser le formulaire si nécessaire
        this.$refs.form.reset();
      }
    },
  },
};
</script>
