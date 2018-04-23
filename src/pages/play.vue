<template>
    <div class="container play-game">
        <div class="close-btn" @click="close"></div>
        <iframe width="854" height="480" src="https://www.youtube.com/embed/8SlrUund6Rc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen style="position: relative;z-index: 3;margin: 80px auto;display: block;"></iframe>
        <p class="text-center text-shadow special" style="font-size: 30px;position: relative;z-index: 3">The game is developing,coming soon.</p>

    </div>
</template>
<script>
  export default {
    name: 'game',
    data () {
      return {}
    },
    methods:{
      close(){
        this.$router.push('/')
      }
    }
  }
</script>
<style lang="scss" scoped>
    .play-game{
        height: 100vh;
        width: 100vw;
        .close-btn{
            position: absolute;
            width: 100%;
            height: 100%;
            cursor: url(/static/img/closed-btn.png) 2 2, pointer;
            z-index: 2;
        }
    }
</style>