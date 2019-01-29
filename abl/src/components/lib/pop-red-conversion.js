import { MessageBox } from 'element-ui'

let fail = function (param) {
  MessageBox.alert(
    `<div>
      <div class="p-red">
          <div class="title">您确认要兑换</div>
          <div class="cont">爱便利VIP卡1张+`+param.money+`元卡内余额</div>
      </div>
      <div class="mess">温馨提示：</div>
      <div class="explain">
        活动期间每人仅限兑换一次，请谨慎选择！</div>
      </div>
    </div>`,
    '',
    {
      dangerouslyUseHTMLString: true,
      showClose: false,
      center: true,
      confirmButtonText: '确认兑换',
      confirmButtonClass: 'yellow',
      customClass: 'pop-red-conversion pop',
      closeOnClickModal: true
    }
  ).then(param.callback && param.callback).catch(() => {
  });
}

export default fail
