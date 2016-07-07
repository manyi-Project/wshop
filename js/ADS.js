/**
 * Created by Administrator on 2016/3/28 0028.
 */
(function () {

    //创建ADS的命名空间
    if( !window["ADS"] ){
        window["ADS"] = {};
    };

    function isCompatible(other) {
        //使用能力检测来检查必要条件
        if ( other === false
            || !Array.prototype.push
            || !Object.hasOwnProperty
            || !document.createElement
            || !document.getElementsByClassName
            ){
            return false;
        }
        return true;
    };
    window["ADS"]["isCompatible"] = isCompatible;

    function $() {
        var elements = new Array();
        
        //查找作为参数提供的所有元素
        for (var i = 0; i < arguments.length; i++){
            var element = arguments[i];
            if (typeof element == 'string'){
                element = document.getElementById(element);
            }
            
            //如果只提供一个参数，
            //则立即返回这个元素
            if (arguments.length == 1){
                return element;
            }
            
            //否则，将他添加到数组中
            elements.push(element);
        }
        
        //返回包含多个被请求元素的的数组
        return elements
    };
    window["ADS"]["$"] = $;

    function addEvent(node, type, listener) {
        //使用前面的方法检查兼容性以保证平稳退化
        if (!isCompatible()){ return false;};
        
        if (!(node = $(node))){ return false;};
        
        if (node.addEventListener){
            //W3C的方法
            node.addEventListener(type, listener, false);
            return true;
        } else if (node.attachEvent){
            //IE的方法
            node['e'+type+listener] = listener;
            node[type+listener] = function () {
                node['e'+type+listener](window.event);
            };
            node.attachEvent("on" + type, node[type + listener]);
            return true;
        }
        return false;
    };
    window["ADS"]["addEvent"] = addEvent;

    function removeEvent(node, type, listener) {
        if (!(node = $(node))){return false};

        if (node.removeEventListener){
            //W3C的方法
            node.removeEventListener(type, listener, false);
            return true;
        } else if (node.detachEvent){
            //IE的方法
            node.detachEvent( 'on'+type, node[type+listener]);
            node[type+listener] = null;
            return true;
        }
        return false;
    };
    window["ADS"]["removeEvent"] = removeEvent;

    function getElementsByClassName(className, tag, parent) {
        parent = parent || document;
        if (!(parent = $(parent))){ return false; };
        //查找所有匹配的标签
        var allTags = (tag == "*" && parent.all) ? parent.all : parent.getElementsByTagName(tag);
        var matchingElements = new Array();

        //创建一个正则表达式，来判断className是否正确。
        className = className.replace(/\-/g, "\\-");
        var regex = new RegExp("(^|\\s)" + className + "(\\s|$)");
        // console.log(regex);
        var element;
        //检查每个元素
        for (var i = 0; i < allTags.length; i++){
            element = allTags[i];
            if (regex.test(element.className)){
                matchingElements.push(element);
            }
        }
        //返回匹配的任何元素
        return matchingElements;
    };
    window["ADS"]["getElementsByClassName"] = getElementsByClassName;

    function toggleDisplay(node, value) {
        if (!(node = $(node))){ return false; };
        if (node.style.display != 'none'){
            node.style.display = 'none';
        }else {
            node.style.display = value || '';
        }
        return true;
    };
    window["ADS"]["toggleDisplay"] = toggleDisplay;

    //function inserAfter(node, referenceNode) {
    //    if (!(node = $(node))){ return false; }
    //    if (!(referenceNode = $(referenceNode))){console.log(referenceNode); return false; }
    //    return referenceNode.parentNode.insertBefore(
    //        node, referenceNode.nextSibling
    //    );
    //};//这里有问题，没有解决。。先放下
    //window["ADS"]["inserAfter"] = inserAfter;

    function removeChildren(parent) {
        if (!(parent = $(parent))){ return false; }

        //当存在子节点删除该子节点
        while (parent.firstChild){
            parent.firstChild.parentNode.removeChild(parent.firstChild)
        };
        return parent;
    };
    window["ADS"]["removeChildren"] = removeChildren;

    //function prependChild(parent, newChild) {
    //    if (!(parent = $(parent))){ return false; };
    //    //if (!(newChild = $(newChild))){ return false;};
    //    if (parent.firstChild){
    //        //如果存在一个子节点，则在这个字节之前插入
    //        parent.insertBefore(newChild, parent.firstChild);
    //    } else {
    //        //如果没有子节点则直接添加
    //        parent.appendChild(newChild);
    //    }
    //
    //    //再返回父元素，以便实现方法连缀
    //    return parent;
    //};
    //window["ADS"]["prependChild"] = prependChild;//这个同样有问题啊。

    function stopPropagetion(ev){
        var evt = ev || window.event;
        if (evt.preventDefault){
            evt.preventDefault();
            evt.stopPropagation()
        } else{
            evt.returnValue = false;
            evt.cancelBubble = true;
        }
    }
    window["ADS"]['stopPropagetion'] = stopPropagetion;
})();
