<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  created(){
    if(typeof this.$bowser.mobile!==undefined&&this.$bowser.mobile==true){
        require('./assets/css/main.scss')
    }else {
      require('./assets/css/main.scss')
    }
  }
}
</script>

<style lang="scss">
  body{
    margin: 0;
    padding: 0;
  font-size: 62.5%;
  background-color: #000;
  color: #ffffff;
  }
#app {
  font-family: 'Microsoft YaHei', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffff;
}
  body {
    font-size: 62.5%;
    /*10 ÷ 16 × 100% = 62.5%*/
  }
  h1 {
    font-size: 2.4em;
    /*2.4em × 10 = 24px */
  }
  p {
    font-size: 1.4em;
    /*1.4em × 10 = 14px */
  }
  li {
    font-size: 1.4em;
    /*1.4 × ? = 14px ? */
  }
  .h50{
    height: 50px;
  }
</style>
