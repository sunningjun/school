// pages/brand/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleList: [{
      "id": 1,
      "title": "综合",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/bottom_black.png",
      "selectimage": "http://pbwu4o9j9.bkt.clouddn.com/bottom_pink.png"
    },
    {
      "id": 2,
      "title": "销量",
      "image": ""
    },
    {
      "id": 3,
      "title": "品牌",
      "image": ""
    },
    {
      "id": 4,
      "title": "筛选",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/shaixuan_black.png",
      "selectimage": "http://pbwu4o9j9.bkt.clouddn.com/shaixuan_pink.png"
    },
    {
      "id": 5,
      "title": "   ",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/menu_black.png",
      "selectimage": "http://pbwu4o9j9.bkt.clouddn.com/menu_select.png"
    }],

    navList: [{
      "id": "1",
      "title": "销量",
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
    },
    {
      "id": "4",
      "title": "品牌",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/triangle.png",
      "selectimage": "http://pbwu4o9j9.bkt.clouddn.com/triangle_bottom.png",
      "colour": "#FF8040"
    },
    {
      "id": "5",
      "title": "筛选",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/shaixuan_black.png",
      "selectimage": "http://pbwu4o9j9.bkt.clouddn.com/shaixuan_pink.png",
      "colour": "#FF8040"
    }
    ],
    current:1,
    comList: [{
      "id": 1,
      "title": "联想(Lenovo)拯救者R720",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/game.jpg",
      "newprice": "￥4999",
      "oldprice": "￥5899",
      "discountprice": "7折",
      "discount": "自营"
    },
    {
      "id": 2,
      "title": "惠普暗影系列",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/qingbao.jpg",
      "newprice": "￥3600",
      "oldprice": "￥4899",
      "discountprice": "7折",
      "discount": "自营"
    },
    {
      "id": 1,
      "title": "戴尔(Dell)拯救者R720",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/yiti.jpg",
      "newprice": "￥6899",
      "oldprice": "￥5899",
      "discountprice": "7折",
      "discount": "自营"
    },
    {
      "id": 1,
      "title": "联想(Lenovo)机械革命",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/chiji.jpg",
      "newprice": "￥6754",
      "oldprice": "￥5899",
      "discountprice": "7折",
      "discount": "自营"
    },
    {
      "id": 1,
      "title": "惠普(HP)暗影精灵四代",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/game.jpg",
      "newprice": "￥4999",
      "oldprice": "￥5899",
      "discountprice": "7折",
      "discount": "自营"
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var title=options.title;
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
  bindOrder: function (e) {
    var id = e.currentTarget.id;
    this.setData({
      current: id
    })
  },
})