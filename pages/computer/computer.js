// pages/brand/brand.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categoryList: [
      {
        "id": 1,
        "name": "top",
        "uiName": "热门分类"
      },
      {
        "id": 2,
        "name": "total",
        "uiName": "电脑整机"
      },
      {
        "id": 3,
        "name": "out",
        "uiName": "外设产品"
      },
      {
        "id": 4,
        "name": "game",
        "uiName": "游戏设备"
      }
    ],
    topList: [{
      "id": 1,
      "uiName": "吃鸡装备",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/chiji.jpg"
    },
    {
      "id": 2,
      "uiName": "游戏本",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/game.jpg"
    },
    {
      "id": 3,
      "uiName": "轻薄本",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/qingbao.jpg"
    },
    {
      "id": 4,
      "uiName": "游戏台式机",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/game_taishi.jpg"
    },
    {
      "id": 5,
      "uiName": "机械键盘",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/jianpan.jpg"
    },
    {
      "id": 6,
      "uiName": "移动硬盘",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/yingpan.jpg"
    },
    {
      "id": 7,
      "uiName": "曲屏显示器",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/screen.jpg"
    },
    {
      "id": 8,
      "uiName": "组装电脑",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/combine_com.jpg"
    },
    {
      "id": 9,
      "uiName": "显卡",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/xianka.jpg"
    },
    {
      "id": 10,
      "uiName": "家用打印机",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/dayinji.jpg"
    },
    {
      "id": 10,
      "uiName": "投影机",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/touying.jpg"
    }],
    femaleList: [
      {
        "category": "白搭上衣",
        "list": [{
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
        }]
      },
      {
        "category": "裤子",
        "list": [{
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
        }]
      }],
    totalList: [{
      "id": 1,
      "uiName": "笔记本",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/chiji.jpg"
    },
    {
      "id": 2,
      "uiName": "游戏本",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/game.jpg"
    },
    {
      "id": 3,
      "uiName": "轻薄本",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/qingbao.jpg"
    },
    {
      "id": 4,
      "uiName": "台式机",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/game_taishi.jpg"
    },
    {
      "id": 5,
      "uiName": "一体机",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/yiti.jpg"
    },
    {
      "id": 6,
      "uiName": "商用台式机",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/shangyong.jpg"
    },
    {
      "id": 7,
      "uiName": "平板电脑",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/screen.jpg"
    },
    {
      "id": 8,
      "uiName": "服务器",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/fuwuqi.jpg"
    },
    {
      "id": 9,
      "uiName": "笔记本配件",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/peijian.jpg"
    }],
    current: 1,
    popularList: [],
    category: "笔记本",
    display: 0,
   


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
    var that = this;
    that.setPopular();

  },
  setPopular: function () {
    this.setData({
      popularList: this.data.topList
    })
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
  showList: function (e) {
    var id = e.currentTarget.id;
    var category = e.currentTarget.dataset.name;
    var current = id;
    this.setData({
      current: current
    })
    if (category == "top") {
      this.setData({
        popularList: this.data.topList
      })
      this.setData({
        display: 0
      })
    }
    if (category == "total") {
      this.setData({
        popularList: this.data.totalList
      })
      this.setData({
        display: 1
      })
    }
    if (category == "male") {
      this.setData({
        popularList: this.data.maleList
      })
      this.setData({
        display: 1

      })
    }
    if (category == "brand") {
      this.setData({
        popularList: this.data.brandList
      })
      this.setData({
        display: 0

      })
    }
  },
  turnToDetail: function (e) {
    var title = e.currentTarget.dataset.title;
    wx.navigateTo({
      url: 'detail/detail?title=' + title,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  toChannel: function () {
    wx.navigateTo({
      url: 'channel/channel?title=' + this.data.category,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }
})