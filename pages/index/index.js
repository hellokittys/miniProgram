//index.js
//获取应用实例全局的 getApp() 函数可以用来获取到小程序 App 实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    // wx.navigateTo({
    //   // 跳转到指定的页面，无法跳转到tabbar页面（当前页保留）
    //   url: '../logs/logs',
    //   success: function() { // 导航成功执行
    //     console.log("跳转成功");
    //   },
    //   fail: function(re) {
    //     // can not navigate to tabBar page错误--页面中定义的链接不能和tabbar定义了相同的链接。
    //     // 导航失败执行
    //     console.log("跳转失败");
    //   },
    //   complete: function() { // 导航完成调用
    //     console.log("导航结束");
    //   }
    // })

    // wx.redirectTo({
    //   // 销毁当前页面， 跳转到指定的页面， 不能跳转到tabbar页面
    //   url: '../logs/logs',
    //   success: function() { // 导航成功执行
    //     console.log("跳转成功");
    //   },
    //   fail: function(re) {
    //     //  
    //     // 导航失败执行
    //     console.log("跳转失败");
    //   },
    //   complete: function() { // 导航完成调用
    //     console.log("导航结束");
    //   }
    // })

    // wx.reLaunch({
    //   // 销毁所有页面，跳转到任意指定的页面
    //   url: '../logs/logs',
    //   success: function() { // 导航成功执行
    //     console.log("跳转成功");
    //   },
    //   fail: function(re) {
    //     //  
    //     // 导航失败执行
    //     console.log("跳转失败");
    //   },
    //   complete: function() { // 导航完成调用
    //     console.log("导航结束");
    //   }
    // })

    wx.switchTab({
      //跳转到tabbar页面
      url: '../logs/logs',
      success: function() { // 导航成功执行
        console.log("跳转成功");
      },
      fail: function(re) {
        //  
        // 导航失败执行
        console.log("跳转失败");
      },
      complete: function() { // 导航完成调用
        console.log("导航结束");
      }
    })
  },
  onLoad: function(options) {
    console.log(options);  
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onReady: function() {
 
  },
  onShow: function() {
   
  },
  onHide: function() {
   
  },
  onUnload: function() {
    
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})