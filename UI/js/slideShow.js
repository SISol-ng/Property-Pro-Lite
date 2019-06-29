/*For Handling Slides show*/
let slideIndex = [1,1,1,1];
const slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4"];
const dotId = ["dot1", "dot2", "dot3", "dot4"];

const plusSlides = (n, no) => showSlides(slideIndex[no] += n, no);

const currentSlide = (n, no) => showSlides(slideIndex[no] = n, no);

const showSlides = (n, no) => {
	let i;
	const slides = document.getElementsByClassName(slideId[no]);
	const dots = document.getElementsByClassName(dotId[no]);

	if (n > slides.length) {slideIndex[no] = 1}    
	if (n < 1) {slideIndex[no] = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex[no]-1].style.display = "block";  
	dots[slideIndex[no]-1].className += " active";
}

showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
