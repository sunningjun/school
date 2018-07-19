// pages/unused/unused.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList: [{
      "title": "兼职",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/new.png"
    },
    {
      "title": "实习",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/computer.png"
    },
    {
      "title": "全职",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/total_job.png"
    },
    {
      "title": "宣讲会",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/meeting.png"
    }
    ],
    imgUrls: [
      'http://pbwu4o9j9.bkt.clouddn.com/job1.jpg',
      'http://pbwu4o9j9.bkt.clouddn.com/jianzhi2.jpg'
    ],
    indicatordots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    indicator: true,
    currentitem:1
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
  clickHeader: function (e) {
    var id = e.currentTarget.id;
    this.setData({
      currentitem: id
    })
  },
  bindToGuide:function(e){
    var title=e.currentTarget.dataset.title;
    wx.navigateTo({
      url: 'guide/guide?title='+title,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})