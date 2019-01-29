// 获取配送地址
export const myTest = {
  url: '/demo/myTest',
  method: 'post'
}
// 获取短信验证码
export const sendSMSCodeButton = {
  url: 'abluser/h5/sendMobileCodeWithRandom',
  method: 'post'
}
// 注册
export const registerActivity = {
  url: 'abluser/h5/registerActivity',
  method: 'post'
}
// 页面加载请求
export const myStart = {
  url: 'abl/h5/ablIndex',
  method: 'post'
}
// 领红包按钮 判断是否领取过和兑换接口
export const myMoney = {
  url: 'abl/h5/activityExchange',
  method: 'post',
  fail: true
}
// 登录
export const loginActivity = {
  url: 'abluser/h5/accountLogin',
  method: 'post'
}
// 数据统计
export const backstageRecord = {
  url: 'abluser/h5/track',
  method: 'post'
}
// 数据统计
export const islogin = {
  url: 'abluser/h5/isLogin',
  method: 'post'
}
// 发现
export const findmodular = {
  url: 'discovery/h5/index',
  method: 'post'
}
