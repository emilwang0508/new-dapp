<template>
    <div class="intro">
        <div class="close-btn" @click="handleClose"></div>
        <div class="container">
            <a href="/#/"><img src="/static/img/logo.png" alt="logo" class="logo"></a>
            <p class="des text-shadow">AAA Space Domination MMO on Ethereum Blockchain</p>
            <img src="/static/img/intro.png" alt="intro" class="intro-img">
            <a href="https://youtu.be/8SlrUund6Rc" class="video-link  link" target="_blank"><p class="text-shadow special">Video</p></a>
            <a href="#" class="coming-link link"><p class="text-shadow special">COMING SOON</p></a>
        </div>


    </div>
</template>

<script>
  import '../assets/css/main.scss'
  import { mapGetters, mapActions } from 'vuex'
  import { Toast } from 'mint-ui'

  export default {
    name: 'Intro',
    data () {
      return {
        name: 'asdasdsa',
        password: '123456'
      }
    },
    methods: {
        handleClose(){
            this.$router.push('/')
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">


</style>

