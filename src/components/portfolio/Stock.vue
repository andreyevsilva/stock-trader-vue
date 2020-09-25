<template>
  <v-flex class="pr-3 pb-3" xs12 md6 lg4>
    <v-card class="blue darken-3 white--text">
      <v-card-title class="headline">
        <strong>
          {{stock.name}}
          <small>({{stock.price | currency}}) | Qtd: {{stock.quantity}}</small>
        </strong>
      </v-card-title>
    </v-card>

    <!--Comprar Ações-->
    <v-card>
      <v-container fill-heigth>
        <v-text-field :error="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)" label="Quantidade" type="number" v-model.number="quantity" />
        <v-btn
          :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)"
          @click="sellStock"
          class="blue darken-3 white--text"
        >Vender</v-btn>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>

import {mapActions} from 'vuex'

export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0,
    };
  },
  computed:{
    /**
     * Esse método é responsavel por não deixar o cliente vender mais ações do que ele tem,
     * caso contrario ele venderia mais ações que possui e seu saldo seria maior do que quando 
     * comprou as ações
     */
    insufficientQuantity(){
      return this.quantity > this.stock.quantity
    }
  },
  methods: {

    ...mapActions({sellStockActions:'sellStock'}),

    sellStock() {
      const order = {
        id: this.stock.id,
        price: this.stock.price,
        quantity: this.quantity,
      };

      this.sellStockActions(order)
      this.quantity = 0;
    },
  },
};
</script>

<style>
</style>