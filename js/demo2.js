/**
 * Created by Administrator on 2016/8/27.
 */
    window.onload = function(){
        // ���Ҫ�����ı�ǩ����
        //var wrap = document.getElementById("wrap");
        var slide = document.getElementById("slide");
        var ul = slide.children[0];
        var lis = ul.children;
        var arr = document.getElementById("arrow");
        var arrLeft = document.getElementById("arrLeft");
        var arrRight = document.getElementById("arrRight");

// ���������ļ��������е�li�ߵ����Ե�cssλ��
        var config = [
            {
                "width": 200,
                "top": 100,
                "left": 100,
                "opacity": 0.2,
                "zIndex": 2
            },//0
            {
                "width": 300,
                "top": 180,
                "left": 160,
                "opacity": 0.8,
                "zIndex": 3
            },//1
            {
                "width": 400,
                "top": 250,
                "left": 300,
                "opacity": 1,
                "zIndex": 4
            },//2
            {
                "width": 300,
                "top": 180,
                "left": 530,
                "opacity": 0.8,
                "zIndex": 3
            },//3
            {
                "width": 200,
                "top": 100,
                "left": 695,
                "opacity": 0.2,
                "zIndex": 2
            }//4
        ];//��ʵ����һ�����õ� �涨��ÿ��ͼƬ�Ĵ�Сλ�ò㼶͸����

// ��ҳ��򿪵�ʱ�򣬾�Ҫ��ÿ��li�������õ������ɵ����Ե�λ��
        assign();

// 2. ��������ʱ����ʾ���Ұ�ť
//        wrap.onmouseover = function(){
//            animate(arr,{"opacity":1});
//        }
//        wrap.onmouseout = function(){
//            animate(arr,{"opacity":0});
//        }

// ��Ϊ���ǵ�JS�������͵Ķ�̬���ԣ�

// 3. �����Ұ�ťע�ᵥ���¼�
        arrRight.onclick = function(){
            if(flag){
                flag = false;
                // ������Ҳఴť��ʱ�򣬽������еĵ�һ�����������׷�ӵ���������һ��,���������õ���������
//        arr.push(arr.shift());
                config.push(config.shift());
                // ���¸��� li����ʾ״̬  ��ÿ��li�ٴӵ�ǰ��λ�÷ֱ��ߵ����õ���λ��
//        for(var i=0;i<lis.length;i++){
//            animate(lis[i],config[i]);
//        }
                assign();
            }

        }

// 4. ����ఴťע���¼�
        arrLeft.onclick = function(){
            if(flag){
                flag = false;
                config.unshift(config.pop());//����������һ��Ԫ�ؼ�������֮����ӵ��������ǰ��
                assign();//��ÿ��li�ٸ������ã������ߵ��Լ����Ե�λ��
            }
        }
// ����������Ҫ���з�װ
        function assign(){
            // ѭ����������ÿһ��li���ߵ�config�����ļ�ָ����λ��
            // �ӽ�����,���Ǽ�һ���ص����������һ����ʶ
            for(var i=0;i<lis.length;i++){
                animate(lis[i],config[i],function(){
                    flag = true;
                });
            }
        }

    }
