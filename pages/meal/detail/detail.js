// pages/meal/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    product: null,
    currentitem: 1,
    productList: [],
    current: 0,
    display: 'hidden',
    animationData: null,
    product: null,
    carts: [],
    totalMoney: 0,
    takeout_price: 10,
    car_image: "https://pbwu4o9j9.bkt.clouddn.com/full_car.png",
    default_car_image: "https://pbwu4o9j9.bkt.clouddn.com/footer_car.png",
    top_height: '10%',
    showAni: false,
    sendUpLimit: 0,
    spreadLimit: 0,
    displayStyle: 1,
    shop: null,
    map: null,
    pro: null,
    id: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let item = JSON.parse(options.product);
    this.setData({
      product: item
    });
    // console.log(item)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var that = this;
    var experation = wx.getStorageSync("outexperation");
    var time = Date.parse(new Date);
    if (experation > time) {
      wx.getStorage({
        key: 'outcars',
        success: function(res) {
          that.setCarsInfo(res.data)
        }
      })
      wx.getStorage({
        key: 'outtotalMoney',
        success: function(res) {
          that.setTotalMoney(res.data)
        }
      })
    } else {
      wx.clearStorage();
    }
  },
  setCarsInfo: function(data) {
    this.setData({
      carts: data
    })
  },
  setTotalMoney: function(data) {
    var that = this;
    this.setData({
      totalMoney: data
    })
    that.judgeIfCanSeddOut();

  },
  judgeIfCanSeddOut: function() {
    var sentLimit = this.data.sendUpLimit;
    var totalMoney = this.data.totalMoney;
    var spreadLimit = 0;
    var displayStyle = 1;
    spreadLimit = spreadLimit - totalMoney;
    if (totalMoney > 0) {
      if (spreadLimit > 0) {
        displayStyle = 2
      } else {
        displayStyle = 3
      }
    }
    this.setData({
      spreadLimit: spreadLimit,
      displayStyle: displayStyle
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  toBuy: function() {
    if (this.data.displayStyle != 3) {
      return false;
    }
    wx.navigateTo({
      url: '../../order/takeout/takeoutOrder?totalMoney=' + this.data.totalMoney + '&takeout_price=' + this.data.takeout_price,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  addIntoCarts: function (e) {
    var that = this;
    var length = this.data.carts.length;
    var carts = this.data.carts;
    var ids = e.currentTarget.id;
    var product=this.data.product;
    var totalMoney = this.data.totalMoney + product.num * product.price;
    this.setData({
      totalMoney: totalMoney
    })
    var count = 0;
    for (var i = 0; i < length; i++) {
      var id = carts[i].id;
      if (id == ids) {
        var num = carts[i].num;
        carts[i].num = num + 1;
        count++;
        this.setData({
          carts: carts
        })
        break;
      }
    }
    if (count == 0) {
      var car = {
        id: product.id,
        name: product.name,
        price: product.price,
        pic: product.image,
        num: product.num,
        isSelect: false
      };
      carts[length] = car;
      this.setData({
        carts: carts
      })
    }
    that.addIntoStorage();
    that.judgeIfCanSeddOut();
    that.setIntoMap();
    wx.showToast({
      title: '加入购物车成功',
      icon: 'success',
      duration: 2000
    });
  },
  addIntoStorage: function () {
    var timeStamp = Date.parse(new Date());
    var experation = timeStamp + 60000;
    try {
      wx.setStorageSync('outcars', this.data.carts)
      wx.setStorageSync('outexperation', experation)
      wx.setStorageSync('outtotalMoney', this.data.totalMoney)
    } catch (e) {
    }
  },
  setIntoMap: function () {
    var id, num;
    var map = {};
    for (var i = 0; i < this.data.carts.length; i++) {
      id = this.data.carts[i].id;
      num = this.data.carts[i].num;
      map[id] = num;
    }
    this.setData({
      map: map
    })
    try {
      wx.setStorageSync('map', this.data.map)
    } catch (e) {

    }
  },
})