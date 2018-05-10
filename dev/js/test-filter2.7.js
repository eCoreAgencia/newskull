$(document).ready(function(){

	var itemsOrder = {
		0 : "OrderByPriceASC",
		1 : "OrderByPriceDESC",
		2: "OrderByTopSaleDESC",
		3: "OrderByReviewRateDESC",
		4: "OrderByNameASC",
		5: "OrderByNameDESC",
	  6: "OrderByReleaseDateDESC",
	  7:"OrderByBestDiscountDESC"
	};

	var t = $("select#O").attr('onchange').split("'");
	var url = t[1] + "O=";
	var i = 0;
	$("ul#orderByMobile li a").each(function(){
			$(this).attr('href', url + itemsOrder[i++]);
	})

	var mobileSearch = function(s, item){

							if(s < 520){

								$(".filtros h5").each(function(){
									$(this).find('ul').addClass('ulMobile');
								})

								console.log(item);
								 if(item){
								 	$(item).slideToggle();
								 }


					    }else{

					        $(".filtros h5").each(function(){
										$(this).find('ul').removeClass('ulMobile');
									});

									//$('.boxFilter').show();
									//$('.boxOrderBy').hide();

					    }

					}


if( $(".btnOrderBy, .btnFilterBy").is(':visible')	){
	mobileSearch(screen.width);
}


$(document).delegate('.btnOrderBy', 'click', function(event) {
	if($('.boxFilter').is(':visible')){
		$(".boxFilter").slideToggle();
	}
	mobileSearch(screen.width, '.boxOrderBy');
});

$(document).delegate('.btnFilterBy', 'click', function(event) {
	if($('.boxOrderBy').is(':visible')){
		$(".boxOrderBy").slideToggle();
	}
	mobileSearch(screen.width, '.boxFilter');
});

mobileSearch(screen.width);



})
