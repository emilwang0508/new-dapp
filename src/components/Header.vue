<template>
    <header class="header" v-if="this.$store.state.logined===true">
        <div class="balance fl">
            <p class="text-shadow">{{this.$store.state.userInfo.deposit}} DCVT</p></div>
        <div class="menu fr"  @click="switchStatus" v-bind:class="{ active: isActive }">
            <img src="/static/img/user-icon.png" alt="icon">
            <div class="menu-panel"  v-bind:class="{ active: isActive }">
                <div @click="logout()">Log Out</div>
            </div>

        </div>
    </header>
    <header class="header" v-else>
        <div class="menu fr" @click="switchStatus">
            <img src="/static/img/user-icon.png" alt="icon">
            <div class="menu-panel"  v-bind:class="{ active: isActive }">
                <div @click="redirectTo('/sign-in')">Sign In</div>
                <div @click="redirectTo('/sign-up')">Sign Up</div>
            </div>

        </div>
    </header>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        name: 'HelloWorld',
        data () {
            return {
              deposit:  (this.$store.state.userInfo!==null)?this.$store.state.userInfo.deposit : 0,
              isActive: false
            }
        },
        created(){
          if (this.$store.state.userInfo!==null){
            this.deposit = this.$store.state.userInfo.deposit
          }
        },
        methods:{
          switchStatus: function(){
            this.isActive===true?this.isActive=false:this.isActive=true
          },
          redirectTo(e){
            this.$router.push(e)
          },
          ...mapActions({logout:'logout'})
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
