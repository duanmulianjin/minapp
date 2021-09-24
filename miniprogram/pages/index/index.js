// pages/home/home.js
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 轮播
        topSlides: [{
                id: 1,
                imgUrl: "https://img0.baidu.com/it/u=657351168,489482458&fm=26&fmt=auto",
                url: "/pages/customerPayment/customerPayment"
            },
            {
                id: 2,
                imgUrl: "https://img2.baidu.com/it/u=1255358257,4114000366&fm=26&fmt=auto",
                url: "/pages/customerPayment/customerPayment"
            },
            {
                id: 3,
                imgUrl: "https://img1.baidu.com/it/u=1575798294,1713349645&fm=26&fmt=auto",
                url: "/pages/customerPayment/customerPayment"
            },
        ],
        menuList: [{
                id: 1,
                title: "商务合作",
                type: "navigate",
                icon: '/images/cooperate.png',
                url: "/"
            }, {
                id: 2,
                title: "ui展示",
                type: "navigate",
                icon: '/images/show-ui.png',
                url: "/pages/oldindex/index"
            }, 
            {
                id: 5,
                title: "发送订阅",
                type: "navigate",
                icon: '/images/show-ui.png',
                url: "/pages/sendmsg/index"
            }, 
        ],
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {},
    /**
     * 处理菜单栏点击事件，
     */
    doMenuTap(e) {
        let type = e.currentTarget.dataset.type
        if (type == 'navigate') {
            let url = e.currentTarget.dataset.url
            if (url && url != '/') {
                return wx.navigateTo({
                    url
                })
            }
        }
    },
})