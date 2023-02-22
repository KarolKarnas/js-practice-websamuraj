const square = document.createElement('div');
document.body.appendChild(square);

let sqSize = 100; //sqaure dimmension
let growFlag = true;

square.style.width = sqSize + 'px';
square.style.height = sqSize + 'px';

//max suqare width
// window.innerWidth * 0.;

window.addEventListener('scroll', function () {
	if (sqSize >= window.innerWidth / 2) {
		growFlag = !growFlag;
	} else if (sqSize <= 0) {
		growFlag = !growFlag;
	}

	if (growFlag) {
		sqSize += 5;
		square.style.width = sqSize + 'px';
		square.style.height = sqSize + 'px';
	} else {
		sqSize -= 5;
		square.style.width = sqSize + 'px';
		square.style.height = sqSize + 'px';
	}
});
