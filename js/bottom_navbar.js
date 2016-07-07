/**
 * Created by Administrator on 2016/3/23 0023.
 */
window.onload = function (){
    function bottomClick($that,index){
        $that.siblings().find(".bottom_navbar_icon").removeClass("bottom_navbar_icon0 bottom_navbar_icon1 bottom_navbar_icon2 bottom_navbar_icon3")
        $that.siblings().find(".bottom_navbar_font").removeClass("bottom_navbar_font1")
        $(".bottom_navbar_icon",$that).addClass("bottom_navbar_icon"+index)
        $(".bottom_navbar_font",$that).addClass("bottom_navbar_font1")
    }
    $("#homePage,#shoppingCart,#my").click(function(){
        var i = $(this).index();
        bottomClick($(this),i);
    });

    $(".bottom_navbar_li_alert").click(function(event){
        event.stopPropagation();
        $(".alert_box").toggle();
        $(".bottom_navbar_icon",this).toggleClass("bottom_navbar_icon1");
        $(".bottom_navbar_font",this).toggleClass("bottom_navbar_font1");
    });
    document.onclick = function(ev) {
        var ent = ev || event;
        var obj = ent.srcElement || ent.target;
        if(obj.parentNode.parentNode.className != 'alert_box' ){
            $(".alert_box").hide();
            $(".bottom_navbar_icontwo").removeClass("bottom_navbar_icon1");
            $(".bottom_navbar_icontwo").next(".bottom_navbar_font").removeClass("bottom_navbar_font1");
        }
    }
};