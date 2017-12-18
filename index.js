import React from 'react';
//import ReactDOM from 'react-dom';
//import 'index.css';


function resizeIFrame(iFrame) {
	iFrame.width = iFrame.contentWindow.document.body.scrollWidth;
	iFrame.height = iFrame.contentWindow.document.body.scrollHeight;
}

window.addEventListener('DOMContentLoaded', function(e) {
	var iFrame = document.getElementById('pageFrame');
	resizeIFrame(iFrame);
});
			
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
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
