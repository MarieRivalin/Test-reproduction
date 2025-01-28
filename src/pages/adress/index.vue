<script setup lang="ts">
import { ref } from "vue";

const company = ref("");
const firstName = ref("");
const lastName = ref("");
const email = ref("");
const country = ref("France métropolitaine");
const address = ref("");
const address2 = ref("");
const postalCode = ref("");
const city = ref("");
const phoneCode = ref("");
const phoneNumber = ref("");
const deliveryInstructions = ref(false);
const billingAddressDifferent = ref(false);
</script>

<template>
  <v-container class="address-container">
    <v-card class="pa-6 mx-auto" max-width="800px" elevation="3">
      <!-- Étapes -->
      <v-row class="justify-center">
        <v-col cols="12" class="text-center">
          <h2 class="text-h6 font-weight-bold">Livraison de mon objet</h2>
        </v-col>
        <v-col cols="12" class="d-flex justify-center">
          <v-avatar size="40" class="bg-orange text-white font-weight-bold"
            >1</v-avatar
          >
          <span class="mx-2 font-weight-bold orange--text">ADRESSE</span>
          <v-avatar size="40" class="bg-grey-lighten-3">2</v-avatar>
          <span class="mx-2 grey--text">EXPÉDITION</span>
          <v-avatar size="40" class="bg-grey-lighten-3">3</v-avatar>
          <span class="mx-2 grey--text">PAIEMENT</span>
        </v-col>
      </v-row>

      <!-- Formulaire -->
      <v-form>
        <h3 class="text-subtitle-1 font-weight-bold mt-4">
          ADRESSE DE LIVRAISON
        </h3>

        <v-text-field
          v-model="company"
          label="Entreprise"
          outlined
          dense
        ></v-text-field>

        <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="firstName"
              label="Prénom *"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="lastName"
              label="Nom *"
              outlined
              dense
            ></v-text-field>
          </v-col>
        </v-row>

        <v-text-field
          v-model="email"
          label="Email *"
          outlined
          dense
        ></v-text-field>

        <v-row>
          <v-col cols="6">
            <v-select
              v-model="country"
              :items="['France métropolitaine', 'Belgique', 'Suisse']"
              label="Pays"
              outlined
              dense
            ></v-select>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="address"
              label="Adresse *"
              outlined
              dense
            ></v-text-field>
          </v-col>
        </v-row>

        <v-text-field
          v-model="address2"
          label="Adresse ligne 2 (facultatif)"
          outlined
          dense
        ></v-text-field>

        <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="postalCode"
              label="Code postal (sans BP, ni Cedex) *"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="city"
              label="Ville *"
              outlined
              dense
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="6">
            <v-select
              v-model="phoneCode"
              :items="['+33', '+32', '+41']"
              label="Indicatif pays"
              outlined
              dense
            ></v-select>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="phoneNumber"
              label="Téléphone mobile *"
              outlined
              dense
            ></v-text-field>
          </v-col>
        </v-row>

        <v-checkbox
          v-model="deliveryInstructions"
          label="Instructions de livraison (interphone, étage, indications pour le livreur)"
        ></v-checkbox>
        <v-checkbox
          v-model="billingAddressDifferent"
          label="Adresse de facturation différente"
        ></v-checkbox>

        <!-- Boutons -->
        <v-row class="mt-4">
          <v-col cols="6">
            <v-btn variant="outlined" block>Retour</v-btn>
          </v-col>
          <v-col cols="6">
            <v-btn color="primary" block>Suivant</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </v-container>
</template>

<style scoped>
.address-container {
  background-color: #f7f5f0; /* Fond beige */
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
