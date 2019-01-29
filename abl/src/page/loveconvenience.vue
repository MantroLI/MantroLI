<template>  
    <div class="loveconvenience">
        <div v-wechat-title="$route.meta.title"></div>
        <div class="header">
          <img src="@/assets/img/detailsreturn.png" alt="">
          <p>天峰壕礼季</p>
        </div>
        <div class="rule" @click="Rule()">
          <span class="rule-text">活动规则</span>
        </div>
        <div class="activity-one"  v-show="downIcon">
          <div class="one-title"><img src="@/assets/img/one-title.png" alt=""></div>
          <div class="red-envelopes">
            <p>注册账号—实名认证即可领红包哦～</p>
            <div class="butt" @click="Money('1')">
              <a>领红包</a>
            </div>
          </div>
        </div>
        <div class="activity-one-open"  v-show="!downIcon">
          <div class="one-title"><img src="@/assets/img/one-title.png" alt=""></div>
          <div class="red-envelopes">
            <p><span>{{num}}</span>元</p>
            <div class="butt" @click="Look()">去查看 ></div>
          </div>
        </div>
        <div class="activity-two">
          <div class="two-title"><img src="@/assets/img/two-title.png" alt=""></div>
          <div class="return-to-cash">
            <div class="coupon-left">
              <p class="first-child"><span>3</span>%</p>
              <p>出借金额</p>
              <span class="icon-fx"></span>
            </div>
            <div class="coupon-right">
              <p>出借金额 1000元至10000元</p>
              <p>出借期限 ≥12月</p>
              
              <div class="right-butt"  v-if="type==1" @click="firstTry()">
                <a>立即兑换</a>
              </div>
              <div class="right-butt" v-if="type==2" @click="Money('3')">
                  <a v-if="type==2">可兑换</a>
              </div>
              <div class="right-butt" v-if="type==3" style="background:#a68f74">                                     
                    <a v-if="type==3" >已兑换</a>
              </div>
              <div class="right-butt" v-if="type==4" style="background:#a68f74">                                     
                    <a v-if="type==4" >立即兑换</a>
              </div>
            </div>
          </div>
        </div>
        <div class="activity-three" v-for="name in names">
          <div class="three-bg">
            <div class="three-top">
              <span>{{name.money}}</span><span>{{name.limit}}</span>
            </div>
            <div class="three-conten">
              <div class="conten-card">
                <div class="card-left-vip">
                  <p class="card"><span>{{name.num}}</span>张</p>
                  <p>爱便利VIP卡</p>
                </div>
                <img src="@/assets/img/connect-icon.png" alt="">
                <div class="card-right">
                  <p class="card"><span>{{name.balance}}</span>元</p>
                  <p>卡内余额</p>
                </div>
              </div>
              <div v-if="name.convert==1" class="conten-butt" @click="firstTry()">
                <a>立即兑换</a>
              </div>
                <div v-else-if="name.convert==2" class="conten-butt" @click="Money('2')">
                    <a>可兑换</a>
                </div>
                <div v-else-if="name.convert==3" class="conten-butt-ash">
                    <a>立即兑换</a>
                </div>
              <!-- 置灰 -->
              <div v-else="name.convert==4" class="conten-butt-ash">
                <a >已兑换</a>
              </div>
            </div>
          </div>
        </div>
        <div class="tips">
          <div class="tips-bg">
            <span></span>已有VIP卡用户出借将增加相应金额至爱便利账户中
          </div>
        </div>
        <div class="exchange-butt">
          <div class="exchange-butt-bg" @click="Record()">
            <a>兑换记录</a>
          </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import utils from '@/utils'
import { Alert, table } from 'element-ui'
import { MessageBox } from 'mint-ui'
import {
  popFail,
  popDown,
  popTel,
  popLend,
  popShow,
  popFailOld,
  popRedBalance,
  popRedConversion,
  popRedCongratulation
} from '@/components'
Vue.use(Alert)
Vue.use(table)
export default {
  data () {
    
    return {
      downIcon: true,
      activeName: 'second',
      num:'',
      type:1,
      activity1:0,
      activity2:0,
      activity3:0,
      LendType:'',
      LendId:'',
      activityType:'',
      click:true,
      num3:'',
      prize:'',
      loginer: true,
      user1:true,
      user2:true,
      names:[
  			{money:'出借金额≥15000元',limit:'出借期限≥12月',num:'1',balance:'50',convert:1,prizeId:[7,11]},
  			{money:'出借金额≥20000元',limit:'出借期限≥12月',num:'1',balance:'100',convert:1,prizeId:[8,12]},
  			{money:'出借金额≥30000元',limit:'出借期限≥12月',num:'1',balance:'400',convert:1,prizeId:[9,13]},
        {money:'出借金额≥50000元',limit:'出借期限≥12月',num:'1',balance:'800',convert:1,prizeId:[10,14]}
  			]
    }
  },
  created () {

    this.islogin().then(val=>{
      if(this.loginer){
        this.initRules();
      }
    })

    // let logiD = utils.getCookie('h5loginerId');

    // if(logiD && logiD !== 'undefined'){
    //   this.initRules();
    // }else{
    //   this.loginer = false;
    // }
    let shop=this.$route.query.shop;
    if(shop&& shop !== 'undefined'){
      utils.setCookie('shop',shop);
      this.backstageRecord()
    }
  },
  mounted () {},
  props: ['rulesDomains'],
  methods: {
    islogin : async function(){
      let result = await this.$api('demo.islogin', {})
      if(result.result == 'SUCCESS'){
        this.loginer = true;
      }else{
        this.loginer = false;
      }
    },
    initRules: async function () {
      let result = await this.$api('demo.myStart', {})
      if(result.result == 'SUCCESS'){
        if(result.activityProductInfo.bidDetail.scatteredProduct&&result.activityProductInfo.bidDetail.scatteredProduct !== 'undefined'){
          this.LendType = '/index.html#currhr=productdetail&pid='
          this.LendId = result.activityProductInfo.bidDetail.scatteredProduct.id
        }else{
          this.LendType = '/index.html#currhr=wisdom&wid='
          this.LendId = result.activityProductInfo.bidDetail.financial.id;
        }
       this.num =result.model.activity1.abl18Record.prizeAmt
       this.num3 =result.model.activity3.abl18Record.prizeAmt
       if(result.model.activity1.code == '5001'){
        this.downIcon = true;
       }else if(result.model.activity1.abl18Record != '' && result.model.activity1.abl18Record.status == '0'){
        this.downIcon = true;
       }else if((result.model.activity1.abl18Record != '' && result.model.activity1.abl18Record.status == '1')
       ||(result.model.activity1.abl18Record != '' && result.model.activity1.abl18Record.status == '2')){
        this.downIcon = false;
       }
        if(result.model.activity3.code == '5003'){
          // 活动3未出借
          this.activity3 = 0;
          this.type = 1;
        }else if(result.model.activity3.abl18Record != '' && result.model.activity3.abl18Record.status == '0'){
          // 活动3 可兑换
          this.activity3 = 1;
          this.type = 2;
        }else if((result.model.activity3.abl18Record != '' && result.model.activity3.abl18Record.status == '1')
        ||(result.model.activity3.abl18Record != '' && result.model.activity3.abl18Record.status == '2')){
          // 活动3 已兑换
          this.activity3 = 2;
          this.type = 3;
        }
        if(result.model.activity2.code == '5002'){
          //活动2未出借
          this.activity2 = 0;
          this.names[0].convert = 1
          this.names[1].convert = 1
          this.names[2].convert = 1
          this.names[3].convert = 1
        }else if(result.model.activity2.abl18Record != '' && result.model.activity2.abl18Record.status == '0'){
          //活动2 可兑换
          this.activity2 = 1;
        }else if((result.model.activity2.abl18Record != '' && result.model.activity2.abl18Record.status == '1')
        ||(result.model.activity2.abl18Record != '' && result.model.activity2.abl18Record.status == '2')){
          // 活动2 已兑换
          this.activity2 = 2;
          if(result.model.activity2.abl18Record.prizeId=="7"|| result.model.activity2.abl18Record.prizeId=='11'){
            this.names[0].convert = 4
            this.names[1].convert = 3
            this.names[2].convert = 3
            this.names[3].convert = 3
            this.type == 3?this.type = 3 :this.type = 4;
          }else if(result.model.activity2.abl18Record.prizeId=='8'|| result.model.activity2.abl18Record.prizeId=='12'){
            this.names[0].convert = 3
            this.names[1].convert = 4
            this.names[2].convert = 3
            this.names[3].convert = 3
            this.type == 3?this.type = 3 :this.type = 4;
          }else if(result.model.activity2.abl18Record.prizeId=='9'|| result.model.activity2.abl18Record.prizeId=='13'){
            this.names[0].convert = 3
            this.names[1].convert = 3
            this.names[2].convert = 4
            this.names[3].convert = 3
            this.type == 3?this.type = 3 :this.type = 4;
          }else if(result.model.activity2.abl18Record.prizeId=='10'|| result.model.activity2.abl18Record.prizeId=='14'){
            this.names[0].convert = 3
            this.names[1].convert = 3
            this.names[2].convert = 3
            this.names[3].convert = 4
            this.type == 3?this.type = 3 :this.type == 4;
          }
        }
        //活动2可兑换
        if(result.model.activity2.abl18Record != '' && (result.model.activity2.abl18Record.prizeId=='7'|| result.model.activity2.abl18Record.prizeId=='11')&& result.model.activity2.abl18Record.status == '0'){
          this.names[0].convert = 2
          this.names[1].convert = 3
          this.names[2].convert = 3
          this.names[3].convert = 3
          if(this.type != 2){
            this.type == 3?this.type = 3 :this.type = 4;
          }
          this.prize = 50
        }else if(result.model.activity2.abl18Record != '' && (result.model.activity2.abl18Record.prizeId=='8'|| result.model.activity2.abl18Record.prizeId=='12')&& result.model.activity2.abl18Record.status == '0'){
          this.names[0].convert = 3
          this.names[1].convert = 2
          this.names[2].convert = 3
          this.names[3].convert = 3
          if(this.type != 2){
            this.type == 3?this.type = 3 :this.type = 4;
          }
          this.prize = 100
        }else if(result.model.activity2.abl18Record != '' && (result.model.activity2.abl18Record.prizeId=='9'|| result.model.activity2.abl18Record.prizeId=='13')&& result.model.activity2.abl18Record.status == '0'){
          this.names[0].convert = 3
          this.names[1].convert = 3
          this.names[2].convert = 2
          this.names[3].convert = 3
          if(this.type != 2){
            this.type == 3?this.type = 3 :this.type = 4;
          }
          this.prize = 400
        }else if(result.model.activity2.abl18Record != '' && (result.model.activity2.abl18Record.prizeId=='10'|| result.model.activity2.abl18Record.prizeId=='14')&& result.model.activity2.abl18Record.status == '0'){
          this.names[0].convert = 3
          this.names[1].convert = 3
          this.names[2].convert = 3
          this.names[3].convert = 2
          if(this.type != 2){
            this.type == 3?this.type = 3 :this.type = 4;
          }
          this.prize = 800
        }

      }else{
        if(result.code && result.code =='1006346'){ //老朋友
          this.user1 = false
        }
        if(result.code && result.code =='1006347'){ //联系客服400-6166-000
         this.user2 = false
        }
      }
    },
    Look:function(){
      this.downIcon = this.downIcon;
      this.$router.push('./record');

      
    },
    firstTry:function(){
      if(!this.loginer){
        this.$router.push('./regist');
        return;
      }else if(!this.user1){
        popFailOld();
          return;
      }else if(!this.user2){
        popTel();
          return;
      }
      popLend({
        callback:()=>{
          window.location.href = process.env.ctxUrl + this.LendType + this.LendId;
         
        }
    })
    },
    //尝鲜 可兑换
    goTry: async function(){
      popRedCongratulation()
    },
    handleClick: function () {},
    // toggle: function(name){
    //   if( this.activity3 == 0){
    //     popLend()
    //   }else if(this.activity3 == 1){
    //     popRedConversion();
    //   }else if(this.activity3 == 1) {
    //     //不能点击
    //   }
    //   popLend(
    // {
    //   money:name.balance,
    //    callback: ()=> {
    //      if(name.convert=1){
    //        this.names.forEach(function(e,i){e.convert=3})
    //       name.convert=2;
    //                 }
    //       }
    // }
    //     )
    // },
    Convert: function(name){ //四个按钮可兑换方法
      popRedConversion(
      {
      money:name.balance,
      callback: function() {
      if(name.convert=1){
        name.convert=2;
                  }
        }
     }
  )
},

    Money: function(type){
      if(!this.loginer){
          this.$router.push('./regist');
          return;
      }
      this.initRules().then(val =>{
        this.Money1(type);
      })
    },
    Money1: async function(type){  //领红包
      if(type == 1 || type ==3 ){
        if(!this.click)return
        this.click =false
        var params = {
          activityType: type
        }
        let result = await this.$api('demo.myMoney',{params})
        if(result.result == 'SUCCESS'){
          if(type == 1){
            this.click=true
            this.downIcon = false
            popShow({money:this.num})
          }else if(type == 3){
            popRedCongratulation({money:this.num3});
            this.type = 3;
          }
        }
        if(result.code == '1006347'){ //联系客服400-6166-000
          popTel();
            return;
        }
        if(result.code == '1006346'){ //老朋友
          popFailOld();
            return;
        }
        if(result.code == '1006130'){ //用户未实名认证
          window.location.href =process.env.ctxUrl + '/index.html#currhr=identify'
            return;
        }
      }else if(type == 2){
        popRedConversion(
          {
            money:this.prize,
            callback:()=>{
		this.$nextTick(()=>{//为了解决ios中 上一个弹窗没有关闭的bug
			setTimeout(()=>{
				this.getMoney(2)       
			},350)
		})
	    }
          }
        );
      }
      },
      Rule:function(){ //跳转到规则页面
        this.$router.push('./loverule');
      },
      Record:function(){//跳转到兑奖记录
          this.$router.push('./record');
      },
      getMoney : async function(type){
        if(!this.click)return
              this.click =false
              var params = { 
                activityType: type
              }
              let result = await this.$api('demo.myMoney',{params})
              if(result.result == 'SUCCESS'){
                this.click=true
                popRedBalance({money:this.prize})
                this.names[0].convert = 4
                this.names[1].convert = 4
                this.names[2].convert = 4
                this.names[3].convert = 4
              }
              if(result.code == '1006347'){ //联系客服400-6166-000
                        popRedBalance();
                          return;
            }
              if(result.code == '1006346'){ //老朋友
                      popFailOld();
                        return;
              }
      },
      backstageRecord: async function () {
      var params = {
        userId: '',
        activityType: 'ABL18',
        channelValue: utils.getCookie('shop'),
        eventName: 'sm',
        phoneNo: ''
      }
      let result = await this.$api('demo.backstageRecord', { params })
    },
  }
}

</script>
<style lang="scss" scoped>
    .warp {width: 100%;height: 100%;
      .loveconvenience {
        width:100%;height: 33.4rem;background-image:url(../assets/img/loveconvenience-bg.png);background-size: 100% 100%;background-repeat: no-repeat;box-sizing: border-box;
        .header{
          display: flex;padding:0.26rem 0.3rem;align-items:center;background-color:#fff;
          img {width: 0.22rem;height:0.38rem;}
          p {font-size: 17px;color: #333333;flex-grow: 1;text-align: center;margin-left: -0.22rem;}
        }
        .rule{
          width: 1.8rem;height: 0.98rem;line-height: 0.98rem;background-image: url(../assets/img/rule-butt-bg.png);background-repeat: no-repeat;background-size: 100% 100%;text-align: center;position: absolute;top: 1rem; right: 0;
          .rule-text {display: block;width: 100%;height: 100%;font-size: 12px;color: #fff;padding-left: 0.3rem;}
        }
        // activity-one
        .activity-one {
          padding: 0 0.73rem;margin-top:4.4rem;
          .one-title {
            text-align: center;
            img{width: 5.15rem;height: 0.6rem;}
          }
          .red-envelopes {
            width: 100%;height: 5.22rem;background-image: url(../assets/img/red-envelopes-bg.png);background-repeat: no-repeat;background-size: 100% 100%;padding:2.7rem 0.7rem 0 0.7rem;
            p {color: #CBA164;font-size: 14px;height: 0.6rem;text-align: center;line-height: 0.6rem;}
            .butt {
              width: 100%;height: 1.3rem;background-image: url(../assets/img/red-envelopes-butt.png);background-repeat: no-repeat;background-size: 100% 100%;text-align: center;line-height: 1.3rem;
              a {color: #FFE3B5;font-size: 16px;}
              }
            }
        }
        // activity-one-open
        .activity-one-open {
          padding: 0 0.73rem;margin-top:4.4rem;
          .one-title {
            text-align: center;
            img{width: 5.15rem;height: 0.6rem;}
          }
          .red-envelopes {
            width: 100%;height: 5.34rem;background-image: url(../assets/img/red-envelopes-bg-open.png);background-repeat: no-repeat;background-size: 100% 100%;padding:2.7rem 0.7rem 0 0.7rem;position: relative;
            p {
              color: #B03A0D;font-size: 0.36rem;text-align: center;line-height: 0.6rem;
              span {font-size: 1rem;color: #B03A0D;}
            }
            .butt {
              text-align: center;color: #B03A0D;font-size: 0.28rem;position: absolute;left:50%;bottom: 0.7rem;width: 2rem;margin-left: -1rem;
              }
            }
        }
        // activity-two
        .activity-two {
          padding: 0 0.73rem;
          .two-title {
            text-align: center;
            margin-top: 0.2rem;
            img{width: 5.15rem;height: 0.6rem;}
          }
          .return-to-cash {
            width: 100%;height: 2.68rem;background-image: url(../assets/img/return-to-cash-bg.png);background-repeat: no-repeat;background-size: 100% 100%;display:flex;
            .coupon-left {
              width: 1.9rem;height: 100%;text-align: center;position: relative;padding-top:10%;
              p { font-size: 12px;color: #BD6B07;}
              .first-child {
                color: #fff;font-size: 15px;
                span {font-size: 30px;color: #fff;}
                }
              .icon-fx {width: 0.98rem;height: 0.58rem;background-image: url(../assets/img/return-to-cash-icon.png);background-repeat: no-repeat;background-size: 100% 100%;display: block;position: absolute;right: 0;top: 0.36rem;}
            }
            .coupon-right {
              flex-grow: 1;padding: 0.4rem 0.36rem 0 0.36rem;
              p {font-size: 12px;color: #5E3E31;padding-bottom: 0.2rem;}
              .right-butt {
                width: 100%;height: 0.72rem;background:linear-gradient(-24deg,rgba(246,139,0,1),rgba(247,83,0,1));border-radius: 4px;text-align: center;line-height: 0.72rem;margin-top:0.1rem;
                a {font-size: 14px;color: #FFE3B5;}
              }
            }
          }
        }
        // activity-three
        .activity-three {
          padding: 0 0.73rem;margin-top:0.3rem;
          .three-bg {
            width: 100%;height: 3.63rem;padding:0 0.23rem; background-image: url(../assets/img/activity-three-bg.png);background-repeat: no-repeat;background-size: 100% 100%;
            .three-top{
              font-size: 12px;color: #5E3E31;width: 100%;height: 0.92rem;border-bottom: 1px dotted #F4CC92;line-height: 0.92rem;padding: 0.06rem 0.5rem 0 0.5rem;
              span {padding-right: 0.2rem;}
              }
          }
          // 背景为VIP
          .three-bg-vip {
            width: 100%;height: 3.63rem;padding:0 0.23rem; background-image: url(../assets/img/activity-three-bg-vip.png);background-repeat: no-repeat;background-size: 100% 100%;
            .three-top{
              font-size: 12px;color: #5E3E31;width: 100%;height: 0.92rem;border-bottom: 1px dotted #F4CC92;line-height: 0.92rem;padding: 0.06rem 0.5rem 0 0.5rem;
              span {padding-right: 0.2rem;}
              }
          }
          .three-conten {
            padding: 0.2rem 0.5rem;
            .conten-card{
              display: flex;align-items:center;justify-content: space-between;
              .card-left{
                width: 1.82rem;height: 1.16rem;background-image: url(../assets/img/card-bg.png);background-repeat: no-repeat;background-size: 100% 100%;text-align: center;padding-top:0.06rem;
                p {font-size: 12px;color: #BD6B07;}
                .card {
                  color: #fff;
                  span {font-size: 24px;color: #fff;}
                  }
                }
                // 背景VIP
                .card-left-vip {
                width: 1.82rem;height: 1.16rem;background-image: url(../assets/img/card-bg-vip.png);background-repeat: no-repeat;background-size: 100% 100%;text-align: center;padding-top:0.06rem;
                p {font-size: 12px;color: #BD6B07;}
                .card {
                  color: #fff;
                  span {font-size: 24px;color: #fff;}
                  }
                }
              img {width: 0.37rem;height: 0.37rem;}
              .card-right{
                width: 1.82rem;height: 1.16rem;background-image: url(../assets/img/card-bg.png);background-repeat: no-repeat;background-size: 100% 100%;text-align: center;padding-top:0.06rem;
                p {font-size: 12px;color: #BD6B07;}
                .card {
                  color: #fff;
                  span {font-size: 24px;color: #fff;}
                }
              }
              // 卡片背景vip
              .card-right-vip{
                width: 1.82rem;height: 1.16rem;background-image: url(../assets/img/card-bg-vip.png);background-repeat: no-repeat;background-size: 100% 100%;text-align: center;padding-top:0.06rem;
                p {font-size: 12px;color: #BD6B07;}
                .card {
                  color: #fff;
                  span {font-size: 24px;color: #fff;}
                }
              }
            }
            .conten-butt {
              width: 100%;height: 0.72rem;background:linear-gradient(-24deg,rgba(246,139,0,1),rgba(247,83,0,1));border-radius: 4px;text-align: center;line-height: 0.72rem;margin-top:0.3rem;
              a {font-size: 14px;color: #FFE3B5;}
            }
            .conten-butt-ash {
              width: 100%;height: 0.72rem;background-color:#A68F74;border-radius: 4px;text-align: center;line-height: 0.72rem;margin-top:0.3rem;
              a {font-size: 14px;color: #FFE3B5;}
            }
          }
        }
        .tips{
          padding: 0 0.73rem;margin-top:0.4rem;
          .tips-bg {
            width: 100%;height: 0.64rem;background-color: #910000;line-height: 0.64rem;font-size: 0.12rem;color: #FDE097;display: flex;align-items: center;justify-content: center;
            span {width: 0.28rem;height: 0.28rem;background-image: url(../assets/img/tips-icon.png);background-repeat: no-repeat;background-size: 100% 100%;}
          }
        }
        .exchange-butt {
          padding: 0 0.73rem;margin:0.3rem 0;
          .exchange-butt-bg {
            width: 100%;height: 0.87rem;background:linear-gradient(-24deg,rgba(246,139,0,1),rgba(247,83,0,1));border-radius: 8px;text-align: center;line-height: 0.87rem;
            a {font-size: 16px;color: #FFE3B5}
            }
        }
      }
    }
</style>