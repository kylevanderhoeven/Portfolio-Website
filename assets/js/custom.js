/* QUOTE OF THE DAY
========================== */

//store the quotations in arrays
quotes = [];
authors = [];
quotes[0] = "I have a new philosophy. I'm only going to dread one day at a time.";
authors[0] = "Charles Schulz";
quotes[1] = "From now on, I'll connect the dots my own way.";
authors[1] = "Bill Watterson";
quotes[2] = "People always ask me, 'Were you funny as a child?' Well, no, I was an accountant.";
authors[2] = "Ellen Degeneres";
quotes[3] = "Happiness lies in the joy of achievement and the thrill of creative effort.";
authors[3] = "Franklin D. Roosevelt";
quotes[4] = "I'm always thinking about creating. My future starts when I wake up every morning... Every day I find something creative to do with my life.";
authors[4] = "Miles Davis";
quotes[5] = "The most creative people have this childlike facility to play.";
authors[5] = "John Cleese";

//calculate a random index number
index = Math.floor(Math.random() * quotes.length);

/* PAGE SCROLLING
========================== */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body, .modal').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

/* ANIMATED HEADER
========================== */

var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.navbar-fixed-top' ),
		didScroll = false,
		changeHeaderOn = 300;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			classie.add( header, 'navbar-shrink' );
		}
		else {
			classie.remove( header, 'navbar-shrink' );
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

/* SPIN ANIMATION ON NAVBAR LOGO
========================== */

$("#navbrand-logo").click(function() {
        $('#navbrand-logo').toggleClass('flip');
    });

/* ENVELOPE ANIMATION ON CONTACT FORM
========================== */

$(document).ready(function(){
           $("#formsub").mouseover(function(){
                $("#env").css("left", "12%");
           });
            $("#formsub").mouseout(function(){
                $("#env").css("left", "");
           });
        });

/* STYLE SWITCH FOR PAGE
========================== */

$("#eightBit").click(function(){
            $("body, h1, h2, h3, h4, h5, h6, p, a, .name, button, #switchstyle, #switchstyle span, .skills, .star-light, .star-primary, #formsub").addClass("eight-bit");
            $("#profileimage").css('display', 'none');
            $("#profile8bit").css('display', 'block');
            });
            
            $("#default").click(function(){
            $("body, h1, h2, h3, h4, h5, h6, p, a, .name, button, #switchstyle, #switchstyle span, .skills, .star-light, .star-primary, #formsub").removeClass("eight-bit");
            $("#profile8bit").css('display', 'none');
            $("#profileimage").css('display', 'block');
            });
