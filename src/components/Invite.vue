<template>
  <div class="invite">
      <div class="container">
          <div class="user-center">
              <img src="/static/img/uc.png" alt="" class="fl">
              <div class="fl">
                  <p class="name">EmilWong</p>
                  <p class="bonus text-shadow">BONUS: 524.014 DCVT (=1259.6 USD) </p>
                  <p class="invited">Friends Invited: 25 / Friends of Friends Joined: 125 </p>
              </div>
          </div>
          <div class="clear-fix"></div>
          <p class="text-center text-shadow" style="font-family: special;margin: 2vh 0;">Play Decentraverse<br/> Earn FREE ETH and DCVT </p>
          <p class="text-center" style="margin: 3vh 0;">Your friends and you earn tokens together.<br/>
              The more friends invited, the more tokens rewarded.</p>
          <div class="des">
              <img src="/static/img/invite-des.png" alt="">
          </div>
          <p class="text-center" style="margin: 2vh 0;">Join our Discord channel for occasional DCVT airdrops: <a href="">discord.gg/McpaHrq</a></p>
          <img src="/static/img/spaceship.png" alt="spaceship" class="img100">
          <div class="code-panel">
              <p>My Invitation Code</p>
              <div class="">
                  DXXGVR<div class="copy">COPY</div>
              </div>
              <p>Play Decentraverse using this link</p>
              <div class=""><p>da.dai.io/code?=DXXGVR </p><div class="copy">COPY</div></div>
              <p class="tips">Share a screenshot of this screen to earn lots of DCVT!
              </p>
          </div>
      </div>

  </div>
</template>

<script>
export default {
  name: 'Invite',
  data () {
    return {
      msg: 'Welcome to Invite'
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
