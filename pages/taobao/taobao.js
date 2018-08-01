// pages/train/train.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://pbwu4o9j9.bkt.clouddn.com/taobao_swipper1.jpg',
      'http://pbwu4o9j9.bkt.clouddn.com/taobao_swipper2.jpg',
      'http://pbwu4o9j9.bkt.clouddn.com/taobao_swipper3.jpg'
    ],
    indicatordots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    indicator: true,
    navList: [{
      "title": "雅思托福",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/yasi.png"
    },
    {
      "title": "四六级",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/siliu.png"
    },
    {
      "title": "考研",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/kaoyan.png"
    },

    {
      "title": "公务员",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/gongwu.png"
    },
    {
      "title": "驾校",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/jiaxiao.png"
    },

    {
      "title": "资格证书",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/zhengshu.png"
    },
    {
      "title": "兴趣技能",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/jineng.png"
    },
    {
      "title": "分类",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/class_menu.png"
    }
    ],
    tuijianList: [{
      "title": "托福高效冲刺班",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/tuofu1.jpg",
      "price": "14800"
    },
    {
      "title": "平安驾校",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/jiaxiaoke.jpg",
      "price": "2500"
    },
    {
      "title": "暑期吉他强训班",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/jitapeixun.jpg",
      "price": "4800"
    },
    {
      "title": "新东方考研vip班",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/xindongfang.jpg",
      "price": "24800"
    },
    {
      "title": "公务员面试强训班",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/gongwuyuankaoshi.jpg",
      "price": "7000"
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

  },
  turnToProductDetail: function (e) {
    var title = e.currentTarget.dataset.title;
    var price = e.currentTarget.dataset.price;
    wx.navigateTo({
      url: 'product/product?title=' + title + '&price=' + price,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  turnToProduct: function (e) {
    var title = e.currentTarget.dataset.title;
    wx.navigateTo({
      url: 'detail/detail?title=' + title,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }
})