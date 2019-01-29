<template>
  <div class="publicaddress">
    <c-head></c-head>
    <div class="publicaddress">
      <div class="title">两招教你关注微信订阅号</div>
      <div class="step1-img">
        <img src="@/assets/img/step1-img.png" alt="">
        <div class="but">方法一</div>
        <p>直接扫描下面二维码关注“峰向标”</p>
        <div class="qr-code"><img src="" alt=""></div>
      </div>
      <div class="step2-img">
        <div class="but">方法二</div>
        <p>进入微信-添加朋友-公众号搜索“峰向标”并关注</p>
        <img src="@/assets/img/step2-img.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  data () {
    return {}
  },
  created () {
  },
  mounted () {
    console.log(this.$route)
    var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1.7,
})
  },
  props: ['rulesDomains'],
  methods: {
  }
}
</script>
<style lang="scss" scoped>
    .publicaddress {
      .title {
        font-size: 0.48rem;color: #08A2ED;width: 100%;text-align: center;padding: 0.4rem 0;
      }
      .step1-img {
        width: 100%;text-align: center;
        img {
          width: 2.98rem;height: 2.48rem;
        }
        .but {
            width: 3.88rem;height: 0.66rem;background-image: url(../assets/img/step-but-bg.png);background-repeat: no-repeat;background-size: 100% 100%;text-align: center;line-height: 0.66rem;
            font-size: 0.34rem;color: #fff;margin: 0 auto;margin-top: -0.4rem;
        }
        p {
            font-size: 0.28rem;color: #3C3C3C;padding: 0.4rem 0;width: 100%;text-align: center;
          }
          .qr-code {
            width: 2.88rem;height: 2.88rem;background-color: #D8D8D8;margin:0.08rem auto 1rem auto;
            img {
              width: 100%;height: 100%;
            }
          }
      }
      .step2-img {
        width: 100%;text-align: center;padding-bottom:0.4rem;
        .but {
            width: 3.88rem;height: 0.66rem;background-image: url(../assets/img/step-but-bg.png);background-repeat: no-repeat;background-size: 100% 100%;text-align: center;line-height: 0.66rem;
            font-size: 0.34rem;color: #fff;margin: 0 auto;
        }
        p {
            font-size: 0.28rem;color: #3C3C3C;padding: 0.4rem 0;width: 100%;
          }
        img {
          width: 6.56rem;height: 5.24rem;margin: 0 auto;
        }
      }
    }
</style>