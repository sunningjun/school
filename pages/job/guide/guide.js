// pages/unused/unused.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleList: [{
      "id": "1",
      "title": "职位类型",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/triangle.png",
      "selectimage": "http://pbwu4o9j9.bkt.clouddn.com/triangle_bottom.png",
      "colour": "#FF8040"
    },
    {
      "id": "2",
      "title": "全城",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/triangle.png",
      "selectimage": "http://pbwu4o9j9.bkt.clouddn.com/triangle_bottom.png",
      "colour": "#FF8040"
    },
    {
      "id": "3",
      "title": "推荐排序",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/triangle.png",
      "selectimage": "http://pbwu4o9j9.bkt.clouddn.com/triangle_bottom.png",
      "colour": "#FF8040"
    }, {
      "id": "4",
      "title": "推荐排序",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/triangle.png",
      "selectimage": "http://pbwu4o9j9.bkt.clouddn.com/triangle_bottom.png",
      "colour": "#FF8040"
    }
    ],
    current: 1,
    imgUrls: [
      'http://pbwu4o9j9.bkt.clouddn.com/job1.jpg',
      'http://pbwu4o9j9.bkt.clouddn.com/jianzhi2.jpg'
    ],
    indicatordots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    indicator: true,
    currentitem: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var title = options.title;
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
  publishProduct: function () {
    wx.navigateTo({
      url: 'add/add',
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
  },
  clickHeader: function (e) {
    var id = e.currentTarget.id;
    this.setData({
      currentitem: id
    })
  },
  bindOrder: function (e) {
    var id = e.currentTarget.id;
    this.setData({
      current: id
    })
  },
})