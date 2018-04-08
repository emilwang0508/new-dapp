<template>

    <div class="lottery container">
        <p class="title text-center text-shadow special">Supply Depot</p>
        <p class="text-shadow text-center">You have<span> 3 </span> chances left today</p>
        <div class="col-xs-4"><img src="/static/img/default.png" alt="" class="border"><img src="/static/img/normal.png" alt="" class="capsule"></div>
        <div class="col-xs-4"><img src="/static/img/default.png" alt="" class="border"><img src="/static/img/normal.png" alt="" class="capsule"></div>
        <div class="col-xs-4"><img src="/static/img/default.png" alt="" class="border"><img src="/static/img/normal.png" alt="" class="capsule"></div>
        <div class="col-xs-4"><img src="/static/img/default.png" alt="" class="border"><img src="/static/img/normal.png" alt="" class="capsule"></div>
        <div class="col-xs-4"><img src="/static/img/default.png" alt="" class="border"><img src="/static/img/normal.png" alt="" class="capsule"></div>
        <div class="col-xs-4"><img src="/static/img/default.png" alt="" class="border"><img src="/static/img/normal.png" alt="" class="capsule"></div>
        <div class="col-xs-4"><img src="/static/img/default.png" alt="" class="border"><img src="/static/img/normal.png" alt="" class="capsule"></div>
        <div class="col-xs-4"><img src="/static/img/default.png" alt="" class="border"><img src="/static/img/normal.png" alt="" class="capsule"></div>
        <div class="col-xs-4"><img src="/static/img/default.png" alt="" class="border"><img src="/static/img/normal.png" alt="" class="capsule"></div>
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
                msg: 'lottery'
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
