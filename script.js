$(document).ready(function(){
    $(window).scroll(function(){
 
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });


    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});

        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
   
        $('html').css("scrollBehavior", "smooth");
    });

    
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    
    // var typed = new Typed(".typing", {
    //     strings: ["Web Developer","Designer", "Gamer"],
    //     typeSpeed: 100,
    //     backSpeed: 60,
    //     loop: true
    // });
    var typed = new Typed(".typing", {
        strings: ["Address","Landline No.", "Facilities", " Admissions FAQs", "Transport Service", "Gallery"],
        // text.fontcolor: ["black"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true

    });

    // about us

    // var typed = new Typed(".typing-2", {
    //     strings: ["Web Developer","Designer", "Gamer"],
    //     typeSpeed: 100,
    //     backSpeed: 60,
    //     loop: true
    // });

    
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            },
            1600: {
                items: 4,
                nav: false
            }
        }
    });
});










// gallery js





$(".gallery ul li a").click(function () {
	var itemID = $(this).attr("href");
	$(".gallery ul").addClass("item_open");
	$(itemID).addClass("item_open");
	return false;
});
$(".close").click(function () {
	$(".port, .gallery ul").removeClass("item_open");
	return false;
});

$(".gallery ul li a").click(function () {
	$("html, body").animate(
		{
			scrollTop: parseInt($("#top").offset().top)
		},
		400
	);
});

const handleGallery = () => {
    const parent = document.querySelector(".parent");
    if (parent.style.display !== "none") {
        parent.style.display = "none";
    } else {
        parent.style.display = "grid";
    }

}