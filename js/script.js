const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

// Slideshow Start

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

// Slideshow Stop

// Go to Top Button Function

var mybutton = document.getElementById("topbutton");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Disabled F12, Inspecting Elements 

document.onkeydown = function (e) { 
  if (event.keyCode == 123) { 
      return false; 
  } 
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) { 
      return false; 
  } 
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) { 
      return false; 
  } 
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) { 
      return false; 
  } 
  if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) { 
      return false; 
  } 
} 

document.addEventListener("contextmenu", function(event){
  event.preventDefault();
  confirm('Probinsyano PH: Sorry Right Click is Disabled For the Meantime.');    
  }, false);