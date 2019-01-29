<template>
  <div class="regist">
    <!-- <div class="header">
      <img src="@/assets/img/detailsreturn.png" alt="">
      <p>登录</p>
    </div> -->
    <c-head></c-head>
    <div class="regist_bg">
      <div class="regist_form">
        <div class="regist_land">
          <div class="regist_land_text">
            <el-input placeholder="请输入手机号"
                      v-model="account"
                      v-on:blur="accBlur();"
                      clearable></el-input>
          </div>
          <div class="regist_land_text">
            <el-input v-show="eyes"
                      placeholder="请输入密码"
                      type="password"
                      v-model="password"
                      v-on:blur="passBlur();"
                      clearable></el-input>
            <el-input v-show="!eyes"
                      placeholder="请输入密码"
                      type="text"
                      v-model="password"
                      v-on:blur="passBlur();"
                      clearable></el-input>
            <div>
              <img v-show="eyes"
                   style="width:0.3rem;height:0.14rem;"
                   @click="eyes=!eyes"
                   src="@/assets/img/eyeC.png">
              <img v-show="!eyes"
                   style="width:0.3rem;height:0.14rem;"
                   @click="eyes=!eyes"
                   src="@/assets/img/eyeO.png">
            </div>
          </div>
        </div>
        <div class="forget-password" @click="forget">忘记密码</div>
        <div class="regist_butt">
          <el-button type="primary"
                     @click="loginActivity">登录</el-button>
        </div>
        <div class="go-receive">
          <p>没有账号，<router-link :to="{ path: 'regist', query: { shop: this.$route.query.shop }}">立即注册</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { input, Button} from 'element-ui'
import VueRouter from 'vue-router'
Vue.use(input)
Vue.use(Button)
Vue.use(VueRouter)

export default {
  data () {
    return {
      account: '',
      password: '',
      eyes:true
    }
  },
  created () {
    this.initRules()
  },
  // mounted() {},
  // props: ['rulesDomains'],
  methods: {
    initRules: function () {},
    accBlur: function(){
      if (!/^(1[3-9])\d{9}$/.test(this.account)) {
        this.$toast('请输入正确的手机号')
      }
    },
    passBlur:function(){
      if (this.password.length == 0) {
        this.$toast('请输入密码')
      }
    },
    forget : function(){
      window.location.href = process.env.ctxUrl + '/index.html#currhr=password';
    },
    // 登录操作
    loginActivity: async function () {
      // this.$router.push({ name: 'loveconvenience', params: { userId: 123 }})
      if (!/^(1[3-9])\d{9}$/.test(this.account)) {
        this.$toast('请输入正确的手机号')
        return
      }
      if (this.password.length == 0) {
        this.$toast('请输入密码')
        return
      }

      var params = {
        userAccount: this.account, // 手机号
        password: this.password // 密码
      }
      let result = await this.$api('demo.loginActivity', { params })
      if (result.result == 'SUCCESS') {
        var registerStatus = result.authInfo.user.userRegistInfo.registerStatus
        var thirdId = result.authInfo.user.userRegistInfo.thirdId
        var loginerId = result.authInfo.user.userId
        var u = JSON.stringify(result.authInfo.user.userRegistInfo)
        var token = result.authInfo.ticket

        this.setCookie('h5jsessionId', result.sessionId)
        this.setCookie('h5user', u)
        this.setCookie('h5loginAccount', result.authInfo.loginAccount)
        this.setCookie('h5ticket', result.authInfo.ticket)
        this.setCookie('h5token', token)
        this.setCookie('h5loginerId', loginerId)

        if (this.$route.params.redirect) {
          this.$router.push({ name: this.$route.params.redirect })
        } else {
          this.$router.push({ name: 'loveconvenience' })
        }
      } else {
        this.$toast(result.message)
      }
    },
    setCookie: function (name, value, day) {
      var Days = day || 0
      var exp = new Date()
      exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)
      if (Days > 0) {
        var exp = new Date()
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)
        document.cookie =
          name + '=' + escape(value) + ';path=/;expires=' + exp.toGMTString()
      } else {
        document.cookie = name + '=' + escape(value) + ';path=/'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.regist {
  width: 100%;
  height: auto;
  background-image: url(../../../src/assets/img/abl_regist_bg.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  .header {
    display: flex;
    padding: 0.26rem 0.3rem;
    align-items: center;
    background-color: #fff;
    img {
      width: 0.22rem;
      height: 0.38rem;
    }
    p {
      font-size: 17px;
      color: #333333;
      flex-grow: 1;
      text-align: center;
      margin-left: -0.22rem;
    }
  }
  .regist_bg {
    margin: 2.6rem 0.3rem 0 0.3rem;
    .regist_form {
      width: 100%;
      background-color: #fff;
      width: 100%;
      height: 9.8rem;
      box-sizing: border-box;
      padding: 0.36rem;
      .regist_land_text {
        width: 100%;
        height: 1.2rem;
        padding-top: 0.2rem;
        border-bottom: 1px solid #c5c5c5;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .verification-code {
          width: 1.3rem;
          height: 0.45rem;
          box-sizing: border-box;
          text-align: right;
        }
        /deep/ .el-input__inner {
          display: block;
          flex-grow: 1;
          border: none;
          background: none;
          height: 100%;
          outline: none;
          font-size: 14px;
          color: #333333;
          padding: 0 0.1rem;
        }
        .message-code {
          text-align: right;
          width: 4rem;
          span {
            color: #f67d00;
            font-size: 12px;
          }
        }
      }
      .forget-password {
        width: 100%;
        font-size: 14px;
        color: #f67b00;
        text-align: right;
        padding: 0.3rem 0;
      }
      .regist_butt {
        width: 100%;
        text-align: center;
        margin: 0.8rem 0 0.3rem 0;
        .el-button--primary {
          width: 4.84rem;
          height: 0.7rem;
          line-height: 0.7rem;
          background: linear-gradient(-24deg, #f68b00, #f75300);
          border: none;
          padding: 0;
          /deep/ span {
            display: block;
            width: 100%;
            height: 100%;
            color: #fff;
            font-size: 14px;
          }
        }
      }
      .go-receive {
        margin: 0.3rem 0;
        width: 100%;
        text-align: center;
        p {
          font-size: 14px;
          color: #333333;
          a {
            color: #ff9d5d;
          }
        }
      }
    }
  }
}
</style>
