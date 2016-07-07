$(function() {
	$(".s_delet").click(function(){
		$(this).parentsUntil(".s_shopping").detach();
	});
	$("#s_edit").click(function(){
		$(this).hide();
		$("#complete").show();
		$(".s_num").hide();
		$(".s_delet").show();
		$("#s_delet_footer1").hide();
		$("#s_delet_footer").show();
	});
	$("#complete").click(function(){
		$(this).hide();
		$("#s_edit").show();
		$(".s_delet").hide();
		$(".s_num").show();
		$("#s_delet_footer1").show();
		$("#s_delet_footer").hide();
	});
	$("#s_accounts").click(function(){
		$(".checkbox1 input:checked").parentsUntil(".s_shopping").detach();
	});

	$(".checkbox1").click(function(){
		$(this).toggleClass("cur");
		isClass($(this));
		selFirst();
	});
	$(".s_all").click(function(){
		$(this).toggleClass("s_all1");
		isClass($(this));
	});

	$(".checkboxTwo").click(function(){
		$(this).toggleClass("cur");
		if($(this).hasClass("cur")){
			$(".checkbox1").addClass("cur");
			isClass($(".checkbox1"))
		}else{
			$(".checkbox1").removeClass("cur");
			isClass($(".checkbox1"))
		};
		isClass($(this));
	});
	function selFirst() {
		var o = $(".s_container").find("input[type='checkbox']");
		var count = 0, num = 0;
		for (var i = 0; i < o.length - 1; i++) {
			if (o[i + 1].checked == true) {
				count++;
			}else{
				num++;
			}
		}
		if (count == o.length - 1) {
			o[0].checked = true;
			$(".checkboxTwo").addClass("cur");
			$(".s_all").addClass("s_all1");
			$(".s_all input").prop("checked",true);
		}
		if (num > 0) {
			if (o[0].checked == true) {
				o[0].checked = false;
				$(".checkboxTwo").removeClass("cur");
				$(".s_all").removeClass("s_all1");
				$(".s_all input").prop("checked",false)
			}
		}
	}
	function isClass($that){
		if ($that.hasClass("s_all")){
			if ($($that).hasClass("s_all1")){
				$("input",$that).prop("checked",true);
				$(".checkbox1").addClass("cur");
				$(".checkboxTwo").addClass("cur");
				$("input").prop("checked",true);
			}else{
				$("input",$that).prop("checked",false);
				$(".checkbox1").removeClass("cur");
				$(".checkboxTwo").removeClass("cur");
				$("input").prop("checked",false);
			}
		}else{
			if ($($that).hasClass("cur")){
				$("input",$that).prop("checked",true);
			}else{
				$("input",$that).prop("checked",false);
			}
		}
	}

	function s_sccounts(){
		$(".s_accounts").css({background:"#e3e3e3"});
		return false;
	}
    var $this;
	$(".s_delets").on("click",function () {
        $this = $(this).parentsUntil(".s_shopping");
		$(".alert_show").fadeIn();
	});
    $(".s_canl").on("click",function () {
        $(".alert_show").fadeOut();
    });
    $(".s_del").on("click",function () {
        $(".alert_show").fadeOut();
        console.log($this);
        $this.remove();
        //删除的ajax
    });
});