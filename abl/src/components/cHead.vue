<template>
  <div class="header">
    <div v-wechat-title="$route.meta.title"></div>
    <img src="@/assets/img/detailsreturn.png"
         alt=""
         @click="goBack">
    <p>{{cTitle}}</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      cTitle: ''
    }
  },
  created () {
    if (this.$route.meta.cTitle === undefined) {
      this.cTitle = this.$route.meta.title
    } else {
      this.cTitle = this.$route.meta.cTitle
    }
  },
  mounted () {},
  props: ['rulesDomains'],
  methods: {
    goBack () {
      global.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>
<style lang="scss" scoped>
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
</style>
