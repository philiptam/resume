/**
 * Created by Administrator on 2016/8/27.
 */
    window.onload = function(){
        // 获得要操作的标签对象
        //var wrap = document.getElementById("wrap");
        var slide = document.getElementById("slide");
        var ul = slide.children[0];
        var lis = ul.children;
        var arr = document.getElementById("arrow");
        var arrLeft = document.getElementById("arrLeft");
        var arrRight = document.getElementById("arrRight");

// 根据配置文件，让所有的li走到各自的css位置
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
        ];//其实就是一个配置单 规定了每张图片的大小位置层级透明度

// 当页面打开的时候，就要让每个li根据配置单，生成到各自的位置
        assign();

// 2. 鼠标移入的时候，显示左右按钮
//        wrap.onmouseover = function(){
//            animate(arr,{"opacity":1});
//        }
//        wrap.onmouseout = function(){
//            animate(arr,{"opacity":0});
//        }

// 因为我们的JS是弱类型的动态语言，

// 3. 给左右按钮注册单击事件
        arrRight.onclick = function(){
            if(flag){
                flag = false;
                // 当点击右侧按钮的时候，将数组中的第一项剪切下来，追加到数组的最后一项,让数组配置单重新排列
//        arr.push(arr.shift());
                config.push(config.shift());
                // 重新更新 li的显示状态  让每个li再从当前的位置分别走到配置单新位置
//        for(var i=0;i<lis.length;i++){
//            animate(lis[i],config[i]);
//        }
                assign();
            }

        }

// 4. 给左侧按钮注册事件
        arrLeft.onclick = function(){
            if(flag){
                flag = false;
                config.unshift(config.pop());//将数组的最后一个元素剪切下来之后，添加到数组的最前面
                assign();//让每个li再根据配置，重新走到自己各自的位置
            }
        }
// 有冗余代码就要进行封装
        function assign(){
            // 循环遍历，让每一个li都走到config配置文件指定的位置
            // 加节流阀,就是加一个回调函数，添加一个标识
            for(var i=0;i<lis.length;i++){
                animate(lis[i],config[i],function(){
                    flag = true;
                });
            }
        }

    }
