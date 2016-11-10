$(function(){
    //��ȡlis�߶�
    var lisHeight=$("#list").height();
    var index=0;
    //���Ŀ¼��ת
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
    //��Ļ�����¼�
    var startY=0; //��ָ��ʼX����
    var moveY=0;  //��ָ����ʱ������
    var distanceY=0; //��ָ������ƫ��ֵ
    var ul=document.getElementById("ul");

    //��ȡ��ָ�Ӵ���Ļ�ĵ������¼�
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
            /*�������ֵ��������һ��*/
            if(distanceY > 0){
                index--;
                if(index==-1){
                    index=0;
                }
            }
            /*����Ǹ�ֵ��������һ��*/
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

    //��������Ч��
    var openTransition=function(){
        ul.style.transition="all .2s";
        ul.style.webkitTransition="all .2s";
    }
    //����ƫ��
    var setTransform=function(distance){
        ul.style.transform="translateY("+(distance)+"px)";
        ul.style.webkitTransform="translateY("+(distance)+"px)";
    }
})