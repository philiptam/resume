/**
 * Created by Administrator on 2016/6/25.
 */
//想让当前的函数，改变元素的任意多个属性     width: 500  height 500
function animate(obj,json,fn){
    clearInterval(obj.timerId);
    obj.timerId =  setInterval(function(){
//            var leader = obj.offsetLeft;//先要获得原来的对象的位置
        var flag = true;// 假设所有的属性都达到了目标值
        for(var key in json){
            if(key =="opacity"){  // 判断透明度的
                // key就是相当于是obj的attr  json[key]就相当于之前的target
                var leader = parseInt(getStyle(obj,key)*100) ||0; // 先要获得原来对象的原属性的值
                // 将当前取到的透明度的值扩大100倍，方便我们的运算  0.2   0.3   0.25
                var target = json[key]*100; // 将目标值也要扩大100倍
                var step = (target - leader )/10;
                step =step>0?Math.ceil(step):Math.floor(step);
                // 原因：
                // 1.offsetLeft只会获得整数，不会获得小数，所以设置步长 的时候，让步长 也变成 整数
                // 2. 步长有正数，也有负数，这个时候取一个中间点进行判断，是向上取整，还是向下取整数
//            console.log(step);
                leader = leader + step;
                obj.style[key] = leader/100; // 改成对应的属性

            }else if(key == "zIndex"){
                var leader = parseInt(getStyle(obj,key))||0;
                var target = json[key]; // 将目标值也要扩大100倍
                var step = (target - leader )/10;
                step =step>0?Math.ceil(step):Math.floor(step);
                obj.style[key] = target; // 改成对应的属性
            }else {
                // key就是相当于是obj的attr  json[key]就相当于之前的target
                var leader = parseInt(getStyle(obj,key)) ||0; // 先要获得原来对象的原属性的值
                var target = json[key];
                //console.log(leader); // offsetLeft只会获取整数
                var step = (target - leader )/10;
                step =step>0?Math.ceil(step):Math.floor(step);
                // 原因：
                // 1.offsetLeft只会获得整数，不会获得小数，所以设置步长 的时候，让步长 也变成 整数
                // 2. 步长有正数，也有负数，这个时候取一个中间点进行判断，是向上取整，还是向下取整数
//            console.log(step);
                leader = leader + step;
                obj.style[key] = leader + 'px'; // 改成对应的属性
            }
            if(leader != target){ //所有的属性都到达了指定的目标值的时候，才能清除定时器
                flag = false;//有一个不满足条件，就让当前的标识变为false
            }
        }
        if(flag){ //所有的都满足条件的情况下，才清除定时器
            clearInterval(obj.timerId);
            if(fn){ // 判断参数中是否有回调函数，如果有，则执行
                fn();
            }
        }
    },15)
}

// 此函数可以获得对象的任意属性
function getStyle(obj,attr){
    // 能力检测
    if(obj&&obj.currentStyle){ // 当前传进来的是一个真实的对象，而且此对象支持currentStyle
        return obj.currentStyle[attr];
    }else {
        return getComputedStyle(obj,null)[attr];
    }
}