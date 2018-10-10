let images = document.querySelectorAll('img');
console.log(images);

for (let i = images.length - 1; i >= 0; i--) {
	images[i].addEventListener ('mouseover', changeImg, false);
	images[i].addEventListener ('mouseout', imgBack, false);
};

function changeImg(e){
	let target = e.target,
		className = target.className;
		if (className === 'river') {
			target.attributes.src.nodeValue = "img/IMG_0282_600w.jpg";
		} else if(className === 'fly'){
			target.attributes.src.nodeValue = "img/IMG_0283_600w.jpg"
		};
		target.addEventListener ('click', clickImg, false);
};
function imgBack(e){
	let target = e.target,
		className = target.className;
		if (className === 'river') {
			target.attributes.src.nodeValue = "img/IMG_0471_600w.JPG";
		} else if(className === 'fly'){
			target.attributes.src.nodeValue = "img/IMG_0524_600w.JPG"
		};
};
function clickImg(e){
	console.log(e);
	let target = e.target,
		className = target.className;
		if (className === 'river') {
			target.attributes.src.nodeValue = "img/IMG_9387_600w.JPG";
		} else if(className === 'fly'){
			target.attributes.src.nodeValue = "img/IMG_9464_600w.JPG"
		};
};
