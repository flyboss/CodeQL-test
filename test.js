// let actuallyASource = wx.getUserInfo

// Page({
//     data: {
//         motto: "Hello World",
//         userInfo: actuallyASource(),
//     },
//     case1: function() {
//         let info = this.data.userInfo;
//         let sinkInDisguise = wx.request;
//         sinkInDisguise(info);
//     },
//     case2: function() {
//         const info = wx.getUserInfo();
//         wx.request(info);
//     },
//     case3: function() {
//         const info = wx.getUserInfo();
//         wx.request({
//             url: localhost,
//             data: info
//         })
//     }
// });

const fs = require('fs'),
    path = require('path');

function readFileHelper(p) { // #2
    p = path.resolve(p); // #3
    fs.readFile(p, // #4
        'utf8', (err, data) => {
            if (err) throw err;
            console.log(data);
        });
}

readFileHelper(process.argv[2]); // #1