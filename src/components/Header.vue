<template>
    <header class="header" v-if="this.$store.state.logined===true">
        <div class="balance fl">
            <p class="text-shadow">{{this.$store.state.userInfo.deposit}} DCVT</p></div>
        <div class="menu fr"  @click="switchStatus" v-bind:class="{ active: isActive }">
            <img src="/static/img/user-icon.png" alt="icon">
            <div class="menu-panel"  v-bind:class="{ active: isActive }">
                <div @click="redirectTo('uc')">{{this.$store.state.userInfo.name}}</div>
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
    header.header{
        z-index: 3;
        position: relative;
        .balance{
            height: 3.7rem;
            border-image-source: url(/static/img/balance.png);
            border-image-slice: 0 0 fill;
            border-image-width: 0px;
            padding: 0px 20px;
            line-height: 2.7rem;
        }
        .menu{
            position: relative;
            img{
                height: 3.7rem;
                right: 0;
            }
            .menu-panel{
                display: none;
                position: absolute;
                right: 0;
                text-align: right;
                padding: 5px 10px;
                width: 60px;
                top: 3.7rem;
                background-color: rgba(0,0,0,0.5);
                border-radius: 5px;
                >*{
                    height: 30px;
                    line-height: 30px;
                    font-size: 1.5rem;
                    cursor: pointer;
                }
            }
            .menu-panel.active{
                display: inline-block;
            }
        }
    }
</style>
