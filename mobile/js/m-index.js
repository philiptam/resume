$(function(){
    //获取lis高度
    var lisHeight=$("#list").height();
    var index=0;
    //点击目录跳转
    $("#mypic").tap(function () {
        index=1;
        $("#ul").animate({"translateY":-lisHeight+'px'},300)
    });
    $("#tomyskill").tap(function () {
        index=2;
        $("#ul").animate({"translateY":-lisHeight*2+'px'},350)
    });
    $("#tomyexp").tap(function () {
        index=3;
        $("#ul").animate({"translateY":-lisHeight*3+'px'},400)
    });
    $("#tomyhobby").tap(function () {
        index=4;
        $("#ul").animate({"translateY":-lisHeight*4+'px'},450)
    });
    $("#tocontact").tap(function () {
        index=5;
        $("#ul").animate({"translateY":-lisHeight*5+'px'},500)
    });
    //屏幕滑动事件
    var startY=0; //手指起始X坐标
    var moveY=0;  //手指滑动时的坐标
    var distanceY=0; //手指滑动的偏移值
    var ul=document.getElementById("ul");

    //获取手指接触屏幕的的坐标事件
    ul.addEventListener("touchstart", function (e) {
        startY= e.touches[0].clientY;
    });
    ul.addEventListener("touchmove", function (e) {
        moveY=e.touches[0].clientY;
        distanceY=moveY-startY;
        setTransform(-index*lisHeight+distanceY);
    });
    ul.addEventListener("touchend", function () {
        if(Math.abs(distanceY) > lisHeight/3){
            /*如果是正值，就是上一张*/
            if(distanceY > 0){
                index--;
                if(index==-1){
                    index=0;
                }
            }
            /*如果是负值，就是下一张*/
            else {
                index++;
                if(index==6){
                    index=5;
                }
            }
        }
        openTransition();
        setTransform(-index*lisHeight);

    })

    //开启过渡效果
    var openTransition=function(){
        ul.style.transition="all .2s";
        ul.style.webkitTransition="all .2s";
    }
    //设置偏移
    var setTransform=function(distance){
        ul.style.transform="translateY("+(distance)+"px)";
        ul.style.webkitTransform="translateY("+(distance)+"px)";
    }
})