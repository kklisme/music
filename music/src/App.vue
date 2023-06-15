<template>
  <div id="app">
   <Header/>
   <Main/>
   <Footer/>
  </div>
</template>

<script>

import Header from './layout/Header.vue';
import Main from './layout/Main.vue';
import Footer from './layout/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style scoped>
@import "assets/css/base.css";
#app {
  width: 100%;
	height: 100vh;
	position: fixed;
}
</style>
