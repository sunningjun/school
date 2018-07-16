Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://pbwu4o9j9.bkt.clouddn.com/pin.jpg',
      'https://pbwu4o9j9.bkt.clouddn.com/xian.jpg',
      'https://pbwu4o9j9.bkt.clouddn.com/peixun.png'
    ],
    news: [
      "【精彩活动】第28届西安工大..",
      "【捷报】我校计算机学院荣获陕西.."
    ],
    indicatordots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    indicator: true,
    vertical: true,
    menu: [
      {
        "images": "https://pbwu4o9j9.bkt.clouddn.com/meat.png",
        "text": "校园美食",
        "backgroudcolour": "#FF4081",
        "id": "1",
        "url": "../meal/meal"
      },
      {
        "images": "https://pbwu4o9j9.bkt.clouddn.com/fuli.png",
        "text": "校园衣橱",
        "backgroudcolour": "#C0C0C0",
        "id": "2"
      },
      {
        "images": "https://pbwu4o9j9.bkt.clouddn.com/xian.png",
        "text": "闲置交易",
        "backgroudcolour": "#FF8040",
        "id": "3"
      },
      {
        "images": "https://pbwu4o9j9.bkt.clouddn.com/pei.png",
        "text": "考级培训",
        "backgroudcolour": "#FB4C4C",
        "id": "6"
      },
      {
        "images": "https://pbwu4o9j9.bkt.clouddn.com/com.png",
        "text": "电脑专区",
        "backgroudcolour": "#e6e6e6",
        "id": "4"
      },
      {
        "images": "https://pbwu4o9j9.bkt.clouddn.com/pin.png",
        "text": "兼职招聘",
        "backgroudcolour": "#80FF80",
        "id": "4"
      },

      {
        "images": "https://pbwu4o9j9.bkt.clouddn.com/chuang.png",
        "text": "校园淘宝",
        "backgroudcolour": "#FF8080",
        "id": "5"
      },

      {
        "images": "https://pbwu4o9j9.bkt.clouddn.com/game.png",
        "text": "游戏专区",
        "backgroudcolour": "#FFFFFF",
        "id": "7"
      },
      {
        "images": "https://pbwu4o9j9.bkt.clouddn.com/zu.png",
        "text": "我要租房",
        "backgroudcolour": "#FFFFFF",
        "id": "7"
      }
    ],
    miaosha: [
      {
        "images": "https://pbwu4o9j9.bkt.clouddn.com/txu.png",
        "oldPrice": "￥29",
        "newPrice": "￥49",
        "id": "1"
      },
      {
        "images": "https://pbwu4o9j9.bkt.clouddn.com/erji.jpg",
        "oldPrice": "￥490",
        "newPrice": "￥298",
        "id": "1"
      },
      {
        "images": "https://pbwu4o9j9.bkt.clouddn.com/taideng.jpg",
        "oldPrice": "￥45",
        "newPrice": "￥99",
        "id": "1"
      }],
    used: [
      {
        "images": "https://pbwu4o9j9.bkt.clouddn.com/chong.jpg",
        "title": "小米充电宝9成新",
        "price": "￥40"
      },
      {
        "images": "https://pbwu4o9j9.bkt.clouddn.com/wash.jpg",
        "title": "海尔洗衣机8成新",
        "price": "￥400"
      },
      {
        "images": "https://pbwu4o9j9.bkt.clouddn.com/math.jpg",
        "title": "高等数学第五版",
        "price": "￥2"
      },
      {
        "images": "https://pbwu4o9j9.bkt.clouddn.com/pep.jpg",
        "title": "大疆无人机7成新",
        "price": "￥800"
      }
    ],
    train: [
      {
        "images": "https://pbwu4o9j9.bkt.clouddn.com/jiaxiao1.jpg",
        "title": "西安庆华驾校",
      },
      {
        "images": "https://pbwu4o9j9.bkt.clouddn.com/yasi.jpg",
        "title": "西安真真英语培训",
      },
      {
        "images": "https://pbwu4o9j9.bkt.clouddn.com/kaoyan.jpg",
        "title": "西安文都考研",
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})