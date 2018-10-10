let images = document.querySelectorAll('img');
console.log(images);

for (let i = images.length - 1; i >= 0; i--) {
	images[i].addEventListener ('mouseover', changeImg, false);
	images[i].addEventListener ('mouseout', imgBack, false);
	images[i].addEventListener ('click', clickImg, false);
};

function changeImg(e){
	console.log(`Make function changeImg`);
	let target = e.target,
		className = target.className;
		console.log(target);
		if (className === 'river') {
			target.attributes.src.nodeValue = "img/IMG_0282_600w.jpg";
		} else if(className === 'fly'){
			target.attributes.src.nodeValue = "img/IMG_0283_600w.jpg"
		};
};
function imgBack(e){
	console.log(`Make function imgBack`);
	let target = e.target,
		className = target.className;
		if (className === 'river') {
			target.attributes.src.nodeValue = "img/IMG_0471_600w.JPG";
		} else if(className === 'fly'){
			target.attributes.src.nodeValue = "img/IMG_0524_600w.JPG"
		};
};
function clickImg(e){
	console.log(`Make function clickImg`);
	let target = e.target,
		className = target.className;
	console.log(target);
		if (className === 'river') {
			target.attributes.src.nodeValue = "img/IMG_9387_600w.JPG";
		} else if(className === 'fly'){
			target.attributes.src.nodeValue = "img/IMG_9464_600w.JPG"
		};
};
