// pages/brand/channel/channel.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://pbwu4o9j9.bkt.clouddn.com/discount2.jpg'
    ],
 
    indicatordots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    indicator: true,
    vertical: true,
    title:null,
    imageList: [{
      "id": 1,
      "title": "高性能笔记本",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/game.jpg",
    },
    {
      "id": 2,
      "title": "超轻薄本",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/qingbao.jpg",
    },
    {
      "id": 1,
      "title": "商用笔记本",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/yiti.jpg",

    },
    {
      "id": 1,
      "title": "大屏游戏本",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/chiji.jpg",
    },
    {
      "id": 1,
      "title": "发烧游戏本",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/game.jpg",
    }],
    list: [{
      "id": 1,
      "uiName": "短袖T恤",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/timg.jpg"
    },
    {
      "id": 2,
      "uiName": "连衣裙",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/dress.jpg"
    },
    {
      "id": 3,
      "uiName": "护肤套装",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/timg.jpg"
    },
    {
      "id": 4,
      "uiName": "休闲裤",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/ku.jpg"
    },
    {
      "id": 5,
      "uiName": "外套",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/wai.jpg"
    }],
    brandlist: [{
      "id": 1,
      "uiName": "阿迪达斯",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/adi.jpg"
    },
    {
      "id": 2,
      "uiName": "连衣裙",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/bosi.jpg"
    },
    {
      "id": 3,
      "uiName": "护肤套装",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/hailan.jpg"
    },
    {
      "id": 4,
      "uiName": "休闲裤",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/le.png"
    },
    {
      "id": 5,
      "uiName": "外套",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/meibang.jpg"
    },
    {
      "id": 5,
      "uiName": "外套",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/nike.jpg"
    }, {
      "id": 5,
      "uiName": "外套",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/yipin.png"
    }, {
      "id": 5,
      "uiName": "外套",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/huili.jpg"
    }],
    tlist: [{
      "id": 1,
      "uiName": "透气T恤",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/T1.jpg"
    },
    {
      "id": 2,
      "uiName": "纯棉T恤",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/T2.jpg"
    },
    {
      "id": 3,
      "uiName": "印花T恤",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/T3.jpg"
    },
    {
      "id": 4,
      "uiName": "字母T恤",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/T4.jpg"
    },
    {
      "id": 5,
      "uiName": "条纹T恤",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/T5.jpg"
    }],
    navList: [{
      "id": "1",
      "title": "销量",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/triangle.png",
      "selectimage": "http://pbwu4o9j9.bkt.clouddn.com/triangle_bottom.png",
      "colour": "#FF8040"
    },
    {
      "id": "2",
      "title": "最新",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/triangle.png",
      "selectimage": "http://pbwu4o9j9.bkt.clouddn.com/triangle_bottom.png",
      "colour": "#FF8040"
    },
    {
      "id": "3",
      "title": "价格",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/triangle.png",
      "selectimage": "http://pbwu4o9j9.bkt.clouddn.com/triangle_bottom.png",
      "colour": "#FF8040"
    },
    {
      "id": "4",
      "title": "品牌",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/triangle.png",
      "selectimage": "http://pbwu4o9j9.bkt.clouddn.com/triangle_bottom.png",
      "colour": "#FF8040"
    },
    {
      "id": "5",
      "title": "筛选",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/shaixuan_black.png",
      "selectimage": "http://pbwu4o9j9.bkt.clouddn.com/shaixuan_pink.png",
      "colour": "#FF8040"
    }
    ],
    current:1,
    comList: [{
      "id": 1,
      "title": "联想(Lenovo)拯救者R720",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/game.jpg",
      "newprice": "￥4999",
      "oldprice": "￥5899",
      "discountprice": "7折",
      "discount": "自营"
    },
    {
      "id": 2,
      "title": "惠普暗影系列",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/qingbao.jpg",
      "newprice": "￥3600",
      "oldprice": "￥4899",
      "discountprice": "7折",
      "discount": "自营"
    },
    {
      "id": 1,
      "title": "戴尔(Dell)拯救者R720",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/yiti.jpg",
      "newprice": "￥6899",
      "oldprice": "￥5899",
      "discountprice": "7折",
      "discount": "自营"
    },
    {
      "id": 1,
      "title": "联想(Lenovo)机械革命",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/chiji.jpg",
      "newprice": "￥6754",
      "oldprice": "￥5899",
      "discountprice": "7折",
      "discount": "自营"
    },
    {
      "id": 1,
      "title": "惠普(HP)暗影精灵四代",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/game.jpg",
      "newprice": "￥4999",
      "oldprice": "￥5899",
      "discountprice": "7折",
      "discount": "自营"
    }],
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var title = options.title;
    this.setData({
      title:title
    })
    wx.setNavigationBarTitle({
      title: title,
    })
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
  turnToDetail: function (e) {
    var title = e.currentTarget.dataset.title;
    wx.navigateTo({
      url: '../detail/detail?title=' + title,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  bindOrder: function (e) {
    var id = e.currentTarget.id;
    this.setData({
      current: id
    })
  },
})