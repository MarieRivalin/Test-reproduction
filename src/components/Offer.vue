<script setup lang="ts">
import { ref } from "vue";

// Sélection du mode de livraison
const selectedOffer = ref("eco");
</script>
<template>
  <!-- 
    v-container : c'est le composant Vuetify qui crée un conteneur avec des espacements par défaut.
    On lui ajoute un style pour avoir un fond gris et le centrer verticalement. 
  -->
  <v-container class="offer-container">
    <!-- 
      v-card : composant de carte Vuetify 
    
    -->
    <v-card class="pa-6 mx-auto" max-width="800px" elevation="3">
      <!-- 
        Cette row contient les pastilles "ADRESSE - EXPÉDITION - PAIEMENT"
        On fait 3 colonnes : 
         - la première pour le titre
         - la deuxième pour afficher les 3 "étapes" 
      -->

      <v-row class="justify-center">
        <v-col cols="12" class="text-center">
          <!-- text-h6 : style Vuetify => heading 6  -->

          <h2 class="text-h6 font-weight-bold">Livraison de mon objet</h2>
        </v-col>

        <!-- Pastilles des 3 étapes -->
        <v-col cols="12" class="d-flex justify-center align-center">
          <!-- Étape 1 (ADRESSE) : cochée -->
          <v-avatar size="40" class="bg-success text-white font-weight-bold"
            ><v-icon>mdi-check</v-icon></v-avatar
          >
          <span class="mx-2 font-weight-bold grey--text">ADRESSE</span>

          <!-- Étape 2 (EXPÉDITION) : active (en orange) -->
          <v-avatar size="40" class="bg-orange text-white font-weight-bold"
            >2</v-avatar
          >
          <span class="mx-2 font-weight-bold orange--text">EXPÉDITION</span>

          <!-- Étape 3 (PAIEMENT) : à venir -->
          <v-avatar size="40" class="bg-grey-lighten-3">3</v-avatar>
          <span class="mx-2 grey--text">PAIEMENT</span>
        </v-col>
      </v-row>

      <!-- Titre / Sous-titre -->
      <v-row class="mt-4">
        <v-col cols="12">
          <h3 class="text-subtitle-1 font-weight-bold">Mode de livraison</h3>
        </v-col>
      </v-row>

      <!-- Choix du mode de livraison : Radio group
        v-form : container Vuetify pour un formulaire
        v-radio-group : le groupe de radio => on le relie à la variable selectedOffer (dans le <script>). -->
      <v-form>
        <v-radio-group v-model="selectedOffer" color="primary">
          <v-radio label="Économique : 15.31 €" value="eco">
            <template #label>
              <strong>Économique : 15.31 €</strong>
              <p class="text-body-2 mb-0">
                par Colissimo : livraison estimée sous 5 jours ouvrés à partir
                de la prise en charge par le transporteur
              </p>
              <ul class="text-body-2 my-1">
                <li>✔ Suivi en ligne</li>
                <li>✘ Indemnisation en cas de perte</li>
              </ul>
            </template>
          </v-radio>

          <!-- Offre Express -->
          <v-radio label="Express : 43.07 €" value="express">
            <template #label>
              <strong>Express : 43.07 €</strong>
              <p class="text-body-2 mb-0">
                par Chronopost : livraison estimée sous 2 jours ouvrés à partir
                de la prise en charge par le transporteur
              </p>
              <ul class="text-body-2 my-1">
                <li>✔ Suivi en ligne</li>
                <li>✔ Indemnisation en cas de perte (avec supplément)</li>
              </ul>
            </template>
          </v-radio>
        </v-radio-group>
      </v-form>

      <!-- 
        Boutons de bas de page : 
        
      -->
      <v-row class="mt-4">
        <v-col cols="6">
          <v-btn variant="outlined" block>Retour</v-btn>
        </v-col>
        <v-col cols="6">
          <v-btn block color="primary"> Suivant </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<style scoped>
.offer-container {
  background-color: #f7f5f0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
