<template>

  <div class="test">
    <div v-wechat-title="$route.meta.title"></div>
    <el-alert title="警告提示的文案"
              class="alertWarning"
              type="warning"
              :closable="false"
              show-icon="">
      <span slot="title">{{appIntro}}</span>
    </el-alert>
    <div class="content">
      Hello world!
      <img src="@/assets/img/tel.png">
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Alert, Table } from 'element-ui'
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
Vue.use(Table)
export default {
  data() {
    return {
      appIntro: ''
    }
  },
  created() {
    this.initRules()
  },
  mounted() {
    // popRedCongratulation()
    // popRedConversion({
    //   money:3
    // })
    // popRedBalance()
    // popFailOld()
    // popShow({
    //   callback: function() {
    //     alert(1)
    //   }
    // })
    // popLend({
    //   callback: function() {
    //     alert(1)
    //   }
    // })
    popTel()
    // popFail()
    // popDown()
  },
  props: ['rulesDomains'],
  methods: {
    initRules: async function() {
      // try {
      let result = await this.$api('demo.myTest', { num: 1 })
      this.appIntro = result.data.appIntro
      // } catch (error) {
      // console.log('error', error)
      // }
    },
    parseFun: function() {
      // this.$api('domain.parse', {}).then(
      //   result => {
      //     this.$alert('解析成功后一般两个小时内生效!', '自动解析成功!', {
      //       confirmButtonText: '确定'
      //     })
      //   },
      //   error1 => {
      //     this.$alert(
      //       '如有任何疑问,请拨打400-660-5555',
      //       '自动解析失败！请稍后再试',
      //       {
      //         confirmButtonText: '确定'
      //       }
      //     )
      //   }
      // )
    }
  }
}
</script>
<style lang="scss" scoped>
.test {
  .el-alert {
    /deep/ .el-alert__content {
      padding: 0 6px;
    }
  }
  .content {
    width: 100%;
    line-height: 2.5rem;
    text-align: center;
  }
}
</style>
