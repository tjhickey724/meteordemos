Session.set("slideIndex",1);

Template.home.rendered = 
   function(){
    showSlides(2);
   };

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {Session.get("slideIndex") = 1} 
  if (n < 1) {Session.set("slideIndex",slides.length)}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[Session.get("slideIndex")-1].style.display = "block"; 
  dots[Session.get("slideIndex")-1].className += " active";
}

function plusSlides(n) {
  showSlides(Session.get("slideIndex") += n);
}

function currentSlide(n) {
  showSlides(Session.get("slideIndex") = n);
}