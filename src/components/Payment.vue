<script setup lang="ts">
import { ref, computed } from "vue";
//importation de computed pour calculer automatiquement la somme de shippingCost et serviceFee

// Exemples de coûts
const shippingCost = ref(9.31);
const serviceFee = ref(6.0);

// Calcul du total
// On additionne shippingCost + serviceFee
// et on formate le résultat pour qu'il ait toujours 2 décimales (.toFixed(2))
const totalCost = computed(() => {
  return (shippingCost.value + serviceFee.value).toFixed(2);
});

// Mode de paiement choisi
const paymentMode = ref("card");

// Champs CB
const cardNumber = ref("");
const cardExpiry = ref("");
const cardCvc = ref("");
const cardCountry = ref("France");
</script>
<template>
  <v-container class="payment-container">
    <v-card class="pa-6 mx-auto" max-width="800px" elevation="3">
      <!-- Étapes (header) -->
      <v-row class="justify-center">
        <!-- Titre principal -->

        <v-col cols="12" class="text-center">
          <h2 class="text-h6 font-weight-bold">Livraison de mon objet</h2>
        </v-col>

        <!-- Pastilles des 3 étapes -->
        <v-col cols="12" class="d-flex justify-center align-center">
          <!-- Étape 1 (ADRESSE) : cochée -->
          <v-avatar size="40" class="bg-success text-white font-weight-bold"
            ><v-icon>mdi-check</v-icon></v-avatar
          >
          <span class="mx-2 font-weight-bold grey--text">ADRESSE</span>

          <!-- Étape 2 (EXPÉDITION) : cochée -->
          <v-avatar size="40" class="bg-success text-white font-weight-bold"
            ><v-icon>mdi-check</v-icon></v-avatar
          >
          <span class="mx-2 font-weight-bold grey--text">EXPÉDITION</span>

          <!-- Étape 3 (PAIEMENT) : active (en orange) -->
          <v-avatar size="40" class="bg-orange text-white font-weight-bold"
            >3</v-avatar
          >
          <span class="mx-2 font-weight-bold orange--text">PAIEMENT</span>
        </v-col>
      </v-row>

      <!-- Récapitulatif -->
      <v-row class="mt-4">
        <v-col cols="12">
          <!-- Titre "Récapitulatif" -->

          <h3 class="text-subtitle-1 font-weight-bold">Récapitulatif</h3>
          <!-- On affiche quelques données (coût expédition, frais de service, total...) -->

          <div class="text-body-1 mb-2">
            <div>Expédition : {{ shippingCost }} €</div>
            <div>
              Participation frais de service PeeK’in : {{ serviceFee }} €
            </div>
            <strong>Total : {{ totalCost }} €</strong>
          </div>

          <!-- Petit texte sur la sécurité -->

          <small class="grey--text">Module sécurisé SSL par Stripe</small>
        </v-col>
      </v-row>

      <!-- Formulaire de paiement -->
      <v-form>
        <!-- Sélecteur de mode de paiement -->
        <v-radio-group v-model="paymentMode" color="primary">
          <v-radio label="Carte bancaire" value="card"></v-radio>
          <v-radio label="PayPal" value="paypal"></v-radio>
        </v-radio-group>

        <!-- Formulaire CB si paymentMode === 'card' -->
        <div v-if="paymentMode === 'card'">
          <v-text-field
            v-model="cardNumber"
            label="Numéro de carte"
            outlined
            dense
          ></v-text-field>

          <v-row>
            <v-col cols="6">
              <v-text-field
                v-model="cardExpiry"
                label="Date d'expiration (MM / AA)"
                outlined
                dense
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="cardCvc"
                label="Code de sécurité (CVC)"
                outlined
                dense
              ></v-text-field>
            </v-col>
          </v-row>

          <v-select
            v-model="cardCountry"
            :items="['France', 'Belgique', 'Suisse']"
            label="Pays"
            outlined
            dense
          ></v-select>
        </div>

        <!-- Si PayPal, on peut juste afficher un petit message -->
        <div v-else>
          <p class="text-body-2">
            Vous serez redirigé(e) vers PayPal pour finaliser le paiement.
          </p>
        </div>

        <!-- Boutons bas de formulaire -->
        <v-row class="mt-4">
          <v-col cols="6">
            <v-btn variant="outlined" block>Retour</v-btn>
          </v-col>
          <v-col cols="6">
            <!-- Utilisation de la valeur dynamique computed -->
            <v-btn block color="primary"> Payer {{ totalCost }} € </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </v-container>
</template>

<style scoped>
.payment-container {
  background-color: #f7f5f0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
