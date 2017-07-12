/*
Credits: Luca Colombi luca.colombi@ethicsoft.it
Left this comment while using the plugin
Requirements: Bootstrap and jQuery
*/
jQuery.fn.extend({
	tooltipzoom:function(){
		return this.each(function(){
			var self=$(this);
			var src=self.attr("src");
			if(src){
				self.attr("title","<img style='max-width:90vw;max-height:90vh' src='"+src+"'>");
				self.tooltip({
					html:true,
					placement:'auto right',
					template:"<div class='tooltip' role='tooltip'><div class='tooltip-arrow'></div><div class='tooltip-inner' style='max-width:95vw;max-height:95vh;'></div></div>"
				});
			}
		});
	}
});
$(function(){$( ".tooltipzoom" ).each(function(){$(this).tooltipzoom();});});
