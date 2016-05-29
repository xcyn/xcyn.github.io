/*
 * 2016.05
 * 作者:熊川宇
 * */
(function () {
    //封装自己的滚动条平稳滚动
    function myBarScroll(target) {
        clearInterval(myBarScroll.timer);
        myBarScroll.timer = setInterval(function () {
            var leader = window.scrollY;
            var step = leader <= target ? 71 : -71;
            var leader = leader + step;

            console.log(1)
            if (Math.abs(target - leader) <= Math.abs(step)) {
                clearInterval(myBarScroll.timer);
            }
            scrollTo(0, leader);

        }, 10);
    }


    //封装获取导航栏所有的背景图
    function getArrChilid(arr) {
        var lis = [];
        for (var i = 0; i < arr.length; i++) {
            lis.push(arr[i].children[0]);
        }
        return lis;
    }

    //封装兼容getcurrentStyle和getcurrentstyle
    function getAtrr(obj, attr) {
        if (obj.currentStyle) {
            return obj.currentStyle[attr];
        } else {
            return window.getComputedStyle(obj, null)[attr];
        }
    }

    //封装nav的背景图片滚动
    function myNavScroll(obj, index) {
        obj[index].style.top = ((window.scrollY - index * 710) / 710) * 40 + 'px';
        obj[index + 1].style.top = 50 - ((window.scrollY - 710 * index) / 710) * 40 + 'px';
    }

    window.myBarScroll = {
        myNavScroll: myNavScroll,
        getAtrr: getAtrr,
        getArrChilid: getArrChilid,
        myBarScroll: myBarScroll
    }
})(window)