$(document).ready(function(){
	$('.header .hamburger-icon').on('click', function(){
		$(this).toggleClass('open');
        $('body').toggleClass('no-overflow');
        $('.main-nav').toggleClass('open');
	});

	$('[data-slick]').slick({
		arrows: false,
		dots: true,
		infinite: true,
		autoplay: true
	});

	$('.tab-header').on('click', function(){
		$('.tab-header').removeClass('selected');
		$(this).addClass('selected');
		$('.tab-content').addClass('d-none');
		$('#'+$(this).data('tab')).removeClass('d-none');
		this.scrollIntoView({behavior: "smooth", block: "nearest"});
	});
});