// $.getScript('http://io.vtex.com.br/vtex.js/2.2.0/vtex.min.js');


// <script type="text/javascript">
// 	var _st_account = 1027;
// 	(function () {
// 		var ss = document.createElement('script');
// 		ss.type = 'text/javascript';
// 		ss.async = true;
// 		ss.src = '//app.shoptarget.com.br/js/tracking.js';
// 		var sc = document.getElementsByTagName('script')[0];
// 		sc.parentNode.insertBefore(ss, sc);
// 	})();

// </script>

(function() {
  var method;
  var noop = function() {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    if (!console[method]) {
      console[method] = noop;
    }
  }
});

jQuery.fn.simulateClick = function() {
	return this.each(function() {
		if ('createEvent' in document) {
			var doc = this.ownerDocument,
			evt = doc.createEvent('MouseEvents');
			evt.initMouseEvent('click', true, true, doc.defaultView, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
			this.dispatchEvent(evt);
		} else {
			this.click();
		}
	});
}


var body = $('body'),
	htmlBody = $('html, body'),
	$document = $(document),
	header = $('#header'),
	submenuDesktopWrapper = $('.js-submenu-wrap'),
	userSubmenu = $('.submenu-user'),
	sidePanelMobile = $('.side-panel'),
	mobileSubmenu = $('.submenu-mobile'),
	minicart = $('.minicart'),
	slide = $('.slide'),
	slideShelf = $('.slideShelf'),
	slideBrands = $('.slideBrands'),
	carousel = $('.shelf-carousel'),
	backToTop = $('.js-back-to-top'),
	shelf = $('.prateleira'),
	paginatedShelf = $('.prateleira[id*=ResultItems]'),
	orderList = $('.order-list'),
	formNews = $('.newsletter'),
	depCatBus = $('.dep-cat-bus'),
	pagProduto = $('.produto'),
	sidebar = $('.sidebar');

$(function() {

	// $('<div id="mini-cart-custom"></div>').insertBefore('.portal-totalizers-ref');

	// if($('body.produto').length > 0){
	// 	var category = $('.bread-crumb li.last a').text();
	// 	$('body.produto').addClass(category);
	// }

	// Ajuste Meus Pedidos //
		if (orderList.length > 0) {
			orderList.find('link').remove();
			orderList.find('.page-header').unwrap('.container');
		}
	// Ajuste Meus Pedidos //


	// BreadCrumb Ajuste Texto //
		try {
			$('.bread-crumb').find('li:first-child a').text('Home');
		} catch (e) {}


	// Remocao de Li HelperComplement Prateleira
		if ($('.helperComplement').length) {
			$('.helperComplement').remove();
		}
	// Remocao de Li HelperComplement Prateleira

	// Slider
		if (slide.length > 0) {
			slide.slick({
				adaptiveHeight: true,
				autoplay: true,
				autoplaySpeed: 5000,
				pauseOnHover: false,
				arrows: true,
				dots: true,
				draggable: true,
				touchMove: true,
				slidesToShow: 1,
				slidesToScroll: 1
			});
		}
	// Slider

	// slideShelf
		if (slideShelf.length > 0) {
		    $('.home, .produto').find('.slideShelf .prateleira').find('ul').slick({
				adaptiveHeight: true,
				autoplay: false,
				arrows: true,
				dots: false,
				mobileFirst: true,
				draggable: true,
				touchMove: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				responsive: [
					{
						breakpoint: 991,
						settings: {
							slidesToShow: 4
						}
					},
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 3
						}
					},
					{
						breakpoint: 479,
						settings: {
							slidesToShow: 2
						}
					}
				]
		    });
		}
	// slideShelf

	// slideBrands
		if (slideBrands.length > 0) {
		    $('.home').find('.slideBrands ul').slick({
				adaptiveHeight: true,
				autoplay: false,
				arrows: true,
				dots: false,
				mobileFirst: true,
				draggable: true,
				touchMove: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				responsive: [
					{
						breakpoint: 991,
						settings: {
							slidesToShow: 5,
						}
					},
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 3
						}
					},
					{
						breakpoint: 479,
						settings: {
							slidesToShow: 2
						}
					}
				]
		    });
		}
	// slideBrands

	// Menu SidePanel //
		var sidePanelMobile = $(".side-panel"),
		    header = $("header");
		    header.on("click", ".js-open-mobile-menu", function(event) {
	        event.preventDefault(), sidePanelMobile.addClass("side-panel--open")
	    });

	    header.on("click", ".js-close-mobile-menu", function(event) {
	        event.preventDefault(), sidePanelMobile.removeClass("side-panel--open")
	    });

		$("#menu-mob li.has-sub a.menu-anchor-sidepanel").click(function() {
		  $(this).removeAttr("href");
		  $(this).toggleClass("active");
		  $(this).next().slideToggle();
		});
	// Menu SidePanel //


	// Smart Research //
		if (sidebar.length > 0) {
			try {
				sidebar.find('input[type="checkbox"]').vtexSmartResearch({
					elemLoading: '',
					returnTopText: '',
					elemLoading:'<i class="shelf__loading"></i>',
					filterScrollTop: function(shelfOffset) {
						return 20;
					}
				});
			} catch(e) {}
		}
	// Smart Research //


	// Menu Persistente Begin //
		$(window).scroll(function() {
			var scroll = $(window).scrollTop();

			if (scroll >= 350) {
				$('header').addClass('menu-persistente');
				$('body').addClass('top-height-active');
			} else {
				$('header').removeClass('menu-persistente');
				$('body').removeClass('top-height-active');
			}
		});
    // Menu Persistente END //


    // Scripts Modal //
	    // Open Modal //
	        $('.call_modal').click(function() {
	            $('.tabelas').fadeIn(200);
	            $('.bg_modal').fadeIn(600);
	            $('body').addClass('modal_active');
	        });
	        // Open Modal //

	        // Close Modal //
	        $('.close_modal, .bg_modal').click(function() {
	            $('.tabelas').fadeOut(600);
	            $('.bg_modal').fadeOut(600);
	            $('body').removeClass('modal_active');
	            $('.modal_loader').remove(); // remove o conteudo do modal ao fechar
	        });
	        $(document).keyup(function(ev) {
	            if (ev.keyCode == 27)
	                $('.tabelas').fadeOut(500);
	                $('.bg_modal').fadeOut(600);
	            $('body').removeClass('modal_active');
	            $('.modal_loader').remove(); // remove o conteudo do modal ao fechar
	            $('#parcelamentoModal').removeClass('active');
	        });
	    // Close Modal //
	// Scripts Modal //


    // Remocao Loading Meus Pedidos//
		try {
			$document.ajaxStop(function() {
				orderList.parents('html').removeClass('is-loading');
				$('.vtexsc-center').appendTo('#mini-cart-custom');
				var my = $('#mini-cart-custom .vtexsc-center').first();
				my.nextAll().remove();
			});
		} catch(e) {}
    // Remocao Loading Meus Pedidos//

});