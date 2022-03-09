$(function (){
    // 不知道为啥不写这个会报错
    "use strict";
    /*jshint esversion: 6 */
    //不知道为啥在编辑器Vue报错未定义，但是页面能渲染，控制台也不报错，先忽略吧
    new Vue({
        el:'.body,.OW_index_video,.hero_icon_item',
        data:{
            //通用数据
            navOW:[
                {
                    'name':'首页',
                    'a':'../html/ow_home.html'
                },
                {
                    'name':'游戏',
                    'a':'#'
                },
                {
                    'name':'英雄',
                    'a':'../html/ow_hero.html'
                },
                {
                    'name':'活动',
                    'a':'#'
                },
                {
                    'name':'视频图片',
                    'a':'#'
                },
                {
                    'name':'新闻',
                    'a':'#'
                },
                {
                    'name':'下载',
                    'a':'#'
                },
                {
                    'name':'电子竞技',
                    'a':'#'
                },
                {
                    'name':'社区',
                    'a':'#'
                }
            ],
            hideLi:[
                {
                    'liName':[
                        {
                           'text':"概述"
                        },
                        {
                            'text':"地图"
                        },
                        {
                            'text':"赞赏系统"
                        }
                    ]
                },
                {
                    'liName':[
                        {
                            'text':"夏季运动会"
                        },
                        {
                            'text':"行动档案"
                        },
                        {
                            'text':"欢度新春"
                        },
                        {
                            'text':"雪国仙境"
                        },
                        {
                            'text':"万圣夜惊魂"
                        },
                        {
                            'text':"周年庆典"
                        }
                    ]
                },
                {
                    'liName':[
                        {
                            'text':"新闻"
                        },
                        {
                            'text':"补丁"
                        }
                    ]
                },
                {
                    'liName':[
                        {
                            'text':"概述"
                        },
                        {
                            'text':"守望先锋公开争霸赛"
                        },
                        {
                            'text':"守望先锋挑战者选拔赛"
                        },
                        {
                            'text':"守望先锋挑战者系列赛"
                        },
                        {
                            'text':"守望先锋联赛"
                        }
                    ]
                },
                {
                    'liName':[
                        {
                            'text':"生涯数据"
                        },
                        {
                            'text':"我们身边的英雄"
                        },
                        {
                            'text':"论坛"
                        }
                    ]
                }
            ],
            headerHiddenImg:[
                {
                    'first':'ow.jpg',
                    'img':'ow_mb.png',
                    'text':'守望先锋',
                    'text2':''
                },
                {
                    'first':'world-of-warcraft.jpg',
                    'img':'ms_mb.png',
                    'text':'魔兽世界',
                    'text2':''
                },
                {
                    'first':'hearthstone.jpg',
                    'img':'ls_mb.png',
                    'text':'炉石传说',
                    'text2':''
                },
                {
                    'first':'heroes-of-the-storm.jpg',
                    'img':'fb_mb.png',
                    'text':'风暴英雄',
                    'text2':''
                },
                {
                    'first':'warcraft.jpg',
                    'img':'mszb_mb.png',
                    'text':'魔兽争霸',
                    'text2':'III：重制版™'
                },
                {
                    'first':'diablo-immortal.jpg',
                    'img':'ah_mb.png',
                    'text':'暗黑破坏神',
                    'text2':'不朽™'
                },
                {
                    'first':'diablo.jpg',
                    'img':'ahphs_mb.png',
                    'text':'暗黑破坏神',
                    'text2':'III'
                },
                {
                    'first':'starcraft.jpg',
                    'img':'xj_mb.png',
                    'text':'星际争霸',
                    'text2':'II'
                },
                {
                    'first':'starcraft-remastered.jpg',
                    'img':'xjzb_mb.png',
                    'text':'星际争霸:重置版'
                }
            ],
            shadeTow:[
                {
                    'img':'ow.png',
                    'text':'守望先锋',
                    'content':[
                        {
                            'img':'ow1.png'
                        },
                        {
                            'img':'ow2.png'
                        },
                        {
                            'img':'ow3.png'
                        }
                    ]
                },
                {
                    'img':'ls.png',
                    'text':'炉石传说',
                    'content':[
                        {
                            'img':'ls1.png'
                        },
                        {
                            'img':'ls2.png'
                        },
                        {
                            'img':'ls3.png'
                        }
                    ]
                },
                {
                    'img':'msworld.png',
                    'text':'魔兽世界',
                    'content':[
                        {
                            'img':'msworld1.png'
                        },
                        {
                            'img':'msworld2.png'
                        },
                        {
                            'img':'msworld3.png'
                        }
                    ]
                },
                {
                    'img':'ms.png',
                    'text':'魔兽争霸',
                    'content':[
                        {
                            'img':'ms1.png'
                        },
                        {
                            'img':'ms2.png'
                        }
                    ]
                },
                {
                    'img':'xj.png',
                    'text':'星际争霸',
                    'content':[
                        {
                            'img':'xj1.png'
                        },
                        {
                            'img':'xj2.png'
                        }
                    ]
                },
                {
                    'img':'fb.png',
                    'text':'风暴英雄',
                    'content':[
                        {
                            'img':'fb1.png'
                        }
                    ]
                }
            ],
            //判断页面宽度更改图片样式
            nn:true,
            //下方为首页数据
            hero:[
                {
                    name:'“西格玛”',
                    iconURL:'西格玛.png'
                },
                {
                    name:'“破坏球”',
                    iconURL:'破坏球.png'
                },
                {
                    name:'D.Va',
                    iconURL:'D.Va.png'
                },
                {
                    name:'奥丽莎',
                    iconURL:'奥丽莎.png'
                },
                {
                    name:'莱因哈特',
                    iconURL:'莱因哈特.png'
                },
                {
                    name:'“路霸”',
                    iconURL:'路霸.png'
                },
                {
                    name:'温斯顿',
                    iconURL:'温斯顿.png'
                },
                {
                    name:'查莉娅',
                    iconURL:'查莉娅.png'
                },
                {
                    name:'“回声”',
                    iconURL:'回声.png'
                },
                {
                    name:'艾什',
                    iconURL:'艾什.png'
                },
                {
                    name:'“末日铁拳”',
                    iconURL:'末日铁拳.png'
                },
                {
                    name:'“堡垒”',
                    iconURL:'堡垒.png'
                },
                {
                    name:'源氏',
                    iconURL:'源氏.png'
                },
                {
                    name:'半藏',
                    iconURL:'半藏.png'
                },
                {
                    name:'“狂鼠”',
                    iconURL:'狂鼠.png'
                },
                {
                    name:'卡西迪',
                    iconURL:'卡西迪.png'
                },
                {
                    name:'美',
                    iconURL:'美.png'
                },
                {
                    name:'“法老之鹰”',
                    iconURL:'法老之鹰.png'
                },
                {
                    name:'“死神”',
                    iconURL:'死神.png'
                },
                {
                    name:'“士兵：76”',
                    iconURL:'士兵：76.png'
                },
                {
                    name:'“黑影”',
                    iconURL:'黑影.png'
                },
                {
                    name:'“秩序之光”',
                    iconURL:'秩序之光.png'
                },
                {
                    name:'托比昂',
                    iconURL:'托比昂.png'
                },
                {
                    name:'“猎空”',
                    iconURL:'猎空.png'
                },
                {
                    name:'“黑百合”',
                    iconURL:'黑百合.png'
                },
                {
                    name:'巴蒂斯特',
                    iconURL:'巴蒂斯特.png'
                },
                {
                    name:'安娜',
                    iconURL:'安娜.png'
                },
                {
                    name:'布丽吉塔',
                    iconURL:'布丽吉塔.png'
                },
                {
                    name:'卢西奥',
                    iconURL:'卢西奥.png'
                },
                {
                    name:'“天使”',
                    iconURL:'天使.png'
                },
                {
                    name:'莫伊拉',
                    iconURL:'莫伊拉.png'
                },
                {
                    name:'禅雅塔',
                    iconURL:'禅雅塔.png'
                }
            ]
        },
        methods:{
            LiIndex(i){
              if(i===1){
                  return 0
              }else if(i===3){
                  return 1
              }else if(i===5){
                  return 2
              }else if(i===7){
                  return 3
              }else{
                  return 4
              }
          }
        },
        created(){
            if(window.screen.width < 1320){
                this.nn = false;
            }else {
                this.nn = true;
            }
        }
    })
    // js，jq循环添加css样式给暴雪nav
    function navBar(){
        var icon = $('.shade_content_box_bottom .icon')
        for (var n = 0;n<icon.length;n++){
            icon.eq(n).addClass('icon'+n)
        }
        var navBarA = $('.shade_content_box_top:nth-child(1)>a');
        var navBarA1 = $('.shade_box>div:nth-child(3) .shade_tow');

        for (var i =0;i<navBarA.length;i++){
            navBarA.eq(i).css({
                'animation-delay':"-"+(0.4 - 0.05*i)+'s'
            })
        }
        for (var x = 0 ; x<navBarA1.length;x++){
            navBarA1.eq(x).css({
                'animation-delay':"-"+(0.3 - 0.05*x)+'s'
            })
        }
        //hover效果
        var shadeTow = $('.shade_tow');
        shadeTow.hover(function (){
            shadeTow.children('a').next().css({
                'display':'block',
                'opacity':'0',
                'width':'0'
            })
            $(this).children('a').next().stop().animate({
                'opacity':'1',
                'width':'6.77vw'
            },250)
        },function (){
            $(this).children('a').next().stop().animate({
                'opacity':'0',
                'width':'0'
            },350,function (){
                $(this).css({
                    'display':'none'
                })
            })
        })
    }
    //暴雪导航二级列表点击,并且出现遮罩
    function blGameNav(){
        //获取arrow图标
        var arrow = $('.battlenet_icon');
        //获取遮罩
        var mask = $('.shade');
        //获取遮罩后出现的子元素
        var maskHidden = $('.shade_container');
        //对应li元素
        var li = $('.OW_nav_item>li');
        //首个li元素
        var liFirst = li.eq(1)
        //找到图标的父级元素，添加点击事件，控制遮罩和arrow图标旋转
        arrow.parent().parent('li').click(function (){
            //当前点击事件下方的arrow图标元素
            var thisArrow = $(this).children().children().eq(1);
            //此方法用于获取，对象相对于视窗口的位置left,top,bottom,right
            // getBoundingClientRect().left or right or top or bttom
            var thisLeft = thisArrow.get(0).getBoundingClientRect().left;
            //获取需要出现的内容
            var shadeContent = $('.shade_content');
            var shadeContainer = $('.shade_container');
            var shadeBox = $('.shade_box');
            //让遮罩下方的图标跟随点击事件位置改变left位置
            if($(this).index()===2 && $(window).width()>=1600){
                thisLeft -= (($(window).width()-1600)/2)-2;
            }
            $('.shade_div_border').css('left',thisLeft);
            //清除transform
            arrow.not(thisArrow).css({
                'transform':''
            });
            shadeContent.hide();
            shadeContainer.removeClass('shade_three');
            shadeBox.removeClass('shade_box_three');
            shadeContent.removeClass('shade_content_three');
            if($(this).index()===1){
                shadeContent.eq(0).show();
            }else if($(this).index()===4){
                shadeContent.eq(1).show();
            }else if($(this).index()===2){
                shadeContainer.addClass('shade_three');
                shadeBox.addClass('shade_box_three');
                shadeContent.eq(2).addClass('shade_content_three').show();
            }else {
                return false;
            }
            //判断transform的值
            if(thisArrow.css('background-position')==="-147px -131px"){
                //先清除，再点击后改变箭头图标
                $('.battlenet_icon').removeClass('battlenet_this_arrow_position')
                thisArrow.addClass('battlenet_this_arrow_position');
                mask.show();
                maskHidden.show()
                //改变之前移除所有元素添加的class
                li.children('a').removeClass('battlenet_this_a_color');
                // 改变当前点击的颜色
                $(this).children('a').addClass('battlenet_this_a_color');
                //改变除首个li以外的字体颜色
                li.not(liFirst).children('a').addClass('battlenet_div_clickColor');
                liFirst.children('a').addClass('battlenet_this_first_a_color');
            }else {
                thisArrow.removeClass('battlenet_this_arrow_position')
                mask.hide();
                maskHidden.hide();
                //改变除首个li以外的字体颜色
                li.not(liFirst).children('a').removeClass('battlenet_div_clickColor');
            }
            //点击遮罩元素隐藏
            var c = thisArrow;
            mask.click(function (){
                $(this).hide();
                c.removeClass('battlenet_this_arrow_position')
                li.not(liFirst).children('a').removeClass('battlenet_div_clickColor');
                maskHidden.hide();
            })
            //点击到遮罩元素子级后终止遮罩元素的隐藏clck
            $('.shade_container').click(function (e){
                e.stopPropagation();
            })
        })
    }
    //添加arrow箭头，取消掉拥有箭头图标的所有a标签的跳转功能，并且删除多余元素
    function cancelArrow(){
        //为Vue指定元素添加箭头图标
        if (window.screen.width>=768){
            $('.hero_ow_nav_list:first').remove()
            $('.hero_ow_nav_list:nth-child(odd)>a').append('<div class="hero_ow_nav_list_img"></div>')
        }else {
            $('.hero_ow_nav_list:nth-child(even)>a').append('<div class="hero_ow_nav_list_img"></div>')

        }
        $('.hero_ow_nav_list:last-child>a').append('<div class="hero_ow_nav_list_img"></div>')
        //获取arrow箭头元素
        var arrow1 = $('.battlenet_icon');
        var arrow2 = $('.hero_ow_nav_list_img');
        //获取a标签元素
        var aHref1 = $('.OW_nav_list>a');
        var aHref2 = $('.hero_ow_nav_list>a');
        //寻找箭头元素的父级a元素，并且删除href，实现禁用跳转
        arrow1.parent(aHref1).removeAttr('href');
        arrow2.parent(aHref2).removeAttr('href');
        //忘记加上target='_blank'了...这里给他加上QAQ
        aHref1.attr('target','_blank');
        //用于删除Vue循环后多余的二级菜单
        //删除双数指定li元素，除了最后一个li元素的ul子级
        if (window.screen.width>=768){
            $('.hero_ow_nav_list:nth-child(even)').not($('.hero_ow_nav_list:last-child')).children('ul').remove()
        }else {
            $('.hero_ow_nav_list:nth-child(odd)').not($('.hero_ow_nav_list:last-child')).children('ul').remove()
        }

    }
    //OW官网导航点击事件：展开收起二级列表
    function owShowNav(){
        var arrow2 = $('.hero_ow_nav_list_img');
        var aImg = '.hero_ow_nav_list_img'
        var aHref2 = $('.hero_ow_nav_list>a');//用作if判断
        //守望先锋官网导航的二级列表点击事件
        arrow2.parent(aHref2).click(function (){
            var navBgcolor = $(this).parent('li').css('background-color');
            var mobileHideBgColor = $(this).next('ul').children('li').children('a');
            var notThisMbHideBgColor = $('.hero_ow_nav_hide_list').children('a');
            if(window.screen.width>=768 ? navBgcolor === 'rgb(242, 241, 237)' : mobileHideBgColor.css('background-color') === 'rgb(53, 60, 66)'){
                if (window.screen.width>=768){
                    $(this).parent('li').css({
                        'background-color':'#353c42'
                    }).children().css({
                        'color':'#f7931e'
                    })
                }else {
                    notThisMbHideBgColor.css('background-color','rgb(53, 60, 66)');
                    mobileHideBgColor.css('background-color','#212529');
                }
                $(this).parent('li').children().children(aImg).css({
                    'transform':'rotate(180deg)',
                    'background':'url("../sprite_icon/nav_arrow.png") no-repeat 0 -8px',
                    'transition':'transform 0.3s'
                });
                aHref2.not(this).parent('li').css({
                    'background-color':''
                }).children().css({
                    'color':''
                }).children(aImg).css({
                    'transform':'',
                    'background':''
                })
                //出现二级菜单
                $(this).parent().children('ul').show();
                //隐藏除了本身以外的二级菜单
                aHref2.not(this).parent().children('ul').hide();
            }else{
                if(window.screen.width<768){
                    notThisMbHideBgColor.css('background-color','rgb(53, 60, 66)')
                }
                $(this).parent('li').css({
                    'background-color':''
                }).children().css({
                    'color':''
                }).children(aImg).css({
                    'transform':'',
                    'background':''
                })
                //隐藏二级菜单
                $(this).parent().children('ul').hide()
            }
        })
    }
    //backTop click功能获取当前页面滚动条位置，显示隐藏backTOP
    function backTop(){
        // emmm返回顶部代码在navOW.js中
        var backtop = $('.backTOP');
        backtop.click(function (){
            var backScroll = document.documentElement.scrollTop;
            $('html,body').animate({
                'scrollTop':'0px'
            },backScroll/5)
        })
    }
    backTop();
    //滚轮事件控制OW导航栏位置
    function owNavMousewheel(){
        var heroOwNav =  $('.hero_ow_nav');
        if(window.screen.width>=768){
            heroOwNav.css({
                'margin-left': '-'+heroOwNav.width()/2+'px'
            })
        }
        window.onload = window.onscroll = function (){
            //获取当前屏幕宽度
            var thisScreen = window.screen.width
            var scrollT = document.documentElement.scrollTop;
            var backtop = $('.backTOP')
            if(thisScreen>=768){
                if(scrollT>=40){
                    heroOwNav.css({
                        'max-width':'unset',
                        'top':'0',
                        'left':'0',
                        'transition':'all 0.15s',
                        'margin-left':''
                    })
                }else {
                    heroOwNav.css({
                        'max-width':'',
                        'top':'',
                        'left':'',
                        'transition':'',
                        'margin-left':'-'+heroOwNav.width()/2+'px'
                    })
                }
            }
            //返回顶部
            if(scrollT>100){
                backtop.css({
                    'visibility':'visible'
                })
            }else {
                backtop.css({
                    'visibility':'hidden'
                })
            }
        }
    }
    $('.hero_ow_nav_logo').click(function (){
        window.location.href='../html/ow_home.html';
    })
    navBar();
    blGameNav();
    cancelArrow();
    owShowNav();
    owNavMousewheel()


    /*

        MobileFunction

        哎呀呀，忘记给手机端顶部中间的LOGO（2）写a标签了，html更改太麻烦，索性使用js了
                ↓
                ↓
                ↓
     */
    $('.iconLogo').eq(1).click(function (){
        window.location.href='../html/ow_home.html';
    })
    //更改电脑端导航购买->立即购买
    function changeMobile(){
        //获取导航栏购买按钮
        var buyBtn = $('.hero_ow_nav_buyBtn>a');
        buyBtn.text('立即购买')
    }
    /*
        封装navBarMode()
        navBarMode(参数1:动画方向,参数2:触发对象,参数3：被执行对象,参数4:执行时间,参数5:打开或关闭(0,1---0为打开1为关闭),参数6:遮罩名)     参数6:遮罩名,可选，其余必选
     */
    function navBarMode(dir,doc,doc1,dis,time,mode,shade){
        var data = {},attr;
        attr = dir;
        data[attr] = dis;
        if (mode === 0){
            doc.click(function (){
                doc1.css({
                    'display':'block'
                }).stop().animate(data,time);
                shade.show();
            })
        }else if(mode === 1){
            doc.click(function (){
                doc1.animate(data,time,function (){
                    doc1.css('display','none');
                })
                shade.hide();
            })
        }else{
            alert('参数5:mode为执行方式,只能为数字类型0/1,0打开,1为关闭');
        }
    }
    //守望先锋导航  手机端关闭导航按钮
    function offOwNav(){
        var offOwDiv = $('.hero_ow_nav');
        navBarMode('left',$('.offNav_mobile,.shade,.blizzard_show_owNavbar'),offOwDiv,'-'+offOwDiv.width()+'px',300,1,$('.shade'));
    }
    //暴雪导航  手机端关闭导航按钮
    function offNav(){
        var navBarBz = $('.mb_bz_header_box');
        navBarMode('right',$('.offNav_bz,.shade,.click_show_owNavbar'),navBarBz,'-'+navBarBz.width()+'px',300,1,$('.shade'))
    }
    //守望先锋导航 手机端打开导航按钮
    function  openOwNav(){
        navBarMode('left',$('.click_show_owNavbar'),$('.hero_ow_nav'),0,300,0,$('.shade'));
    }
    //打开暴雪导航
    function openNav(){
        navBarMode('right',$('.blizzard_show_owNavbar'),$('.mb_bz_header_box'),'0',300,0,$('.shade'))
    }
    //获取OW导航有展开按钮的li，并排除他们得到没有展开按钮的跳转li,用于给他们添加点击后的字体颜色
    function liClickColor(){
        var haveArrowLi = $('.hero_ow_nav_list_img').parent('a').parent('li');
        var clickColorLi = $('.hero_ow_nav_list').not(haveArrowLi);
        clickColorLi.click(function (){
            clickColorLi.children('a').removeClass('bz_click_a_color');
            $(this).children('a').addClass('bz_click_a_color');
        })
    }
    /*
        循环生成类名为:"bzNavBar_MP"的子级，并且实现一定功能
                ↓
             需要循环的数据
     */
    var bzNavBar = {
        'bar':[
            {
                'name':'首页',
                'children': '',
                'icon':'',
                'children_children':''
            },
            {
                'name':'游戏',
                'children': ['《守望先锋®》','《魔兽世界®》','《炉石传说®》','《风暴英雄™》','《魔兽争霸®III：重制版™》','《暗黑破坏神®不朽™》','《暗黑破坏神®III》','《星际争霸®》','《星际争霸：重制版》'],
                'icon':['../img/MP_bz_navBar_Icon/ow_mb.png','../img/MP_bz_navBar_Icon/ms_mb.png','../img/MP_bz_navBar_Icon/ls_mb.png','../img/MP_bz_navBar_Icon/ow_mb.png','../img/MP_bz_navBar_Icon/fb_mb.png','../img/MP_bz_navBar_Icon/mszb_mb.png','../img/MP_bz_navBar_Icon/ah_mb.png','../img/MP_bz_navBar_Icon/ahphs_mb.png','../img/MP_bz_navBar_Icon/xj_mb.png','../img/MP_bz_navBar_Icon/xjzb_mb.png'],
                'children_children':''
            },
            {
                'name':'商城',
                'children': '',
                'icon':'',
                'children_children':''
            },
            {
                'name':'新闻',
                'children': '',
                'icon':'',
                'children_children':''
            },
            {
                'name':'电子竞技',
                'children': ['守望先锋','炉石传说','魔兽世界','魔兽争霸III','星际争霸II','风暴英雄'],
                'icon':'',
                'children_children':[
                    ['守望先锋联赛','守望先锋世界杯','守望先锋挑战者系列赛'],
                    ['黄金公开赛','黄金战队联赛','特技大师赛'],
                    ['战歌峡谷','史诗钥石地下城全球锦标赛','竞技场世界锦标赛'],
                    ['黄金联赛','黄金次级联赛'],
                    ['黄金战队联赛秋季赛','黄金次级联赛'],
                    ['黄金风暴联赛']
                ]
            },
            {
                'name':'暴雪嘉年华',
                'children': '',
                'icon':'',
                'children_children':''
            },
            {
                'name':'未成年人家长监护',
                'children': '',
                'icon':'',
                'children_children':''
            }
        ],
        'iconLi':[
            {
                'name':'更多赛事',
                'icon':'../sprite_icon/index_icon.png',
                'position':'-227px -15px'
            },
            {
                'name':'申请暴雪电竞赛事授权',
                'icon':'../sprite_icon/index_icon.png',
                'position':'-227px -50px'
            }
        ]
    }
    $('.age_Tips').click(function (){
        console.log(5)
        $('.MP_click_age_Tips').show()
    })
    function hide_bzNavBar(){
        var liChildren = ''
        var childrenLi = '';
        var childrenText = '';
        for(var i = 0; i < bzNavBar.bar.length; i++){
            var li = "<li><a href='#' target='_blank'>"+bzNavBar.bar[i].name+"</a><ul class='hide_bzNavBar'></ul></li>"
            $('.bzNavBar_MP').append(li);
            for (var n = 0;n<bzNavBar.bar[i].children.length;n++){
                if(bzNavBar.bar[i].icon !== ''){
                    liChildren="<li><a href='#' target='_blank'>"+"<div class='hide_bzNavBar_gameIcon'><img src='"+bzNavBar.bar[i].icon[n]+"'></div>"+bzNavBar.bar[i].children[n]+"</a></li>"
                }else {
                    liChildren="<li><a href='#' target='_blank'>"+bzNavBar.bar[i].children[n]+"</a></li>"
                }
                $('.bzNavBar_MP>li>ul').eq(i).append(liChildren);
                if(bzNavBar.bar[i].children_children !==''){
                    childrenLi = $('.bzNavBar_MP>li').eq(i).children().eq(1).children().eq(n);
                    childrenLi.append("<ul class='game'></ul>")
                    for(var m = 0;m<bzNavBar.bar[i].children_children[n].length;m++){
                        childrenText = "<li><a href='#' target='_blank'>- "+bzNavBar.bar[i].children_children[n][m]+"</a></li>";
                        childrenLi.children().eq(1).append(childrenText)
                    }
                }
            }
        }
        var arr = [0,2,3,5,6];
        for(var x=0;x<arr.length;x++){
            $('.bzNavBar_MP>li>a').eq(arr[x]).next().remove();
        }
        var Bar = $('.hide_bzNavBar');
        Bar.siblings().removeAttr('href').append("<div class='battlenet_icon'></div>");
        Bar.siblings().click(function (){
            if($(this).css('background-color') === 'rgb(21, 26, 35)'){
                Bar.stop().slideUp();
                Bar.siblings().removeClass('before')
                $('.bzNavBar_MP>li>a').css('background-color','');
                $('.bzNavBar_MP>li>a>.battlenet_icon').css({
                    'transform':'',
                    'transition':'all 0.3s'
                })
                $(this).attr('class','before').next().stop().slideDown();
                $(this).css('background-color','rgb(31,35,42)');
                $(this).next().children().children('a').attr('class','before')
                $(this).children().css({
                    'transform':'rotate(-180deg)',
                    'transition':'all 0.3s'
                })
            }else {
                $(this).next().stop().slideUp()
                $(this).css({
                    'background-color':'',
                    'border-left':''
                })
                $(this).children().css({
                    'transform':'',
                    'transition':'all 0.3s'
                })
                $(this).removeClass('before');
                $(this).next().children().children('a').removeClass('before')
            }
        });
        for(let i = 0;i<bzNavBar.iconLi.length;i++){
            let n = "<li><a href='#' target='_blank'><div class='hide_bzNavBar_gameIcon positionIcon'></div>"+bzNavBar.iconLi[i].name+"</a></li>";
            Bar.eq(1).append(n);
            $('.positionIcon').eq(i).css({
                'background':"url("+bzNavBar.iconLi[i].icon+")"+bzNavBar.iconLi[i].position
            })
        }
        $('.bzNavBar_MP>li:last').children().append("<div class='MP_underAge'></div>")
        console.log()

    }
    if (window.screen.width < 768) {
        /*
        请不要随意改变 调用方法的顺序，尤其是那几个off和open!!!
         */
        hide_bzNavBar();
        changeMobile();
        offOwNav();
        offNav();
        openOwNav();
        openNav();
        liClickColor();
        $('.offNav_mobile').css('display', 'block');
        var offDiv = $('.hero_ow_nav');
        var offBzDiv = $('.mb_bz_header_box');
        offDiv.css('left','-'+offDiv.width()+'px');
        offBzDiv.css('right','-'+offBzDiv.width()+'px');
        $('.tips').text('');
    } else {
        $('.offNav_mobile,.navBar_mobile').css('display', 'none');
    }
    $(window).resize( function (){
        location.reload()
    })
})