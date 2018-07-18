// pages/unused/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://pbwu4o9j9.bkt.clouddn.com/tuofu.jpg',
      'http://pbwu4o9j9.bkt.clouddn.com/school.jpg',
      'http://pbwu4o9j9.bkt.clouddn.com/school2.jpg'
    ], 
    indicatordots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    indicator: true,
    title:'托福',
    price:'',
    currentitem:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var title = options.title;
    var price = options.price;
    this.setData({
      title:title,
      price:price
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
  callPhone:function(){
    wx.makePhoneCall({
      phoneNumber: '18149030084',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  clickHeader:function(e){
    var id=e.currentTarget.id;
    this.setData({
      currentitem:id
    })
  },
  subsrcibeCourse:function(){
    wx.navigateTo({
      url: '../subscribe/subscribe',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})