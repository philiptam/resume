/**
 * Created by Administrator on 2016/6/25.
 */
//���õ�ǰ�ĺ������ı�Ԫ�ص�����������     width: 500  height 500
function animate(obj,json,fn){
    clearInterval(obj.timerId);
    obj.timerId =  setInterval(function(){
//            var leader = obj.offsetLeft;//��Ҫ���ԭ���Ķ����λ��
        var flag = true;// �������е����Զ��ﵽ��Ŀ��ֵ
        for(var key in json){
            if(key =="opacity"){  // �ж�͸���ȵ�
                // key�����൱����obj��attr  json[key]���൱��֮ǰ��target
                var leader = parseInt(getStyle(obj,key)*100) ||0; // ��Ҫ���ԭ�������ԭ���Ե�ֵ
                // ����ǰȡ����͸���ȵ�ֵ����100�����������ǵ�����  0.2   0.3   0.25
                var target = json[key]*100; // ��Ŀ��ֵҲҪ����100��
                var step = (target - leader )/10;
                step =step>0?Math.ceil(step):Math.floor(step);
                // ԭ��
                // 1.offsetLeftֻ����������������С�����������ò��� ��ʱ���ò��� Ҳ��� ����
                // 2. ������������Ҳ�и��������ʱ��ȡһ���м������жϣ�������ȡ������������ȡ����
//            console.log(step);
                leader = leader + step;
                obj.style[key] = leader/100; // �ĳɶ�Ӧ������

            }else if(key == "zIndex"){
                var leader = parseInt(getStyle(obj,key))||0;
                var target = json[key]; // ��Ŀ��ֵҲҪ����100��
                var step = (target - leader )/10;
                step =step>0?Math.ceil(step):Math.floor(step);
                obj.style[key] = target; // �ĳɶ�Ӧ������
            }else {
                // key�����൱����obj��attr  json[key]���൱��֮ǰ��target
                var leader = parseInt(getStyle(obj,key)) ||0; // ��Ҫ���ԭ�������ԭ���Ե�ֵ
                var target = json[key];
                //console.log(leader); // offsetLeftֻ���ȡ����
                var step = (target - leader )/10;
                step =step>0?Math.ceil(step):Math.floor(step);
                // ԭ��
                // 1.offsetLeftֻ����������������С�����������ò��� ��ʱ���ò��� Ҳ��� ����
                // 2. ������������Ҳ�и��������ʱ��ȡһ���м������жϣ�������ȡ������������ȡ����
//            console.log(step);
                leader = leader + step;
                obj.style[key] = leader + 'px'; // �ĳɶ�Ӧ������
            }
            if(leader != target){ //���е����Զ�������ָ����Ŀ��ֵ��ʱ�򣬲��������ʱ��
                flag = false;//��һ�����������������õ�ǰ�ı�ʶ��Ϊfalse
            }
        }
        if(flag){ //���еĶ���������������£��������ʱ��
            clearInterval(obj.timerId);
            if(fn){ // �жϲ������Ƿ��лص�����������У���ִ��
                fn();
            }
        }
    },15)
}

// �˺������Ի�ö������������
function getStyle(obj,attr){
    // �������
    if(obj&&obj.currentStyle){ // ��ǰ����������һ����ʵ�Ķ��󣬶��Ҵ˶���֧��currentStyle
        return obj.currentStyle[attr];
    }else {
        return getComputedStyle(obj,null)[attr];
    }
}