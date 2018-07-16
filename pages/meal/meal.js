Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentitem: 1,
    productList: [],
    current: 0,
    display: 'hidden',
    animationData: null,
    product: null,
    carts: [],
    totalMoney: 0,
    takeout_price: 10,
    car_image: "http://pbwu4o9j9.bkt.clouddn.com/full_car.png",
    default_car_image: "http://pbwu4o9j9.bkt.clouddn.com/footer_car.png",
    top_height: '10%',
    showAni: false,
    sendUpLimit: 0,
    spreadLimit: 0,
    displayStyle: 1,
    shop: null,
    map: null,
    pro: null,
    id: null,
    imgUrls: [
      'http://pbwu4o9j9.bkt.clouddn.com/wucan1.jpg',
      'http://pbwu4o9j9.bkt.clouddn.com/wucan2.jpg',
      'http://pbwu4o9j9.bkt.clouddn.com/wucan3.jpg'
    ],
    indicatordots: true,
    autoplay: true,
    interval: 5000,
    categoryList: [
      {
        "id": 1,
        "name": "meat",
        "uiName": "华莱士"
      },
      {
        "id": 2,
        "name": "seafood",
        "uiName": "建兴酒家"
      },
      {
        "id": 3,
        "name": "milk",
        "uiName": "星巴克"
      }
    ],
    meatList: [{
      "id": 1,
      "name": "牛肉汉堡",
      "price": "40",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/ham1.jpg",
      "category": "meat",
      "description": "牛肉汉堡"
    },
    {
      "id": 2,
      "name": "鸡肉汉堡",
      "price": "25",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/him2.jpg",
      "category": "meat",
      "description": "1"
    },
    {
      "id": 3,
      "name": "培根汉堡",
      "price": "45",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/him3.jpg",
      "category": "meat",
      "description": "2"
    },
    {
      "id": 4,
      "name": "烤串",
      "price": "90",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/meat1.jpg",
      "category": "meat",
      "description": "3"
    },
    {
      "id": 5,
      "name": "牛排",
      "price": "108",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/meat3.jpg",
      "category": "meat",
      "description": "4"
    }],
    seafoodList: [{
      "id": 6,
      "name": "龙虾",
      "price": "600",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/seafood1.jpg",
      "category": "seafood",
      "description": "5"
    },
    {
      "id": 7,
      "name": "蒜蓉粉丝蒸扇贝",
      "price": "188",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/seafood2.jpg",
      "category": "seafood",
      "description": "5"
    },
    {
      "id": 8,
      "name": "海鲜汤锅",
      "price": "1500",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/seafood3.jpg",
      "category": "seafood",
      "description": "6"
    },
    {
      "id": 9,
      "name": "海鲜蒸锅",
      "price": "2090",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/seafood4.jpg",
      "category": "seafood",
      "description": "5"
    }],
    milkList: [{
      "id": 10,
      "name": "蓝莓奶昔",
      "price": "25",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/milk1.jpg",
      "category": "milk",
      "description": "5"
    },
    {
      "id": 11,
      "name": "草莓奶昔",
      "price": "25",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/milk2.jpg",
      "category": "milk",
      "description": "5"
    },
    {
      "id": 12,
      "name": "雪顶咖啡",
      "price": "35",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/milk3.jpg",
      "category": "milk",
      "description": "5"
    },
    {
      "id": 13,
      "name": "芒果西米露",
      "price": "45",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/milk4.jpg",
      "category": "milk",
      "description": "5"
    }]
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
    var that = this;
    that.addCategoryList()
    wx.request({
      url: 'http://localhost:8083/shop/find',
      success: function (res) {
        that.addShopInfo(res.data)
      }
    })
    var experation = wx.getStorageSync("outexperation");
    var time = Date.parse(new Date);
    if (experation > time) {
      wx.getStorage({
        key: 'outcars',
        success: function (res) {
          that.setCarsInfo(res.data)
        }
      })
      wx.getStorage({
        key: 'outtotalMoney',
        success: function (res) {
          that.setTotalMoney(res.data)
        }
      })
      wx.getStorage({
        key: 'map',
        success: function (res) {
          that.setMap(res.data)
        }
      })
    } else {
      wx.clearStorage();
    }
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
    var currentitem = e.currentTarget.id;
    this.setData({
      currentitem: currentitem
    })
  },
  addCategoryList: function () {
    var that = this;
    var categoryList = this.data.categoryList;
    console.log(categoryList)
    this.setData({
      current: categoryList[0].id
    })
    var name = categoryList[0].name;
    if (name == "meat") {
      this.setData({
        productList: this.data.meatList
      })
    }
    if (name == "seafood") {
      this.setData({
        productList: this.data.seafoodList
      })
    }
    if (name == "milk") {
      this.setData({
        productList: this.data.milkList
      })
    }
  },

  showProduct: function (e) {
    var that = this;
    var category = e.currentTarget.id;
    var current = e.currentTarget.dataset.id;
    this.setData({
      current: current
    })
    // wx.request({
    //   url: 'http://localhost:8083/search/findByCategory?category=' + category,
    //   success: function (res) {
    //     that.addProductList(res.data)
    //   }
    // })
    if (category == "meat") {
      this.setData({
        productList: this.data.meatList
      })
    }
    if (category == "seafood") {
      this.setData({
        productList: this.data.seafoodList
      })
    }
    if (category == "milk") {
      this.setData({
        productList: this.data.milkList
      })
    }
  },
  turnToDetail:function(e){
    var that = this;
    var id = e.currentTarget.id;
    var productList=this.data.productList;
    for(var i=0;i<productList.length;i++){
      if(id==productList[i].id){
        productList[i].num=1;
        this.setData({
          product:productList[i]
        });
        break;
      }
    }
    let str = JSON.stringify(this.data.product);
    wx.navigateTo({
      url: 'detail/detail?product=' + str,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  cascadeToggle: function (e) {
    var that = this;      //切换购物车开与关
    that.cascadePopup(e);
  },
  cascadePopup: function (e) {    // 购物车打开动画
    var that = this;
    this.setData({
      display: 'show'
    });
    var id = e.currentTarget.id;
    wx.request({
      url: 'http://localhost:8083/search/findById?id=' + id,
      success: function (res) {
        that.addProduct(res.data)
      }
    });
  },
  cascadeDismiss: function () {        // 购物车关闭动画
    this.setData({
      display: 'hidden'
    });
  },
  addProduct: function (data) {
    data.num = 1;
    this.setData({
      product: data
    })
  },
  bindPlus: function (e) {
    var that = this;
    var id = e.currentTarget.id;
    var num = this.data.product.num;
    num++;
    var product = this.data.product;
    product.num = num;
    this.setData({
      product: product
    })
    that.addIntoStorage();

  },
  bindMinus: function (e) {
    var id = e.currentTarget.id;
    var num = this.data.product.num;
    if (num > 1) {
      num--;
      var product = this.data.product;
      product.num = num;
      this.setData({
        product: product
      })
    }
  },
  addIntoCarts: function (e) {
    var that = this;
    var length = this.data.carts.length;
    var carts = this.data.carts;
    var ids = e.currentTarget.id;
    var product;
    if (null == this.data.product) {
      product = this.data.pro
    } else {
      if (ids == this.data.product.id) {
        product = this.data.product
      } else {
        product = this.data.pro
      }
    }

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
  setCarsInfo: function (data) {
    this.setData({
      carts: data
    })
  },
  clickShoppingCar: function (e) {

    if (this.data.totalMoney <= 0) {
      return false;
    }

    var showAni = this.data.showAni;
    var top_height = this.data.top_height;
    if (showAni) {
      this.setData({
        showAni: false,
        top_height: '10%'
      })
    } else {
      this.setData({
        showAni: true,
        top_height: '30%'
      })
    }
  },
  clickMinus: function (e) {
    var that = this;
    var index;
    var id = e.currentTarget.dataset.id;
    let carts = this.data.carts;
    for (var i = 0; i < carts.length; i++) {
      var ids = carts[i].id;
      if (id == ids) {
        index = i;
        break;
      }
    }
    let num = carts[index].num;
    var totalMoney = this.data.totalMoney - carts[index].price * 1;

    if (num <= 1) {
      carts.splice(index, 1);
      this.setData({
        carts: carts,
        totalMoney: totalMoney
      });
      that.changeTotalMoney();
      that.setIntoMap();
      return false;
    }
    num = num - 1;
    carts[index].num = num;
    this.setData({
      carts: carts,
      totalMoney: totalMoney
    });
    that.changeTotalMoney();
    that.setIntoMap();
  },
  /* 点击加号 */
  clickPlus: function (e) {
    var that = this;
    const index = e.currentTarget.dataset.id;
    let carts = this.data.carts;
    let num = carts[index].num;
    num++;
    carts[index].num = num;
    var totalMoney = this.data.totalMoney + carts[index].price * 1;
    this.setData({
      carts: carts,
      totalMoney: totalMoney
    });
    that.addIntoStorage();
    that.judgeIfCanSeddOut();
    that.setIntoMap();
  },
  changeTotalMoney: function () {
    var that = this;
    var totalMoney = this.data.totalMoney;
    if (totalMoney <= 0) {
      this.setData({
        showAni: false,
        top_height: '10%'
      })
    }
    that.judgeIfCanSeddOut();
    that.addIntoStorage();
  },
  setTotalMoney: function (data) {
    var that = this;
    this.setData({
      totalMoney: data
    })
    that.judgeIfCanSeddOut();
  },
  judgeIfCanSeddOut: function () {
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
  addShopInfo: function (data) {
    this.setData({
      shop: data,
      sendUpLimit: data.sendUpLimit,
      takeout_price: data.takeOutPrice
    })
  },
  toBuy: function () {
    if (this.data.displayStyle != 3) {
      return false;
    }
    wx.navigateTo({
      url: '../order/takeout/takeoutOrder?totalMoney=' + this.data.totalMoney + '&takeout_price=' + this.data.takeout_price,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  clearAllCars: function () {
    this.setData({
      carts: [],
      totalMoney: 0,
      map: {},
      displayStyle: 1
    })
    try {
      wx.removeStorageSync('outcars');
      wx.removeStorageSync('outtotalMoney');
      wx.removeStorageSync('outexperation');
      wx.removeStorageSync('map');
    } catch (e) {
      // Do something when catch error
    }
    if (this.data.totalMoney <= 0) {
      this.setData({
        showAni: false,
        top_height: '10%'
      })
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
  setMap: function (data) {
    this.setData({
      map: data
    })
  },
  addIntoCartsWhenClickPlus: function (e) {
    var that = this;
    var id = e.currentTarget.id;
    var productList = this.data.productList;
    var pro;
    for (var i = 0; i < productList.length; i++) {
      if (productList[i].id == id) {
        pro = productList[i];
        break;
      }
    }
    pro.num = 1;
    this.setData({
      pro: pro
    })
    that.addIntoCarts(e);
  }
})