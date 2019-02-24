var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

/********************* About page icons  *******************************/

setTimeout(function (){
	document.querySelector("#htmlIcon").classList.remove("filter");
	document.querySelector("#phpIcon").classList.remove("filter"); 
	document.querySelector("#jsIcon").classList.remove("filter"); 
	document.querySelector("#cssIcon").classList.remove("filter");  
	document.querySelector("#headshot").classList.remove("filter"); 

}, 2500);


function iconBarMQ(x) {
  if (x.matches) { // If media query matches
  	var icon1 = document.querySelector("#iconBar_1"); 
  	var icon2 = document.querySelector("#iconBar_2"); 
  	icon1.classList.remove("iconBar_1");
  	icon1.classList.add("iconBar_11");

  	icon2.classList.remove("iconBar_2");
  	icon2.classList.add("iconBar_22");
  }
}

var x = window.matchMedia("(max-width: 1200px)")
iconBarMQ(x) // Call listener function at run time
x.addListener(iconBarMQ) // Attach listener function on state changes

/********************* Pictures slideshow *******************************/

var slideIndex = 1;
var slideIndex_2 = 1;
var slideIndex_3 = 1;
var slideIndex_4 = 1;
var slideIndex_5 = 1;
var slideIndex_6 = 1;
showSlides(slideIndex);
showSlides_2(slideIndex_2);
showSlides_3(slideIndex_3);
showSlides_4(slideIndex_4);
showSlides_5(slideIndex_5);
showSlides_6(slideIndex_6);


//Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function plusSlides_2(n) {
  showSlides_2(slideIndex_2 += n);
}

function plusSlides_3(n) {
  showSlides_3(slideIndex_3 += n);
}

function plusSlides_4(n) {
  showSlides_4(slideIndex_4 += n);
}

function plusSlides_5(n) {
  showSlides_5(slideIndex_5 += n);
}

function plusSlides_6(n) {
  showSlides_6(slideIndex_6 += n);
}

//Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function currentSlide_2(n) {
  showSlides_2(slideIndex_2 = n);
}

function currentSlide_3(n) {
  showSlides_3(slideIndex_3 = n);
}

function currentSlide_4(n) {
  showSlides_4(slideIndex_4 = n);
}

function currentSlide_5(n) {
  showSlides_5(slideIndex_5 = n);
}

function currentSlide_6(n) {
  showSlides_6(slideIndex_6 = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

function showSlides_2(n) {
  var i;
  var slides_2 = document.getElementsByClassName("mySlides_2");
  var dots = document.getElementsByClassName("dot_2");
  if (n > slides_2.length) {slideIndex_2 = 1} 
  if (n < 1) {slideIndex_2 = slides_2.length}
  for (i = 0; i < slides_2.length; i++) {
      slides_2[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active_2", "");
  }
  slides_2[slideIndex_2-1].style.display = "block"; 
  dots[slideIndex_2-1].className += " active_2";
}

function showSlides_3(n) {
  var i;
  var slides_3 = document.getElementsByClassName("mySlides_3");
  var dots = document.getElementsByClassName("dot_3");
  if (n > slides_3.length) {slideIndex_3 = 1} 
  if (n < 1) {slideIndex_3 = slides_3.length}
  for (i = 0; i < slides_3.length; i++) {
      slides_3[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active_3", "");
  }
  slides_3[slideIndex_3-1].style.display = "block"; 
  dots[slideIndex_3-1].className += " active_3";
}

function showSlides_4(n) {
  var i;
  var slides_4 = document.getElementsByClassName("mySlides_4");
  var dots = document.getElementsByClassName("dot_4");
  if (n > slides_4.length) {slideIndex_4 = 1} 
  if (n < 1) {slideIndex_4 = slides_4.length}
  for (i = 0; i < slides_4.length; i++) {
      slides_4[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active_4", "");
  }
  slides_4[slideIndex_4-1].style.display = "block"; 
  dots[slideIndex_4-1].className += " active_4";
}

function showSlides_5(n) {
  var i;
  var slides_5 = document.getElementsByClassName("mySlides_5");
  var dots = document.getElementsByClassName("dot_5");
  if (n > slides_5.length) {slideIndex_5 = 1} 
  if (n < 1) {slideIndex_5 = slides_5.length}
  for (i = 0; i < slides_5.length; i++) {
      slides_5[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active_5", "");
  }
  slides_5[slideIndex_5-1].style.display = "block"; 
  dots[slideIndex_5-1].className += " active_5";
}

function showSlides_6(n) {
  var i;
  var slides_6 = document.getElementsByClassName("mySlides_6");
  var dots = document.getElementsByClassName("dot_6");
  if (n > slides_6.length) {slideIndex_6 = 1} 
  if (n < 1) {slideIndex_6 = slides_6.length}
  for (i = 0; i < slides_6.length; i++) {
      slides_6[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active_6", "");
  }
  slides_6[slideIndex_6-1].style.display = "block"; 
  dots[slideIndex_6-1].className += " active_6";
}






