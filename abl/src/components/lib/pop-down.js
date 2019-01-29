import { MessageBox } from 'element-ui'

let pop = function () {
  MessageBox.alert(
    '<div><div><div class="err">抱歉，该活动已结束</div></div><div class="mess">下载峰向标APP查看更多精彩活动吧！</div></div>',
    '',
    {
      dangerouslyUseHTMLString: true,
      showClose: false,
      center: true,
      confirmButtonText: '关闭',
      confirmButtonClass: 'yellow',
      customClass: 'pop-down pop',
      closeOnClickModal: true
    }
  ).then(() => {}).catch(() => {
  });
}

export default pop
