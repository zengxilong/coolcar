Page({
    isPageShowing:false,
    data: {
        setting: {
          skew: 0,
          rotate: 0,
          showLocation: true,
          showScale: true,
          subKey: '',
          layerStyle: -1,
          enableZoom: true,
          enableScroll: true,
          enableRotate: false,
          showCompass: false,
          enable3D: false,
          enableOverlooking: false,
          enableSatellite: false,
          enableTraffic: false,
        },
        location: {
          latitude: 31,
          longitude: 120,
        },
        scale: 10,
        markers: [
            {
                iconPath:"/resources/car.png",
                id:0,
                latitude:23.099994,
                longitude:113.324520,
                width:50,
                height:50
            },
            {
                iconPath:"/resources/car.png",
                id:1,
                latitude:23.099994,
                longitude:113.524520,
                width:50,
                height:50
            },
        ],
      },
      onMyLocationTap(){
          wx.getLocation({
              type:'gcj02',
              success:res=>{
                this.setData({
                    location:{
                        latitude:res.latitude,
                        longitude:res.longitude,
                    },
                })
              },
              fail:()=>{
                wx.showToast({
                  icon:'none',
                  title:'请前往设置页面授权'
                })
              }
          })
      },
      onScanClicked(){
        wx.scanCode({
          success:()=>{
              wx.navigateTo({
                  url:'/pages/register/register'
              })
          },
          fail:console.error,
        })
      },
      onShow(){
        this.isPageShowing = true
      },
      onHide(){
        this.isPageShowing = false
      },
      moveCars(){
        const map =wx.createMapContext("map")
        const dest = {
          latitude:23.099994,
          longitude:113.324520,
        }

        const moveCar = ()=>{
          dest.latitude +=0.1
          dest.longitude +=0.1
          map.translateMarker({
            destination:{
              latitude: dest.latitude ,
              longitude:dest.longitude ,
            },
            markerId:0,
            autoRotate:false,
            rotate:0,
            duration:5000,
            animationEnd:()=>{
              if(this.isPageShowing){
                moveCar()
              }
            },
          })
        }

        moveCar()
        
      }
})

// // index.ts
// // 获取应用实例
// const app = getApp<IAppOption>()

// Page({
//   data: {
//     motto: 'Hello World',
//     userInfo: {},
//     hasUserInfo: false,
//     canIUse: wx.canIUse('button.open-type.getUserInfo'),
//     canIUseGetUserProfile: false,
//     canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
//   },
//   // 事件处理函数
//   bindViewTap() {
//     wx.navigateTo({
//       url: '../logs/logs',
//     })
//   },
//   onLoad() {
//     // @ts-ignore
//     if (wx.getUserProfile) {
//       this.setData({
//         canIUseGetUserProfile: true
//       })
//     }
//   },
//   getUserProfile() {
//     // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
//     wx.getUserProfile({
//       desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
//       success: (res) => {
//         console.log(res)
//         this.setData({
//           userInfo: res.userInfo,
//           hasUserInfo: true
//         })
//       }
//     })
//   },
//   getUserInfo(e: any) {
//     // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
//     console.log(e)
//     this.setData({
//       userInfo: e.detail.userInfo,
//       hasUserInfo: true
//     })
//   }
// })
