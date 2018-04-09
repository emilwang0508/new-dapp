<template>

    <div class="lottery container">
        <p class="title text-center text-shadow special" v-on:click="test">Supply Depot</p>
        <p class="text-shadow text-center">You have<span> 3 </span> chances left today</p>
        <div class="col-xs-4"  v-for="(item, index) in items" ><div v-html="item.content"  v-on:click="handleLottery" ></div></div>
        <div class="cf"></div>
        <!--<div class="h50"></div>-->
        <p class="des">The Galactic Constructon Corporation provides bountiful funds to bankroll your invasion efforts. Choose your supply crate now to claim your funding.</p>

    </div>
</template>

<script>
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
                ]
            }
        },
        methods:{
          handleLottery: function (e) {
            alert(111)
//            this.items[e].content = ``
          },
          test: function () {
            alert('124')
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
