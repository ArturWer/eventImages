let img = document.querySelector('img');

img.addEventListener ('mouseover', function () {
	img.attributes.src.nodeValue = "img/IMG_0524.JPG";
}, false);
img.addEventListener ('mouseout', function () {
	img.attributes.src.nodeValue = "img/IMG_0530.JPG";
}, false);