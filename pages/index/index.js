Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../images/pin.jpg',
      '../../images/xian.jpg',
      '../../images/peixun.png'
    ],
    news:[
      "【精彩活动】第28届西安工大..",
      "【捷报】我校计算机学院荣获陕西.."
    ],
    indicatordots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    indicator:true,
    vertical:true,
    menu: [
      {
        "images": "../../images/icon/meat.png",
        "text": "校园美食",
        "backgroudcolour": "#FF4081",
        "id": "1"
      },
      {
        "images": "../../images/icon/fuli.png",
        "text": "校园衣橱",
        "backgroudcolour": "#C0C0C0",
        "id": "2"
      },
      {
        "images": "../../images/icon/xian.png",
        "text": "闲置交易",
        "backgroudcolour": "#FF8040",
        "id": "3"
      },
      {
        "images": "../../images/icon/pei.png",
        "text": "考级培训",
        "backgroudcolour": "#FB4C4C",
        "id": "6"
      },
      {
        "images": "../../images/icon/com.png",
        "text": "电脑专区",
        "backgroudcolour": "#e6e6e6",
        "id": "4"
      },
      {
        "images": "../../images/icon/pin.png",
        "text": "兼职招聘",
        "backgroudcolour": "#80FF80",
        "id": "4"
      },
     
      {
        "images": "../../images/icon/chuang.png",
        "text": "校园淘宝",
        "backgroudcolour": "#FF8080",
        "id": "5"
      },
   
      {
        "images": "../../images/icon/game.png",
        "text": "游戏专区",
        "backgroudcolour": "#FFFFFF",
        "id": "7"
      },
      {
        "images": "../../images/icon/zu.png",
        "text": "我要租房",
        "backgroudcolour": "#FFFFFF",
        "id": "7"
      }
    ],
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