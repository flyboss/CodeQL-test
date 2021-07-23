let actuallyASource = wx.getUserInfo

Page({
    data: {
        motto: "Hello World",
        userInfo: actuallyASource(),
    },
    case1: function() {
        let info = this.data.userInfo;
        let sinkInDisguise = wx.request;
        sinkInDisguise(info);
    },
    case2: function() {
        const info = wx.getUserInfo();
        wx.request(info);
    },
    case3: function() {
        const info = wx.getUserInfo();
        wx.request({
            url: localhost,
            data: info
        })
    }
});