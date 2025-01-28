<script lang="ts" setup></script>

<template>
  <v-card class="mx-auto pa-4" max-width="800">
    <!-- Titre "objet trouvé" -->
    <v-card-title class="text-center">
      <h1>Votre objet oublié</h1>
    </v-card-title>

    <v-divider
      class="border-opacity-75"
      color="warning"
      style="border-top-width: 2px"
    ></v-divider>

    <v-row justify="center" class="mt-4">
      <v-col cols="12" sm="5" class="d-flex justify-center align-start">
        <v-img
          src="../assets/img/d91ed812-2737-421a-26d3-41575b41a194.jpeg"
          alt="objet trouvé"
          class="rounded-lg image-objet"
          width="200"
          height="200"
          cover
        ></v-img>
      </v-col>

      <v-col cols="12" sm="7">
        <v-card-text class="pt-4">
          <p class="text-body-1">Monsieur HUA XXX,</p>
          <br />
          <p class="text-body-1 mt-2">
            Nous avons le plaisir de vous annoncer qu'un objet qui pourrait vous
            appartenir a été retrouvé : <b>Cable, Chargeur</b>.
          </p>
          <br />
          <p class="text-body-1 mt-2">
            Nos équipes l'ont mis de côté. Comment pouvons-nous vous le
            restituer ?
          </p>
        </v-card-text>

        <!-- Boutons -->
        <v-row class="button-group mt-4" dense>
          <v-col cols="12">
            <v-btn block color="primary-btn" class="button-option primary-btn">
              Envoyer à une adresse
            </v-btn>
          </v-col>
          <v-col cols="12">
            <v-btn block class="button-option secondary-btn">
              Récupérer sur place
            </v-btn>
          </v-col>
          <v-col cols="12">
            <v-btn block class="button-option secondary-btn">
              Abandonner mon objet
            </v-btn>
          </v-col>
          <v-col cols="12">
            <v-btn block class="button-option secondary-btn">
              Cet objet ne m'appartient pas
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped>
.button-group .button-option {
  border-radius: 6px;
  text-transform: none;
  font-size: 14px;
  font-weight: 600;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.button-option.primary-btn {
  background-color: #2a3e8e;
  color: #ffffff;
}

.button-option.primary-btn:hover {
  background-color: #0056b3;
}

.button-option.secondary-btn {
  background-color: #f8f9fa;
  color: #666666;
  border: 1px solid #666666;
}

.button-option.secondary-btn:hover {
  background-color: #e9ecef;
}
</style>
