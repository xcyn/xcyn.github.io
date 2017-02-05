//努力，奋斗！
var swiper = new Swiper('.swiper-container', {
    //显示圆点和整屏向对应
    pagination: '.swiper-pagination',
    paginationClickable: true,
    //点击lis让它显示或者影藏
    paginationHide: true,
    //纪录锚点
    hashnav: true,
    //垂直切换还是水平切换
    direction: 'vertical',
    //重复循环切换
    loop: true,
    //指针会变成手掌形状
    grabCursor: true,
    //自动适应的高度
    autoHeight: true,

    //true时阻止touchmove冒泡事件。
    touchMoveStopPropagation: false,
    //可以实现拖动很小的比例就可以整屏滑动
    longSwipesRatio: 0.1,
    //边缘抵抗
    resistance: false,

    //触摸距离与滑动距离的比例
    touchRatio: 1,

    //键盘控制total切换
    keyboardControl: true,
    //鼠标滚轮滚动切换图片
    mousewheelControl: true,
    //默认为true，Swiper会强制加载所有图片。
    preloadImages: false,


    //监听器
    observer: true,
    observeParents: true,
    //回调函数（当屏幕切换完成，执行这个函数）
    onSlideChangeEnd: function (swiper) {
        //对第一页进行特殊处理
        if (swiper.activeIndex == 1 || swiper.activeIndex == 9) {
            //对第八屏动画进行处理
            $('.fixed-arrows > span').removeClass('changeFixed-arrows');
            $('.xcyScreen-eight-content').removeClass('xcyScreen-eight-centerFideIn');
            //对第二屏的动画进行处理：
            $('.xcyScreen-two-title,.xcyScreen-two-main1').removeClass('titleFadeIn');
            $('.xcyScreen-two-main2').removeClass('screen-two-blink');

            //自身动画
            $('.scyScreen-one-top').addClass('screen-one-topFadeIn');
            $('.scyScreen-one-bottom').addClass('screen-one-fadeIn');

        }
        //对第二页进行特殊处理
        else if (swiper.activeIndex == 2) {
            //对第一屏动画进行处理
            $('.scyScreen-one-top').removeClass('screen-one-topFadeIn');
            $('.scyScreen-one-bottom').removeClass('screen-one-fadeIn');
            //对第三屏动画进行处理
            $('.xcyScreen-three-title').removeClass('titleFadeIn');
            $('.xcyScreen-three-title').removeClass('titleFadeIn');
            $('.xcyScreen-three-mian1').removeClass('xcyScreen-three-fadeInLeftBig1');
            $('.xcyScreen-three-mian3').removeClass('xcyScreen-three-fadeInLeftBig2');
            $('.xcyScreen-three-mian2').removeClass('xcyScreen-three-fadeInRightBig1');
            $('.xcyScreen-three-mian4').removeClass('xcyScreen-three-fadeInRightBig2');
            //自身动画
            $('.xcyScreen-two-title,.xcyScreen-two-main1').addClass('titleFadeIn');
            $('.xcyScreen-two-main2').addClass('screen-two-blink');
        }
        //对第三页进行特殊处理
        else if (swiper.activeIndex == 3) {
            //对第二屏的动画进行处理：
            $('.xcyScreen-two-title,.xcyScreen-two-main1').removeClass('titleFadeIn');
            $('.xcyScreen-two-main2').removeClass('screen-two-blink');
            //对第四屏动画进行处理：
            $('.fixed-arrows > span').removeClass('changeFixed-arrows');
            $('.xcyScreen-four-title').removeClass('titleFadeIn');
            $('.xcyScreen-four-center').removeClass('screen-four-centerFideIn');
            $('.xcyScreen-four-fans > li:nth-child(1),.xcyScreen-four-fans > li:nth-child(2)').removeClass('screen-four-rotateIn1');
            $('.xcyScreen-four-fans > li:nth-child(3),.xcyScreen-four-fans > li:nth-child(4),.xcyScreen-four-fans > li:nth-child(5)').removeClass('screen-four-rotateIn2');
            $('.xcyScreen-four-fans > li:nth-child(6),.xcyScreen-four-fans > li:nth-child(7),.xcyScreen-four-fans > li:nth-child(8)').removeClass('screen-four-rotateIn3');
            $('.xcyScreen-four-fans > li:nth-child(9),.xcyScreen-four-fans > li:nth-child(10)').removeClass('screen-four-rotateIn4');
            //自身动画
            $('.xcyScreen-three-title').addClass('titleFadeIn');
            $('.xcyScreen-three-mian1').addClass('xcyScreen-three-fadeInLeftBig1');
            $('.xcyScreen-three-mian3').addClass('xcyScreen-three-fadeInLeftBig2');
            $('.xcyScreen-three-mian2').addClass('xcyScreen-three-fadeInRightBig1');
            $('.xcyScreen-three-mian4').addClass('xcyScreen-three-fadeInRightBig2');

        }
        //对第四页进行特殊处理
        else if (swiper.activeIndex == 4) {
            //对第三屏的动画进行处理：
            $('.xcyScreen-three-title').removeClass('titleFadeIn');
            $('.xcyScreen-three-title').removeClass('titleFadeIn');
            $('.xcyScreen-three-mian1').removeClass('xcyScreen-three-fadeInLeftBig1');
            $('.xcyScreen-three-mian3').removeClass('xcyScreen-three-fadeInLeftBig2');
            $('.xcyScreen-three-mian2').removeClass('xcyScreen-three-fadeInRightBig1');
            $('.xcyScreen-three-mian4').removeClass('xcyScreen-three-fadeInRightBig2');
            //对第五屏动画进行处理：
            $('.xcyScreen-five-title').removeClass('titleFadeIn');
            $('.xcyScreen-five-MarsMan').removeClass('screen-five-fadeInBottom');
            $('.xcyScreen-five-content').removeClass('screen-five-fadeInTop');
            $('.xcyScreen-five-contentText1').removeClass('screen-five-bounceInUp');
            $('.xcyScreen-five-contentText2').removeClass('screen-five-bounceInDown');
            $('.xcyScreen-five-contentText3').removeClass('screen-five-bounceInLeft');
            $('.xcyScreen-five-contentText4').removeClass('screen-five-bounceInRight');
            //自身动画
            $('.fixed-arrows > span').addClass('changeFixed-arrows');
            $('.xcyScreen-four-title').addClass('titleFadeIn');
            $('.xcyScreen-four-center').addClass('screen-four-centerFideIn');
            $('.xcyScreen-four-fans > li:nth-child(1),.xcyScreen-four-fans > li:nth-child(2)').addClass('screen-four-rotateIn1');
            $('.xcyScreen-four-fans > li:nth-child(3),.xcyScreen-four-fans > li:nth-child(4),.xcyScreen-four-fans > li:nth-child(5)').addClass('screen-four-rotateIn2');
            $('.xcyScreen-four-fans > li:nth-child(6),.xcyScreen-four-fans > li:nth-child(7),.xcyScreen-four-fans > li:nth-child(8)').addClass('screen-four-rotateIn3');
            $('.xcyScreen-four-fans > li:nth-child(9),.xcyScreen-four-fans > li:nth-child(10)').addClass('screen-four-rotateIn4');

        }
        //对第五页进行特殊处理
        else if (swiper.activeIndex == 5) {
            //对第四屏的动画进行处理：
            $('.fixed-arrows > span').removeClass('changeFixed-arrows');
            $('.xcyScreen-four-title').removeClass('titleFadeIn');
            $('.xcyScreen-four-center').removeClass('screen-four-centerFideIn');
            $('.xcyScreen-four-fans > li:nth-child(1),.xcyScreen-four-fans > li:nth-child(2)').removeClass('screen-four-rotateIn1');
            $('.xcyScreen-four-fans > li:nth-child(3),.xcyScreen-four-fans > li:nth-child(4),.xcyScreen-four-fans > li:nth-child(5)').removeClass('screen-four-rotateIn2');
            $('.xcyScreen-four-fans > li:nth-child(6),.xcyScreen-four-fans > li:nth-child(7),.xcyScreen-four-fans > li:nth-child(8)').removeClass('screen-four-rotateIn3');
            $('.xcyScreen-four-fans > li:nth-child(9),.xcyScreen-four-fans > li:nth-child(10)').removeClass('screen-four-rotateIn4');
            //对第六屏动画进行处理：
            $('.xcyScreen-six-title').removeClass('titleFadeIn');
            $('.xcyScreen-six-title-bigPhone').removeClass('screen-six-bounceInRight');
            $('.xcyScreen-six-title-pc').removeClass('screen-six-bounceInLeft');
            $('.xcyScreen-six-Mass').removeClass('screen-six-FadeIn1');
            $('.xcyScreen-six-monitoring').removeClass('screen-six-FadeIn2');
            $('.xcyScreen-six-Collaboration').removeClass('screen-six-FadeIn3');
            $('.xcyScreen-six-platform').removeClass('screen-six-FadeIn4');
            //自身动画
            $('.xcyScreen-five-title').addClass('titleFadeIn');
            $('.xcyScreen-five-MarsMan').addClass('screen-five-fadeInBottom');
            $('.xcyScreen-five-content').addClass('screen-five-fadeInTop');
            $('.xcyScreen-five-contentText1').addClass('screen-five-bounceInUp');
            $('.xcyScreen-five-contentText2').addClass('screen-five-bounceInDown');
            $('.xcyScreen-five-contentText3').addClass('screen-five-bounceInLeft');
            $('.xcyScreen-five-contentText4').addClass('screen-five-bounceInRight');
        }
        //对第六页进行特殊处理
        else if (swiper.activeIndex == 6) {
            //对第五屏的动画进行处理：
            $('.xcyScreen-five-title').removeClass('titleFadeIn');
            $('.xcyScreen-five-MarsMan').removeClass('screen-five-fadeInBottom');
            $('.xcyScreen-five-content').removeClass('screen-five-fadeInTop');
            $('.xcyScreen-five-contentText1').removeClass('screen-five-bounceInUp');
            $('.xcyScreen-five-contentText2').removeClass('screen-five-bounceInDown');
            $('.xcyScreen-five-contentText3').removeClass('screen-five-bounceInLeft');
            $('.xcyScreen-five-contentText4').removeClass('screen-five-bounceInRight');
            //对第七屏动画进行处理：
            $('.xcyScreen-seven-title').removeClass('titleFadeIn');
            $('.xcyScreen-seven-content-intel').removeClass('screen-seven-bounceInLeft1');
            $('.xcyScreen-seven-content-mazDa').removeClass('screen-seven-bounceInLeft2');
            $('.xcyScreen-seven-content-amazon').removeClass('screen-seven-bounceInLeft3');
            //自身动画
            $('.xcyScreen-six-title').addClass('titleFadeIn');
            $('.xcyScreen-six-title-bigPhone').addClass('screen-six-bounceInRight');
            $('.xcyScreen-six-title-pc').addClass('screen-six-bounceInLeft');
            $('.xcyScreen-six-Mass').addClass('screen-six-FadeIn1');
            $('.xcyScreen-six-monitoring').addClass('screen-six-FadeIn2');
            $('.xcyScreen-six-Collaboration').addClass('screen-six-FadeIn3');
            $('.xcyScreen-six-platform').addClass('screen-six-FadeIn4');
        }
        //对第七页进行特殊处理
        else if (swiper.activeIndex == 7) {
            //对第六屏的动画进行处理：
            $('.xcyScreen-six-title').removeClass('titleFadeIn');
            $('.xcyScreen-six-title-bigPhone').removeClass('screen-six-bounceInRight');
            $('.xcyScreen-six-title-pc').removeClass('screen-six-bounceInLeft');
            $('.xcyScreen-six-Mass').removeClass('screen-six-FadeIn1');
            $('.xcyScreen-six-monitoring').removeClass('screen-six-FadeIn2');
            $('.xcyScreen-six-Collaboration').removeClass('screen-six-FadeIn3');
            $('.xcyScreen-six-platform').removeClass('screen-six-FadeIn4');
            //对第八屏动画进行处理：
            $('.fixed-arrows > span').removeClass('changeFixed-arrows');
            $('.xcyScreen-eight-content').removeClass('xcyScreen-eight-centerFideIn');
            //自身动画
            $('.xcyScreen-seven-title').addClass('titleFadeIn');
            $('.xcyScreen-seven-content-intel').addClass('screen-seven-bounceInLeft1');
            $('.xcyScreen-seven-content-mazDa').addClass('screen-seven-bounceInLeft2');
            $('.xcyScreen-seven-content-amazon').addClass('screen-seven-bounceInLeft3');
        }
        //对第八页进行特殊处理
        else if (swiper.activeIndex == 8 || swiper.activeIndex == 0) {
            //对第七屏的动画进行处理：
            $('.xcyScreen-seven-title').removeClass('titleFadeIn');
            $('.xcyScreen-seven-content-intel').removeClass('screen-seven-bounceInLeft1');
            $('.xcyScreen-seven-content-mazDa').removeClass('screen-seven-bounceInLeft2');
            $('.xcyScreen-seven-content-amazon').removeClass('screen-seven-bounceInLeft3');
            //对第一屏动画进行处理：
            $('.scyScreen-one-top').removeClass('screen-one-topFadeIn');
            $('.scyScreen-one-bottom').removeClass('screen-one-fadeIn');
            //自身动画
            $('.fixed-arrows > span').addClass('changeFixed-arrows');
            $('.xcyScreen-eight-content').addClass('xcyScreen-eight-centerFideIn');
        }
    },

});
//点击播放器消除旋转动画
var audio = document.querySelector('.fixed-music').children[0];
var audioFlag = true;
$('.fixed-music').click(function () {
    if (audioFlag) {
        audio.pause();
        audioFlag = false;
        $('.fixed-music').css({
            '-webkit-AnimationPlayState': 'paused',
            '-moz-AnimationPlayState': 'paused',
        });
    } else {
        audio.play();
        audioFlag = true;
        $('.fixed-music').css({
            '-webkit-AnimationPlayState': 'running',
            '-moz-AnimationPlayState': 'running',
        });
    }
});



