<template>
  <div class="regist">
    <!-- <div class="header">
      <img src="@/assets/img/detailsreturn.png" alt="">
      <p>注册</p>
    </div> -->
    <c-head></c-head>
    <div class="regist_bg">
      <div class="regist_form">
        <div class="regist_land">
          <div class="regist_land_text">
            <el-input placeholder="请输入手机号"
                      v-on:blur="accBlur();"
                      v-model="account"
                      clearable></el-input>
          </div>
          <div class="regist_land_text">
            <el-input placeholder="请输入验证码"
                      v-model="verificationCode"
                      v-on:blur="verBlur();"
                      clearable></el-input>
            <div class="verification-code">
              <img style="width:100%;height: 100%;"
                   id="changeImg"
                   v-bind:src="imgurl"
                   alt=""
                   @click="getRandom">
            </div>
          </div>
          <div class="regist_land_text">
            <el-input placeholder="请输入短信验证码"
                      v-model="smsCheckCode"
                      v-on:blur="smsBlur();"
                      clearable></el-input>
            <div class="message-code">
              <span @click="sendSMSCodeButton">{{sendButton}}</span>
            </div>
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
        <div class="regist-agreement">
          <div class="read">
            <label for="che1">
              <input type="checkbox"
                     name=""
                     id="che1"
                     v-model="checked">
              <div class="donotuse_r"></div>
            </label>
            <div class="choice">
              我已经阅读并同意<span @click="fuxy">《峰向标注册及服务协议》</span><span @click="ysxy">《隐私政策》</span>
            </div>
          </div>
        </div>
        <div class="regist_butt">
          <el-button type="primary"
                     @click="registerActivity">注册领红包</el-button>
        </div>
        <div class="go-receive">
          <p>已有账号，<router-link :to="{ path: 'login', query: { shop: this.$route.query.shop }}">马上领取</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import utils from '@/utils'
import { input, Button} from 'element-ui'
import { setInterval, clearInterval } from 'timers'
Vue.use(input)
Vue.use(Button)
export default {
  data () {
    return {
      account: '',
      password: '',
      smsCheckCode: '',
      verificationCode: '',
      imgurl: '',
      loginCacheId: '',
      sendButton: '获取短信验证码',
      time: 60,
      canClick: true,
      checked: false,
      eyes: true
    }
  },
  created () {
    this.initRules()
    this.getRandom()
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
    verBlur:function(){
      if (this.verificationCode.length == 0) {
        this.$toast('请输入图形验证码')
      }
    },
    smsBlur:function(){
      if (this.smsCheckCode.length == 0) {
        this.$toast('请输入短信验证码')
      }
    },
    passBlur:function(){
      if (
        !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,20}$/i.test(
          this.password.trim()
        )
      ) {
        this.$toast('请输入8-20位数字与字母组合')
      }
    },
    // 图形验证码
    getRandom: function () {
      this.loginCacheId = Math.random()
      var randomcode =
        process.env.ctxUrl +
        '/creditvane-ui-api/random?cacheid=' +
        this.loginCacheId
      this.imgurl = randomcode
    },
    // 获取短信验证码
    sendSMSCodeButton: async function () {
      if (!/^(1[3-9])\d{9}$/.test(this.account)) {
        this.$toast('请输入正确的手机号')
        return
      }
      if (this.verificationCode.length == 0) {
        this.$toast('请输入图形验证码')
        return
      }
      if (!this.canClick) return
      this.canClick = false
      var params = {
        mobileNo: this.account, // 手机号
        randnumber: this.verificationCode, // 图形验证码
        randnumKey: this.loginCacheId // 系统生成的图形验证码
      }
      let result = await this.$api('demo.sendSMSCodeButton', { params })
      if (result.result != 'SUCCESS') {
        this.$toast(result.fault)
        this.getRandom() // 更新图形验证码
        this.canClick = true
      } else {
        this.backstageRecord() // 获取，获取验证码的统计
        this.getCodeTime() // 读秒
        this.canClick = true
      }
    },
    // 读秒
    getCodeTime: function () {
      this.sendButton = this.time + '秒'
      let t = window.setInterval(() => {
        this.time--
        this.sendButton = this.time + '秒'
        if (this.time < 0) {
          window.clearInterval(t)
          this.sendButton = '重新获取'
          this.time = 60
          this.canClick = true
        }
      }, 1000)
    },
    // 注册操作
    registerActivity: async function () {
      if (!/^(1[3-9])\d{9}$/.test(this.account)) {
        this.$toast('请输入正确的手机号')
        return
      }
      if (this.verificationCode.length == 0) {
        this.$toast('请输入图形验证码')
        return
      }
      if (this.smsCheckCode.length == 0) {
        this.$toast('请输入短信验证码')
        return
      }
      if (
        !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,20}$/i.test(
          this.password.trim()
        )
      ) {
        this.$toast('请输入8-20位数字与字母组合')
        return
      }
      if (!this.checked) {
        this.$toast('请先阅读并勾选注册相关协议再操作')
        return
      }

      var params = {
        account: this.account, // 手机号
        password: this.password, // 密码
        smsCheckCode: this.smsCheckCode, // 短信验证码
        accountType: '01',
        channelValue: utils.getCookie('shop'), // 渠道码
        channelType: 'ABL18', // 活动类型
        verificationCode: this.verificationCode // 图形验证码
      }
      let result = await this.$api('demo.registerActivity', { params })
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

        window.location.href =
          process.env.ctxUrl + '/index.html#currhr=identify'
      } else {
        this.$toast(result.message)
      }
    },
    // 设置cookie,增加到vue实例方便全局调用
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
    },
    backstageRecord: async function () {
      var params = {
        userId: '',
        activityType: 'ABL18',
        channelValue: utils.getCookie('shop'),
        eventName: 'yzm',
        phoneNo: this.account
      }
      let result = await this.$api('demo.backstageRecord', { params })
    },
    fuxy: function () {
      window.location.href = process.env.ctxUrl + '/protocol.html'
    },
    ysxy: function () {
      window.location.href = process.env.ctxUrl + '/PrivacyProtocol.html'
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
      .regist-agreement {
        .read {
          width: 100%;
          display: flex;
          justify-content: center;
          box-sizing: border-box;
          margin-top: 1rem;
          label {
            padding-top: 0.04rem;
            margin-right: 0.1rem;
          }
          .donotuse_r {
            border: 1px solid #f67a00;
            width: 0.26rem;
            height: 0.26rem;
            text-align: center;
            justify-content: center;
            line-height: 0.3rem;
            color: #fff;
            box-sizing: border-box;
            .yes_icon {
              margin-top: -0.04rem;
              width: 0.26rem;
              height: 0.26rem;
            }
          }
          input {
            display: none;
          }
          input:checked + .donotuse_r {
            border: none;
            width: 0.26rem;
            height: 0.26rem;
            background-image: url(../../../src/assets/img/donotuse_r-selection.png);
            background-size: 100% 100%;
            background-repeat: no-repeat;
          }
          .choice {
            font-size: 12px;
            color: #333333;
            span {
              color: #f67d00;
            }
          }
        }
      }
      .regist_butt {
        width: 100%;
        text-align: center;
        margin: 0.4rem 0;
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
        margin: 0.6rem 0;
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
