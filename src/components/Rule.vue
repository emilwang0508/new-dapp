<template>
<div class="rule">
        <img :src=imgSrc alt="star" class="star">

        <p class="text-center text-shadow special title containercontainer">Supply Rules for the War Effort</p>
        <div style="position: relative" class="container">
            <!--<img src="/static/img/rule-intro.png" alt="des" style="margin: 170px auto;display: block;">-->
            <div class="intro-des">
                <p>• Every conquestor has three chances to earn supply drops each day!</p>

                <p>• An equal amount of DCVT earned by your friend
                    each day will also be awarded to you.</p>

                <p>• If your friend also invites their friends, you will earn 25% of the DCVT earned by friends-of-friends.</p>

                <p>• DCVT given away this round of bounty airdrop: 1,000,000 Total value: $10M USD</p>

                <p>• You will get rewarded for the frist 25 friends you
                    invite, and the frist 500 people invited by your
                    friends.</p>
                <button @click="goInvite('#invite')" class="invite-btn">invite friends</button>
            </div>

        </div>

        <img :src=imgShip alt="spaceship" class="ship">
  </div>
</template>

<script>
    import imgSrc from '../../static/img/star.png'
    import ship from '../../static/img/spaceship2.png'
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
        height: 1085px;
        background-image: url(/static/img/rule-bg.png);
        background-size: cover;
        position: relative;
        margin-top: -45px;
        min-height: 600px;
        border: 1px solid transparent;
        z-index: 1;

        .intro-des {
            position: relative;
            border-image-source: url(/static/img/banner-des.png);
            border-image-slice: 0 fill;
            border-image-width: 1px;
            width: 770px;
            padding: 97px;
            margin: 0 auto;
            p {
                font-size: 18px;
                padding-bottom: 5px;
            }
        }
        .star{
            //width: 17rem;
            position: absolute;
            top: 0;
            left: 0;
        }
        .title{
            font-size: 3rem;
            margin-top: 300px;
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

        }
        button.invite-btn{
            border-image-source: url(/static/img/invite-btn.png);
            border-image-slice: 0 0 fill;
            border-image-width: 0px;
            background-color: rgba(255, 255, 255, 0);
            font-family: 'special';
            color: #fff;
            padding: 0.5rem 1.2rem;
            font-size: 30px;
            position: absolute;
            left: 65px;
            bottom: -7px;
        }
        .ship{
            //width: 30rem;
            position: absolute;
            right: 0;
            bottom: -75px;
            z-index: 1;
        }
    }
</style>
