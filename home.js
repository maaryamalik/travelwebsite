let currentSlide = 0;  //sets a variable called 'currentSlide' to the number 0.This variable will keep track of which slide is currently being displayed.

    
   let slides = document.querySelectorAll('.slide'); //sets a variable called 'slides' to an array containing all of the elements on the page that have the class "slide".
 
 const slideInterval = 3000; // Time each slide is displayed (in milliseconds) .This means that each slide will be displayed for 3 seconds (3000 milliseconds) before the next slide is shown.

    function nextSlide() {
        slides[currentSlide].style.display = 'none';
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].style.display = 'block';
    }

    // Set the interval for the slides to change
    setInterval(nextSlide, slideInterval);

  