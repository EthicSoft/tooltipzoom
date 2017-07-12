/*
Credits: Luca Colombi luca.colombi@ethicsoft.it
Left this comment while using the plugin
Requirements: Bootstrap and jQuery
*/
jQuery.fn.extend({
	tooltipzoom:function() {
		return this.each(function() {
		var self=$(this);
		if(var src=self.attr(src)){
			self.tooltip({
				content: "<img src='"+src+"'>"
			});
		});
	});
});
$(function(){$( ".tooltipzoom" ).each(function(){this.tooltipzoom();});});
