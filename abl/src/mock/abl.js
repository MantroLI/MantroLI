const isTimeOfActivity = {
  fault: '不在活动期间内',
  msg: '不在活动期间内',
  result: 'SUCCESS',
  code: '1006345'
}

const queryAbl18RecordsByUserId = {
  result: 'SUCCESS',
  list: [
    {
      id: 5,
      userId: 1000000382,
      userAccount: '195****1039',
      activityType: '1',
      prizeId: 1,
      prizeName: '爱便利1元红包',
      status: '0',
      insertTime: 24914000,
      changeTime: '',
      rpcStatus: '0',
      prizeAmt: ''
    },
    {
      id: 7,
      userId: 1000000382,
      userAccount: '195****1039',
      activityType: '3',
      prizeId: 6,
      prizeName: '爱便利余额3%',
      status: '0',
      insertTime: 27355000,
      changeTime: '',
      rpcStatus: '0',
      prizeAmt: 150.0
    },
    {
      id: 8,
      userId: 1000000382,
      userAccount: '195****1039',
      activityType: '2',
      prizeId: 8,
      prizeName: '爱便利VIP卡+100元卡内余额',
      status: '0',
      insertTime: 27591000,
      changeTime: '',
      rpcStatus: '0',
      prizeAmt: 300.0
    }
  ]
}

const ablIndex = {
  'result': 'SUCCESS',
  'activityProductInfo': {
    'bidStatus': 'investing',
    'bidDetail': {
      'financialId': 20000014511,
      'categoryId': 1000000007,
      'financial': {
        'id': 20000014511,
        'categoryId': 1000000007,
        'bidName': '优选智投D',
        'productNo': 'YXZTD2018120059',
        'incomeRate': 9.9,
        'repayType': '一次性还本付息',
        'investPeriod': 12,
        'investPeriodUnit': '月',
        'expectTol': 195950,
        'realTol': 195950,
        'availableAmt': 31450,
        'maxAmt': 195950,
        'minAmt': 500,
        'incrementalAmt': 50,
        'plateRate': 0,
        'pubType': '立即发布',
        'startTime': '2018-12-28 19:44:13',
        'expireTime': 7,
        'valueTerm': 3,
        'endTerm': 2,
        'incomeDesc': '锁定期内，本息循环出借。',
        'feeDesc': '针对出借人暂不收取撮合费用。',
        'investDesc': '最低出借500元，以50元的整数倍递增。',
        'bidStatus': '招标中',
        'creator': '系统管理员',
        'insertTime': '2018-12-28 19:44:13',
        'publisher': '系统管理员',
        'pubTime': '2018-12-28 19:44:24',
        'instruction': '“优选智投”是峰向标推出的有锁定期的出借服务项目。出借人通过加入“优选智投”项目将其资金授权峰向标出借给借款人，以出借于峰向标网站公布的融资项目。峰向标采用智能匹配、循环出借的方式，提高资金的流动率和利用率，以期增加出借回报。',
        'acitvityFlag': '',
        'projectId': '35003',
        'lendIncomeDesc': '以满标次日为起息时间（若1月1日加入服务，1月2日满标，起息时间为1月3日）。锁定期结束前可申请延长授权服务期，最迟操作时间为锁定期到期日前一天晚上18点前尝试申请，否则视为到期后自动发起转让并退出。延长锁定期后的利息仍按照原固定年化计算。',
        'exiTinstruction': '1.锁定期结束后，系统自动发起转让并退出该计划，若出借者在锁定期内延长授权服务期（即锁定期），则持有到达最长时间（24个月）时自动退出。2.当所持有标的或债权全部转让完毕，方可视为退出成功。3.还款日如遇国家法定节假日、节假日以及周末等非工作日，则还款日顺延到非工作日后的第一个工作日，每年法定节假日以国务院公布日期为准。',
        'maxPeriod': 24,
        'productType': '2',
        'channelType': '1'
      },
      'category': {
        'id': 1000000007,
        'categoryName': '优选智投D',
        'categoryCode': 'YXZTD',
        'incomeRate': 9.9,
        'currPeriod': 60,
        'minAmt': 500,
        'incrementalAmt': 50,
        'incomeType': '一次性还本付息',
        'investPeriod': 12,
        'investPeriodUnit': '月',
        'instruction': '“优选智投”是峰向标推出的有锁定期的出借服务项目。出借人通过加入“优选智投”项目将其资金授权峰向标出借给借款人，以出借于峰向标网站公布的融资项目。峰向标采用智能匹配、循环出借的方式，提高资金的流动率和利用率，以期增加出借回报。',
        'incomeDesc': '锁定期内，本息循环出借。',
        'feeDesc': '针对出借人暂不收取撮合费用。',
        'investDesc': '最低出借500元，以50元的整数倍递增。',
        'categoryStatus': '1',
        'creator': '系统管理员',
        'insertTime': '2018-03-05 10:09:35',
        'lastOperator': '系统管理员',
        'operateTime': '2018-12-28 19:44:13',
        'productType': '2',
        'lendIncomeDesc': '以满标次日为起息时间（若1月1日加入服务，1月2日满标，起息时间为1月3日）。锁定期结束前可申请延长授权服务期，最迟操作时间为锁定期到期日前一天晚上18点前尝试申请，否则视为到期后自动发起转让并退出。延长锁定期后的利息仍按照原固定年化计算。',
        'exiTinstruction': '1.锁定期结束后，系统自动发起转让并退出该计划，若出借者在锁定期内延长授权服务期（即锁定期），则持有到达最长时间（24个月）时自动退出。2.当所持有标的或债权全部转让完毕，方可视为退出成功。3.还款日如遇国家法定节假日、节假日以及周末等非工作日，则还款日顺延到非工作日后的第一个工作日，每年法定节假日以国务院公布日期为准。',
        'maxPeriod': 24
      },
      'pubTypeCode': '1',
      'bidStatusCode': '04',
      'repayTypeCode': '2',
      'investPeriodUnitCode': 'm',
      'bidPubTime': '2018-12-28',
      'currProgressStatus': '0'
    },
    'bidType': '2'
  },
  'model': {
    'activity1': {
      'abl18Record': {
        'id': 6,
        'userId': 1000000374,
        'userAccount': '131****1515',
        'activityType': '1',
        'prizeId': 5,
        'prizeName': '爱便利5元红包',
        'status': '1',
        'orderId': '',
        'insertTime': -28800000,
        'changeTime': 11833000,
        'rpcStatus': '1',
        'prizeAmt': 5
      },
      'code': '1',
      'activityType': '1',
      'msg': '已实名可以领取奖励!',
      'fault': '已实名可以领取奖励!'
    },
    'activity2': {
      'abl18Record': {
        'id': 14,
        'userId': 1000000374,
        'userAccount': '131****1515',
        'activityType': '2',
        'prizeId': 8,
        'prizeName': '爱便利VIP卡+100元卡内余额',
        'status': '1',
        'orderId': '',
        'insertTime': -28800000,
        'changeTime': 13344000,
        'rpcStatus': '0',
        'prizeAmt': 100
      },
      'code': '1',
      'activityType': '2',
      'msg': '可以兑换!',
      'fault': '可以兑换!'
    },
    'activity3': {
      'abl18Record': {
        'id': 13,
        'userId': 1000000374,
        'userAccount': '131****1515',
        'activityType': '3',
        'prizeId': 6,
        'prizeName': '爱便利余额3%',
        'status': '2',
        'orderId': '',
        'insertTime': -28800000,
        'changeTime': 36935000,
        'rpcStatus': '0',
        'prizeAmt': 300
      },
      'code': '2',
      'activityType': '3',
      'msg': '可以兑换!',
      'fault': '可以兑换!'
    }
  }
}
const findmodular = {
  'result': 'SUCCESS',
  'msg': '成功',
  'discoverBanners': [
    {
      'contentUrlPath': 'https://h5.tianfn.net:4443/index.html#currhr=NewsDetail&id=1000000650',
      'id': 1000001350,
      'imgType': 'h5',
      'insertTime': '2018-08-20 10:19:06',
      'operateTime': '2018-11-14 15:15:29',
      'pubTime': '2018-11-14 15:15:30',
      'seqNo': 1,
      'title': '自查报告',
      'urlPath': 'https://fxb.tianfn.net:4443/img/2018/11/14/backgound/b43ef44431d2426ba2440b2161573e47.png'
    },
    {
      'contentUrlPath': 'https://h5.tianfn.net:4443/index.html#currhr=NewsDetail&id=1000000650',
      'id': 1000001350,
      'imgType': 'h5',
      'insertTime': '2018-08-20 10:19:06',
      'operateTime': '2018-11-14 15:15:29',
      'pubTime': '2018-11-14 15:15:30',
      'seqNo': 1,
      'title': '自查报告',
      'urlPath': 'https://fxb.tianfn.net:4443/img/2018/11/14/backgound/b43ef44431d2426ba2440b2161573e47.png'
    },
    {
      'contentUrlPath': 'https://h5.tianfn.net:4443/index.html#currhr=NewsDetail&id=1000000650',
      'id': 1000001350,
      'imgType': 'h5',
      'insertTime': '2018-08-20 10:19:06',
      'operateTime': '2018-11-14 15:15:29',
      'pubTime': '2018-11-14 15:15:30',
      'seqNo': 1,
      'title': '自查报告',
      'urlPath': 'https://fxb.tianfn.net:4443/img/2018/11/14/backgound/b43ef44431d2426ba2440b2161573e47.png'
    }
  ],
  'discoverCoupon': [
    {
      'activateAmount': null,
      'activateRules': null,
      'availableStatus': 0,
      'couponId': 1000247352,
      'couponRatio': 1,
      'couponType': 2,
      'expirationTime': '2019-02-08 23:59:59',
      'frozenAmt': null,
      'getTime': '2019-01-10 11:08:42',
      'redbagAmt': '0.00',
      'redbagUnusedAmt': null,
      'remainingDays': 30,
      'source': '系统赠送',
      'status': '1',
      'useScope': '仅限智投、散标',
      'useTime': null
    },
    {
      'activateAmount': null,
      'activateRules': null,
      'availableStatus': 0,
      'couponId': 1000247352,
      'couponRatio': 1,
      'couponType': 2,
      'expirationTime': '2019-02-08 23:59:59',
      'frozenAmt': null,
      'getTime': '2019-01-10 11:08:42',
      'redbagAmt': '0.00',
      'redbagUnusedAmt': null,
      'remainingDays': 30,
      'source': '系统赠送',
      'status': '1',
      'useScope': '仅限智投、散标',
      'useTime': null
    },
    {
      'activateAmount': null,
      'activateRules': null,
      'availableStatus': 0,
      'couponId': 1000217751,
      'couponRatio': 0,
      'couponType': 1,
      'expirationTime': '2019-02-09 23:59:59',
      'frozenAmt': '0.00',
      'getTime': '2019-01-10 11:08:52',
      'redbagAmt': '888.00',
      'redbagUnusedAmt': '888.00',
      'remainingDays': 31,
      'source': '系统赠送',
      'status': '1',
      'useScope': '仅限智投、散标',
      'useTime': null
    }
  ],
  'discoverMessages': [
    {
      'orderId': 1000001350,
      'bidName': 'h5',
      'bidNo': '2018-08-20 10:19:06',
      'orderFreeDays': '2018-11-14 15:15:29',
      'orderType': '2018-11-14 15:15:30',
      'orderNo': 1,
      'urlPath': 'https://fxb.tianfn.net:4443/img/2018/11/14/backgound/b43ef44431d2426ba2440b2161573e47.png'
    },
    {
      'birthdayDate': 1000001350,
      'birthdayCouponType': 'h5',
      'birthdayGiftAmt': '2018-08-20 10:19:06',
      'urlPath': 'https://fxb.tianfn.net:4443/img/2018/11/14/backgound/b43ef44431d2426ba2440b2161573e47.png'
    },
    {
      'couponId': 1000001350,
      'couponType': 'h5',
      'couponAmt': '2018-08-20 10:19:06',
      'urlPath': 'https://fxb.tianfn.net:4443/img/2018/11/14/backgound/b43ef44431d2426ba2440b2161573e47.png'
    },
    {
      'commissionId': 1000001350,
      'commissionType': 'h5',
      'couponAmt': '2018-08-20 10:19:06',
      'commissionAmt': 'https://fxb.tianfn.net:4443/img/2018/11/14/backgound/b43ef44431d2426ba2440b2161573e47.png'
    }
  ],
  'discoverNews': [
    {
      'articleLabel': '10月15日，峰向标正式向北京市金融工作局提交了内容涉及108条的自查报告及89项补充材料。作为一家始终秉承“合规经营”理念的互联网借贷信息中介服务平台，峰向标再次以实际行动向行业及用户展示了平台合规经营的成果。',
      'id': 1000000650,
      'imgUrl': 'https://fxb.tianfn.net:4443/img/2018/11/13/backgound/299ac7b0348c43269ef54b11f3e18b45.jpg',
      'publicTime': '2018-11-13 00:00:00',
      'title': '峰向标已提交合规自查报告 全力推进备案合规'
    },
    {
      'articleLabel': '10月15日，峰向标正式向北京市金融工作局提交了内容涉及108条的自查报告及89项补充材料。作为一家始终秉承“合规经营”理念的互联网借贷信息中介服务平台，峰向标再次以实际行动向行业及用户展示了平台合规经营的成果。',
      'id': 1000000650,
      'imgUrl': 'https://fxb.tianfn.net:4443/img/2018/11/13/backgound/299ac7b0348c43269ef54b11f3e18b45.jpg',
      'publicTime': '2018-11-13 00:00:00',
      'title': '峰向标已提交合规自查报告 全力推进备案合规'
    },
    {
      'articleLabel': '10月15日，峰向标正式向北京市金融工作局提交了内容涉及108条的自查报告及89项补充材料。作为一家始终秉承“合规经营”理念的互联网借贷信息中介服务平台，峰向标再次以实际行动向行业及用户展示了平台合规经营的成果。',
      'id': 1000000650,
      'imgUrl': 'https://fxb.tianfn.net:4443/img/2018/11/13/backgound/299ac7b0348c43269ef54b11f3e18b45.jpg',
      'publicTime': '2018-11-13 00:00:00',
      'title': '峰向标已提交合规自查报告 全力推进备案合规'
    },
    {
      'articleLabel': '10月15日，峰向标正式向北京市金融工作局提交了内容涉及108条的自查报告及89项补充材料。作为一家始终秉承“合规经营”理念的互联网借贷信息中介服务平台，峰向标再次以实际行动向行业及用户展示了平台合规经营的成果。',
      'id': 1000000650,
      'imgUrl': 'https://fxb.tianfn.net:4443/img/2018/11/13/backgound/299ac7b0348c43269ef54b11f3e18b45.jpg',
      'publicTime': '2018-11-13 00:00:00',
      'title': '峰向标已提交合规自查报告 全力推进备案合规'
    }
  ]
}

export { isTimeOfActivity, queryAbl18RecordsByUserId, ablIndex, findmodular }
