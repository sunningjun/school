// pages/brand/brand.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categoryList: [
      {
        "id": 1,
        "name": "tuijian",
        "uiName": "为你推荐"
      },
      {
        "id": 2,
        "name": "female",
        "uiName": "女装"
      },
      {
        "id": 3,
        "name": "male",
        "uiName": "男装"
      },
      {
        "id": 4,
        "name": "brand",
        "uiName": "品牌推荐"
      }
    ],
    tuijianList: [
      {
        "category": "人气美衣",
        "list": [{
          "id": 1,
          "uiName": "短袖T恤",
          "image": "http://pbwu4o9j9.bkt.clouddn.com/timg.jpg"
        },
        {
          "id": 2,
          "uiName": "连衣裙",
          "image": "http://pbwu4o9j9.bkt.clouddn.com/dress.jpg"
        },
        {
          "id": 3,
          "uiName": "护肤套装",
          "image": "http://pbwu4o9j9.bkt.clouddn.com/timg.jpg"
        },
        {
          "id": 4,
          "uiName": "休闲裤",
          "image": "http://pbwu4o9j9.bkt.clouddn.com/ku.jpg"
        },
        {
          "id": 5,
          "uiName": "外套",
          "image": "http://pbwu4o9j9.bkt.clouddn.com/wai.jpg"
        }]
      },
      {
        "category": "热销推荐",
        "list": [{
          "id": 1,
          "uiName": "短袖T恤",
          "image": "http://pbwu4o9j9.bkt.clouddn.com/timg.jpg"
        },
        {
          "id": 2,
          "uiName": "连衣裙",
          "image": "http://pbwu4o9j9.bkt.clouddn.com/dress.jpg"
        },
        {
          "id": 3,
          "uiName": "护肤套装",
          "image": "http://pbwu4o9j9.bkt.clouddn.com/timg.jpg"
        },
        {
          "id": 4,
          "uiName": "休闲裤",
          "image": "http://pbwu4o9j9.bkt.clouddn.com/ku.jpg"
        },
        {
          "id": 5,
          "uiName": "外套",
          "image": "http://pbwu4o9j9.bkt.clouddn.com/wai.jpg"
        }]
      },
      {
        "category": "美裙衣橱",
        "list": [{
          "id": 1,
          "uiName": "短袖T恤",
          "image": "http://pbwu4o9j9.bkt.clouddn.com/timg.jpg"
        },
        {
          "id": 2,
          "uiName": "连衣裙",
          "image": "http://pbwu4o9j9.bkt.clouddn.com/dress.jpg"
        },
        {
          "id": 3,
          "uiName": "护肤套装",
          "image": "http://pbwu4o9j9.bkt.clouddn.com/timg.jpg"
        },
        {
          "id": 4,
          "uiName": "休闲裤",
          "image": "http://pbwu4o9j9.bkt.clouddn.com/ku.jpg"
        },
        {
          "id": 5,
          "uiName": "外套",
          "image": "http://pbwu4o9j9.bkt.clouddn.com/wai.jpg"
        }]
      }],
    femaleList: [
      {
        "category": "白搭上衣",
        "list": [{
          "id": 1,
          "uiName": "短袖T恤",
          "image": "http://pbwu4o9j9.bkt.clouddn.com/timg.jpg"
        },
        {
          "id": 2,
          "uiName": "连衣裙",
          "image": "http://pbwu4o9j9.bkt.clouddn.com/dress.jpg"
        },
        {
          "id": 3,
          "uiName": "护肤套装",
          "image": "http://pbwu4o9j9.bkt.clouddn.com/timg.jpg"
        },
        {
          "id": 4,
          "uiName": "休闲裤",
          "image": "http://pbwu4o9j9.bkt.clouddn.com/ku.jpg"
        },
        {
          "id": 5,
          "uiName": "外套",
          "image": "http://pbwu4o9j9.bkt.clouddn.com/wai.jpg"
        }]
      },
      {
        "category": "裤子",
        "list": [{
          "id": 1,
          "uiName": "短袖T恤",
          "image": "http://pbwu4o9j9.bkt.clouddn.com/timg.jpg"
        },
        {
          "id": 2,
          "uiName": "连衣裙",
          "image": "http://pbwu4o9j9.bkt.clouddn.com/dress.jpg"
        },
        {
          "id": 3,
          "uiName": "护肤套装",
          "image": "http://pbwu4o9j9.bkt.clouddn.com/timg.jpg"
        },
        {
          "id": 4,
          "uiName": "休闲裤",
          "image": "http://pbwu4o9j9.bkt.clouddn.com/ku.jpg"
        },
        {
          "id": 5,
          "uiName": "外套",
          "image": "http://pbwu4o9j9.bkt.clouddn.com/wai.jpg"
        }]
      }],
    maleList: [
      {
        "category": "热销品类",
        "list": [{
          "id": 1,
          "uiName": "短袖T恤",
          "image": "http://pbwu4o9j9.bkt.clouddn.com/timg.jpg"
        },
        {
          "id": 2,
          "uiName": "连衣裙",
          "image": "http://pbwu4o9j9.bkt.clouddn.com/dress.jpg"
        },
        {
          "id": 3,
          "uiName": "护肤套装",
          "image": "http://pbwu4o9j9.bkt.clouddn.com/timg.jpg"
        },
        {
          "id": 4,
          "uiName": "休闲裤",
          "image": "http://pbwu4o9j9.bkt.clouddn.com/ku.jpg"
        },
        {
          "id": 5,
          "uiName": "外套",
          "image": "http://pbwu4o9j9.bkt.clouddn.com/wai.jpg"
        }]
      },
      {
        "category": "内搭",
        "list": [{
          "id": 1,
          "uiName": "短袖T恤",
          "image": "http://pbwu4o9j9.bkt.clouddn.com/timg.jpg"
        },
        {
          "id": 2,
          "uiName": "连衣裙",
          "image": "http://pbwu4o9j9.bkt.clouddn.com/dress.jpg"
        },
        {
          "id": 3,
          "uiName": "护肤套装",
          "image": "http://pbwu4o9j9.bkt.clouddn.com/timg.jpg"
        },
        {
          "id": 4,
          "uiName": "休闲裤",
          "image": "http://pbwu4o9j9.bkt.clouddn.com/ku.jpg"
        },
        {
          "id": 5,
          "uiName": "外套",
          "image": "http://pbwu4o9j9.bkt.clouddn.com/wai.jpg"
        }]
      }],
    brandList: [{
      "category": "男装",
      "list": [{
        "id": 1,
        "uiName": "短袖T恤",
        "image": "http://pbwu4o9j9.bkt.clouddn.com/timg.jpg"
      },
      {
        "id": 2,
        "uiName": "连衣裙",
        "image": "http://pbwu4o9j9.bkt.clouddn.com/dress.jpg"
      },
      {
        "id": 3,
        "uiName": "护肤套装",
        "image": "http://pbwu4o9j9.bkt.clouddn.com/timg.jpg"
      },
      {
        "id": 4,
        "uiName": "休闲裤",
        "image": "http://pbwu4o9j9.bkt.clouddn.com/ku.jpg"
      },
      {
        "id": 5,
        "uiName": "外套",
        "image": "http://pbwu4o9j9.bkt.clouddn.com/wai.jpg"
      }]
    },
    {
      "category": "女装",
      "list": [{
        "id": 1,
        "uiName": "短袖T恤",
        "image": "http://pbwu4o9j9.bkt.clouddn.com/timg.jpg"
      },
      {
        "id": 2,
        "uiName": "连衣裙",
        "image": "http://pbwu4o9j9.bkt.clouddn.com/dress.jpg"
      },
      {
        "id": 3,
        "uiName": "护肤套装",
        "image": "http://pbwu4o9j9.bkt.clouddn.com/timg.jpg"
      },
      {
        "id": 4,
        "uiName": "休闲裤",
        "image": "http://pbwu4o9j9.bkt.clouddn.com/ku.jpg"
      },
      {
        "id": 5,
        "uiName": "外套",
        "image": "http://pbwu4o9j9.bkt.clouddn.com/wai.jpg"
      }]
    },
    {
      "category": "男鞋",
      "list": [{
        "id": 1,
        "uiName": "短袖T恤",
        "image": "http://pbwu4o9j9.bkt.clouddn.com/timg.jpg"
      },
      {
        "id": 2,
        "uiName": "连衣裙",
        "image": "http://pbwu4o9j9.bkt.clouddn.com/dress.jpg"
      },
      {
        "id": 3,
        "uiName": "护肤套装",
        "image": "http://pbwu4o9j9.bkt.clouddn.com/timg.jpg"
      },
      {
        "id": 4,
        "uiName": "休闲裤",
        "image": "http://pbwu4o9j9.bkt.clouddn.com/ku.jpg"
      },
      {
        "id": 5,
        "uiName": "外套",
        "image": "http://pbwu4o9j9.bkt.clouddn.com/wai.jpg"
      }]
    },
    {
      "category": "女鞋",
      "list": [{
        "id": 1,
        "uiName": "短袖T恤",
        "image": "http://pbwu4o9j9.bkt.clouddn.com/timg.jpg"
      },
      {
        "id": 2,
        "uiName": "连衣裙",
        "image": "http://pbwu4o9j9.bkt.clouddn.com/dress.jpg"
      },
      {
        "id": 3,
        "uiName": "护肤套装",
        "image": "http://pbwu4o9j9.bkt.clouddn.com/timg.jpg"
      },
      {
        "id": 4,
        "uiName": "休闲裤",
        "image": "http://pbwu4o9j9.bkt.clouddn.com/ku.jpg"
      },
      {
        "id": 5,
        "uiName": "外套",
        "image": "http://pbwu4o9j9.bkt.clouddn.com/wai.jpg"
      }]
    },
    ],

    current: 1,
    popularList: [],
    category:"推荐",
    display:0


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
    var that=this;
    that.setPopular();

  },
  setPopular:function(){
    this.setData({
      popularList : this.data.tuijianList
    })
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
  showList: function (e) {
    var id = e.currentTarget.id;
    var category = e.currentTarget.dataset.name;
    var current = id;
    this.setData({
      current: current
    })
    if (category == "tuijian") {
      this.setData({
        popularList: this.data.tuijianList
      })
      this.setData({
        category:"推荐",
        display:0
      })
    }
    if (category == "female") {
      this.setData({
        popularList: this.data.femaleList
      })
      this.setData({
        category: "女装",
        display:1
      })
    }
    if (category == "male") {
      this.setData({
        popularList: this.data.maleList
      })
      this.setData({
        category: "男装",
        display: 1

      })
    }
    if (category == "brand") {
      this.setData({
        popularList: this.data.brandList
      })
      this.setData({
        category: "品牌",
        display: 0

      })
    }
  },
  turnToDetail:function(e){
    var title=e.currentTarget.dataset.title;
    wx.navigateTo({
      url: 'detail/detail?title='+title,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  toChannel:function(){
    wx.navigateTo({
      url: 'channel/channel?title='+this.data.category,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})