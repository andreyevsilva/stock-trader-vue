<template>
  <v-footer class="footer" dark color="lighten-1" padless>
    <v-row justify="center" no-gutters>
      <v-btn  color="white" text dark rounded class="my-2" to="/">
        Inicio
        <v-icon dark right>mdi-home</v-icon>
      </v-btn>
      <v-btn  color="white" text dark rounded class="my-2" to="/portfolio">
        Portfólio
        <v-icon dark right>mdi-folder-account</v-icon>
      </v-btn>
      <v-btn  color="white" text rounded dark class="my-2" to="/stocks">
        Ações
        <v-icon dark right>mdi-chart-line</v-icon>
      </v-btn>

      <v-col class="lighten-2 py-4 text-center white--text" cols="12">
        <div>
          {{ new Date().getFullYear() }} —
          <strong>Stock Trader</strong>
        </div>
      </v-col>

    </v-row>
  </v-footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer{
  margin-top:auto;
}
</style>