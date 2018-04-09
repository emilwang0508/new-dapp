<template>
    <header class="header" v-if="this.$store.state.logined===true">
        <div class="balance fl"><p class="text-shadow">{{this.deposit}} DCVT</p></div>
        <!--<div class="button fr"><img src="/static/img/user-icon.png" alt="icon"></div>-->
    </header>
    <header class="header" v-else>
        <div class="button fr"><img src="/static/img/user-icon.png" alt="icon"></div>
    </header>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data () {
            return {
              deposit: 0
            }
        },
        created(){
          if (this.$store.state.userInfo!==null){
            this.deposit = this.$store.state.userInfo.deposit
          }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    header{
        padding: 10px 0;
        min-height: 20px;
    }
</style>
