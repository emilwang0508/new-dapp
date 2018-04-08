<template>
  <div class="rule">
    <img :src=imgSrc alt="star" class="star">
    <div class="container">
    <p class="text-right text-shadow special title">Supply <br/> Rules for  <br/>the War Effort</p>
    <div class="panel">
        <img src="/static/img/second-des.png" alt="des">
    </div>
    </div>
    <img :src=imgShip alt="spaceship" class="ship">
  </div>
</template>

<script>
    import imgSrc from '../../static/img/star.png'
    import ship from '../../static/img/spaceship2.png'
export default {
  name: 'rule',
  data () {
    return {
        msg: 'Welcome to Your Rule App',
        imgSrc: imgSrc,
        imgShip: ship
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
