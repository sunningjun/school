// pages/train/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleList: [{
      "id": "1",
      "title": "人气",
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
    }
    ],
    current:1,
    detailList: [{
      "title": "托福高效冲刺班",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/tuofu1.jpg",
      "price": "14800",
      "user": "4"
    },
    {
      "title": "平安驾校",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/jiaxiaoke.jpg",
      "price": "2500",
      "user": "0"
    },
    {
      "title": "暑期吉他强训班",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/jitapeixun.jpg",
      "price": "4800",
      "user": "3"
    },
    {
      "title": "新东方考研vip班",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/xindongfang.jpg",
      "price": "24800",
      "user": "9"
    },
    {
      "title": "公务员面试强训班",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/gongwuyuankaoshi.jpg",
      "price": "7000",
      "user": "5"
    }
    ]
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
  bindOrder:function(e){
    var id=e.currentTarget.id;
    this.setData({
      current:id
    })
  },
  turnToProduct:function(e){
    var title=e.currentTarget.dataset.title;
    var price = e.currentTarget.dataset.price;
    wx.navigateTo({
      url: '../product/product?title='+title+'&price='+price,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })

  }
})