const closedMenu = document.querySelector('.menu-closed');
const nav = document.querySelector('#nav');
const nav2 = document.querySelector('#nav2');
const clickableNav = document.querySelector('#clickable-menu');
const nav2Header = document.querySelector('#nav2-header');
const main = document.querySelector('#main');
const hiddenDiv = document.querySelectorAll('.hidden-div');
const dropdownDiv = document.querySelectorAll('.dropdown-divs');
const toggleIcon = document.querySelectorAll('.toggle');
const outerHiddenDiv = document.querySelectorAll('.youknow');
const hiddenLinks = document.querySelectorAll('.hidden-links');

let hdHeight = [];
hiddenDiv.forEach( (element, index) => {
	hdHeight[index] = hiddenDiv[index].offsetHeight;
	// hiddenDiv[index].style.zIndex = '-1';
	// hiddenDiv[index].style.position = 'absolute';
	hiddenDiv[index].style.top = `-${hdHeight[index]}px`;
	// outerHiddenDiv[index].style.height = '0px';
});

closedMenu.onclick = () =>{
	if (closedMenu.getAttribute('name') === 'menu-outline') {
		closedMenu.setAttribute('name', 'close-outline');
		nav.style.animation = 'flyIn 0.15s ease-in forwards';
		document.body.style.overflowY = 'hidden';
		main.style.filter = 'brightness(60%)';
		window.scrollTo(0, 0);
	} else {
		closedMenu.setAttribute('name', 'menu-outline');
		switch (nav2.style.animation === '') {
			case false:
				nav2.style.animation = 'flyOut 0.15s ease-out forwards';
				break;
			default:
				break;
		}		
		nav.style.animation = 'flyOut 0.15s ease-out forwards';
		document.body.style.overflowY = 'auto';
		main.style.filter = 'brightness(100%)';
	}
}

clickableNav.onclick = () =>{
	nav2.style.animation = 'flyIn 0.15s ease-in forwards';
}

nav2Header.onclick = () =>{
	nav2.style.animation = 'flyOut 0.15s ease-out forwards';
}

dropdownDiv.forEach( (element, index) =>{
	dropdownDiv[index].onclick = () =>{
		if (outerHiddenDiv[index].style.height === '' || outerHiddenDiv[index].style.height === '0px') {
			outerHiddenDiv[index].style.height = `${hdHeight[index]}px`;
			hiddenDiv[index].style.top = `0px`;
			toggleIcon[index].style.transform = 'rotateZ(-180deg)'
		}else {
			outerHiddenDiv[index].style.height = '0px';
			hiddenDiv[index].style.top = `-${hdHeight[index]}px`;
			dropdownDiv[index + 1].style.marginTop = '0rem';
			toggleIcon[index].style.transform = 'rotateZ(-360deg)';
		}
	}
});

// let hiddenLinksFunction = index =>{
// 	switch (true) {
// 		case outerHiddenDiv[index].style.height === `${hdHeight[index]}px`:
// 		break;

// 		case outerHiddenDiv[index].style.height === `0px`:
// 		break;
// 	}
// }