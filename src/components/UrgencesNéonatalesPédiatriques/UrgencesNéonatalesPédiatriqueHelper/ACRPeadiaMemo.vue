<template>
  <v-container>
    <v-expansion-panels multiple>
      <!-- RCP Enfant -->
      <v-expansion-panel>
        <v-expansion-panel-title>Conduite à tenir : RCP Enfant</v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-alert
            type="info"
            border="left"
            colored-border
            elevation="2"
          >
            <strong>RÉANIMATION CARDIO-PULMONAIRE (RCP) CHEZ L'ENFANT</strong><br>
            <strong>Étapes :</strong><br>
            - Commencez par 5 insufflations d'air dans les poumons.<br>
            - Après les 5 insufflations initiales, vérifiez si l’enfant montre des signes de vie (respiration, mouvements, etc.).<br>
            - Si aucun signe de vie n'est détecté, commencez immédiatement les compressions thoraciques.<br>
            - Effectuez un cycle de compressions thoraciques et ventilations selon le ratio 15:2 (15 compressions pour 2 insufflations).<br>
            <strong>Rythme :</strong><br>
            - Effectuez les compressions thoraciques à un rythme rapide, d'environ 100-120 compressions par minute.<br>
            - Assurez-vous que chaque compression est suivie d'une ventilation efficace avec une bonne élévation du thorax.
          </v-alert>
        </v-expansion-panel-text>
      </v-expansion-panel>

      <!-- RCP Nouveau-né -->
      <v-expansion-panel>
        <v-expansion-panel-title>Conduite à tenir : RCP Nouveau-né</v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-alert
            type="info"
            border="left"
            colored-border
            elevation="2"
          >
            <strong>RÉANIMATION CARDIO-PULMONAIRE (RCP) CHEZ LE NOUVEAU-NÉ</strong><br>
            <strong>Étapes :</strong><br>
            - Commencez par 40 insufflations à l’air ambiant (ou à l'oxygène si disponible).<br>
            - Vérifiez si le nouveau-né montre des signes de vie après les insufflations (respiration, mouvements, battements cardiaques).<br>
            - Si nécessaire, commencez immédiatement les compressions thoraciques.<br>
            - Le ratio de compressions thoraciques et de ventilations est de 3:1 (3 compressions pour 1 insufflation).<br>
            <strong>Rythme :</strong><br>
            - Les compressions doivent être effectuées à une fréquence d'environ 120 par minute.<br>
            - Les insufflations doivent être douces et régulières, avec une bonne observation du thorax pour assurer l'efficacité de chaque ventilation.
          </v-alert>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
export default {
  name: "ACRPeadiaMemo"
}
</script>

<style scoped>
</style>
