/**
 * Created by Administrator on 2016/6/2 0002.
 */
        //��ҳ��������д���
        var bodyStroll = {};
        //���ݽ��г�ʼ��
        bodyStroll.currY = 0;
        bodyStroll.startY = 0;
        /*��ʼY����*/
        bodyStroll.moveY = 0;
        /*����Y������*/
        bodyStroll.distanceY = 0;
        /*�ı�ľ���*/
        $('.myPrize')[0].addEventListener('touchstart', function (e) {
            var ev = e || window.event;
            //������ָ��ʼ�ƶ��ľ���
            bodyStroll.startY = ev.touches[0].clientY;

        });

        $('.myPrize')[0].addEventListener('touchmove', function (e) {
            var ev = e || window.event;
            bodyStroll.moveY = e.touches[0].clientY;
            bodyStroll.distanceY = bodyStroll.moveY - bodyStroll.startY;
                /*�ı�ľ���*/
                $('.myPrize')[0].style.webkitTransform = 'translateY(' + (bodyStroll.currY + bodyStroll.distanceY) + 'px)';
                /*����*/
                $('.myPrize')[0].style.transform = 'translateY(' + (bodyStroll.currY + bodyStroll.distanceY) + 'px)';
        });

        $('.myPrize')[0].addEventListener('touchend', function (e) {
            var ev = e || window.ev;
            bodyStroll.currY = bodyStroll.currY + bodyStroll.distanceY;
        });
