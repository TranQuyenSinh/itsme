$(document).ready(function() {
	var loading = $('.loading');
	var main = $('.main');
	var carousel = $('.carousel');
	var card = $('.card');
	var i = 0;

	card.hide();
	main.hide();
	
	$('.loading__btn').click(function () {
		$('.loading__btn').hide();
		$('.loading__left').addClass('moveleft');
		$('.loading__right').addClass('moveright');
		loading.one("webkitAnimationEnd", function() {
			loading.hide();
			main.show();
		});
	});

	$('.main__btn').click(function () {
		main.hide();
		alert('Chúc mừng sanh thần bạn Chi :3');
		card.show();
	});
});

