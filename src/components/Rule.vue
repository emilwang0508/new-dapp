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
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
