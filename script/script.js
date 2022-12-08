$(function(){
   $('.multiple-items').slick({
	infinite: true,
	// რამდენი სურათი გამოჩნდეს
	slidesToShow: 3,
	// სლაიდის დროს რამდენი ელემნტით გადავიდეს 
	slidesToScroll: 1,
	// რომ გამოჩნდეს ღილაკები
	arrows: true,
	// რომ გამოჩნდეს ბურთულები
	dots:true,
	// responsiv-ის კოდი
	responsive: [
	    {
	      breakpoint: 769,
	      settings: {
			arrows: false,
	        slidesToShow: 2,
	        slidesToScroll: 1
			
	      }
	    },
	    {
	      breakpoint: 481,
	      settings: {
			arrows: false,
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },
		{
			breakpoint: 1025,
	      settings: {
			arrows: false,
		  }
		}
    ]
  });    
});