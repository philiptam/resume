$(function(){

    //导航栏控制li滑动----------------------------------------------------------------------------------
    var lisHeight=$("#aboutMe").height(); //获取一张li的高度;
    //点击导航栏切换颜色
    var pic=0;
    var index=0;
    $("#arrUp img").css({"opacity":0});//默认上箭头在第一页时不显示
    $("#nav-top-ul li").click(function () {
        pic=index=$(this).index();
        $(this).addClass("current").siblings().removeClass("current");
        var target=-index*lisHeight;
        $("#ul").animate({"top":target},700)
        if(index>=2){//当连接到第三li时显示小火箭,否则隐藏
            $("#littleRock").animate({"opacity":1},1000);
        }else{
            $("#littleRock").animate({"opacity":0},1000);
        }


        if(index==4){ //在第五章li时隐藏向下箭头
            $("#arrDown img").fadeOut(1000);
            li5();
        }else{
            $("#arrDown img").fadeTo(1000,0.5);
        }
        if(index>=1){ //在第一张li时隐藏向上箭头
            $("#arrUp img").fadeTo(1000,0.5);
        }else{
            $("#arrUp img").fadeOut(1000);
        }
        //控制头像
        if(index>=1){
            $("#mypic").animate({"width":"70px","height":"70px","top":"10px","left":"100px"},800)
        }else{
            $("#mypic").animate({"width":"150px","height":"150px","top":"15%","left":"50%"},800)
        }



    })
    //导航栏控制li滑动----------------------------------------------------------------------------------

    //小箭头控制UL滑动----------------------------------------------------------------------------------
    $("#arrDown").click(function () {
        if(pic<$("#ul li").length-1){pic++;}
        var target=-pic*lisHeight;
        move(target,pic)
    })
    $("#arrUp").click(function () {
        if(pic>0){pic--}
        var target=-pic*lisHeight;
        move(target,pic)
    })

    function move(target,pic){
        $("#ul").animate({"top":target},700);
        $("#nav-top-ul li").eq(pic).addClass("current").siblings().removeClass("current");
        if(pic>=2){//当连接到第三li时显示小火箭,否则隐藏
            $("#littleRock").animate({"opacity":1},1000);
        }else{
            $("#littleRock").animate({"opacity":0},1000);
        }
        if(pic==4){ //在第五章li时隐藏向下箭头
            $("#arrDown img").fadeOut(1000);
            //滑动到第五张显示联系方式
            li5();

        }else{
            $("#arrDown img").fadeTo(1000,0.5);
        }
        if(pic>=1){//在第一张li时隐藏向上箭头
            $("#arrUp img").fadeTo(1000,0.5);
        }else{
            $("#arrUp img").fadeOut(1000);
        }
        //控制头像
        if(pic>=1){
            $("#mypic").animate({"width":"70px","height":"70px","top":"10px","left":"100px"},800)
        }else{
            $("#mypic").animate({"width":"150px","height":"150px","top":"15%","left":"50%"},800)
        }

    }
    //小箭头控制UL滑动----------------------------------------------------------------------------------

    //小火箭返回顶部----------------------------------------------------------------------------------
    $("#littleRock").click(function () {
        $("#ul").animate({"top":0},700);
        pic=index=0;
        $("#nav-top-ul li").eq(pic).addClass("current").siblings().removeClass("current");
        $("#arrUp img").fadeOut(1000);//上箭头隐藏
        $("#arrDown img").fadeTo(1000,0.5);//下箭头显示
        $(this).animate({"bottom":"2000px"},3000, function () {
            $(this).css({"bottom":"50px","opacity":0});
        });
        $("#mypic").animate({"width":"150px","height":"150px","top":"15%","left":"50%"},800)
    })
    //小火箭返回顶部----------------------------------------------------------------------------------

    //鼠标移入箭头变深----------------------------------------------------------------------------------
    $("#arrUp img").mouseenter(function () {
        $(this).fadeTo(300,1);
    });
    $("#arrDown img").mouseenter(function () {
        $(this).fadeTo(300,1);
    });
    $("#arrUp img").mouseleave(function () {
        $(this).fadeTo(300,0.5);
    });
    $("#arrDown img").mouseleave(function () {
        $(this).fadeTo(300,0.5);
    });
    //鼠标移入箭头变深----------------------------------------------------------------------------------


    //滑动到第五张显示联系方式----------------------------------------------------------------------------------
    function li5(){
        setTimeout(function () {
            $("#contactme").siblings().children("img").eq(0).fadeIn(800, function () {
                $("#contactme").siblings().children("img").eq(1).fadeIn(800, function () {
                    $("#contactme").siblings().children("img").eq(2).fadeIn(800)
                })
            })
        },700)
    }

    //skill----------------------------------------------------------------------------------
    var flag=true
    $(".myskill").click(function () {
        if(!flag){  //只能点击一次
            return false
        }
        flag=false;
        if(pic==1||index==1){
            $(this).children().animate({"opacity":1},1000);
            $(this).children().css({"animation-play-state":"running"});
            $(".round1").children().css({"animation-play-state":"running"});
            $(".round2").children().css({"animation-play-state":"running"});
            $(".round3").children().css({"animation-play-state":"running"});
            $(".round4").children().css({"animation-play-state":"running"});
            $(".round5").children().css({"animation-play-state":"running"});
            $(".round6").children().css({"animation-play-state":"running"});

            //延时显示百分数并累加
            setTimeout(function () {
                $(".percentage").animate({"opacity":1},200);
                per=0;
                var time=setInterval(function () {
                    per++;
                    per= per<10 ? "0"+per:per;
                    $(".percentage").text(per+"%");
                    if(per==90){
                        clearInterval(time);
                    }
                },20)
            },1500)
        }
    })
    $(".h5c3").mouseenter(function () {
        $(".skilldescribe").eq(0).fadeIn(300);
    });
    $(".h5c3").mouseleave(function () {
        $(".skilldescribe").eq(0).fadeOut(300);
    })
    $(".jQuery").mouseenter(function () {
        $(".skilldescribe").eq(1).fadeIn(300);
    });
    $(".jQuery").mouseleave(function () {
        $(".skilldescribe").eq(1).fadeOut(300);
    });
    $(".ajax").mouseenter(function () {
        $(".skilldescribe").eq(2).fadeIn(300);
    });
    $(".ajax").mouseleave(function () {
        $(".skilldescribe").eq(2).fadeOut(300);
    });
    $(".node-js").mouseenter(function () {
        $(".skilldescribe").eq(3).fadeIn(300);
    });
    $(".node-js").mouseleave(function () {
        $(".skilldescribe").eq(3).fadeOut(300);
    });
    $(".mianxiangduixiang").mouseenter(function () {
        $(".skilldescribe").eq(4).fadeIn(300);
    });
    $(".mianxiangduixiang").mouseleave(function () {
        $(".skilldescribe").eq(4).fadeOut(300);
    });
    $(".frame").mouseenter(function () {
        $(".skilldescribe").eq(5).fadeIn(300);
    });
    $(".frame").mouseleave(function () {
        $(".skilldescribe").eq(5).fadeOut(300);
    });




    //skill----------------------------------------------------------------------------------
    //aboutme-----------------------------------------------------------
    $(".personal").on("mouseenter", function () {
        $(".onfouce").animate({"left":"20px","height":"150px"},300);
    });
    $(".collage").on("mouseenter", function () {
        $(".onfouce").animate({"left":"279px","height":"180px"},300);
    });
    $(".position").on("mouseenter", function () {
        $(".onfouce").animate({"left":"557px","height":"153px"},300);
    });

    $(".evaluate").on("mouseenter", function () {
        $(".onfouce").animate({"left":"792px","height":"240px"},300);
    });
})
