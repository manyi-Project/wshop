$(function(){
    function appendLi(data,elemId) {
        $("#addList li").remove();
        var frag = document.createDocumentFragment();
        for (var i = 0; i < data.length; i++){
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(data[i].region_name));
            li.setAttribute("data-id",''+data[i].region_id+'');
            frag.appendChild(li);
        }
        document.getElementById("addList").appendChild(frag);
        $("#addList li").off().on("click",function () {
            var $thisHtml = $(this).html();
            var $thisId = $(this).attr("data-id");
           elemId.val($thisHtml).attr("data-id",$thisId);
            $(".addModal").fadeOut(function () {
                elemId.parent().next().find("input").focus();
            });
        });
    }
    function ajax(elemId,id) {
        var url = 'http://hl_shop.qkhl.net/api/v100/site/get_region?id='+id;
        $.ajax({
            type: "GET",
            dataType:"jsonp",
            url: url,
            success:function (data) {
                appendLi(data,elemId);
                $(".addTitle").html(elemId.prev().html());
                $(".addModal").fadeIn();
            }
        })
    }
    $("#province input").focus(function () {
        ajax($(this),1);
    });
    $("#city input").focus(function () {
        var provinceinput = $("#province input[type = 'text']").attr("data-id");
        if (provinceinput === undefined){
            alert("请先填写省份");
            return false;
        }
        ajax($(this),provinceinput);
    });
    $("#area input").focus(function () {
        var provinceinput = $("#city input[type = 'text']").attr("data-id");
        if (provinceinput === undefined){
            alert("请先填写城市");
            return false;
        }
        ajax($(this),provinceinput);
    });
    $(".addCencal").on("click",function () {
        $(".addModal").fadeOut();
    });
});
