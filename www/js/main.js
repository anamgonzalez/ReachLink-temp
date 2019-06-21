$(document).ready(function() {

	$('.faq_question').click(function() {

		if ($(this).parent().is('.open')){
			$(this).closest('.faq').find('.faq_answer_container').animate({'height':'0'},500);
			$(this).closest('.faq').removeClass('open');

			}else{
				var newHeight =$(this).closest('.faq').find('.faq_answer').height() +'px';
				$(this).closest('.faq').find('.faq_answer_container').animate({'height':newHeight},500);
				$(this).closest('.faq').addClass('open');
			}

	});

});

console.log('hello');

//Here lets give our sidebar some functioality
var sideBar = $('.sidebar');
var sideToggle = $('.lines');
var main = $('main');

sideToggle.on('click', function() {
  sideBar.css("left", 0);
});

main.on('click', function() {
  sideBar.css("left", -270);
});
