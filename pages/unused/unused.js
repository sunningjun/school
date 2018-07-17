// pages/unused/unused.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList: [{
      "title": "手机",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/telphone.png"
    },
    {
      "title": "电脑",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/computer.png"
    },
    {
      "title": "相机",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/cam.png"
    },
    {
      "title": "书籍",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/book.png"
    },
    {
      "title": "学霸笔记",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/note.png"
    },
    {
      "title": "校园生活",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/live.png"
    },
    {
      "title": "票务卡券",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/card.png"
    },
    {
      "title": "其他",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/other.png"
    }
    ],
    imgUrls: [
      'http://pbwu4o9j9.bkt.clouddn.com/xianzhi.jpg',
      'http://pbwu4o9j9.bkt.clouddn.com/xianzhi2.jpg'
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
  publishProduct:function(){
    wx.navigateTo({
      url: 'add/add',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  turnToProduct:function(e){
    var title=e.currentTarget.dataset.title;
    wx.navigateTo({
      url: 'detail/detail?title='+title,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})