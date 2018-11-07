//app.js
App({
  onLaunch: function(obj) {
    console.log("App launch");
    //小程序初始化完成时（全局只触发一次）
    //https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/app.html#onlaunchobject
    console.log(obj);
    this.getSystemInfo()
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      // "res => {}" 等价于 (res)=>{} 等价于 function(res){} 匿名函数
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log(res);
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        console.log(res)
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  //获取手机信息
  getSystemInfo: function() {
    var that = this;
    //  这里要非常注意，微信的scroll-view必须要设置高度才能监听滚动事件，所以，需要在页面的onLoad事件中给scroll-view的高度赋值
    wx.getSystemInfo({
      success: function(res) {
        console.log(res.model)
        console.log(res.pixelRatio)
        console.log(res.windowWidth)
        console.log(res.windowHeight)
        console.log(res.language)
        console.log(res.version)
        console.log(res.platform)
        //设置变量值
        that.globalData.sysInfo = res;
        that.globalData.windowW = res.windowWidth;
        that.globalData.windowH = res.windowHeight;
      }
    })
  },
  onShow: function(obj) {
    //小程序启动，或从后台进入前台显示时
    //https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/app.html#onshowobject
    console.log('App Show');
    console.log(obj);
  },
  onHide: function() {
    //https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/app.html#onhide
    //小程序从前台进入后台时
    console.log('App Hide');
    wx.showToast({})
  },
  onError: function(error) {
    console.log("OnError");
    console.log(error);
  },
  onPageNotFound(res) {
    wx.redirectTo({
      url: 'pages/index/index'
    }) // 如果是 tabbar 页面，请使用 wx.switchTab
  },
  globalData: {
    userInfo: null
  }
})