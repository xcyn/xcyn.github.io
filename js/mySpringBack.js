/*
 * 时间:2016年4月
 * 作者:熊川宇
 * */
(function (window) {
    var kv = {
        'top': 'offsetTop',
        'width': 'offsetWidth',
        'left': 'offsetLeft',
        'height': 'offsetHeight',
        'scrollTop': 'scrollTop'
    }

    function animate(obj, target, fn) {
        clearInterval(animate.timer);
        var step = 0;
        var isBig = true;
        isTarget = false;
        for (var k in target) {
            if (target[k] > obj[k]) {
                isBig = true;
            } else {
                isBig = false;
            }
        }
        animate.timer = setInterval(function () {
            for (var k in target) {
                var leader = obj[kv[k]];
                if (isBig) {
                    step = step + (target[k] - leader) / 6;
                    step = 0.75 * step;
                } else {
                    step = step + (target[k]  - leader) / 5;
                    step = 0.6 * step;
                }
                if (Math.abs(target[k] - leader) <= 1 && Math.abs(step) <= 1) {
                    console.log(1);
                    obj.style[k] = target[k] + 'px';
                    clearInterval(animate.timer);
                    console.log('ok')
                    if (fn) {
                        fn();
                    }
                } else {
                    if (kv[k] == 'scrollTop') {//对滚动特殊处理
                        obj[k] = leader + step;
                    } else {
                        obj.style[k] = leader + step + 'px';
                    }
                }
            }
        }, 25);
    }

    window.myScrollTo = animate;
})(window)