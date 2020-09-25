<template>
  <v-flex class="pr-3 pb-3" xs12 md6 lg4>
    <v-card class="green darken-3 white--text">
      <v-card-title class="headline">
        <strong>
          {{stock.name}}
          <small>({{stock.price | currency}})</small>
        </strong>
      </v-card-title>
    </v-card>

    <!--Comprar Ações-->
    <v-card>
      <v-container fill-heigth>
        <v-text-field :error="insufficentFunds || !Number.isInteger(quantity)" label="Quantidade" type="number" v-model.number="quantity" />
        <v-btn :disabled="insufficentFunds || quantity <= 0 || !Number.isInteger(quantity)" @click="buyStock" class="green darken-3 white--text">Comprar</v-btn>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>

export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0,
    };
  },
  computed:{
    funds(){
      return this.$store.getters.funds
    },
    insufficentFunds(){
      /**
       * Se a quantidade de ações vezes o preço for maior que meu saldo, então
       * o Saldo será insuficiente.
       */
      return this.quantity * this.stock.price > this.funds
    }
  },
  methods: {
    buyStock() {
      
      const order = {
          id: this.stock.id,
          price: this.stock.price,
          quantity: this.quantity,
      };

      this.$store.dispatch('buyStock',order)
      this.quantity = 0;
    },
  },
};
</script>

<style>

</style>