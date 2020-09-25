<template>
  <v-app class="body">
    <Header/>
    <v-container class="pr-3 pl-3">
      <transition name="slide" mode="out-in">
        <router-view/>
      </transition>
    </v-container>
    <Footer/>
  </v-app>
</template>

<script>

import Header from './components/templates/Header.vue'
import Footer from './components/templates/Footer.vue'

export default {
  components:{Header,Footer},
  created(){
    this.$store.dispatch('initStocks')
  }
};
</script>

<style>

.body{
  display:flex; 
  flex-direction:column;
}

  @keyframes slide-in{
    from {transform: translateY(-30px); opacity: 0};
    to {transform: translateY(0px); opacity: 1}
  }

  @keyframes slide-out{
    from {transform: translateY(0px); opacity: 1};
    to {transform: translateY(-30px); opacity: 0}
  }

  .slide-enter-active{
    animation: slide-in 0.3s ease;
  }

  .slide-leave-active{
    animation: slide-out 0.3s ease;
  }
</style>