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
		document.body.style.overflowY = 'hidden';
		main.style.filter = 'brightness(60%)';
		window.scrollTo(0, 0);
	} else {
		closedMenu.setAttribute('name', 'menu-outline');
		nav2.style.animation = 'flyOut 0.15s ease-out forwards';
		nav.style.animation = 'flyOut 0.15s ease-out forwards';
		document.body.style.overflowY = 'auto';
		main.style.filter = 'brightness(100%)';
	}
}

clickableNav.onclick = () =>{
	nav2.style.animation = 'flyIn 0.15s ease-in forwards';
}