/**
 * Created by Administrator on 2016/6/2 0002.
 */
        //对页面滚动进行处理
        var bodyStroll = {};
        //数据进行初始化
        bodyStroll.currY = 0;
        bodyStroll.startY = 0;
        /*开始Y坐标*/
        bodyStroll.moveY = 0;
        /*滑动Y的坐标*/
        bodyStroll.distanceY = 0;
        /*改变的距离*/
        $('.myPrize')[0].addEventListener('touchstart', function (e) {
            var ev = e || window.event;
            //计算手指开始移动的距离
            bodyStroll.startY = ev.touches[0].clientY;

        });

        $('.myPrize')[0].addEventListener('touchmove', function (e) {
            var ev = e || window.event;
            bodyStroll.moveY = e.touches[0].clientY;
            bodyStroll.distanceY = bodyStroll.moveY - bodyStroll.startY;
                /*改变的距离*/
                $('.myPrize')[0].style.webkitTransform = 'translateY(' + (bodyStroll.currY + bodyStroll.distanceY) + 'px)';
                /*兼容*/
                $('.myPrize')[0].style.transform = 'translateY(' + (bodyStroll.currY + bodyStroll.distanceY) + 'px)';
        });

        $('.myPrize')[0].addEventListener('touchend', function (e) {
            var ev = e || window.ev;
            bodyStroll.currY = bodyStroll.currY + bodyStroll.distanceY;
        });
