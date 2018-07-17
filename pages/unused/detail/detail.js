// pages/unused/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    proList: [{
      "title": "8P 有保修有发票",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/1.jpg",
      "price": "2500"
    },
    {
      "title": "荣耀v10 9成新",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/2.jpg",
      "price": "1400"
    },
    {
      "title": "苹果plus 手机",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/3.jpg",
      "price": "2690"
    },
    {
      "title": "自用苹果6s 全网通",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/4.jpg",
      "price": "5025"
    },
    {
      "title": "自用苹果星空灰",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/5.jpg",
      "price": "799"
    },
    {
      "title": "8成新，16G苹果6s",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/6.jpg",
      "price": "2000"
    },
    {
      "title": "6成新5s",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/7.jpg",
      "price": "888"
    },
    {
      "title": "小米2 给钱就卖",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/8.jpg",
      "price": "840"
    }
    ],
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
  
  }
})