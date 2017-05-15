$(document).ready(function(){
  $("#menu_frist").hover(function(){
    $("#menu_second_frist").css("display","block");
    },function(){
    $("#menu_second_frist").css("display","none");
  });
  $("#menu_second_frist").hover(function(){
    $("#menu_second_frist").css("display","block");
	$("#menu_frist a").css("background-color","#f4b31e");
    },function(){
    $("#menu_second_frist").css("display","none");
	$("#menu_frist a").css("background-color","none");
  });
  //
 $("#menu_second").hover(function(){
    $("#menu_second_second").css("display","block");
    },function(){
    $("#menu_second_second").css("display","none");
  });
  $("#menu_second_second").hover(function(){
    $("#menu_second_second").css("display","block");
	$("#menu_second a").css("background-color","#f4b31e");
    },function(){
    $("#menu_second_second").css("display","none");
	$("#menu_second a").css("background-color","none");
  });
});// JavaScript Document

$(function(){
		window.onload = function()
		{
			var $li = $('#class_list li');
			var $dl = $('#class_tab dl');
			var $lis = $('#class_list_second li');
			var $div = $('#class_tab_second div');
			var $classtab = $('#class_page_tab ul li');
			var $classmain = $('#class_page_main>div');
						
			$li.mouseover(function(){
				var $this = $(this);
				var $s = $this.index();
				$li.removeClass();
				$dl.css('display','none');
				$dl.eq($s).css('display','block');
			});
			$lis.mouseover(function(){
				var $this = $(this);
				var $t = $this.index();
				$lis.removeClass();
				$div.css('display','none');
				$div.eq($t).css('display','block');
			});
			$classtab.click(function(){
				var $this = $(this);
				var $t = $this.index();
				$classtab.removeClass();
				$classtab.eq($t).addClass('point');
				$classmain.css('display','none');
				$classmain.eq($t).css('display','block');
			})
		}
	});
