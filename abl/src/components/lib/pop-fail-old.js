import { MessageBox } from 'element-ui'

let pop = function (param) {
  MessageBox.alert(
    '<div><div><div class="err">您已经是峰向标的老朋友了</div></div><div class="mess">下载APP去关注其他精彩活动吧！</div></div>',
    '',
    {
      dangerouslyUseHTMLString: true,
      showClose: false,
      center: true,
      confirmButtonText: '关闭',
      confirmButtonClass: 'yellow',
      customClass: 'pop-fail-old pop',
      closeOnClickModal: true
    }
  ).then(param.callback && param.callback).catch(() => {
  });
}

export default pop
