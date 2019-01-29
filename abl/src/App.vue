
<template>
  <div id="app"
       class="warp">
    <router-view />
  </div>
</template>
<script>
import './plugin/flexible'
export default {
  data () {
    return {}
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  },
  components: {
    // "c-general":general
  },
  name: 'App'
}
</script>
<style  lang="scss">
@import './style/common';
.warp {width: 100%;height: 100%;}
</style>
