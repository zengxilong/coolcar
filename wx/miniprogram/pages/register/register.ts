// pages/register/register.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    licImgURL:'',
    genders:['未知','男','女','其他'],
    genderIndex:0,
    birthDate:'2000-01-01',
    licNo:'',
    name:'',
    state: 'UNSUBMITTED' as 'UNSUBMITTED' | 'PENDING' | 'VERIFIED',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

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
  onUploadLic(){
    wx.chooseImage({
      success: res =>{
        if(res.tempFilePaths.length > 0){
          this.setData({
            licImgURL:res.tempFilePaths[0],
          })
          setTimeout(()=>{
            this.setData({
              licNo:'3213345342',
              name:'张三',
              genderIndex:1,
              birthDate:'2000-02-21',
            })
          },1000)
        }
      },
    })
  },
  onGenderChange(e: any){
    this.setData({
      genderIndex:e.detail.value,
    })
  },
  onBirthDateChange(e: any){
    this.setData({
      birthDate:e.detail.value,
    })
  },

  onSubmit(){
    this.setData({
      state:'PENDING',
    })

    setTimeout(()=>{
      this.onLicVerified()
    },3000)
  },

  onResubmit(){
    this.setData({
      state:'UNSUBMITTED',
      licImgURL:'',
    })
  },
  onLicVerified(){
    this.setData({
      state:'VERIFIED',
    })
    wx.redirectTo({
      url:'/pages/lock/lock'
    })
  }
})