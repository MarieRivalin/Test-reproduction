<script lang="ts" setup>
//Indication TypeScript

import Choice from "../src/components/Choice.vue";
import Payment from "./components/Payment.vue";
//importation du composant choice, depuis source, permettant de selectionner ce que le client souhaite faire de son objet oublié.
// J'ai remarqué que je n'avais pas à tous les importer !
</script>

<template>
  <!-- Bannière située dans App.vue, afin qu'elle soit présente dans chacun des composants -->
  <v-img
    class="contain"
    height="310"
    src="https://storage.googleapis.com/eu.artifacts.peekin-184808.appspot.com/e9a454a7-7fb3-459b-90a8-df249c1e13dc/profile/banner-f626cd23-8392-4698-0838-49dc69eaeb3d"
    style=""
  />
  <v-container class="myContainer px-8">
    <v-app>
      <!-- Les composants que j'ai décidé d'empiler ici -->
      <Choice />
      <Adress />
      <Offer />
      <Payment />
      <!-- La partie contact située avant le footer -->
      <Contact />
    </v-app>
  </v-container>
  <!-- Footer -->
  <v-footer class="vfooter" text-color="secondary">
    <p class="footer">
      Un service proposé par [TEST] Hilton Garden Inn Bordeaux Centre en
      partenariat avec PeeK'in. <br />
      Besoin d'aide : hello@peekin.me
    </p>
  </v-footer>
</template>
<style>
/* Ajout de style pour différents éléments de la page */
.myContainer {
  padding-top: 2rem;
  background-color: #f4f3ef;
  max-width: none;
}
h1 {
  font-size: 1.3rem;
  color: #2a3e8e;
}
.footer {
  width: 100vw;
  background-color: #2a3e8e;
  color: white;
  text-align: center;
  padding: 15px 0;
  margin: 0;
  /* position: fixed; */
  /* left: 0;
  bottom: 0; */
  z-index: 10;
}
.vfooter {
  padding: 0 !important;
  margin: 0;
}
</style>
