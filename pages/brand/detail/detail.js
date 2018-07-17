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
    current:1,
    tList: [{
      "id": 1,
      "title": "版型",
    },
    {
      "id": 2,
      "title": "领型",
    },
    {
      "id": 3,
      "title": "袖长",
    },
    {
      "id": 4,
      "title": "衣长"
    }],
    obj:null,
    closeList: [{
      "id": 1,
      "title": "GLM| 2018春秋连帽卫衣字母潮",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/weiyi.jpg",
      "newprice": "￥169",
      "oldprice": "￥239",
      "discountprice": "7折",
      "discount": "满158减30"
    },
    {
      "id": 1,
      "title": "GLM| 涂鸦T恤潮",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/txu.png",
      "newprice": "￥69",
      "oldprice": "￥139",
      "discountprice": "6折",
      "discount": "满90减30"
    },
    {
      "id": 1,
      "title": "GLM| 2018春秋连帽卫衣字母潮",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/weiyi.jpg",
      "newprice": "￥169",
      "oldprice": "￥239",
      "discountprice": "7折",
      "discount": "满158减30"
    },
    {
      "id": 1,
      "title": "GLM| 2018春秋连帽卫衣字母潮",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/weiyi.jpg",
      "newprice": "￥169",
      "oldprice": "￥239",
      "discountprice": "7折",
      "discount": "满158减30"
    },
    {
      "id": 1,
      "title": "GLM| 2018春秋连帽卫衣字母潮",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/weiyi.jpg",
      "newprice": "￥169",
      "oldprice": "￥239",
      "discountprice": "7折",
      "discount": "满158减30"
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
  changeDisplay:function(e){
    // console.log("aaa")
    var id=e.currentTarget.id;
    this.setData({
      current:id
    })
  }
})