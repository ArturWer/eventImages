let images = document.querySelectorAll('img');
console.log(images);

for (let i = images.length - 1; i >= 0; i--) {
	images[i].addEventListener ('mouseover', function (e) {
		changeImg(e.target);
	}, false);
	images[i].addEventListener ('mouseout', function (e) {
		imgBack(e.target);
	}, false);
};

function changeImg(target){
	let className = target.className;
		if (className === 'river') {
			target.attributes.src.nodeValue = "img/IMG_0282_600w.jpg";
		} else if(className === 'fly'){
			target.attributes.src.nodeValue = "img/IMG_0283_600w.jpg"
		};
};
function imgBack(target){
	let className = target.className;
		if (className === 'river') {
			target.attributes.src.nodeValue = "img/IMG_0471_600w.JPG";
		} else if(className === 'fly'){
			target.attributes.src.nodeValue = "img/IMG_0524_600w.JPG"
		};
};