$(function(){

    //����������li����----------------------------------------------------------------------------------
    var lisHeight=$("#aboutMe").height(); //��ȡһ��li�ĸ߶�;
    //����������л���ɫ
    var pic=0;
    var index=0;
    $("#arrUp img").css({"opacity":0});//Ĭ���ϼ�ͷ�ڵ�һҳʱ����ʾ
    $("#nav-top-ul li").click(function () {
        pic=index=$(this).index();
        $(this).addClass("current").siblings().removeClass("current");
        var target=-index*lisHeight;
        $("#ul").animate({"top":target},700)
        if(index>=2){//�����ӵ�����liʱ��ʾС���,��������
            $("#littleRock").animate({"opacity":1},1000);
        }else{
            $("#littleRock").animate({"opacity":0},1000);
        }


        if(index==4){ //�ڵ�����liʱ�������¼�ͷ
            $("#arrDown img").fadeOut(1000);
            li5();
        }else{
            $("#arrDown img").fadeTo(1000,0.5);
        }
        if(index>=1){ //�ڵ�һ��liʱ�������ϼ�ͷ
            $("#arrUp img").fadeTo(1000,0.5);
        }else{
            $("#arrUp img").fadeOut(1000);
        }
        //����ͷ��
        if(index>=1){
            $("#mypic").animate({"width":"70px","height":"70px","top":"10px","left":"100px"},800)
        }else{
            $("#mypic").animate({"width":"150px","height":"150px","top":"15%","left":"50%"},800)
        }



    })
    //����������li����----------------------------------------------------------------------------------

    //С��ͷ����UL����----------------------------------------------------------------------------------
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
        if(pic>=2){//�����ӵ�����liʱ��ʾС���,��������
            $("#littleRock").animate({"opacity":1},1000);
        }else{
            $("#littleRock").animate({"opacity":0},1000);
        }
        if(pic==4){ //�ڵ�����liʱ�������¼�ͷ
            $("#arrDown img").fadeOut(1000);
            //��������������ʾ��ϵ��ʽ
            li5();

        }else{
            $("#arrDown img").fadeTo(1000,0.5);
        }
        if(pic>=1){//�ڵ�һ��liʱ�������ϼ�ͷ
            $("#arrUp img").fadeTo(1000,0.5);
        }else{
            $("#arrUp img").fadeOut(1000);
        }
        //����ͷ��
        if(pic>=1){
            $("#mypic").animate({"width":"70px","height":"70px","top":"10px","left":"100px"},800)
        }else{
            $("#mypic").animate({"width":"150px","height":"150px","top":"15%","left":"50%"},800)
        }

    }
    //С��ͷ����UL����----------------------------------------------------------------------------------

    //С������ض���----------------------------------------------------------------------------------
    $("#littleRock").click(function () {
        $("#ul").animate({"top":0},700);
        pic=index=0;
        $("#nav-top-ul li").eq(pic).addClass("current").siblings().removeClass("current");
        $("#arrUp img").fadeOut(1000);//�ϼ�ͷ����
        $("#arrDown img").fadeTo(1000,0.5);//�¼�ͷ��ʾ
        $(this).animate({"bottom":"2000px"},3000, function () {
            $(this).css({"bottom":"50px","opacity":0});
        });
        $("#mypic").animate({"width":"150px","height":"150px","top":"15%","left":"50%"},800)
    })
    //С������ض���----------------------------------------------------------------------------------

    //��������ͷ����----------------------------------------------------------------------------------
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
    //��������ͷ����----------------------------------------------------------------------------------


    //��������������ʾ��ϵ��ʽ----------------------------------------------------------------------------------
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
        if(!flag){  //ֻ�ܵ��һ��
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

            //��ʱ��ʾ�ٷ������ۼ�
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
