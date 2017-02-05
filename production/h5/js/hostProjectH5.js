//Ŭ�����ܶ���
var swiper = new Swiper('.swiper-container', {
    //��ʾԲ����������Ӧ
    pagination: '.swiper-pagination',
    paginationClickable: true,
    //���lis������ʾ����Ӱ��
    paginationHide: true,
    //��¼ê��
    hashnav: true,
    //��ֱ�л�����ˮƽ�л�
    direction: 'vertical',
    //�ظ�ѭ���л�
    loop: true,
    //ָ�����������״
    grabCursor: true,
    //�Զ���Ӧ�ĸ߶�
    autoHeight: true,

    //trueʱ��ֹtouchmoveð���¼���
    touchMoveStopPropagation: false,
    //����ʵ���϶���С�ı����Ϳ�����������
    longSwipesRatio: 0.1,
    //��Ե�ֿ�
    resistance: false,

    //���������뻬������ı���
    touchRatio: 1,

    //���̿���total�л�
    keyboardControl: true,
    //�����ֹ����л�ͼƬ
    mousewheelControl: true,
    //Ĭ��Ϊtrue��Swiper��ǿ�Ƽ�������ͼƬ��
    preloadImages: false,


    //������
    observer: true,
    observeParents: true,
    //�ص�����������Ļ�л���ɣ�ִ�����������
    onSlideChangeEnd: function (swiper) {
        //�Ե�һҳ�������⴦��
        if (swiper.activeIndex == 1 || swiper.activeIndex == 9) {
            //�Եڰ����������д���
            $('.fixed-arrows > span').removeClass('changeFixed-arrows');
            $('.xcyScreen-eight-content').removeClass('xcyScreen-eight-centerFideIn');
            //�Եڶ����Ķ������д���
            $('.xcyScreen-two-title,.xcyScreen-two-main1').removeClass('titleFadeIn');
            $('.xcyScreen-two-main2').removeClass('screen-two-blink');

            //������
            $('.scyScreen-one-top').addClass('screen-one-topFadeIn');
            $('.scyScreen-one-bottom').addClass('screen-one-fadeIn');

        }
        //�Եڶ�ҳ�������⴦��
        else if (swiper.activeIndex == 2) {
            //�Ե�һ���������д���
            $('.scyScreen-one-top').removeClass('screen-one-topFadeIn');
            $('.scyScreen-one-bottom').removeClass('screen-one-fadeIn');
            //�Ե������������д���
            $('.xcyScreen-three-title').removeClass('titleFadeIn');
            $('.xcyScreen-three-title').removeClass('titleFadeIn');
            $('.xcyScreen-three-mian1').removeClass('xcyScreen-three-fadeInLeftBig1');
            $('.xcyScreen-three-mian3').removeClass('xcyScreen-three-fadeInLeftBig2');
            $('.xcyScreen-three-mian2').removeClass('xcyScreen-three-fadeInRightBig1');
            $('.xcyScreen-three-mian4').removeClass('xcyScreen-three-fadeInRightBig2');
            //������
            $('.xcyScreen-two-title,.xcyScreen-two-main1').addClass('titleFadeIn');
            $('.xcyScreen-two-main2').addClass('screen-two-blink');
        }
        //�Ե���ҳ�������⴦��
        else if (swiper.activeIndex == 3) {
            //�Եڶ����Ķ������д���
            $('.xcyScreen-two-title,.xcyScreen-two-main1').removeClass('titleFadeIn');
            $('.xcyScreen-two-main2').removeClass('screen-two-blink');
            //�Ե������������д���
            $('.fixed-arrows > span').removeClass('changeFixed-arrows');
            $('.xcyScreen-four-title').removeClass('titleFadeIn');
            $('.xcyScreen-four-center').removeClass('screen-four-centerFideIn');
            $('.xcyScreen-four-fans > li:nth-child(1),.xcyScreen-four-fans > li:nth-child(2)').removeClass('screen-four-rotateIn1');
            $('.xcyScreen-four-fans > li:nth-child(3),.xcyScreen-four-fans > li:nth-child(4),.xcyScreen-four-fans > li:nth-child(5)').removeClass('screen-four-rotateIn2');
            $('.xcyScreen-four-fans > li:nth-child(6),.xcyScreen-four-fans > li:nth-child(7),.xcyScreen-four-fans > li:nth-child(8)').removeClass('screen-four-rotateIn3');
            $('.xcyScreen-four-fans > li:nth-child(9),.xcyScreen-four-fans > li:nth-child(10)').removeClass('screen-four-rotateIn4');
            //������
            $('.xcyScreen-three-title').addClass('titleFadeIn');
            $('.xcyScreen-three-mian1').addClass('xcyScreen-three-fadeInLeftBig1');
            $('.xcyScreen-three-mian3').addClass('xcyScreen-three-fadeInLeftBig2');
            $('.xcyScreen-three-mian2').addClass('xcyScreen-three-fadeInRightBig1');
            $('.xcyScreen-three-mian4').addClass('xcyScreen-three-fadeInRightBig2');

        }
        //�Ե���ҳ�������⴦��
        else if (swiper.activeIndex == 4) {
            //�Ե������Ķ������д���
            $('.xcyScreen-three-title').removeClass('titleFadeIn');
            $('.xcyScreen-three-title').removeClass('titleFadeIn');
            $('.xcyScreen-three-mian1').removeClass('xcyScreen-three-fadeInLeftBig1');
            $('.xcyScreen-three-mian3').removeClass('xcyScreen-three-fadeInLeftBig2');
            $('.xcyScreen-three-mian2').removeClass('xcyScreen-three-fadeInRightBig1');
            $('.xcyScreen-three-mian4').removeClass('xcyScreen-three-fadeInRightBig2');
            //�Ե������������д���
            $('.xcyScreen-five-title').removeClass('titleFadeIn');
            $('.xcyScreen-five-MarsMan').removeClass('screen-five-fadeInBottom');
            $('.xcyScreen-five-content').removeClass('screen-five-fadeInTop');
            $('.xcyScreen-five-contentText1').removeClass('screen-five-bounceInUp');
            $('.xcyScreen-five-contentText2').removeClass('screen-five-bounceInDown');
            $('.xcyScreen-five-contentText3').removeClass('screen-five-bounceInLeft');
            $('.xcyScreen-five-contentText4').removeClass('screen-five-bounceInRight');
            //������
            $('.fixed-arrows > span').addClass('changeFixed-arrows');
            $('.xcyScreen-four-title').addClass('titleFadeIn');
            $('.xcyScreen-four-center').addClass('screen-four-centerFideIn');
            $('.xcyScreen-four-fans > li:nth-child(1),.xcyScreen-four-fans > li:nth-child(2)').addClass('screen-four-rotateIn1');
            $('.xcyScreen-four-fans > li:nth-child(3),.xcyScreen-four-fans > li:nth-child(4),.xcyScreen-four-fans > li:nth-child(5)').addClass('screen-four-rotateIn2');
            $('.xcyScreen-four-fans > li:nth-child(6),.xcyScreen-four-fans > li:nth-child(7),.xcyScreen-four-fans > li:nth-child(8)').addClass('screen-four-rotateIn3');
            $('.xcyScreen-four-fans > li:nth-child(9),.xcyScreen-four-fans > li:nth-child(10)').addClass('screen-four-rotateIn4');

        }
        //�Ե���ҳ�������⴦��
        else if (swiper.activeIndex == 5) {
            //�Ե������Ķ������д���
            $('.fixed-arrows > span').removeClass('changeFixed-arrows');
            $('.xcyScreen-four-title').removeClass('titleFadeIn');
            $('.xcyScreen-four-center').removeClass('screen-four-centerFideIn');
            $('.xcyScreen-four-fans > li:nth-child(1),.xcyScreen-four-fans > li:nth-child(2)').removeClass('screen-four-rotateIn1');
            $('.xcyScreen-four-fans > li:nth-child(3),.xcyScreen-four-fans > li:nth-child(4),.xcyScreen-four-fans > li:nth-child(5)').removeClass('screen-four-rotateIn2');
            $('.xcyScreen-four-fans > li:nth-child(6),.xcyScreen-four-fans > li:nth-child(7),.xcyScreen-four-fans > li:nth-child(8)').removeClass('screen-four-rotateIn3');
            $('.xcyScreen-four-fans > li:nth-child(9),.xcyScreen-four-fans > li:nth-child(10)').removeClass('screen-four-rotateIn4');
            //�Ե������������д���
            $('.xcyScreen-six-title').removeClass('titleFadeIn');
            $('.xcyScreen-six-title-bigPhone').removeClass('screen-six-bounceInRight');
            $('.xcyScreen-six-title-pc').removeClass('screen-six-bounceInLeft');
            $('.xcyScreen-six-Mass').removeClass('screen-six-FadeIn1');
            $('.xcyScreen-six-monitoring').removeClass('screen-six-FadeIn2');
            $('.xcyScreen-six-Collaboration').removeClass('screen-six-FadeIn3');
            $('.xcyScreen-six-platform').removeClass('screen-six-FadeIn4');
            //������
            $('.xcyScreen-five-title').addClass('titleFadeIn');
            $('.xcyScreen-five-MarsMan').addClass('screen-five-fadeInBottom');
            $('.xcyScreen-five-content').addClass('screen-five-fadeInTop');
            $('.xcyScreen-five-contentText1').addClass('screen-five-bounceInUp');
            $('.xcyScreen-five-contentText2').addClass('screen-five-bounceInDown');
            $('.xcyScreen-five-contentText3').addClass('screen-five-bounceInLeft');
            $('.xcyScreen-five-contentText4').addClass('screen-five-bounceInRight');
        }
        //�Ե���ҳ�������⴦��
        else if (swiper.activeIndex == 6) {
            //�Ե������Ķ������д���
            $('.xcyScreen-five-title').removeClass('titleFadeIn');
            $('.xcyScreen-five-MarsMan').removeClass('screen-five-fadeInBottom');
            $('.xcyScreen-five-content').removeClass('screen-five-fadeInTop');
            $('.xcyScreen-five-contentText1').removeClass('screen-five-bounceInUp');
            $('.xcyScreen-five-contentText2').removeClass('screen-five-bounceInDown');
            $('.xcyScreen-five-contentText3').removeClass('screen-five-bounceInLeft');
            $('.xcyScreen-five-contentText4').removeClass('screen-five-bounceInRight');
            //�Ե������������д���
            $('.xcyScreen-seven-title').removeClass('titleFadeIn');
            $('.xcyScreen-seven-content-intel').removeClass('screen-seven-bounceInLeft1');
            $('.xcyScreen-seven-content-mazDa').removeClass('screen-seven-bounceInLeft2');
            $('.xcyScreen-seven-content-amazon').removeClass('screen-seven-bounceInLeft3');
            //������
            $('.xcyScreen-six-title').addClass('titleFadeIn');
            $('.xcyScreen-six-title-bigPhone').addClass('screen-six-bounceInRight');
            $('.xcyScreen-six-title-pc').addClass('screen-six-bounceInLeft');
            $('.xcyScreen-six-Mass').addClass('screen-six-FadeIn1');
            $('.xcyScreen-six-monitoring').addClass('screen-six-FadeIn2');
            $('.xcyScreen-six-Collaboration').addClass('screen-six-FadeIn3');
            $('.xcyScreen-six-platform').addClass('screen-six-FadeIn4');
        }
        //�Ե���ҳ�������⴦��
        else if (swiper.activeIndex == 7) {
            //�Ե������Ķ������д���
            $('.xcyScreen-six-title').removeClass('titleFadeIn');
            $('.xcyScreen-six-title-bigPhone').removeClass('screen-six-bounceInRight');
            $('.xcyScreen-six-title-pc').removeClass('screen-six-bounceInLeft');
            $('.xcyScreen-six-Mass').removeClass('screen-six-FadeIn1');
            $('.xcyScreen-six-monitoring').removeClass('screen-six-FadeIn2');
            $('.xcyScreen-six-Collaboration').removeClass('screen-six-FadeIn3');
            $('.xcyScreen-six-platform').removeClass('screen-six-FadeIn4');
            //�Եڰ����������д���
            $('.fixed-arrows > span').removeClass('changeFixed-arrows');
            $('.xcyScreen-eight-content').removeClass('xcyScreen-eight-centerFideIn');
            //������
            $('.xcyScreen-seven-title').addClass('titleFadeIn');
            $('.xcyScreen-seven-content-intel').addClass('screen-seven-bounceInLeft1');
            $('.xcyScreen-seven-content-mazDa').addClass('screen-seven-bounceInLeft2');
            $('.xcyScreen-seven-content-amazon').addClass('screen-seven-bounceInLeft3');
        }
        //�Եڰ�ҳ�������⴦��
        else if (swiper.activeIndex == 8 || swiper.activeIndex == 0) {
            //�Ե������Ķ������д���
            $('.xcyScreen-seven-title').removeClass('titleFadeIn');
            $('.xcyScreen-seven-content-intel').removeClass('screen-seven-bounceInLeft1');
            $('.xcyScreen-seven-content-mazDa').removeClass('screen-seven-bounceInLeft2');
            $('.xcyScreen-seven-content-amazon').removeClass('screen-seven-bounceInLeft3');
            //�Ե�һ���������д���
            $('.scyScreen-one-top').removeClass('screen-one-topFadeIn');
            $('.scyScreen-one-bottom').removeClass('screen-one-fadeIn');
            //������
            $('.fixed-arrows > span').addClass('changeFixed-arrows');
            $('.xcyScreen-eight-content').addClass('xcyScreen-eight-centerFideIn');
        }
    },

});
//���������������ת����
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



