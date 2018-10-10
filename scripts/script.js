let imgages = document.querySelectorAll('img');
console.log(imgages);

for (let i = imgages.length - 1; i >= 0; i--) {
	imgages[i].addEventListener ('mouseover', function (e) {
		changeImg(e.target);
	}, false);
	imgages[i].addEventListener ('mouseout', function (e) {
		imgBack(e.target);
	}, false);
};

function changeImg(target){
	let className = target.className;
		console.log(target.attributes.src.nodeValue);
		if (className === 'river') {
			target.attributes.src.nodeValue = "img/IMG_0282_600w.jpg";
		} else if(className === 'fly'){
			target.attributes.src.nodeValue = "img/IMG_0283_600w.jpg"
		};
};
function imgBack(target){
	let className = target.className;
		console.log(target.attributes.src.nodeValue);
		if (className === 'river') {
			target.attributes.src.nodeValue = "img/IMG_0471.JPG";
		} else if(className === 'fly'){
			target.attributes.src.nodeValue = "img/IMG_0524.JPG"
		};
};