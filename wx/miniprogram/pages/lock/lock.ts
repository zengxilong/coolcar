const shareLocationKey = "share_location";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shareLocation:false,
    avatarURL: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad() {
    if(getApp()?.globalData?.userInfo?.avatarUrl){
      this.setData({
        avatarURL:getApp().globalData.userInfo?.avatarUrl,
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  onGetUserInfo(){
    // const userInfo : WechatMiniprogram.UserInfo = e.detail.userInfo
    console.log('get',getApp())
    wx.getUserProfile({
      desc:'您的信息仅作为个人展示',
      success: (res) => {
        
        var app = getApp();
        app.globalData.userInfo = res.userInfo;
        this.setData({
          avatarURL:res.userInfo.avatarUrl,
        })
      },
      fail: (res) =>{
          console.log('获取用户信息失败',res)
          wx.showToast({
              title: '信息授权失败~',
              duration: 1000,
              icon: 'error',
              mask: true
          })
      }
    })
  },
  onShareLocation(e:any){
    const shareLocation:boolean = e.detail.value
    wx.setStorageSync(shareLocationKey,shareLocation)
  }

})
