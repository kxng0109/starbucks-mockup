const container = document.querySelector('#container');
const closedMenu = document.querySelector('.menu-closed');
const nav = document.querySelector('#nav');
const nav2 = document.querySelector('#nav2');
const clickableNav = document.querySelector('#clickable-menu');
const nav2Header = document.querySelector('#nav2-header');
const main = document.querySelector('#main');

closedMenu.onclick = () =>{
	if (closedMenu.getAttribute('name') === 'menu-outline') {
		closedMenu.setAttribute('name', 'close-outline');
		nav.style.animation = 'flyIn 0.15s ease-in forwards';
		container.style.pointerEvents = 'none';
		// container.style.filter = 'brightness(60%)';
	} else {
		closedMenu.setAttribute('name', 'menu-outline');
		nav2.style.animation = 'flyOut 0.15s ease-out forwards';
		nav.style.animation = 'flyOut 0.15s ease-out forwards';
		container.style.pointerEvents = 'auto';
		// container.style.filter = 'brightness(100%)';
	}
}

clickableNav.onclick = () =>{
}