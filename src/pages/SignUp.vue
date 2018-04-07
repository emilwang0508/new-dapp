<template>
  <div class="sign-panel">
    <p class="des">AAA Space Domination MMO on Ethereum Blockchain</p>
    <div class="form-panel">
      <div class="input-group">
        <label for="email" >Email</label>
        <input type="text" v-model="email">
      </div>
      <div class="input-group">
        <label for="email" >Password</label>
        <input type="password" v-model="password">
      </div>
      <div class="input-group">
        <label for="code" >Invitation code</label>
        <input type="text" v-model="code">
      </div>
      <div class="input-group verifyCode">
        <label for="verifyCode" >Verification Code</label>
        <input type="text" v-model="verifyCode">
      </div>
      <div class="h50"></div>
      <button class="submit">Submit</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SignUp',
  data () {
    return {
      msg: 'SignUp',
      email: '',
      password: '',
      code: '',
      verifyCode:''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @font-face {
    font-family: 'special';
    src: url('/static/font/neuropol.eot');
    src: url('/static/font/neuropol.eot?#iefix') format('embedded-opentype'),
    url('/static/font/neuropol.woff') format('woff'),
    url('/static/font/neuropol.ttf') format('truetype'),
    url('/static/font/neuropol.svg') format('svg');
    font-weight: normal;
    font-style: normal;
  }
.sign-panel{
  background-image: url("/static/img/background.png");
  height: 100vh;
  margin-top: -1px;
  padding-top: 1px;
  .des{
    text-align: center;
    font-size: 1.7rem;
  }
}
  .form-panel{
    border: 1px solid #7594cf;
    width: 80%;
    margin: 0 auto;
    padding: 20px;
    position: relative;
    label{
      font-size: 1.4rem;
    }
    input{
      border:1px solid #7594cf;
      width: calc(100% - 20px);
      height: 3rem;
      background-color: transparent;
      margin-bottom: 12px;
      color: #ffffff;
      padding: 0 10px;
      font-size: 16px;
      border-radius: 5px;
    }
    .img{

    }
    .submit{
      background-image: url(/static/img/submit-btn.png);
      position: absolute;
      width: 14rem;
      height: 4rem;
      right: -16px;
      bottom: -16px;
      background-size: cover;
      background-repeat: no-repeat;
      background-color: transparent;
      border: none;
      font-family: 'special';
    }
  }
</style>
