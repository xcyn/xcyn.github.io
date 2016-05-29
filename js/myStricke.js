/*
 * 2016.04
 * 作者:熊川宇
 * */
(function (window) {
    var kv = {
        left: 'offsetLeft',
        top: 'offsetTop',
        width: 'offsetWidth',
        height: 'offsetHeight'
    }

    var getAtrr = function (obj, target, step) {
        var o = {};
        for (var k in target) {
            o[k] = obj[kv[k]] + step;
        }
        return o;
    }

    var setStyle = function (target) {
        var o = {};
        for (var k in target) {
            o[k] = target[k] + 'px'
        }
        return o;
    }

    function animate(obj, target, fn) {
        clearInterval(obj.timer);
        //初始速度和加速度；
        var step = 0;
        var num = 0;
        var g = 5;
        obj.timer = setInterval(function () {
            var flag = false;
            for (var k in target) {
                var kLength = Object.getOwnPropertyNames(target).length;//获取对象里有几个属性
                g = obj[kv[k]] > target[k] ? -5 : 5;
                step = step + g;
                //封装成对象的形式
                isTarget = getAtrr(obj, target, step);
                if (isTarget[k] >= target[k] && g > 0 || isTarget[k] <= target[k] && g < 0) {
                    num++;
                    if (kLength == 1) {
                        step = -0.5 * step;
                    } else if (isTarget[k] == target[k]) {
                        step = -0.5 * step;
                    }
                    if (g > 0) {
                        isTarget[k] = target[k];
                    }
                    if (num < 10) {
                        flag = false;
                        console.log('good!')
                    } else {
                        flag = true;
                    }
                }
                obj.style[k] = setStyle(isTarget)[k];
            }
            if (flag) {
                clearInterval(obj.timer);
                console.log('定时器清除完毕!')
                if (fn) {
                    fn();
                }
            }

        }, 40);
    }

    window.myStrick = animate;
})(window)