//����showreelײ��ģ��
var moveContents = document.getElementsByClassName('move-content');
var showreelButtons = document.getElementsByClassName('showreel-bButton');
var showreels = document.getElementsByClassName('showreel');
for (var i = 0; i < showreelButtons.length; i++) {
    showreelButtons[i].index = i;
    var isDone = true;
    showreelButtons[i].onclick = function () {
        if (isDone) {
            myStrick(showreels[this.index], {
                'width': 640
            }, function () {
                isDone = false;
            });
            myStrick(moveContents[this.index], {
                'left':-500
            })
        } else {
            myStrick(showreels[this.index], {
                'width': 0
            }, function () {
                isDone = true;
            });
            myStrick(moveContents[this.index], {
                'left':0
            })
        }
    }
}

//��Ļ�л�����
var touchIconBs = document.getElementsByClassName('touchIconB');
var touchIconTs = document.getElementsByClassName('touchIconT');
var screens = [face, kill, power, resume, blogs, callMe];

//��Ļ�����л�����
for (var i = 0; i < touchIconBs.length; i++) {
    touchIconBs[i].index = i;
    touchIconBs[i].onclick = function () {
        var scrollTo = document.body || document.documentElement;
        myScrollTo(scrollTo, {
            'scrollTop': screens[this.index + 1].offsetTop
        });
    }
}
//��Ļ�����л�����
for (var i = 0; i < touchIconTs.length; i++) {
    touchIconTs[i].index = i;
    touchIconTs[i].onclick = function () {
        var scrollTo = document.body || document.documentElement;
        console.log(this.index);
        myScrollTo(scrollTo, {
            'scrollTop': screens[this.index].offsetTop
        });
    }
}

//������������ײ��ģ��
var experienceIcon = document.getElementById('experienceIcon');
var experience = document.getElementById('experience');
var isFinish = true;
    experienceIcon.onclick = function () {
    if (isFinish) {
        myStrick(experience, {
                "height": 200
            }, function () {
                isFinish = false;
            }
        )
    } else {
        myStrick(experience, {
                "height": -2
            }, function () {
                isFinish = true;
            }
        )
    }
}


//��ȡ��������lis��father
var lisFa = document.getElementById('LisFa');
var navLis = lisFa.children;
var navImgs = myBarScroll['getArrChilid'](navLis);

//ʵ�ֹ�������������ͼƬ���������½�
window.onscroll = function () {
    if (window.scrollY >= 0) {
        myBarScroll['myNavScroll'](navImgs, 0);
    }
    if (window.scrollY >= 710) {
        myBarScroll['myNavScroll'](navImgs, 1);
    }
    if (window.scrollY >= 710 * 2) {
        myBarScroll['myNavScroll'](navImgs, 2);
    }
    if (window.scrollY >= 710 * 3) {
        myBarScroll['myNavScroll'](navImgs, 3);
    }
    if (window.scrollY >= 710 * 4) {
        myBarScroll['myNavScroll'](navImgs, 4);
    }
    if (window.scrollY >= 710 * 5) {
        navImgs[5].style.top = ((window.scrollY - 710 * 5) / 710) * 40 + 'px';
    }
}


//ʵ�ֵ����ť����ָ����λ��
for (var i = 0; i < navLis.length; i++) {
    navLis[i].index = i;
    navLis[i].onclick = function () {
        myBarScroll['myBarScroll'](this.index * 710)
    }
}
