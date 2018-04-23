<template>
    <div class="uc">
        <Header></Header>
        <div class="h50"></div>
        <p class="text-center">User Center currently only supports PC operation!</p>
    </div>
</template>

<script>
import Header from '../../components/mobile/Header'
export default {
    name: 'user-center',
    data () {
        return {

        }
    },
    components:{
      Header
    },
    created(){
      let session = locale.get('session')
      let _this = this
      if (session!==undefined) {
        axios.get(process.env.BASE_API+'/api/_csrf_token_').then((res)=>{
          if (res.status===200&&res.data.code==200){
            let csrf_token = res.data.msg
            window.axios.defaults.headers.common['csrf-token'] = csrf_token;
            window.axios.defaults.headers.common['_csrf'] = csrf_token;
            window.axios.defaults.headers.common['xsrf-token'] = csrf_token;
            window.axios.defaults.headers.common['x-csrf-token'] = csrf_token;
            window.axios.defaults.headers.common['x-xsrf-token'] = csrf_token;
            window.axios.defaults.headers.common['credentials'] = 'same-origin';

            _this.$store.dispatch('inviteStatistics', session)
            _this.$store.dispatch('getUserInfo', session)
            _this.$store.commit('SET_SESSION',session)
          }

        }).catch((error)=>{

        })
      }else{
        _this.$router.push('/bounty')
      }
    },
}
</script>

<style scoped lang="scss">
    .uc{
        background: url("/static/img/background-pc.png") no-repeat center;
        background-size: cover;
        width: 100%;
        min-height: 100vh;
        border: 1px solid transparent;
        .uc-panel{
            border-image-source: url(/static/img/uc-panel-bg.png);
            border-image-slice: 0 0 fill;
            border-image-width: 0;
            width: 1000px;
            height: 660px;
            padding: 80px 100px;
            margin: 80px auto;
            .info-panel{
                >div{
                    height: 40px;
                    line-height: 40px;
                    margin-bottom: 10px;
                    font-size: 20px;
                    text-align: left;
                    span:nth-of-type(2){
                        margin-bottom: 40px;
                        width: 220px;
                        display: inline-block;

                    }
                    a{
                        color: #00aeff;
                        text-decoration: underline;
                    }
                    .icon{
                        height: 40px;
                        width: 40px;
                        img{
                            width: 40px;
                            object-fit: cover;
                        }
                    }
                    span.amount{
                        font-size: 25px;
                        width: 300px;
                        display: inline-block;
                    }
                    .transfer-button{
                        display: inline-block;
                        font-size: 18px;
                        line-height: 40px;
                        height: 40px;
                        width: 250px;
                        font-family: special;
                        border-image-source: url(/static/img/transfer-button.png);
                        border-image-slice: 0 0 fill;
                        border-image-width: 0;
                        text-align: center;
                        cursor: pointer;
                    }
                }
            }
            .tag-group{
                margin: 70px 0 70px 80px;
                border-right: 1px solid #eeeeee;
                .tag{
                    border-image-source: url(/static/img/uc-tag-bg.png);
                    border-image-slice: 0 0 fill;
                    border-image-width: 0;
                    width: 390px;
                    height: 55px;
                    padding-top: 20px;
                    font-size: 20px;
                    font-family: special;
                    padding-left: 50px;
                    margin: 17.5px 0px;
                }
            }

        }
    }
    .tag-panel{
        width: calc(100% + 140px);
        height: 600px;
        position: relative;
        margin-left: -70px;
        margin-top: 65px;
    }
    .tag-list{
        display: block;
        height: 60px;
        width: calc(100%);
        position: absolute;
        top: 0;
        left: 0;

        .tag{
            border-image-source: url(/static/img/tag.png);
            border-image-slice: 0 0 fill;
            border-image-width: 0;
            width: 25%;
            height: 60px;
            font-family: special;
            color: #999;
            line-height: 60px;
            cursor: pointer;
        }
        .tag.active{
            border-image-source: url(/static/img/tag-active.png);
            border-image-slice: 0 0 fill;
            border-image-width: 0;
            height: 60px;
            color: #ffffff;

        }
    }
    .modal{
        position: fixed;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background-color: #000;
        z-index: 999;
        .close-panel{
            position: absolute;
            width: 100%;
            height: 100%;
        }
    }
    .form-group{
        width: 600px;
        margin: 100px auto;

    }
    .form-panel{
        border-image-source: url(/static/img/form-panel-border.png);
        border-image-slice: 0 0 fill;
        border-image-width: 0;
        width: 460px;
        min-height: 285px;
        margin: 70px 30px;
        padding: 55px;
        .des{
            font-size: 20px;
            color: #ffffff;
        }
        label{
            display: block;
            margin-bottom: 10px;
        }
        .send-button{
            position: absolute;
            width: 120px;
            max-width: 200px;
            height: calc(3rem - 2px);
            bottom: 0;
            right: -2px;
            border: 1px solid transparent;
            font-family: 'special';
            background-color: #264091;
            border-radius: 3px;
            font-size: 1.5rem;
            color: #fff;
        }
        .send-button:disabled,.send-button.disabled{
            background-color: #eeeeee;
            color: #000000;
            cursor: not-allowed;
        }
    }
</style>