// pages/rent/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList: [{
      "id": "1",
      "title": "区域",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/triangle.png",
      "selectimage": "http://pbwu4o9j9.bkt.clouddn.com/triangle_bottom.png",
      "colour": "#FF8040"
    },
    {
      "id": "2",
      "title": "租金",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/triangle.png",
      "selectimage": "http://pbwu4o9j9.bkt.clouddn.com/triangle_bottom.png",
      "colour": "#FF8040"
    },
    {
      "id": "3",
      "title": "默认排序",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/triangle.png",
      "selectimage": "http://pbwu4o9j9.bkt.clouddn.com/triangle_bottom.png",
      "colour": "#FF8040"
    },
    {
      "id": "4",
      "title": "筛选",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/shaixuan_black.png",
      "selectimage": "http://pbwu4o9j9.bkt.clouddn.com/shaixuan_pink.png",
      "colour": "#FF8040"
    }
    ],
    current:1
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
  bindOrder: function (e) {
    var id = e.currentTarget.id;
    this.setData({
      current: id
    })
  },
})