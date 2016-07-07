$(function(){
	$(".l_username").focus(function(){
		var value=$(".l_username").val();
		if(($(this).val())=="请输入手机号"){
			$(this).val("");
			
		}
		$(this).css("color","#666");
	});
	$(".l_username").blur(function(){
		if($(this).val()==""){
			$(this).val("请输入手机号");
			$(this).css("color","#e3e3e3");
		}
	});
	$("#l_passPlace").on("click",function(){
		$("#l_passPlace").hide();
		$(this).siblings("input").focus();
	});
	$(".l_username").focus(function(){
		var value=$(".l_username").val();
		if(($(this).val())=="请输入手机号"){
			$(this).val("");
			
		}
		$(this).css("color","#666");
	})
	$(".l_username").blur(function(){
		if($(this).val()==""){
			$(this).val("请输入手机号");
			$(this).css("color","#e3e3e3");
		}
	})
	$("#l_passPlace").on("click",function(){
		$("#l_passPlace").hide();
		$(this).siblings("input").focus();
	})
//	$(".l_username").focus(function(){
//		var value=$(".l_username").val();
//		if(($(this).val())=="请输入手机号"){
//			$(this).val("");
//			
//		}
//		$(this).css("color","#666");
//	})
//	$(".l_username").blur(function(){
//		if($(this).val()==""){
//			$(this).val("请输入手机号");
//			$(this).css("color","#e3e3e3");
//		}
//	})
//	$("#l_passPlace").on("click",function(){
//		$("#l_passPlace").hide();
//		$(this).siblings("input").focus();
//	})

	$("#l_password").blur(function(){
		if($(this).val()==""){
			$(".l_passPlace").show();
			$(this).css("color","#e3e3e3");
		}
	});
	$("#l_password").blur(function(){
		if($(this).val()==""){
			$(".l_passPlace").show();
			$(this).css("color","#e3e3e3");
		}
	})
//	$("#l_password").blur(function(){
//		if($(this).val()==""){
//			$(".l_passPlace").show();
//			$(this).css("color","#e3e3e3");
//		}
//	})
	//注册
	$("#r_passPlace").on("click",function(){
		$("#r_passPlace").hide();
		$(this).siblings("input").focus();
	});
	$("#r_passPlace").on("click",function(){
		$("#r_passPlace").hide();
		$(this).siblings("input").focus();
	})
//	$("#r_passPlace").on("click",function(){
//		$("#r_passPlace").hide();
//		$(this).siblings("input").focus();
//	})
//	
//	$("#r_password").blur(function(){
//		if($(this).val()==""){
//			$("#r_passPlace").show();
//			$(this).css("color","#e3e3e3");
//		}
//	})
//	$("#r_passPlace2").on("click",function(){
//		$("#r_passPlace2").hide();
//		$(this).siblings("input").focus();
//	})
	$("#r_password").blur(function(){
		if($(this).val()==""){
			$("#r_passPlace").show();
			$(this).css("color","#e3e3e3");
		}
	});
	$("#r_passPlace2").on("click",function(){
		$("#r_passPlace2").hide();
		$(this).siblings("input").focus();
	});
	
	$("#r_password2").blur(function(){
		if($(this).val()==""){
			$("#r_passPlace2").show();
			$(this).css("color","#e3e3e3");
		}
	})
	$("#r_password").blur(function(){
		if($(this).val()==""){
			$("#r_passPlace").show();
			$(this).css("color","#e3e3e3");
		}
	})
	$("#r_passPlace2").on("click",function(){
		$("#r_passPlace2").hide();
		$(this).siblings("input").focus();
	})
	
	$("#r_password2").blur(function(){
		if($(this).val()==""){
			$("#r_passPlace2").show();
			$(this).css("color","#e3e3e3");
		}
	})
//	$("#r_password2").blur(function(){
//		if($(this).val()==""){
//			$("#r_passPlace2").show();
//			$(this).css("color","#e3e3e3");
//		}
//	})



	//倒计时
	var r_send = document.querySelector(".r_send");
	r_send.addEventListener("click",sendSms,false);
	function sendSms(){
		var second = 61,time = setInterval(interFun,1000);
		function interFun(){
			r_send.removeEventListener("click",sendSms,false);
			second-=1;
			r_send.innerHTML = second +"s后重新发送";
			if (second < 0){
				clearInterval(time);
				r_send.innerHTML = "再次发送验证码";
				r_send.addEventListener("click",sendSms,false);
			}
		}
	}
});
