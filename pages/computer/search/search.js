// pages/brand/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      title:null,
      searchList: [{
        "title": "情侣装",
        "backgound": "#F2F2F2",
        "with": "20%"
      },
      {
        "title": "反季疯抢199-100",
        "backgound": "#FFCCCC",
        "with": "35%"
      },
      {
        "title": "夏日清仓购",
        "backgound": "#FFCCCC",
        "with": "20%"
      },
      {
        "title": "反击特惠屯两件5折",
        "backgound": "#FFCCCC",
        "with": "35%"
      },
      {
        "title": "夏日T恤",
        "backgound": "#F2F2F2",
        "with": "20%"
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var title = options.title;
    this.setData({
      title: title
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
  returnToLastPage:function(){
    wx.navigateBack({
      delta: 1,
    })
  }
})