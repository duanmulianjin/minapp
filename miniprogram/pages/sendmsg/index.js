// miniprogram/pages/sendmsg/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    code: '',
    access_token: '',
    openid: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.init()
  },
  init() {
    let access_token = wx.getStorageSync('access_token')
    if (access_token) {
      this.setData({
        access_token
      })
    } else {
      this.getToken()
    }
    let code = wx.getStorageSync('code')
    if (code) {
      this.setData({
        code
      })
    } else {
      this.getCode()
    }
    let openid = wx.getStorageSync('openid')
    if (openid) {
      this.setData({
        openid
      })
    }
  },
  getCode() {
    let _this = this
    wx.login({
      success(e) {
        _this.setData({
          code: e.code
        })
        wx.setStorageSync('code', e.code)
      }
    })
  },
  /**
   * 获取微信会话令牌 ----测试功能
   */
  getToken() {
    // 
    let this_ = this

    wx.request({
      method: "GET",
      url: 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx4491446e62d6ea29&secret=7414b907011af3abe3738053e7c250c3',
      success(e) {
        this_.setData({
          access_token: e.data.access_token
        })
        wx.setStorageSync('access_token', e.data.access_token)
        console.log(e);
      },
    })
  },
  getOpenid(e) {
    let this_ =this
    let code = this.data.code
    wx.request({
      method: "GET",
      url: `https://api.weixin.qq.com/sns/jscode2session?appid=wx4491446e62d6ea29&secret=7414b907011af3abe3738053e7c250c3&js_code=${
        code
      }&grant_type=authorization_code`,
      success(e) {
        this_.setData({
          openid: e.data.openid
        })
        wx.setStorageSync('openid', e.data.openid)
      },
    })
  },
  sendMsg() {
    // 
    let this_ = this
    let data = {
      "touser": this_.data.openid,
      "lang": 'zh_CN',
      "data": {
        "thing4": {
          "value": '请前往白桦林居维修灯泡'
        },
        "time3": {
          "value": '2021/9/24'
        },
      },
      "template_id": '4c5cuiwbmoM9MyaWOXtSOK-CeWS44pASl-m1hG-EUuo',
      "miniprogramState": 'developer'
    }
    wx.request({
      method: "POST",
      url: 'https://api.weixin.qq.com/cgi-bin/message/subscribe/send?access_token=' + this_.data.access_token,
      data,
      success(e) {
        console.log(e);
      },
    })
  },
   /**
     * 处理订阅消息，
     */
    doSubscription() {
      wx.requestSubscribeMessage({
          tmplIds: ['4c5cuiwbmoM9MyaWOXtSOK-CeWS44pASl-m1hG-EUuo'],
          success(e){
            console.log(e);
          }

      })
  },
})