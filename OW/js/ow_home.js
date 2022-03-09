$(function (){
    // 不知道为啥不写这个会报错QAQ
    "use strict"
    if(window.screen.width<768){
        $('.hero_ow_nav_item>li:nth-child(1)>a').addClass('hero_ow_nav_list_checked_web_style');
    }else {
        // $('.hero_ow_nav_item>li:nth-child(0)>a').addClass('hero_ow_nav_list_checked_web_style');
    }
    // 暂停播放视频
    function playStopVideo(){
        // 获取视频
        var video = $('.indexOW_video').get(0);
        //获取暂停播放按钮的图片
        var playStopImage = $('.play_stop_video_img');
        //获取暂停播放按钮的文字
        var videoText = $('.play_stop_video_text');
        //get(0)将对象转为原生js对象,所以下方可以用jq获取，使用js代码，暂停播放视频
        $('.play_stop_video').click(function (){
            if(video.paused){
                video.play();
                playStopImage.css('background-position','0 0')
                videoText.html('暂停');
            }else{
                video.pause();
                playStopImage.css('background-position','0 -32px')
                videoText.html('播放');
            }
        })
    }
    //获取选中hero_icon中的文字/介绍，并且赋值在展示板块
    function selectHeroIcon(){
        //数组储存 英雄介绍
        var heroIntroduceArr = [
            '性格古怪的天体物理学家，在一场轨道空间站中的实验事故之后，被改造成了活体兵器。',
            '驾驶这台滚动式坦克的是一只经过基因改造的仓鼠，他来自月球基地。',
            '一名前职业玩家，而现在则利用自己的技巧驾驶一台尖端机甲保卫国家。',
            '维护努巴尼秩序并保护努巴尼人民的维和机器人。',
            '一名属于过去的勇士，时刻铭记着骑士的信条：无畏、公正、勇敢。',
            '一名残暴的杀手，因残忍和肆意破坏而臭名昭著。',
            '一只经过基因改造，拥有高等智慧的大猩猩，也是一位出色的科学家和代表着人类潜力的勇士。',
            '世界上最强壮的女性之一。为了保卫祖国，毅然放弃了个人荣誉。',
            '“回声”是一台可以自行进化的机器人，装载了能够高速自我调整的人工智能，代表着科技的最尖端水平。',
            '肆虐美国西南部、臭名昭著的死局帮的首脑。',
            '一位利用个人头脑、魅力和蛮力来创建一个更强大世界的战术家。',
            '一名可以切换形态的机器人，为自然着迷而探索世界，同时也对人类保持着戒心。',
            '一名致命的半机械忍者，通过他的机械躯体寻得了身心的和谐。',
            '一名强大而致命的弓箭大师。',
            '一名满脑子都是爆炸的变态疯子，只为了混乱和破坏而活。',
            '一名亡命天涯的神枪手，以自己的方式伸张正义。',
            '一名能够操控天气，为了保护环境而选择战斗的科学家。',
            '一名恪守岗位的战士，用实验性的“猛禽”作战服确保天空的安全。',
            '一名无情的杀手，一直在追杀前守望先锋的特工们。',
            '一名试图自己将守望先锋敌人绳之于法的独行侠。',
            '臭名昭著的黑客，沉迷于揭秘——及其带来的权力。',
            '一名通过控制高强度光束，将世界改造成她心目中完美、有序的模样的光子建筑师。',
            '一名天才工程师，可以在战场上打造武器系统。',
            '一名前守望先锋特工，同时也是可以穿梭时间的充满正义的冒险家。',
            '一名完美的杀手：耐心、果断、无情。没有任何情感且事后毫无悔意。',
            '一位配备了新型治疗设备的精英战地医疗兵。',
            '守望先锋的创始成员之一，“起死回生”重返战场保护亲人和朋友。',
            '一位渴望冒险，希望惩强扶弱的重装战士。',
            '一位国际名人，通过音乐和巡演激发社会正能量。',
            '一名集顶尖的治疗者、出色的科学家和坚定的和平主义者于一身的守护天使。',
            '一位天才基因科学家，无视道德的束缚，一心追求科学发现。',
            '一位游走于世界寻找灵魂升华之道的机械僧侣。'
        ];
        //数组储存 英雄图片
        var heroBgImgArr = [
            '西格玛.png',
            '破坏球.png',
            'D.Va.png',
            '奥丽莎.png',
            '莱因哈特.png',
            '路霸.png',
            '温斯顿.png',
            '查莉娅.png',
            '回声.png',
            '艾什.png',
            '末日铁拳.png',
            '堡垒.png',
            '源氏.png',
            '半藏.png',
            '狂鼠.png',
            '卡西迪.png',
            '美.png',
            '法老之鹰.png',
            '死神.png',
            '士兵：76.png',
            '黑影.png',
            '秩序之光.png',
            '托比昂.png',
            '猎空.png',
            '黑百合.png',
            '巴蒂斯特.png',
            '安娜.png',
            '布丽吉塔.png',
            '卢西奥.png',
            '天使.png',
            '莫伊拉.png',
            '禅雅塔.png'
        ];
        //数组储存英雄
        //获取hero_icon
        var heroIcon = $('.hero_icon_list');
        //获取展示 英雄名称/介绍/图片
        var heroShowName = $('.hero_name_introduction_bg>.hero_introductionBox>h2');
        var heroShowIntroduction = $('.hero_name_introduction_bg>.hero_introductionBox>div');
        var heroShowBgImg = $('.hero_introduction_image');
        //第一个元素直接添加，修改样式
        var firstHeroName = heroBgImgArr[0].substring(0,heroBgImgArr[0].length-4);
        heroShowName.text(firstHeroName);
        heroShowIntroduction.text(heroIntroduceArr[0]);
        heroShowBgImg.css({
            'background':'url(../img/hero/'+heroBgImgArr[0]+') no-repeat'
        })
        if (window.screen.width>=991){
            heroIcon.eq(0).find('.hero_icon_imgBox').addClass('hero_icon_imgBox_hover');
            heroIcon.eq(0).find('.hero_icon_name').addClass('hero_icon_name_hover');
            heroIcon.hover(function (){
                //获取选中heroIcon的英雄名称
                var heroIconName = $(this).find('.hero_icon_name').text();
                //赋值
                heroShowIntroduction.text(heroIntroduceArr[$(this).index()]);
                heroShowName.text(heroIconName);
                heroShowBgImg.css({
                    'background':'url(../img/hero/'+heroBgImgArr[$(this).index()]+') no-repeat'
                })
                //移除所有类样式
                heroIcon.find('.hero_icon_imgBox').removeClass('hero_icon_imgBox_hover');
                heroIcon.find('.hero_icon_name').removeClass('hero_icon_name_hover');
                //改变hover后样式
                $(this).find('.hero_icon_imgBox').addClass('hero_icon_imgBox_hover');
                $(this).find('.hero_icon_name').addClass('hero_icon_name_hover');
            })
            //根据点击，进行添加移除样式
            heroIcon.click(function (){
                //移除所有类样式
                heroIcon.find('.hero_icon_imgBox').removeClass('hero_icon_imgBox_hover1');
                heroIcon.find('.hero_icon_name').removeClass('hero_icon_name_hover1');
                //改变hover后样式
                $(this).find('.hero_icon_imgBox').addClass('hero_icon_imgBox_hover1');
                $(this).find('.hero_icon_name').addClass('hero_icon_name_hover1');
            })
        }
    }
    selectHeroIcon();
    playStopVideo();

    if(window.screen.width<768){
        //OW导航，首页 li 默认样式
        $('.hero_ow_nav_list:first').children('a').addClass('bz_click_a_color');
        //判断更改视频链接
        $('.indexOW_video>source').attr('src','../img/ow_home/homeVideo_mobile.mp4');
    }else {
        //判断更改视频链接
        $('.indexOW_video>source').attr('src','../img/ow_home/homeVideo.mp4');
    }
})
