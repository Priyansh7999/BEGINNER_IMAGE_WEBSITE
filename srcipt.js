const welcomeText = "Welcome to Earth Gallery";
const headlineText = "Explore the wonders of our planet through our image galleries.";
const welcomeElement = document.getElementById("welcome");
const headlineElement = document.querySelector(".headline");
let welcomeIndex = 0;
let headlineIndex = 0;
let isAnimating = false;

function writeWelcomeText() {
  if (!isAnimating) return;
  welcomeElement.innerText = welcomeText.substring(0, welcomeIndex);
  welcomeIndex++;
  if (welcomeIndex <= welcomeText.length) {
    setTimeout(writeWelcomeText, 100); // adjust the speed of the text writer effect
  } else {
    // start writing headline text after welcome text is finished
    writeHeadlineText();
  }
}

function writeHeadlineText() {
  if (!isAnimating) return;
  headlineElement.innerText = headlineText.substring(0, headlineIndex);
  headlineIndex++;
  if (headlineIndex <= headlineText.length) {
    setTimeout(writeHeadlineText, 100); // adjust the speed of the text writer effect
  } else {
    // stop the animation after headline text is finished
    isAnimating = false;
  }
}

function startAnimation() {
  isAnimating = true;
  writeWelcomeText();
}

startAnimation();

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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