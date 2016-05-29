/**
 * Created by Administrator on 2016/2/28 0028.
 */
//jquery部分开始
$(document).ready(function () {
    //点击上海站，让对应的选择帝天盒子出现
    $(".banner-first").on("click", function () {
        $(".changeplace").stop();
        $(".changeplace").slideToggle();
    });
    //经过导航栏的图片，让它显示相应的下拉菜单
    $(".nav li").on("mouseenter", function () {
        $(".nav").find("dl").hide();
        $(this).find("dl").stop();
        $(this).find("dl").slideToggle(700);
    });
    //鼠标离开盒子消失
    $(".nav li").on("mouseleave", function () {
        $(".nav").find("dl").hide();
    });
    //购物车特效部分
    $(".banner-third>span:eq(2)").on("mouseenter mouseleave", function () {
        $(".buycar").toggle();
    });
    //点击时刻分类显示可以选择的口味
    $(".main-image1").on("click", function () {
        $(this).siblings(".main-timerclass2").stop();
        if ($(this).siblings(".main-timerclass1").width() == 0) {
            $(this).siblings(".main-timerclass1").show();
            $(this).siblings(".main-timerclass1").animate({"width": 125});
            $(".main-timerclass2").hide();
        }
        else {
            $(this).siblings(".main-timerclass1").animate({"width": 0});
        }
    });
    $(".main-image2").on("click", function () {
        $(this).siblings(".main-timerclass1").stop();
        if ($(this).siblings(".main-timerclass2").width() == 0) {
            $(this).siblings(".main-timerclass2").show();
            $(this).siblings(".main-timerclass2").animate({"width": 125});
            $(".main-timerclass1").hide();
        }
        else {
            $(this).siblings(".main-timerclass2").animate({"width": 0});
        }
    });
    //鼠标离开蛋糕口味盒子的宽度为0
    $(".main-top-left img").on("mouseleave", function () {
        $(".main-timerclass").stop();
        $(".main-timerclass").animate({"width": 0});
    });

    //鼠标经过离开可以显示购买数量（有BUG）
    $(".cake-consoleBug").on("mouseenter", function () {
        //$(this).siblings(".cake-content-bottom").stop().animate({"top": 0});
        $(this).find(".cake-content-bottom").stop().animate({"top": 0});
    });
    $(".cake-consoleBug").on("mouseleave", function () {
        $(this).find(".cake-content-bottom").stop().animate({"top": 105});
    });
});
//jquery部分结束


//js部分开始
window.onload = function () {
    var ulLbt = document.getElementById("scrollTop");
    var topTimer = null;
    topLbt();

    ulLbt.onmouseover = function () {
        clearInterval(topTimer);
    }
    ulLbt.onmouseout = function () {
        topLbt();
    }
    //封装向上定时器
    function topLbt() {
        topTimer = setInterval(function () {
            var step = -1;
            var leader = ulLbt.offsetTop;
            if (leader < -314) {
                leader = 0;
            }
            ulLbt.style.top = leader + step + "px";
        }, 30);
    }

    //神奇小火箭
    var rockback = document.getElementById("rockback");
    var cakeWeixin = document.getElementById("cakeWeixin");
    rockback.onmouseover = function () {
        rockback.style.backgroundPosition = "bottom right";
    }
    rockback.onmouseout = function () {
        rockback.style.backgroundPosition = "bottom left";
    }
    rockback.onclick = function () {
        goWhere(0);
        animate1(cakeWeixin, {"top": -100}, function () {
        });
    }

    //控制back的显示影藏
    window.onscroll = function () {
        //滚轮滚动的高度
        var scrollTOp = scroll().top;
        //小火箭慢慢出现
        if (cakeWeixin.offsetTop == 1000) {
            console.log(1);
            animate1(cakeWeixin, {"top": 480});
            cakeWeixin.style.position = "fixed";
        }
        //滚到0的时候小火箭会慢慢走上去
        if (scrollTOp == 0) {
            if (cakeWeixin.style.display == "none") {
                cakeWeixin.style.display = "block";
                cakeWeixin.style.top = -100 + "px";
            }

            animate1(cakeWeixin, {"top": -100}, function () {
                cakeWeixin.style.top = 1000 + "px";
                cakeWeixin.style.position = "fixed";
                console.log(cakeWeixin.offsetTop);
            });
        }
    }

    //二维码，微信部分
    var cakeWeixin = document.getElementById("cakeWeixin");
    var fixClose = cakeWeixin.children[0];
    var weixinEwm = cakeWeixin.children[1];
    fixClose.onclick = function () {
        cakeWeixin.style.display = "none";
    }
    weixinEwm.onmouseover = function () {
        weixinEwm.style.backgroundPosition = "top left";
    };
    weixinEwm.onmouseout = function () {
        weixinEwm.style.backgroundPosition = "top right";
    };
    //让二维码显示或者影藏
    $(weixinEwm).on("click", function () {
        $(this).find("img").toggle();
    });
    //呼吸灯部分
    var BLnAll = document.getElementById("BLnAll");
    var BLnSpan = document.getElementById("BLnSpan");
    var BLnLeft = document.getElementById("BLnLeft");
    var BLnRight = document.getElementById("BLnRight");
    var BLn = document.getElementById("BLn");
    var BLnCrile = document.getElementById("BLnCrile");
    var BLnLis = BLn.children;
    var BLnCrileLis = BLnCrile.children;
    var circle = 0;// 用于定义圈圈的索引
    var pic = 0;
    var blntimer = null;
    var jsonBln = [
        {"opacity": 1},
        {"opacity": 0},
        {"opacity": 0},
        {"opacity": 0},
        {"opacity": 0}];


    bln();//文档加载的时候就开始调用一次
    BLnCrileLis[0].style.background = "#ff3a50";//页面加载的时候让第一个是亮的
    //设置呼吸灯定时器,并且开始轮播
    startbln();
    function startbln() {
        clearInterval(blntimer);
        blntimer=setInterval(blnnext,2000);
    }

    //鼠标经过是时候让呼吸灯停止
    BLnAll.onmouseover = function () {
        BLnSpan.style.display = "block";
        clearInterval(blntimer);
    }
    //这个地方有冒泡问题在，因为解决不来，所以转换为了jquery
    $(BLnAll).on("mouseleave", function () {
        BLnSpan.style.display = "none";
        startbln();
    });


    //鼠标点击让它走下一个图片
    BLnRight.onclick = function () {
        blnnext();
    }
    BLnLeft.onclick = function () {
        if (pic == 0) {
            pic = BLnCrileLis.length - 1;
        }
        else {
            pic--;
        }
        console.log(pic);
        for (var k = 0; k < jsonBln.length; k++) {
            jsonBln[k].opacity = 0;
        }
        jsonBln[pic].opacity = 1;
        bln();
        for (var i = 0; i < BLnCrileLis.length; i++) {
            BLnCrileLis[i].style.background = "#374f66";
        }
        BLnCrileLis[pic].style.background = "#ff3a50";
    }

    //点击动画，让它跳转到相应的图片
    for (var i = 0; i < BLnCrileLis.length; i++) {
        BLnCrileLis[i].index = i;
        BLnCrileLis[i].onmouseover = function () {
            clearInterval(blntimer);
            for (var k = 0; k < jsonBln.length; k++) {
                jsonBln[k].opacity = 0;
            }
            jsonBln[this.index].opacity = 1;
            circle = this.index;
            pic = this.index;
            bln();
            //排除其他li的背景颜色
            for (var i = 0; i < BLnCrileLis.length; i++) {
                BLnCrileLis[i].style.background = "#374f66";
            }
            BLnCrileLis[circle].style.background = "#ff3a50";
        }
    }

    //封装缓动函数
    function animate1(obj, json, fn) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var flag = true;
            for (var k in json) {
                if (k == "opacity") {
                    var target = json[k] * 100;
                    var leader = getAtrr(obj, k) * 100;
                    var step = (target - leader) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    obj.style[k] = (leader + step) / 100;
                    if (leader != target) {
                        flag = false;
                    }
                }
                else if (k == "zIndex") {
                    obj.style[k] = json[k];
                }
                else {
                    var target = json[k];
                    var leader = parseInt(getAtrr(obj, k)) || 0;
                    var step = (target - leader) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    obj.style[k] = leader + step + "px";
                    if (leader != target) {
                        flag = false;
                    }
                }
            }
            if (flag == true) {
                clearInterval(obj.timer);
                if (fn) {
                    fn();
                }
            }
        }, 25);
    }

    //    封装得到任意对象的任意属性
    function getAtrr(obj, atrr) {
        if (obj.currentStyle) {
            return obj.currentStyle[atrr];
        }
        else {
            return window.getComputedStyle(obj, null)[atrr];
        }
    }

    //封装自己的scroll方法//兼容被卷去的高度
    function scroll() {
        if (window.pageYOffset != null) {
            return {
                "top": window.pageYOffset,
                "left": window.pageXOffset
            }
        }
        else if (document.compatMode == "CSS1Compat") {
            return {
                "top": document.documentElement.scrollTop,
                "left": document.documentElement.scrollLeft
            }
        }
        else {
            return {
                "top": document.body.scrollTop,
                "left": document.body.scrollLeft
            }
        }

    }

    //让鼠标滚轮根据被卷去的高度自动到达任何想去的地方
    function goWhere(target, fn) {
        clearInterval(this.timer);
        var leader = scroll().top;
        //封装缓动函数
        this.timer = setInterval(function () {
            var step = (target - leader) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            console.log("step-------" + step);
            leader = leader + step;
            scrollTo(0, leader);
            console.log("leader-------" + leader);
            if (leader <= target) {
                clearInterval(this.timer);
                console.log("gowhere-ok!");
                if (fn) {
                    fn();
                }
            }
        }, 25);
    }

    //呼吸灯加载通过json控制立即呈现出来
    function bln() {
        for (var i = 0; i < BLnLis.length; i++) {
            var qq=$(BLnLis[i]).css("opacity");
            console.log(i+"---"+qq);
            animate1(BLnLis[i], jsonBln[i]);
        }
    }//给json赋值给li里的每一个值，通过json数值控制了li里的样式

    //封装的呼吸灯关键方法
    function blnchange() {
        //判断li改变颜色的边界
        if (circle > BLnCrileLis.length - 1) {
            circle = 0;
        }
        //排除其他li的背景颜色
        for (var i = 0; i < BLnCrileLis.length; i++) {
            BLnCrileLis[i].style.background = "#374f66";
        }
        BLnCrileLis[circle].style.background = "#ff3a50";
        circle++;
        bln();
        jsonBln.unshift(jsonBln.pop());
    }

    //封装的自动BLN轮播方法
    function blnnext(){
        if (pic == BLnCrileLis.length - 1) {
            pic = 0;
        }
        else {
            pic++;
        }
        for (var k = 0; k < jsonBln.length; k++) {
            jsonBln[k].opacity = 0;
        }
        jsonBln[pic].opacity = 1;
        bln();

        for (var i = 0; i < BLnCrileLis.length; i++) {
            BLnCrileLis[i].style.background = "#374f66";
        }
        BLnCrileLis[pic].style.background = "#ff3a50";
    }
}
//js部分结束