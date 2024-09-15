<template>
  <v-container>
    <v-expansion-panels multiple>
      <v-expansion-panel>
        <v-expansion-panel-title>Pendant l'accouchement</v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-alert
            type="info"
            border="left"
            colored-border
            elevation="2"
          >
            <v-alert-title>PENDANT L'ACCOUCHEMENT</v-alert-title><br>
            <strong>À LA PATIENTE</strong><br>
            S’il vous plaît, couchez-vous sur le dos les genoux pliés, les hanches et les jambes ouvertes, comme pendant un examen gynécologique.<br>
            S’il vous plaît, avertissez-moi quand vous avez une contraction pour que je puisse vérifier si la tête du bébé est visible.<br>
            Nous avons probablement le temps de vous transporter à l’hôpital.<br>
            On risque de manquer de temps pour vous transporter à l’hôpital avant la naissance du bébé. Nous allons nous préparer pour vous accoucher ici même.<br>
            Il y a plus de place pour accoucher ici que dans l’ambulance.<br>
            Ne vous en faites pas, nous avons été formés pour ça.<br>
            <em>(S’il y a lieu)</em><br>
            Ce n’est pas mon premier accouchement.<br>
            Je peux voir la tête du bébé, ce qui veut dire que vous êtes prête à accoucher maintenant.<br>
            Poussez quand vous ressentez une contraction.<br>
            Ça va, cessez de pousser et essayez de respirer normalement.<br>
            Pour pousser, retenez votre souffle pendant 10 secondes en abaissant votre menton vers la poitrine.<br>
            Ne poussez pas maintenant, même si vous sentez une contraction. Bientôt, vous pourrez pousser à nouveau.<br>
            Continuez de pousser, la tête est presque sortie. La prochaine poussée devrait compléter l’accouchement.<br>
            Bon travail, le bébé est sorti. Maintenant, vous pouvez vous reposer et respirer normalement.<br>
            On ne peut pas vous accoucher ici. On doit vous transporter à l’hôpital immédiatement.<br>
            Cette position est nécessaire pour aider le bébé.<br>
            Nous devons pousser vos genoux vers votre poitrine pour aider le bébé à sortir.<br>
            Je dois appuyer sur votre ventre pour aider le bébé à sortir.<br><br>

            <strong>AU TÉMOIN/À LA TÉMOIN</strong><br>
            Félicitations! Voulez-vous couper le cordon ombilical?<br>
          </v-alert>
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-title>Après l'accouchement</v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-alert
            type="info"
            border="left"
            colored-border
            elevation="2"
          >
            <v-alert-title>Après l’accouchement</v-alert-title><br>
            Vous venez de donner naissance à un garçon/une fille. Il est (fournir l’heure : 00:00) heure/heures. Félicitations!<br>
            Mon/ma partenaire va s’occuper du bébé pendant que je continue à m’occuper de vous.<br>
            Vous saignez un peu, probablement à cause d’une déchirure. Je vais vous mettre une serviette hygiénique.<br>
            Je vais masser votre utérus pour aider à contrôler les saignements.<br>
            Nous allons maintenant vous préparer pour le transport vers l’hôpital.<br>
            Le placenta devrait sortir d’ici une vingtaine de minutes.<br>
            Le cœur de votre bébé bat un peu trop lentement; alors, nous allons lui donner de l’oxygène.<br>
            Le cœur de votre bébé bat trop lentement; alors, nous allons lui donner de l’oxygène et les soins appropriés pour son cœur.<br>
            Votre bébé est prématuré; alors, mon/ma partenaire va lui donner les soins nécessaires.<br>
            Votre bébé a besoin de soins et doit être transporté à l’hôpital; alors, j’ai appelé une autre ambulance.<br>
            Nous devons sécher votre bébé et le garder au chaud.<br>
            Nous allons mettre votre bébé directement sur vous pour le garder au chaud.<br>
            Il est important que vous commenciez à allaiter votre bébé maintenant.
          </v-alert>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
export default {
  name: "MemoPregnancy"
}
</script>

<style scoped>
</style>
