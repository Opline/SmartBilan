<template>
    <v-container>
      <v-select
          :items="motifs"
          item-value="key"
          item-title="label"
          label="Sélectionnez un ou plusieurs motifs"
          v-model="selectedMotifs"
          multiple
          outlined
          @update="emitSelectedMotifs"
      ></v-select>
    </v-container>
</template>

<script>
export default {
  data() {
    return {
      selectedMotifs: [], // Pour stocker les clés des motifs sélectionnés
      motifs: [
        { key: 2, label: 'Urgences respiratoires et pulmonaires' },
        { key: 3, label: 'Gestion des brûlures' },
        { key: 4, label: 'Urgences cardiovasculaires' },
        { key: 5, label: 'Urgences neurologiques' },
        { key: 6, label: 'Réactions allergiques et anaphylactiques' },
        { key: 7, label: 'Urgences endocriniennes' },
        { key: 8, label: 'Urgences gastro-intestinales' },
        { key: 9, label: 'Urgences abdominales et urinaires' },
        { key: 10, label: 'Urgences toxicologiques' },
        { key: 11, label: 'Urgences hématologiques' },
        { key: 12, label: 'Urgences environnementales' },
        { key: 13, label: 'Troubles comportementaux et psychiatriques' },
        { key: 14, label: 'Urgences obstétricales' },
        { key: 15, label: 'Urgences néonatales et pédiatriques' },
        { key: 16, label: 'Urgences gériatriques' },
        { key: 17, label: 'Cas de sévices physiques, de maltraitance et de négligence' },
        { key: 18, label: 'Patients ou patientes ayant des besoins particuliers' },
        { key: 19, label: 'Urgences traumatiques' }
      ]
    };
  },
  watch:{
    'selectedMotifs'  : function () {
      this.$emit('motifs-selected', this.selectedMotifs);
    }
  }
};
</script>

<style>
/* Vous pouvez ajouter des styles personnalisés ici */
</style>
