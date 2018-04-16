<template>

    <div class="lottery container">
        <p class="title text-center text-shadow special">Supply Depot</p>
        <p class="text-shadow text-center" style="margin-bottom: 2rem;">You have<span> {{this.$store.state.lottery.times}} </span> chances left today</p>
        <div class="lottery-panel" >
            <div  v-for="(item, index) in items" class="col-xs-4" v-on:click="handleLottery(index)" v-html="item.content"  ></div>
        </div>
        <div class="h50"></div>
        <div class="clear-fix"></div>
        <p class="des">The Galactic Constructon Corporation provides bountiful funds to bankroll your invasion efforts. Choose your supply crate above to claim your funding.</p>

    </div>
</template>

<script>
    import { MessageBox } from 'mint-ui'
    import { mapGetters } from 'vuex'
    export default {
        name: 'lottery',
        data () {
            return {
                msg: 'lottery',
                items: [
                  {content:`<img src="/static/img/default.png" alt="" class="border"><img src="/static/img/normal.png" alt="" class="capsule">`},
                  {content:`<img src="/static/img/default.png" alt="" class="border"><img src="/static/img/normal.png" alt="" class="capsule">`},
                  {content:`<img src="/static/img/default.png" alt="" class="border"><img src="/static/img/normal.png" alt="" class="capsule">`},
                  {content:`<img src="/static/img/default.png" alt="" class="border"><img src="/static/img/normal.png" alt="" class="capsule">`},
                  {content:`<img src="/static/img/default.png" alt="" class="border"><img src="/static/img/normal.png" alt="" class="capsule">`},
                  {content:`<img src="/static/img/default.png" alt="" class="border"><img src="/static/img/normal.png" alt="" class="capsule">`},
                  {content:`<img src="/static/img/default.png" alt="" class="border"><img src="/static/img/normal.png" alt="" class="capsule">`},
                  {content:`<img src="/static/img/default.png" alt="" class="border"><img src="/static/img/normal.png" alt="" class="capsule">`},
                  {content:`<img src="/static/img/default.png" alt="" class="border"><img src="/static/img/normal.png" alt="" class="capsule">`},
                ],

            }
        },
        methods:{
          handleLottery: function (e) {
            let session = this.$store.state.session
            let _this = this

            if (session==null||session==''){
              MessageBox.alert('',{message: 'Please register or login to play.',title: 'Tips',confirmButtonText: 'Register',showCancelButton: true,cancelButtonText: 'Cancel',closeOnClickModal: true}).then(action=>{
                if(action=='confirm')
                this.$router.push('/sign-up')
              })
            }else {
              if(this.lottery.selected.indexOf(e)<0){
                if(this.lottery.times>0){
                  let data = {
                    id: e.toString(),
                    session: session
                  }
                  this.$store.dispatch('lottery',data)
                    .then((res)=>{
                      _this.items[e].content = `<p class="bonus">`+res.msg.bonus+` DCVT</p><img src="/static/img/opened.png" class="opened">`
                    })
                    .catch((error)=>{
                        if(error)
                          console.log(error)
                    })
                }else {
                  MessageBox.alert('',{message: 'You have used up your three supply drops today. Invite your friends for large amounts of DCVT rewards!',title: 'Tips',confirmButtonText: 'Invite',showCancelButton: true,cancelButtonText: 'Cancel',closeOnClickModal: true}).then(action=>{
                    if(action=='confirm')
                    _this.goInvite('#invite')
                  })
                }
              }
            }

          },
          goInvite:function (selector) {
            let anchor = document.body.querySelector(selector)
            let top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            document.documentElement.scrollTop  = anchor.offsetTop
            window.pageYOffset  = anchor.offsetTop
            document.body.scrollTop  = anchor.offsetTop
          }
        },
        computed: {
          ...mapGetters(['lottery'])
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
