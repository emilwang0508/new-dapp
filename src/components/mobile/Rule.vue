<template>
<div class="rule">
    <div class="container" style="max-width: 600px;position: relative;height: inherit;">
        <img :src=imgSrc alt="star" class="star">

        <p class="text-right text-shadow special title containercontainer">Supply <br/> Rules for  <br/>the War Effort</p>
        <div class="panel">
        <img src="/static/img/second-des.png" alt="des">
        <button @click="goInvite('#invite')">invite friends</button>

        </div>
        <img :src=imgShip alt="spaceship" class="ship">
    </div>
  </div>
</template>

<script>
    import imgSrc from '../../../static/img/star.png'
    import ship from '../../../static/img/spaceship2.png'
export default {
  name: 'rule',
  data () {
    return {
        msg: 'Welcome to Your Rule App',
        imgSrc: imgSrc,
        imgShip: ship
    }
  },
  methods:{
    goInvite:function (selector) {
      let anchor = document.body.querySelector(selector)
      let top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
      document.documentElement.scrollTop  = anchor.offsetTop
      window.pageYOffset  = anchor.offsetTop
      document.body.scrollTop  = anchor.offsetTop
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .rule{
        height: 100vh;
        background-image: url(/static/img/second.png);
        background-size: cover;
        position: relative;
        margin-top: -2px;
        min-height: 600px;
        border: 1px solid transparent;
    .star{
        width: 17rem;
        position: absolute;
        top: -4.5rem;
        left: -5%;
    }
    .title{
        font-size: 3rem;
        margin-top: 13vh;
    }
    .panel{
        z-index: 2;
        margin: 2vh auto;
        position: relative;
        max-width: 600px;
    img{
        width: 100%;
        object-fit: cover;
    }
    button{
        border-image-source: url(/static/img/invite-btn.png);
        border-image-slice: 0 0 fill;
        border-image-width: 0px;
        background-color: rgba(255, 255, 255, 0);
        font-family: 'special';
        color: #fff;
        padding: 0.5rem 1.2rem;
        font-size: 1.5rem;
        position: absolute;
        bottom: -5%;
        left: 6.5%;
    }
    }
    .ship{
        width: 30rem;
        position: absolute;
        right: 0;
        bottom: -75px;
        z-index: 1;
    }
    }
</style>
