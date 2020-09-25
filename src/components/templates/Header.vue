<template>
  <v-card class="mb-5" color="grey lighten-4" flat tile>
    <v-toolbar dark>
      <v-toolbar-title class="headline text-uppercase mr-4">
        <!--
        <v-img src="@/assets/img/stock-market.png" aspect-ratio="1.7"></v-img>
        -->
        <span>Stock</span>
        <span class="font-weight-light"> Trader</span>
      </v-toolbar-title>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text to="/">Inicio</v-btn>
        <v-btn text to="/portfolio">Portfólio</v-btn>
        <v-btn text to="/stocks">Ações</v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text @click="endDay">Finalizar Dia</v-btn>

        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text dark v-bind="attrs" v-on="on">Salvar & Carregar</v-btn>
          </template>
          <v-list dark>
            <v-list-item @click="saveData">
              <v-list-item-title>Salvar Dados</v-list-item-title>
            </v-list-item>
            <v-list-item @click="getData">
              <v-list-item-title>Carregar Dados</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-layout class="pl-3 pr-3" align-center>
          <span class="text-uppercase grey--text text--darken-2">Saldo: {{ funds | currency }}</span>
        </v-layout>
      </v-toolbar-items>
    </v-toolbar>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["randomStocks", "loadData"]),
    endDay() {
      this.randomStocks();
    },
    saveData() {
      const { funds, stockPortfolio, stocks } = this.$store.getters;
      this.$http.put("data.json", { funds, stockPortfolio, stocks });
    },
    getData() {
      this.loadData();
    },
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
  },
};
</script>

<style>
</style>