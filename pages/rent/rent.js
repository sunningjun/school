// pages/rent/rent.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://pbwu4o9j9.bkt.clouddn.com/zufang_swipper1.jpg',
      'http://pbwu4o9j9.bkt.clouddn.com/zufang_swipper2.jpg'
    ],
    indicatordots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    indicator: true,
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
  turnToRent:function(){
    wx.navigateTo({
      url: 'detail/detail',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  turnToOut:function(){
    wx.navigateTo({
      url: 'out/out',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})