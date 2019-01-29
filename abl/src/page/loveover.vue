<template>
  <div class="loveover">
    <c-head></c-head>
    <div class="loveover-bg">
      <img src="@/assets/img/loveover-bg.png"
           alt="">
      <p>{{$route.params.title}}</p>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Alert, table } from 'element-ui'
Vue.use(Alert)
Vue.use(table)
export default {
  data () {
    return {}
  },
  created () {
    // let id = this.$route.query.paramName;
    // console.log(id)
  },
  mounted () {
    console.log(this.$route)
  },
  props: ['rulesDomains'],
  methods: {}
}
</script>
<style lang="scss" scoped>
.loveover {
  width: 100%;
  height: 100%;
  background-color: #fff;
  .header {
    display: flex;
    padding: 0.26rem 0.3rem;
    align-items: center;
    background-color: #fff;
    border: 2px solid rgba(242, 242, 242, 0.5);
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
  .loveover-bg {
    width: 100%;
    height: 3.09rem;
    margin-top: 1rem;
    text-align: center;
    img {
      width: 3.09rem;
      height: 3.09rem;
    }
    p {
      font-size: 18px;
      color: #666666;
      padding: 0.4rem 0;
    }
  }
}
</style>
