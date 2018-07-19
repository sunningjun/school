// pages/computer/guide/guide.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
    directionList: [{
      "id": 1,
      "title": "轻薄便携",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/plane2.png",
      "decr": "经常带笔记本出差或旅行"
    },
    {
      "id": 2,
      "title": "专业游戏/极致性能",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/shoubing.png",
      "decr": "支持玩高阶游戏"
    },
    {
      "id": 1,
      "title": "家庭使用",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/hours.png",
      "decr": "入门笔记本，可以上网看电影"

    },
    {
      "id": 1,
      "title": "商务办公",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/shangwu.png",
      "decr": "能快速处理复杂文件，有较大存储空间"
    },
    {
      "id": 1,
      "title": "高端精选",
      "image": "http://pbwu4o9j9.bkt.clouddn.com/gaoduan.png",
      "decr": "时尚并兼顾性能"
    }],
    title:'',
    descr:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var title = options.title;
    var desc = options.descr;
    this.setData({
      title:title,
      descr:desc
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