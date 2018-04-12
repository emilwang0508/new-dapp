<template>

    <div class="lottery container">
        <p class="title text-center text-shadow special">Supply Depot</p>
        <p class="text-shadow text-center">You have<span> {{this.$store.state.lottery.times}} </span> chances left today</p>
        <div class="lottery-panel" >
            <div  v-for="(item, index) in items" class="col-xs-4" v-on:click="handleLottery(index)" v-html="item.content"  ></div>
        </div>
        <div class="h50"></div>
        <div class="clear-fix"></div>
        <p class="des">The Galactic Constructon Corporation provides bountiful funds to bankroll your invasion efforts. Choose your supply crate now to claim your funding.</p>

    </div>
</template>

<script>
    import { MessageBox } from 'mint-ui'
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
              lottery:{
                  times: 3,
                  selected: []
              }
            }
        },
        methods:{
          handleLottery: function (e) {
            let session = this.$store.state.session
            let _this = this

            if (session==null||session==''){
              MessageBox.alert('',{message: 'Need to login to complete this action!',title: 'Tips',confirmButtonText: 'Log In'}).then(action=>{
                this.$router.push('/sign-in')
              })
            }else {
              if(this.lottery.selected.indexOf(e)<0){
                if(this.lottery.times >0){
                  _this.lottery.times--
                  _this.lottery.selected.push(e)
                  let data = {
                    id: e.toString(),
                    session: session
                  }
                  this.$store.dispatch('lottery',data)
                    .then((res)=>{
                      _this.items[e].content = `<p class="bonus">`+res.msg.bonus+` DCVT</p><img src="/static/img/opened.png" class="opened">`
                    })
                    .catch((error)=>{

                    })
                }
              }
              else{
                MessageBox.alert('',{message: 'Today\'s lucky draw runs out. Please try again tomorrow!',title: 'Tips',confirmButtonText: 'Confirm'}).then(action=>{})
              }


/*              if(this.lottery.selected.indexOf(e)<0){
                if (this.lottery.times===0){
                  MessageBox.alert('',{message: 'Today\'s lucky draw runs out. Please try again tomorrow!',title: 'Tips',confirmButtonText: 'Confirm'}).then(action=>{
                  })

                }
                else{
                  let data = {
                    id: e.toString(),
                    session: session
                  }
                  this.$store.dispatch('lottery',data)
                    .then((res)=>{
                      _this.items[e].content = `<p class="bonus">`+res.msg.bonus+` DCVT</p><img src="/static/img/opened.png" class="opened">`
                    })
                    .catch((error)=>{

                    })
                }
              }else{
                return false
              }*/

            }

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
