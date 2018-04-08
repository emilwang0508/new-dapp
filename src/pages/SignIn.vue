<template>
  <div class="sign-panel">
    <div class="container">
      <img src="/static/img/logo.png" alt="logo" class="logo">
      <p class="des">AAA Space Domination MMO on Ethereum Blockchain</p>
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

