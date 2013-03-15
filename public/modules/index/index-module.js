/**
 * Simple Framework One
 *
 * User: sean
 * Date: 01/11/12
 * Time: 9:45 PM
 *
 */
define(
	['client','text!/modules/index/index-template.html'],
	function(App, markup) {
        
        var sf1 = App.sf1;
		sf1.log('Index module loaded ');

		var anchorSelector = '#TemplateContainer';
		// namespace for var reference in template
		_.templateSettings.variable = 'S';

		function init(){
			sf1.log('Index module init');
			var baseMarkup = $(markup);
			$(anchorSelector).html(baseMarkup);
			var indexModuleContainer = $('script#IndexModuleContainer').html();

			var template = _.template(indexModuleContainer);

			var templateData = {};

			var templateMarkup = template( templateData );
			$('.main-content-wrapper').html(templateMarkup);


			/*
			*
			* test code to demonstrate io.ajax namespace
			*
			* */
			$('#TestButton').click(function(event){
				$.ajax({
					type:'get',
					url:'/isauth',
					success:function(response){
						sf1.log('hell ya!');
						sf1.log(response);
					},
					error:function(response){
						sf1.log('hell no');
						sf1.log(response);
					}
				});
			});



//			var editor = ace.edit("editor");
//			editor.setTheme("ace/theme/monokai");
//			editor.getSession().setMode("ace/mode/javascript");
		}
		return {
			init:init
		};
	}
);