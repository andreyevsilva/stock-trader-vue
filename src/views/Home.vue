<template>
  <div>
      <h1 class="display-3 font-weigth-ligth mb-4">Negocie e consulte suas Ações</h1>
      <v-sheet :elevation="24" class="pa-2" color="primary">
        <v-icon class="white--text mr-3">info</v-icon>
        <span>Você pode Salvar & Carregar os Dados.</span>
      </v-sheet>

      <v-sheet :elevation="24" class="pa-2 darken-1 mt-3" color="success">
        <v-icon class="white--text mr-3">info</v-icon>
        <span>Clique em 'Finalizar Dia' para iniciar um novo dia.</span>
      </v-sheet>

      <v-divider class="my-5"/>
      <p class="display-1"><strong>Seu Saldo:</strong> {{funds | currency}}</p>
  </div>
</template>

<script>
export default {
  computed:{
    funds(){
      return this.$store.getters.funds
    }
  }
}
</script>

<style>

</style>