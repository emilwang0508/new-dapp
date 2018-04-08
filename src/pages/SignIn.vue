<template>
  <div class="sign-panel">
    <div class="container">
      <a href="/#/"><img src="/static/img/logo.png" alt="logo" class="logo"></a>
      <p class="des text-shadow">AAA Space Domination MMO on Ethereum Blockchain</p>
      <div class="form-panel">
        <i><img src="/static/img/form-corner.png" alt=""></i>
        <i><img src="/static/img/form-corner.png" alt=""></i>
        <i><img src="/static/img/form-corner.png" alt=""></i>
        <label for="email" >Email</label>
        <input type="text" v-model="email" id="email">
        <label for="password" >Password</label>
        <input type="password" v-model="password" id="password">
        <div class="h50"></div>
        <button class="submit">Submit</button>
      </div>
      <p class="text-center text-shadow">if you don't have an account, please <a href="/#/sign-up">register</a></p>

    </div>
  </div>
</template>

<script>
import '../assets/css/main.scss'
export default {
  name: 'SignIn',
  data () {
    return {
        msg: 'SignIn',
        email: '',
        password: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">


</style>

