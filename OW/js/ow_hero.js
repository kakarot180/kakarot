$(function (){
    "use strict";
    /*jshint esversion: 6 */

    //存储数据
    var hero = [
        {
            'name':'D.VA',
            'imgSrc':'../img/ow_hero/D.Va.png',
            'sort':'TANK'
        },
        {
            'name':'奥丽莎',
            'imgSrc':'../img/ow_hero/奥丽莎.png',
            'sort':'TANK'
        },
        {
            'name':'莱因哈特',
            'imgSrc':'../img/ow_hero/莱因哈特.png',
            'sort':'TANK'
        },
        {
            'name':'路霸',
            'imgSrc':'../img/ow_hero/路霸.png',
            'sort':'TANK'
        },
        {
            'name':'温斯顿',
            'imgSrc':'../img/ow_hero/温斯顿.png',
            'sort':'TANK'
        },
        {
            'name':'查莉娅',
            'imgSrc':'../img/ow_hero/查莉娅.png',
            'sort':'TANK'
        },
        {
            'name':'破坏球',
            'imgSrc':'../img/ow_hero/破坏球.png',
            'sort':'TANK'
        },
        {
            'name':'“西格玛”',
            'imgSrc':'../img/ow_hero/西格玛.png',
            'sort':'TANK'
        },
        {
            'name':'艾什',
            'imgSrc':'../img/ow_hero/艾什.png',
            'sort':'DAMAGE'
        },
        {
            'name':'堡垒',
            'imgSrc':'../img/ow_hero/堡垒.png',
            'sort':'DAMAGE'
        },
        {
            'name':'末日铁拳',
            'imgSrc':'../img/ow_hero/末日铁拳.png',
            'sort':'DAMAGE'
        },
        {
            'name':'源氏',
            'imgSrc':'../img/ow_hero/源氏.png',
            'sort':'DAMAGE'
        },
        {
            'name':'半藏',
            'imgSrc':'../img/ow_hero/半藏.png',
            'sort':'DAMAGE'
        },
        {
            'name':'狂鼠',
            'imgSrc':'../img/ow_hero/狂鼠.png',
            'sort':'DAMAGE'
        },
        {
            'name':'卡西迪',
            'imgSrc':'../img/ow_hero/卡西迪.png',
            'sort':'DAMAGE'
        },
        {
            'name':'美',
            'imgSrc':'../img/ow_hero/美.png',
            'sort':'DAMAGE'
        },
        {
            'name':'法老之鹰',
            'imgSrc':'../img/ow_hero/法老之鹰.png',
            'sort':'DAMAGE'
        },
        {
            'name':'死神',
            'imgSrc':'../img/ow_hero/死神.png',
            'sort':'DAMAGE'
        },
        {
            'name':'士兵：76',
            'imgSrc':'../img/ow_hero/士兵：76.png',
            'sort':'DAMAGE'
        },
        {
            'name':'黑影',
            'imgSrc':'../img/ow_hero/黑影.png',
            'sort':'DAMAGE'
        },
        {
            'name':'“秩序之光”',
            'imgSrc':'../img/ow_hero/秩序之光.png',
            'sort':'DAMAGE'
        },
        {
            'name':'托比昂',
            'imgSrc':'../img/ow_hero/托比昂.png',
            'sort':'DAMAGE'
        },
        {
            'name':'猎空',
            'imgSrc':'../img/ow_hero/猎空.png',
            'sort':'DAMAGE'
        },
        {
            'name':'黑百合',
            'imgSrc':'../img/ow_hero/黑百合.png',
            'sort':'DAMAGE'
        },
        {
            'name':'“回声”',
            'imgSrc':'../img/ow_hero/回声.png',
            'sort':'DAMAGE'
        },
        {
            'name':'安娜',
            'imgSrc':'../img/ow_hero/安娜.png',
            'sort':'SUPPORT'
        },
        {
            'name':'布里吉塔',
            'imgSrc':'../img/ow_hero/布丽吉塔.png',
            'sort':'SUPPORT'
        },
        {
            'name':'卢西奥',
            'imgSrc':'../img/ow_hero/卢西奥.png',
            'sort':'SUPPORT'
        },
        {
            'name':'“天使”',
            'imgSrc':'../img/ow_hero/天使.png',
            'sort':'SUPPORT'
        },
        {
            'name':'莫伊拉',
            'imgSrc':'../img/ow_hero/莫伊拉.png',
            'sort':'SUPPORT'
        },
        {
            'name':'禅雅塔',
            'imgSrc':'../img/ow_hero/禅雅塔.png',
            'sort':'SUPPORT'
        },
        {
            'name':'巴蒂斯特',
            'imgSrc':'../img/ow_hero/巴蒂斯特.png',
            'sort':'SUPPORT'
        }
    ];
    var svg = [
        {
            icon:'',
            sort:''
        },
        {
            icon:'<svg viewBox="0 0 32 32" class="svg_icon">\n' +
                '                            <path d="M29 10.7v6.2c0 .6-.1 1.1-.4 1.6-2.9 5.3-6.8 9.7-11.8 13.2-.6.4-1 .4-1.6 0-4.9-3.4-8.8-7.8-11.7-13-.3-.6-.4-1.2-.4-1.8 0-3.9.1-7.8 0-11.7-.1-2.9 2.1-3.3 4-3.8C10.4.6 13.3 0 16.6 0c3.1 0 7.7 1.1 9.4 1.6 1.3.4 2.7.9 2.9 2.2.1 1.1 0 2.2.1 3.3v3.6z"></path>\n' +
                '                        </svg>',
            sort:'TANK'
        },
        {
            icon:'<svg viewBox="0 0 32 32" class="svg_icon">\n' +
                '                            <g>\n' +
                '                                <path d="M2.1 28.1h7.1V32H2.1z"></path>\n' +
                '                                <path d="M9.1 7v-.7C8.6 1.5 5.6 0 5.6 0s-3 1.5-3.5 6.3V25.4h7V7z"></path>\n' +
                '                            </g>\n' +
                '                            <g>\n' +
                '                                <path d="M12.5 28.1h7.1V32h-7.1z"></path>\n' +
                '                                <path d="M19.5 7v-.7C19 1.5 16 0 16 0s-3 1.5-3.5 6.3V25.4h7V7z"></path>\n' +
                '                            </g>\n' +
                '                            <g>\n' +
                '                                <path d="M22.9 28.1H30V32h-7.1z"></path>\n' +
                '                                <path d="M29.9 7v-.7C29.4 1.5 26.4 0 26.4 0s-3 1.5-3.5 6.3V25.4h7V7z"></path>\n' +
                '                            </g>\n' +
                '                        </svg>',
            sort:'DAMAGE'
        },
        {
            icon:'<svg viewBox="0 0 32 32" class="svg_icon">\n' +
                '                            <path d="M29.3 10.2h-7.5V2.7c0-1.5-1.2-2.7-2.7-2.7h-6.3c-1.5 0-2.7 1.2-2.7 2.7v7.5H2.7c-1.5 0-2.7 1.2-2.7 2.7v6.3c0 1.5 1.2 2.7 2.7 2.7h7.5v7.5c0 1.5 1.2 2.7 2.7 2.7h6.3c1.5 0 2.7-1.2 2.7-2.7v-7.5h7.5c1.5 0 2.7-1.2 2.7-2.7v-6.3c-.1-1.5-1.3-2.7-2.8-2.7z"></path>\n' +
                '                        </svg>',
            sort:'SUPPORT'
        }
    ]
    if(window.screen.width<768){
        $('.hero_ow_nav_item>li:nth-child(3)>a').addClass('hero_ow_nav_list_checked_web_style');
    }else {
        $('.hero_ow_nav_item>li:nth-child(2)>a').addClass('hero_ow_nav_list_checked_web_style');
    }

    //封装截取掉px,并且转为Number类型，返回结果
    function sub_String(doc){
        return Number(doc.substring(0,doc.length-2));
    }

    //此方法涵盖了   全平台的  页面英雄展示列表的循环(包括translate3d的值)、hover效果、点击分类按钮时 分类排序动画
    function forHeroesShow(){
        //用于判断不同屏幕宽度时的 英雄展示列表的  列数
        //并且将在下方循环用到
        var col = 7;
        var sWidth = window.screen.width;
        if(sWidth < 400){
            col = 2;
        }else if(sWidth < 768){
            col = 3;
        }else  if(sWidth < 993){
            col = 5;
        }else  if(sWidth < 1301){
            col = 6;
        }else {
            col = 7;
        }
        var heroesShow='';
        var fatherBox = $('.heroes_show_box');
        var Tsort = 0;
        var Dsort = 0;
        var Ssort = 0;

        //循环展示模块
        for(let i = 0;i<hero.length;i++){
            //用于传值  在for循环外面获取使用(此for循环下方同级for)    对应分类 的个数
            if(hero[i].sort === 'TANK'){
                Tsort += 1;
            }else if(hero[i].sort === 'DAMAGE'){
                Dsort += 1;
            }else if(hero[i].sort === 'SUPPORT'){
                Ssort += 1;
            }

            //储存 将要循环的html内容
            heroesShow =
                "<div class='this_hero_show' heroes-sort='"+hero[i].sort+"'>" +
                    "<a href='#' target='_blank' class='this_hero_a'>" +
                        "<img src='"+hero[i].imgSrc+"'>" +
                        "<div class='hero_name_sort_box'>" +
                            "<span class='hero_name'>"+hero[i].name+"</span>" +
                        "</div>" +
                    "</a>" +
                "</div>"
            //循环出html内容
            fatherBox.append(heroesShow);
            //获取单个li
            var showBox = $('.this_hero_show').eq(i);
            //获取宽高      sub_String()为封装的 去px函数
            var width = sub_String(showBox.css('width'))+sub_String(showBox.css('margin-right'));
            var height = sub_String(showBox.css('height'))+sub_String(showBox.css('margin-bottom'));
            //获取当前循环内容的总高度
            var heroesH = height*Math.ceil(hero.length/col)+'px';
            fatherBox.css({
                'height':heroesH
            })

            //赋值对应的 translate3d 值
            showBox.css({
                'transform':'translate3d('+width*(i-col*Math.floor(i / col))+'px,'+height*Math.floor(i / col)+'px,0px)',
                'transition':'all 0.4s'
            })
            //循环 hero 的分类 svg图标
            var sort = showBox.attr('heroes-sort')
            for (var n = 1;n<svg.length;n++){
                if(sort === svg[n].sort){
                    showBox.find('div').append(svg[n].icon)
                }
            }
        }

        //全平台   排序动画及其hover效果
        $('.sort_btn>li').click(function (){
            let i = $(this).index();
            $('.sort_btn>li').removeClass('sort_btn_bgColor sort_btn_li_opacity')
            $(this).addClass('sort_btn_bgColor sort_btn_li_opacity');

            for (let n =0;n<hero.length;n++){
                var showBox = $('.this_hero_show').eq(n);
                var width = sub_String(showBox.css('width'))+sub_String(showBox.css('margin-right'));
                var height = sub_String(showBox.css('height'))+sub_String(showBox.css('margin-bottom'));
                //清除，然后排序选中 样式
                showBox.find('a').removeClass('heroes_show_shade not_heroes_show_shade');
                showBox.find('div').removeClass('sort_hero_nav_sort_box');
                if(hero[n].sort === svg[i].sort){
                    showBox.find('a').addClass('heroes_show_shade');
                    showBox.find('div').addClass('sort_hero_nav_sort_box');
                }else if(i !== 0){
                    showBox.find('a').addClass('not_heroes_show_shade')
                }

                //移动次数
                var x = n-col*Math.floor(n / col);
                var y = Math.floor(n / col);

                //执行分类排序判断
                if(i === 2){
                    if(hero[n].sort === svg[2].sort){
                        y = y-Math.floor(Tsort/col)
                        x = x-(Tsort % col)
                        if(x<0){
                            x= x+col;
                            y=y-1
                        }
                    }else if(hero[n].sort === svg[1].sort){
                        y = y+Math.floor(Dsort / col)
                        x = x+(Dsort % col)
                        if(x >= col){
                            x = x-col;
                            y = y+1
                        }
                    }
                }else if(i === 3){
                    if(hero[n].sort === svg[3].sort){
                        x = x-((Dsort + Tsort) % col);
                        y = y-(Math.floor((Dsort + Tsort) / col))
                        if(x<0){
                            x = x+col;
                            y = y-1;
                        }
                    }else{
                        x = x+(Ssort % col);
                        y = y+Math.floor(Ssort / col);
                        if(x>=col){
                            x = x-col;
                            y = y+1;
                        }
                    }
                }
                //实际操作
                showBox.css({
                    'transform':'translate3d('+width*x+'px,'+height*y+'px,0px)',
                    'transition':'all 0.4s'
                })
            }
        })
    }
    forHeroesShow();
})