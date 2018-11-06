var utils = require('../../utils/util.js')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    banner: {
      imgList: [],
      duration: 1000,
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
    },
    list: [],
    loading: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.init()
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
    this.init();
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
  getNextDate: function() {
    var now = new Date()
    now.setDate(now.getDate() - this.index++)
    return now
  },
  init() {
    var that = this
    wx.showLoading({
      title: 'loading',
    })
    wx.request({
      url: 'https://news-at.zhihu.com/api/4/news/latest',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      success(res) {
        wx.hideLoading()
        that.setData({
          "banner.imgList": res.data.top_stories,
          list: [{
            header: '今日热闻'
          }].concat(res.data.stories)
        })
      }
    })
    this.index = 1
  },
  loadMore() {
    if (this.data.list.length === 0 || this.data.loading == true) return
    var date = this.getNextDate(),
      that = this
    that.setData({
      loading: true
    })
    wx.request({
      url: 'https://news.at.zhihu.com/api/4/news/before/' + (Number(utils.formatDate(date)) + 1),
      headers: {
        'Content-Type': 'application/json'
      },
      success(res) {
        that.setData({
          loading: false,
          list: that.data.list.concat([{
            header: utils.formatDate(date, '-')
          }]).concat(res.data.stories)
        })
      }
    })
  }
})