var timerId;

function del_post(){
	var tmp_del_link = $('a:contains("Удалить запись")');
	if(tmp_del_link.length){
		for (var i = 0; i < tmp_del_link.length; i++) { 
			tmp_del_link[i].click();
		}
		$('html, body').animate({scrollTop: $(document).height() - $(window).height()}, 500);
	
		tmp_del_link = 0;
		tmp_del_link = $('a:contains("Удалить запись")');
						
	}
	if (!tmp_del_link.length){
		clearInterval(timerId)
	}
}

function add_btn(){
	var cur_url = $(location).attr('href');

	var html = '';
	var html_link = '';
	
	html_link += '  <a class="ui_tab" id="page_wall_del_click">';
	html_link += '    Очистить стену';
	html_link += '  </a>';
	
	html += '<li class="_wall_tab_del" id="page_wall_del">';
	html += html_link;
	html += '</li>';

	if(! $('#profile_wall').find('#page_wall_del_click').length)
		$('#profile_wall').find('#page_wall_archive').after(html);
	if(! $('#fw_pages').find('#page_wall_del_click').length)
		$('#fw_summary_wrap').find('#fw_pages').prepend(html_link);
	if(cur_url.indexOf('//vk.com/wall') !=-1)
		$( "#page_wall_del_click" ).css( "margin-top", "3px");

	$('#page_wall_del_click').off("click");

	$('#page_wall_del_click').click(function(){

		var tmp_del_link = $('a:contains("Удалить запись")');	

		if (tmp_del_link.length){
			if (confirm("Все записи с Вашей стены будут удалены. Вы уверены?")) {
				del_post();
   				timerId = setInterval(function(){
   					del_post();
				}, 600);	


			}
		}
	});

}


$(document).ready(function(){
		
	add_btn();

})

$(function () {

	$('html').click(function(){

		var timeoutID = setTimeout(function(obj){
			add_btn();
			clearTimeout(timeoutID);
		}, 1000);

	});
})

