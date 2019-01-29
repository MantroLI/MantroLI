<template>
  <div class="record">
    <c-head></c-head>
    <el-tabs v-model="activeName"
             @tab-click="handleClick"
             stretch
             ref="tab">
      <el-tab-pane label="红包"
                   name="first">
        <template v-if="redPacket.length">
          <div class="cell"
               v-for="red in redPacket"
               v-if="red.prizeAmt">
            <template v-if="
               red.activityType==='1'">
              <div class="
               title"><span>现金红包</span></div>
              <div class="money">
                <font class="num">{{red.prizeAmt}}</font>
                <font class="yuan">元</font>
              </div>
              <div class="mess">
                <div>现金红包将直接发放您的爱便利账户会员
                  余额中，快去使用吧。</div>
              </div>
            </template>
            <template v-else-if="red.activityType==='3'">
              <div class="title"><span>返现红包</span></div>
              <div class="money">
                <font class="num">{{red.prizeAmt}}</font>
                <font class="yuan">元</font>
              </div>
              <div class="mess">
                <div>返现红包将直接发放您的爱便利账户会员
                  余额中，快去使用吧。</div>
              </div>
            </template>
          </div>
        </template>
        <template v-else>
          <div class="none">
            <img src="@/assets/img/none.png">
          </div>
          <div class="noneRecord">暂无兑换记录</div>
        </template>
      </el-tab-pane>
      <el-tab-pane label="VIP卡"
                   name="second">
        <template v-if="vip">
          <div class="card">
            <div class="cnum">
              <font>爱便利VIP卡1张</font>
            </div>
            <div class="cmoney">
              <font>{{vip.prizeAmt}}</font>元
            </div>
            <div class="cbalance">
              <font>卡内余额</font>
            </div>
          </div>
          <div class="contact">
            <div class="inner">
              <font>由于网络原因可能存在延迟，如未收到请咨询客服
                400-6166-000</font>
            </div>
          </div>
          <div class="pic"><img src="@/assets/img/banner.png"></div>
        </template>
        <template v-else>
          <div class="none">
            <img src="@/assets/img/none.png">
          </div>
          <div class="noneRecord">暂无兑换记录</div>
        </template>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import Vue from 'vue'

import { Tabs, TabPane } from 'element-ui'

Vue.use(Tabs)
Vue.use(TabPane)

export default {
  data () {
    return {
      activeName: 'first',
      redPacket: [],
      // redPacket: [],
      aa: 1,
      vip: null
    }
  },
  created () {
    this.initData()
  },
  mounted () {
    let div = document.createElement('div')
    div.className = 'sbar'
    document
      .getElementsByClassName('el-tabs__active-bar')
      .item(0)
      .appendChild(div)
  },
  props: ['rulesDomains'],
  methods: {
    initData: async function () {
      // let params = {
      //   userId: 1000000382
      // }
      let result = await this.$api('abl.queryAbl18RecordsByUserId', {})
      if (result.result === 'SUCCESS') {
        let redPacket = []
        result.list.forEach(element => {
          if (element.activityType === '1' || element.activityType === '3') {
            redPacket.push(element)
          } else if (element.activityType === '2') {
            this.vip = element
          }
        })
        this.redPacket = redPacket
      }
    },
    handleClick: function () {}
  }
}
</script>
<style lang="scss" scoped>
.record {
  .header {
    display: flex;
    padding: 0.26rem 0.3rem;
    align-items: center;
    background-color: #fff;
    border: 2px solid rgba(242, 242, 242, 1);
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
  /deep/ .el-tabs__active-bar {
    background-color: transparent;
    height: 0.05rem;
  }
  /deep/ .sbar {
    margin: auto auto;
    width: 0.6rem;
    height: 0.05rem;
    background-color: #b03a0d;
  }
  /deep/ .el-tabs__item:hover {
    color: #b03a0d;
  }
  /deep/ .el-tabs__item.is-active {
    color: #b03a0d;
  }
  /deep/ .el-tabs__item {
    font-size: 0.3rem;
    height: 1rem;
    line-height: 1rem;
    font-size: 15px;
    color: #999999;
    font-weight: 600;
  }
  /deep/ .el-tabs__header {
    margin: 0;
  }
  .cell {
    width: 5.7rem;
    height: 2.92rem;
    background: url('~@/assets/img/red-packet-background.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-size: cover;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0.8rem;
    .title {
      text-align: center;
      vertical-align: middle;
      height: 0.76rem;
      line-height: 0.76rem;
      font-size: 0.28rem;
      span {
        color: #cb7904;
        font-size: 14px;
      }
    }
    .money {
      text-align: center;
      margin-top: 0.15rem;
      line-height: 1.02;
      color: #b03a0d;
    }
    .num {
      width: 100%;
      font-size: 1.02rem;
    }
    .yuan {
      font-size: 0.36rem;
      font-weight: 600;
    }
    .mess {
      width: 100%;
      text-align: center;
      margin-top: 0.1rem;
      div {
        display: inline-block;
        width: 4.3rem;
        color: #bd9e67;
        font-size: 0.24rem;
        letter-spacing: 1px;
      }
    }
  }
  .card {
    width: 6.39rem;
    height: 3.22rem;
    background: url('~@/assets/img/card1.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0.8rem;
    .cnum {
      text-align: center;
      padding-top: 0.8rem;
      color: #8e4a26;
      font-size: 0.32rem;
      line-height: 0.32rem;
      font-weight: 600;
      font-size: 0.32rem;
    }
    .cmoney {
      text-align: center;
      margin-top: 0.38rem;
      font-size: 0.55rem;
      line-height: 0.55rem;
      color: #ee454d;
    }
    .cbalance {
      width: 1.2rem;
      height: 0.38rem;
      margin-left: 0.52rem;
      margin-bottom: 0.28rem;
      font-size: 0.24rem;
      border-radius: 2px;
      line-height: 0.38rem;
      margin-top: 0.4rem;
      background-color: #e8a608;
      text-align: center;
      color: #ffffff;
    }
  }
  .contact {
    width: 6.15rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0.4rem;
    .inner {
      margin-left: auto;
      margin-right: auto;
      text-align: left;
      color: #999999;
      font-size: 0.28rem;
      letter-spacing: 1px;
    }
  }
  .pic {
    margin: 2rem 0 0.4rem 0;
    text-align: center;
    img {
      width: 6.45rem;
      height: 1.83rem;
    }
  }
  .none {
    margin-top: 0.5rem;
    text-align: center;
    img {
      width: 1.51rem;
      height: 1.79rem;
    }
  }
  .noneRecord {
    margin-top: 0.32rem;
    text-align: center;
    color: #999999;
    font-size: 0.28rem;
  }
}
</style>
