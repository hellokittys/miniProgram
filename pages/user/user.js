var utils = require('../../utils/util.js')

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    startDate: utils.curentTime(),
    endDate: utils.curentTime(),
    array: ['群众', '团员', '共产党员' ],
    index: 0,
    region: ["四川省", "攀枝花市", "米易县"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.init()
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
  init() {
    console.log(app.globalData.userInfo)
  },
  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },
  submitForm(e) {
    var that = this;
    console.log(e.detail.value)


    wx.showModal({
      title: '提交信息',
      content: '确定提交信息吗？',
      showCancel: true, //是否显示取消按钮
      cancelText: "否", //默认是“取消”
      cancelColor: 'black', //取消文字的颜色
      confirmText: "是", //默认是“确定”
      confirmColor: 'green', //确定文字的颜色
      success: re => {
        if (re.confirm) {
          that.setData({
            loading: true
          })
          setTimeout(r => {
            that.setData({
              loading: false
            })
          }, 3000)
        } else {
          console.log("cancel")
        }

      },
      fail: function(res) {}, //接口调用失败的回调函数
      complete: function(res) {}, //接口调用结束的回调函数（调用成功、失败都会执行）
    })
  },
  bindDateChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })

  },
  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindRegionChange: function(e) {
    console.log('picker发送选择改变，携带值为',e)
     this.setData({
      region: e.detail.value
    })
  }
})