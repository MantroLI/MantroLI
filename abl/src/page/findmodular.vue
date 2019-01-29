<template>
  <div class="findmodular">
    <div class="find-header"><span>发现</span></div>
    <div class="find-banner">
        <mt-swipe>
            <mt-swipe-item v-for="(banner,index) in banners" :key="index"><a :href="banner.contentUrlPath"><img v-bind:src="banner.urlPath" alt=""></a></mt-swipe-item>
        </mt-swipe>
    </div>
    <div class="find-navlist">
        <div class="navlist1">
            <div @click="icon1();"><img src="@/assets/img/navlist-icon1.png" alt=""><p>会员中心</p></div>
            <div @click="icon2();"><img src="@/assets/img/navlist-icon2.png" alt=""><p>幸运转盘</p><span class="buoy">敬请期待</span></div>
            <div @click="icon3();"><img src="@/assets/img/navlist-icon3.png" alt=""><p>精彩活动</p></div>
            <div @click="icon4();"><img src="@/assets/img/navlist-icon4.png" alt=""><p>邀请返利</p></div>
        </div>
        <div class="navlist2">
            <div @click="icon5();"><img src="@/assets/img/navlist-icon5.png" alt=""><p>媒体报道</p></div>
            <div @click="icon6();"><img src="@/assets/img/navlist-icon6.png" alt=""><p>意见反馈</p></div>
            <div @click="icon7();"><img src="@/assets/img/navlist-icon7.png" alt=""><p>新手帮助</p></div>
            <div @click="icon8();"><img src="@/assets/img/navlist-icon8.png" alt=""><p>关注微信</p></div>
        </div>
    </div>
    <div class="bg-list"></div>
    <div class="coupon">
        <p>我的优惠券</p>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="coupon in coupons">
                    <div class="banner-left">
                        <span v-if="coupon.couponType == 2">{{coupon.couponRatio}}<i>%</i></span>
                        <span v-if="coupon.couponType == 1">{{coupon.redbagAmt}}<i>元</i></span>
                    </div>
                    <div class="banner-right">
                        <div class="right-tips">
                            <span>剩余{{coupon.remainingDays}}天过期</span>
                        </div>
                        <div class="right-type">
                            <span>{{coupon.source}}</span>
                        </div>
                        <div class="right-details" @click="coupon1();">
                            <span>查看详情</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-list"></div>
    <div class="reminder">
        <p class="title">温馨提示</p>
        <div class="tips-list1" v-for="message in messages">
            <img src="@/assets/img/reminder-icon1.png" alt="">
            <div class="tips-information">
                <p class="name">您出借的<span>优选智投A YXZT2018110161</span></p>
                <p class="thickening">将在3天后到期</p>
            </div>
            <div class="but-details">查看详情</div>
        </div>
        <div class="tips-list1">
            <img src="@/assets/img/reminder-icon2.png" alt="">
            <div class="tips-information">
                <p class="name">明天是您的生日，届时将送上</p>
                <p><span>30元生日红包</span></p>
            </div>
            <div class="but-details">查看详情</div>
        </div>
        <div class="tips-list1">
            <img src="@/assets/img/reminder-icon3.png" alt="">
            <div class="tips-information">
                <p>您有一笔30元红包返利已到账</p>
            </div>
            <div class="but-details">查看详情</div>
        </div>
        <div class="tips-list1">
            <img src="@/assets/img/reminder-icon4.png" alt="">
            <div class="tips-information">
                <p>您有一笔好友出借返佣已到账</p>
            </div>
            <div class="but-details">查看详情</div>
        </div>
    </div>
    <div class="bg-list"></div>
    <div class="newest-news">
        <div class="news-title">
            <p>最新资讯</p>
            <div><span>查看全部</span></div>
        </div>
        <div class="news-list1">
            <div class="list1-left">
                <p>峰向标荣获国家信息系统安全等 保护三级认证等三级保护...</p>
                <p class="date"><span>媒体报道</span>2017-09-09</p>
            </div>
            <div class="list1-right">
                <img src="@/assets/img/list1-right-img.png" alt="">
            </div>
        </div>
        <div class="news-list1">
            <div class="list1-left">
                <p>峰向标荣获国家信息系统安全等 保护三级认证等三级保护...</p>
                <p class="date"><span>媒体报道</span>2017-09-09</p>
            </div>
            <div class="list1-right">
                <img src="@/assets/img/list1-right-img.png" alt="">
            </div>
        </div>
        <div class="news-list1">
            <div class="list1-left">
                <p>峰向标荣获国家信息系统安全等 保护三级认证等三级保护...</p>
                <p class="date"><span>媒体报道</span>2017-09-09</p>
            </div>
            <div class="list1-right">
                <img src="@/assets/img/list1-right-img.png" alt="">
            </div>
        </div>
        <div class="news-list1">
            <div class="list1-left">
                <p>峰向标荣获国家信息系统安全等 保护三级认证等三级保护...</p>
                <p class="date"><span>媒体报道</span>2017-09-09</p>
            </div>
            <div class="list1-right">
                <img src="@/assets/img/list1-right-img.png" alt="">
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import Swiper from 'swiper'; 
import '../style/swiper.min.css';
export default {
  data () {
    return {
        banners:[],
        coupons:[],
        messages:[],
        news:[]
    }
  },
  created () {
  },
  mounted () {
    this.init();
    console.log(this.banners)
  },
  props: ['rulesDomains'],
  methods: {
      icon1:function(){window.location.href=process.env.ctxUrl+''},//会员中心
      icon2:function(){this.$toast('敬请期待')},//幸运转盘
      icon3:function(){window.location.href=process.env.ctxUrl+'/index.html#currhr=find'},//精彩活动
      icon4:function(){window.location.href=process.env.ctxUrl+'/index.html#currhr=personal&prd=invitedFriend'},//邀请返利
      icon5:function(){window.location.href=process.env.ctxUrl+'/index.html#currhr=news'},//媒体报道
      icon6:function(){window.location.href=process.env.ctxUrl+'/index.html#currhr=personal&prd=feed'},//意见反馈
      icon7:function(){window.location.href=process.env.ctxUrl+'/html/about/new-player.html'},//新手帮助
      icon8:function(){window.location.href=process.env.ctxUrl+''},//关注微信
      coupon1:function(){window.location.href=process.env.ctxUrl+'/index.html#currhr=personal&prd=coupon'},//优惠券查看详情
      init:async function(){
        let result = await this.$api('demo.findmodular', {})
        if(result.result == 'SUCCESS'){
            this.banners = result.banners;
            this.coupons = result.data.discoverCoupon;
            this.messages = result.data.discoverMessages;
            this.news = result.notice;
            this.coupons.forEach(item => {
                item.redbagAmt = parseInt(item.redbagAmt);
            });
            console.log(this.coupons)
            this.$nextTick(function () {
                var swiper = new Swiper('.swiper-container', {
		            slidesPerView: 1.7,
                })
            })
        }
      },
      
  }
}
</script>
<style lang="scss" scoped>
    .findmodular {
        .find-header {
            border-bottom: 1px solid rgba(197,197,197,0.5);
            span {
                font-size: 0.48rem;color: #3C3C3C;font-weight: 600;display: block;padding: 0.2rem 0.4rem;
            }
        }
        .find-banner{
            width: 6.7rem;height: 1.72rem;margin:0.4rem auto 0.6rem auto;
            .mint-swipe-items-wrap > div {
                img {
                    width: 100%;height: 1.72rem;
                }
            }
          .mint-swipe-indicator {
              .mint-swipe-indicator {
                  width: 4px;height: 4px;
              }
          }
        }
        .find-navlist {
            padding-bottom: 0.4rem;
            .navlist1 {
                display: flex;justify-content: space-between;text-align: center;font-size: 0.28rem;color: #3C3C3C;padding:0 0.54rem 0.46rem 0.54rem;position: relative;
                div>img {
                    width: 0.44rem;height: 0.44rem;padding-bottom: 0.1rem;
                }
                div>.buoy {
                    background:linear-gradient(90deg,rgba(255,119,104,1) 0%,rgba(255,87,85,1) 100%);border-radius:4px 4px 4px 0px;font-size: 0.2rem;padding: 0.04rem;color: #fff;
                    position: absolute;top: -0.3rem;
                }
            }
            .navlist2 {
                display: flex;justify-content: space-between;text-align: center;font-size: 0.28rem;color: #3C3C3C;padding:0 0.54rem;
                div>img {
                    width: 0.44rem;height: 0.44rem;padding-bottom: 0.1rem;
                }
            }
        }
        .bg-list {
            width: 100%;height: 0.24rem;background-color: #F1F1F1;
        }
        .coupon {
            width: 100%;height: auto;padding:0.4rem 0 0.4rem 0.4rem;
            p {
                font-size: 16px;color: #3C3C3C;font-weight: 600;letter-spacing: 1px;
            }
            .swiper-container {
                margin-top: 0.4rem;
                .swiper-wrapper {
                    .swiper-slide {
                       width: 100%;height: 2rem;background-image: url(../assets/img/coupon-banner-bg.png);background-repeat: no-repeat;background-size: 100% 100%;margin-right: 0.4rem;display: flex;
                        .banner-left {
                            width: 1rem;text-align: center;line-height: 1.6rem;margin: 0.1rem 0;border-right: 1px dashed #fff;
                            span {
                                font-size: 0.32rem;color:#fff;
                                i {
                                    font-size: 0.24rem;color:#fff;
                                }
                            }
                        }
                        .banner-right {
                            flex-grow: 1;
                            .right-tips {
                                width: 100%;text-align: right;
                                span {
                                    background-color: #FF5755;border-radius:4px 0px 4px 0px;font-size: 0.24rem;color: #fff;display: inline-block;padding: 0.1rem;
                                }
                            }
                            .right-type {
                                padding: 0.2rem 0 0.2rem 0.28rem;
                                span {
                                    font-size: 0.24rem;color: #fff;
                                }
                            }
                            .right-details {
                                padding-left: 0.28rem;
                                span {
                                    font-size: 0.24rem;color: #fff;width: 1.58rem;height: 0.48rem;border-radius: 16px;border:1px solid rgba(255,255,255,1);display: block;text-align: center;line-height: 0.46rem;
                                }
                            }
                        }
                    }
                }
            }
        }
        .reminder {
            padding-bottom: 0.16rem;
            .title {
                font-size: 0.32rem;color: #3C3C3C;font-weight: 600;padding: 0.4rem;
            }
            .tips-list1 {
                display: flex;width: 100%;height: auto;background:rgba(255,247,234,0.5);padding: 0.32rem 0.4rem;justify-content: space-between;align-items: center;margin-bottom: 0.24rem;
                img {
                    width: 0.48rem;height: 0.48rem;
                }
                .tips-information {
                    flex-grow: 1;text-align: left;padding-left: 0.28rem;
                }
                div {
                    .name {
                        font-size: 0.24rem;color: #3C3C3C;padding-bottom: 0.12rem;font-weight: normal;
                        span {
                            color: #08A2ED;padding-left: 0.06rem;
                        }
                    }
                    .thickening {
                        font-weight: 600;
                    }
                }
                .but-details {
                    font-size: 0.24rem;color: #08A2ED;
                }
            }
            .tips-list2 {
                p {
                    span {font-size: 0.24rem;color: #08A2ED;}
                }
            }
        }
        .newest-news {
            border-bottom:1px solid rgba(197,197,197,0.5);
            .news-title {
                display: flex;justify-content: space-between;align-items: center;padding:0.4rem;border:1px solid rgba(197,197,197,0.3);
                div {
                    span {
                        font-size: 0.28rem;color: #868F95;
                    }
                }
                p {
                    font-size: 0.32rem;color: #3C3C3C;font-weight: 600;
                }
            }
            .news-list1 {
                display: flex;padding:0.4rem;border-bottom:1px solid rgba(197,197,197,0.3);
                .list1-left {
                    p {
                        font-size: 0.28rem;color: #3C3C3C;
                    }
                    .date {
                        font-size: 0.26rem;color: #868F95;margin-top:0.34rem;
                        span {
                            color: #08A2ED;display: inline-block;padding: 0.02rem;border: 2px solid #08A2ED;border-radius: 2px;margin-right: 0.18rem;box-sizing: border-box;
                        }
                    }
                }
                .list1-right {
                    margin-left:0.3rem;
                    img {
                        width: 2.4rem;height: 1.52rem;;
                    }
                }
            }
        }
    }
</style>