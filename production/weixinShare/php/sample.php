<?php
require_once "jssdk.php";
$jssdk = new JSSDK("wx9411c1afcfdf51d1", "68a39e6b3ccefb058af8541896b6a31b");
$signPackage = $jssdk->GetSignPackage();
$accessTokenUrl  = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx9411c1afcfdf51d1&secret=68a39e6b3ccefb058af8541896b6a31b';
$myAccessToken = getToken($accessTokenUrl);
$objAccessToken = json_decode($myAccessToken);
//echo $myAccessToken;
$download = "http://file.api.weixin.qq.com/cgi-bin/media/get?access_token=".$objAccessToken->access_token."&media_id=MEDIA_ID";
$myUpload = getToken($download);
//php自带的curl库，通过这个写法,传入一个地址可以返回一组数据���
function getToken($url){
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL,$url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
    return curl_exec($ch);
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">
    <title>WeUI</title>
    <link rel="stylesheet" href="./lib/weiui/dist/style/weui.min.css"/>
    <style>
        .xcy-continer{
            padding: 0px 10px 0px 10px;
        }
        .weui-father > h3{
            height: 50px;
            line-height: 50px;
            text-align: center;
            background-color: #3e24bd;
            padding: 5px;
            margin: 2px;
            color: #fff;
            border-radius: 5px;
        }
        .weui-father > ul > li > a{
            border: 0;
            height: 50px;
            box-sizing: border-box;
        }
        .weui-father > ul > li > a:hover{
            font-size: 25px;
            border: 1px solid green;
        }
        .desc{
            color: royalblue;
        }
        .pont button{
            border-radius: 10px;
        }

    </style>
</head>
<body>
<div class="xcy-continer">
    <div class="weui-father">
        <h3>weUi初体验</h3>
        <ul>
            <li><a class="weui_btn weui_btn_plain_primary" href="#menu-basic">基础接口</a></li>
            <li><a class="weui_btn weui_btn_plain_primary" href="#menu-share">分享接口</a></li>
            <li><a class="weui_btn weui_btn_plain_primary" href="#menu-image">图像接口</a></li>
            <li><a class="weui_btn weui_btn_plain_primary" href="#menu-voice">音频接口</a></li>
            <li><a class="weui_btn weui_btn_plain_primary" href="#menu-smart">智能接口</a></li>
            <li><a class="weui_btn weui_btn_plain_primary" href="#menu-device">设备信息接口</a></li>
            <li><a class="weui_btn weui_btn_plain_primary" href="#menu-location">地理位置接口</a></li>
            <li><a class="weui_btn weui_btn_plain_primary" href="#menu-webview">界面操作接口</a></li>
            <li><a class="weui_btn weui_btn_plain_primary" href="#menu-scan">微信扫一扫接口</a></li>
            <li><a class="weui_btn weui_btn_plain_primary" href="#menu-shopping">微信小店接口</a></li>
            <li><a class="weui_btn weui_btn_plain_primary" href="#menu-card">微信卡券接口</a></li>
            <li><a class="weui_btn weui_btn_plain_primary" href="#menu-pay">微信支付接口</a></li>
        </ul>
    </div>
    <div class="pont">
        <h3 id="menu-basic">基础接口</h3>
        <span class="desc">判断当前客户端是否支持指定JS接口</span>
        <button class="weui_btn weui_btn_primary" id="checkJsApi">基本接口</button>

        <h3 id="menu-share">分享接口</h3>
        <span class="desc">获取“分享到朋友圈”按钮点击状态及自定义分享内容接口</span>
        <button class="weui_btn weui_btn_primary" id="onMenuShareTimeline">分享到朋友圈</button>

        <span class="desc">获取“分享给朋友”按钮点击状态及自定义分享内容接口</span>
        <button class="weui_btn weui_btn_primary" id="onMenuShareAppMessage">分享给朋友</button>

        <span class="desc">获取“分享到QQ”按钮点击状态及自定义分享内容接口</span>
        <button class="weui_btn weui_btn_primary" id="onMenuShareQQ">分享到QQ</button>

        <span class="desc">获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口</span>
        <button class="weui_btn weui_btn_primary" id="onMenuShareWeibo">分享到腾讯微博</button>


        <h3 id="menu-image">图像接口</h3>
        <span class="desc">拍照或从手机相册中选图接口</span>
        <button class="weui_btn weui_btn_primary" id="chooseImage">选择图片接口</button>

        <span class="desc">预览图片接口</span>
        <button class="weui_btn weui_btn_primary" id="previewImage">预览图片接口</button>

        <span class="desc">上传图片接口</span>
        <button class="weui_btn weui_btn_primary" id="uploadImage">上传图片接口</button>

        <span class="desc">下载图片接口</span>
        <button class="weui_btn weui_btn_primary" id="downloadImage">下载图片接口</button>


        <h3 id="menu-voice">音频接口</h3>
        <span class="desc">开始录音接口</span>
        <button class="weui_btn weui_btn_primary" id="startRecord">开始录音</button>

        <span class="desc">停止录音接口</span>
        <button class="weui_btn weui_btn_primary" id="stopRecord">停止录音</button>

        <span class="desc">播放语音接口</span>
        <button class="weui_btn weui_btn_primary" id="playVoice">播放录音</button>

        <span class="desc">暂停播放接口</span>
        <button class="weui_btn weui_btn_primary" id="pauseVoice">暂停播放</button>

        <span class="desc">停止播放接口</span>
        <button class="weui_btn weui_btn_primary" id="stopVoice">停止播放</button>

        <span class="desc">上传语音接口</span>
        <button class="weui_btn weui_btn_primary" id="uploadVoice">上传语音</button>

        <span class="desc">下载语音接口</span>
        <button class="weui_btn weui_btn_primary" id="downloadVoice">下载语音</button>


        <h3 id="menu-smart">智能识别</h3>
        <span class="desc">识别音频并返回识别结果接口</span>
        <button class="weui_btn weui_btn_primary" id="translateVoice">智能识别</button>


        <h3 id="menu-device">设备信息接口</h3>
        <span class="desc">获取网络状态接口</span>
        <button class="weui_btn weui_btn_primary" id="getNetworkType">获取网络状态接口</button>


        <h3 id="menu-location">地理位置接口</h3>
        <span class="desc">使用微信内置地图查看位置接口</span>
        <button class="weui_btn weui_btn_primary" id="openLocation">内置地图查看位置接口</button>

        <span class="desc">获取地理位置接口</span>
        <button class="weui_btn weui_btn_primary" id="getLocation">获取当前地理位置接口</button>


        <h3 id="menu-webview">界面操作接口</h3>
        <span class="desc">隐藏右上角菜单接口</span>
        <button class="weui_btn weui_btn_primary" id="hideOptionMenu">界面操作接口</button>

        <span class="desc">显示右上角菜单接口</span>
        <button class="weui_btn weui_btn_primary" id="showOptionMenu">显示右上角接口</button>

        <span class="desc">关闭当前网页窗口接口</span>
        <button class="weui_btn weui_btn_primary" id="closeWindow">关闭网页窗口接口</button>

        <span class="desc">批量隐藏功能按钮接口</span>
        <button class="weui_btn weui_btn_primary" id="hideMenuItems">批量影藏菜单接口</button>

        <span class="desc">批量显示功能按钮接口</span>
        <button class="weui_btn weui_btn_primary" id="showMenuItems">批量显示菜单接口</button>

        <span class="desc">隐藏所有非基础按钮接口</span>
        <button class="weui_btn weui_btn_primary" id="hideAllNonBaseMenuItem">隐藏所有非基础按钮接口</button>

        <span class="desc">显示所有功能按钮接口</span>
        <button class="weui_btn weui_btn_primary" id="showAllNonBaseMenuItem">所有功能按钮接口</button>

        <h3 id="menu-scan">微信扫一扫</h3>
        <span class="desc">调起微信扫一扫接口</span>
        <button class="weui_btn weui_btn_primary" id="scanQRCode0">微信扫一扫（返回结果）</button>
        <button class="weui_btn weui_btn_primary" id="scanQRCode1">调用微信扫一扫接口（不返回结果）</button>
    </div>
</div>
</body>
<script src="jquery.min.js"></script>
<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script>
    wx.config({
        debug: false,
        appId: '<?php echo $signPackage["appId"];?>',
        timestamp: <?php echo $signPackage["timestamp"];?>,
        nonceStr: '<?php echo $signPackage["nonceStr"];?>',
        signature: '<?php echo $signPackage["signature"];?>',
        jsApiList: [
            // 所有要调用的 API 都要加到这个列表中
            'checkJsApi',
            'onMenuShareTimeline',
            'onMenuShareQQ',
            'onMenuShareWeibo',
            'onMenuShareQZone',
            'hideMenuItems',
            'showMenuItems',
            'hideAllNonBaseMenuItem',
            'showAllNonBaseMenuItem',
            'translateVoice',
            'startRecord',
            'stopRecord',
            'onVoiceRecordEnd',
            'playVoice',
            'onVoicePlayEnd',
            'pauseVoice',
            'stopVoice',
            'uploadVoice',
            'downloadVoice',
            'chooseImage',
            'previewImage',
            'uploadImage',
            'downloadImage',
            'getNetworkType',
            'openLocation',
            'getLocation',
            'hideOptionMenu',
            'showOptionMenu',
            'closeWindow',
            'scanQRCode',
            'chooseWXPay',
            'openProductSpecificView',
            'addCard',
            'chooseCard',
            'openCard'
        ]
    });
    wx.ready(function () {
        // 在这里调用 API
        document.querySelector('#checkJsApi').onclick = function () {
            wx.checkJsApi({
                jsApiList: [
                    'checkJsApi',
                    'onMenuShareTimeline',
                    'onMenuShareAppMessage',
                ],
                success: function (res) {
                    alert(JSON.stringify(res));
                }
            });
        };
        // 分享到朋友圈
        document.querySelector('#onMenuShareTimeline').onclick = function () {
            wx.onMenuShareTimeline({
                title: '小熊朋友圈分享',
                link: 'http://1.xcyn666.applinzi.com/sample.php',
                imgUrl: 'http://www.sae.sinacdn.com/.app-stor/static/sinacloud/2016invite_icon1.png',
                success: function (res) {
                    alert('已分享');
                },
                cancel: function (res) {
                    alert('已取消');
                },
                fail: function (res) {
                    alert(JSON.stringify(res));
                }
            });
        };
        // 分享给朋友
        document.querySelector('#onMenuShareAppMessage').onclick = function () {
            wx.onMenuShareAppMessage({
                title: '小熊分享给朋友圈',
                // 分享描述
                desc: '这是一个分享描述!',
                link: 'http://www.baidu.com/',
                imgUrl: 'http://img3.douban.com/view/movie_poster_cover/spst/public/p2166127561.jpg',
                success: function (res) {
                    alert('已分享');
                },
                cancel: function (res) {
                    alert('已取消');
                },
                fail: function (res) {
                    alert(JSON.stringify(res));
                }
            });
        };

        // 分享到QQ
        document.querySelector('#onMenuShareQQ').onclick = function () {
            wx.onMenuShareQQ({
                title: '小熊分享到QQ',
                desc: '内容描述',
                link: 'http://www.baidu.com/',
                imgUrl: 'http://img3.douban.com/view/movie_poster_cover/spst/public/p2166127561.jpg',
                complete: function (res) {
                    alert(JSON.stringify(res));
                },
                success: function (res) {
                    alert('已分享');
                },
                cancel: function (res) {
                    alert('已取消');
                },
                fail: function (res) {
                    alert(JSON.stringify(res));
                }
            });
        };

        // 分享到微博
        document.querySelector('#onMenuShareWeibo').onclick = function () {
            wx.onMenuShareWeibo({
                title: '小熊分享到微博', // 分享标题
                desc: '描述一下', // 分享描述
                link: 'http://www.baidu.com/', // 分享链接
                imgUrl: 'http://img3.douban.com/view/movie_poster_cover/spst/public/p2166127561.jpg', // 分享图标
                success: function () {
                    alert('分享到微博成功！');
                },
                cancel: function () {
                    alert('关闭网页!');
                }
            });
        };

        //图像接口问题
        var images = {
            localId: [],
            serverId: []
        };
        document.querySelector('#chooseImage').onclick = function () {
            wx.chooseImage({
                success: function (res) {
                    images.localId = res.localIds;
                    alert('已经上传了' + res.localIds.length + '张');
                }
            });
        };

        //预览图片接口
        document.querySelector('#previewImage').onclick = function () {
            wx.previewImage({
                current: 'http://c.hiphotos.baidu.com/baike/w%3D268%3Bg%3D0/sign=fab7d3aeef24b899de3c7e3e563d7aa8/0823dd54564e925803867f409a82d158cdbf4eea.jpg',
                urls: [
                    'http://img20.360buyimg.com/da/jfs/t2581/178/1662926843/93047/b4ffe117/57458f2bN94ec0746.jpg',
                    'http://img30.360buyimg.com/da/jfs/t2791/308/1559364918/92526/f650e3d1/5742cffbN2256df13.jpg',
                    'http://img10.360buyimg.com/cms/jfs/t2605/96/1661975136/120476/a4fe5ad0/5745799eNba91192f.jpg',
                    'http://c.hiphotos.baidu.com/baike/w%3D268%3Bg%3D0/sign=fab7d3aeef24b899de3c7e3e563d7aa8/0823dd54564e925803867f409a82d158cdbf4eea.jpg'
                ]
            });
        };

        //上传图片接口
        document.querySelector('#uploadImage').onclick = function () {
            if (images.localId.length == 0) {
                alert('请在选择接口先选择图片!');
                return;
            }
            var i = 0, length = images.localId.length;
            images.serverId = [];
            function upload() {
                wx.uploadImage({
                    localId: images.localId[i],
                    success: function (res) {
                        i++;
                        alert('已上传：' + i + '/' + length);
                        images.serverId.push(res.serverId);
                        if (i < length) {
                            upload();
                        }
                    },
                    fail: function (res) {
                        alert('上传有问题！');
                    }
                });
            }

            upload();
        };

        //下载图片接口
        document.querySelector('#downloadImage').onclick = function () {
            if (images.serverId.length === 0) {
                alert('请先使上传图片接口上传图片亲!');
                return;
            }
            var i = 0, length = images.serverId.length;
            images.localId = [];
            function download() {
                wx.downloadImage({
                    serverId: images.serverId[i],
                    success: function (res) {
                        i++;
                        alert('已下载：' + i + '/' + length);
                        images.localId.push(res.localId);
                        if (i < length) {
                            download();
                        }
                    }
                });
            }
            download();
        };


        var voice = {
            localId: '',
            serverId: ''
        };
        //开始录音
        document.querySelector('#startRecord').onclick = function () {
            wx.startRecord({
                cancel: function () {
                    alert('小熊:用户拒绝授权录音');
                }
            });
        };

        // 停止录音
        document.querySelector('#stopRecord').onclick = function () {
            wx.stopRecord({
                success: function (res) {
                    voice.localId = res.localId;
                    alert(JSON.stringify(res));
                },
                fail: function (res) {
                    alert(JSON.stringify(res));
                }
            });
        };

        // 播放录音
        document.querySelector('#playVoice').onclick = function () {
            if (voice.localId == '') {
                alert('小熊:请先使用 startRecord 接口录制一段声音');
                return;
            }
            wx.playVoice({
                localId: voice.localId
            });
        };

        //  暂停播放音频
        document.querySelector('#pauseVoice').onclick = function () {
            wx.pauseVoice({
                localId: voice.localId
            });
        };

        // 停止播放音频
        document.querySelector('#stopVoice').onclick = function () {
            wx.stopVoice({
                localId: voice.localId
            });
        };

        // 上传语音
        document.querySelector('#uploadVoice').onclick = function () {
            if (voice.localId == '') {
                alert('小熊:请先使用 startRecord 接口录制一段声音');
                return;
            }
            wx.uploadVoice({
                localId: voice.localId,
                success: function (res) {
                    voice.serverId = res.serverId;
                    alert(voice.serverId);
                }
            });
        };

        // 下载语音
        document.querySelector('#downloadVoice').onclick = function () {
            if (voice.serverId == '') {
                alert('小熊:请先使用 uploadVoice 上传声音');
                return;
            }
            wx.downloadVoice({
                serverId: voice.serverId,
                success: function (res) {
                    alert('小熊:下载语音成功，localId 为' + JSON.stringify(res));
                    voice.localId = res.localId;
                }
            });
        };

        //智能识别接口
        document.querySelector('#translateVoice').onclick = function () {
            if (voice.localId == '') {
                alert('小熊提示：哥们先录一段！');
                return;
            }
            wx.translateVoice({
                localId: voice.localId,
                complete: function (res) {
                    if (res.hasOwnProperty('translateResult')) {
                        alert('小熊告诉你结果：' + res.translateResult);
                    } else {
                        alert('小熊:亲,识别失败~');
                    }
                }
            });
        };

        //  获取当前网络状态
        document.querySelector('#getNetworkType').onclick = function () {
            wx.getNetworkType({
                success: function (res) {
                    alert(res.networkType);
                },
                fail: function (res) {
                    alert(JSON.stringify(res));
                }
            });
        };


        var map = {
            latitude: '',
            longitude: '',
            access: '',
            name: '',
            speed: '',
            accuracy: ''
        };
        //地理位置接口
        document.querySelector('#openLocation').onclick = function () {
            if (map.latitude == '') {
                alert('请先点击下面获取位置信息，再次点击!')
            }
            $.ajax({
                url: "http://api.map.baidu.com/geocoder/v2/?ak=e2FGp3PWmsY5riIrun6RMhzF&callback=renderReverse&location=" + map.latitude + "," + map.longitude + "&output=json&pois=0",
                type: 'get',
                // 这里需要将dataType 指定为jsonp
                dataType: 'jsonp',
                success: function (data) {
                    map.name = data.result.addressComponent.city;
                    map.access = data.result.formatted_address;
                    wx.openLocation({
                        latitude: map.latitude,
                        longitude: map.longitude,
                        name: map.name,
                        address: map.access,
                        scale: 14,
                        infoUrl: 'http://xcyn666.applinzi.com/'
                    });
                },
                error: function (err) {
                    console.log('报错了');
                }
            });
        };


        //获取地理位置接口
        document.querySelector('#getLocation').onclick = function () {
            wx.getLocation({
                success: function (res) {
                    map.latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
                    map.longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
                    map.speed = res.speed; // 速度，以米/每秒计
                    map.accuracy = res.accuracy; // 位置精度
                    alert('小熊:你的纬度为:' + map.latitude + ',你的经度为：' + map.longitude + '你的速度为:' + map.speed + '你的位置精度为:' + map.accuracy);
                },
                cancel: function (res) {
                    alert('用户拒绝授权获取地理位置');
                }
            });
        };

        //隐藏右上角菜单
        document.querySelector('#hideOptionMenu').onclick = function () {
            wx.hideOptionMenu();
        };

        // 显示右上角菜单
        document.querySelector('#showOptionMenu').onclick = function () {
            wx.showOptionMenu();
        };

        // 关闭当前窗口
        document.querySelector('#closeWindow').onclick = function () {
            wx.closeWindow();
        };

        //批量隐藏菜单项
        document.querySelector('#hideMenuItems').onclick = function () {
            wx.hideMenuItems({
                menuList: [
                    'menuItem:readMode', // 阅读模式
                    'menuItem:share:timeline', // 分享到朋友圈
                    'menuItem:copyUrl' // 复制链接
                ],
                success: function (res) {
                    alert('已隐藏“阅读模式”，“分享到朋友圈”，“复制链接”等按钮');
                },
                fail: function (res) {
                    alert(JSON.stringify(res));
                }
            });
        };

        //批量显示菜单项
        document.querySelector('#showMenuItems').onclick = function () {
            wx.showMenuItems({
                menuList: [
                    'menuItem:readMode', // 阅读模式
                    'menuItem:share:timeline', // 分享到朋友圈
                    'menuItem:copyUrl' // 复制链接
                ],
                success: function (res) {
                    alert('已显示“阅读模式”，“分享到朋友圈”，“复制链接”等按钮');
                },
                fail: function (res) {
                    alert(JSON.stringify(res));
                }
            });
        };

        //隐藏所有非基本菜单项
        document.querySelector('#hideAllNonBaseMenuItem').onclick = function () {
            wx.hideAllNonBaseMenuItem({
                success: function () {
                    alert('已隐藏所有非基本菜单项');
                }
            });
        };

        //显示所有被隐藏的非基本菜单项
        document.querySelector('#showAllNonBaseMenuItem').onclick = function () {
            wx.showAllNonBaseMenuItem({
                success: function () {
                    alert('已显示所有非基本菜单项');
                }
            });
        };

        //  扫描二维码并返回结果
        document.querySelector('#scanQRCode0').onclick = function () {
            wx.scanQRCode({
                desc: 'scanQRCode desc'
            });
        };
        // 扫描二维码并返回结果
        document.querySelector('#scanQRCode1').onclick = function () {
            wx.scanQRCode({
                needResult: 1,
                desc: 'scanQRCode desc',
                success: function (res) {
                    alert('测试号地址为:' + JSON.stringify(res));
                }
            });
        };
    });

</script>
</html>
