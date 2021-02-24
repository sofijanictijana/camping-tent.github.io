// Navbar Sticky Start

// When the user scrolls the page, execute myFunction

window.onscroll = function() {
    myFunction()
};

// Get the navbar
var navbar = document.getElementById("navbar");

//Get the offset position pf the navbar

var sticky = navbar.offsetTop;

//Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction(){
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    }else{
        navbar.classList.remove("sticky");
    }
}

// Navbar Sticky End


// Smooth Scrolling Start
    $(document).ready(function() {
       $("a").on('click', function(event){
           if(this.hash !== ""){
               event.preventDefault();

               var hash = this.hash;
               $('html, body').animate({
                   scrollTop: $(hash).offset().top
               }, 800, function(){
                   window.location.hash = hash;
               });
           }
       });
    });

// Smooth Scrolling End