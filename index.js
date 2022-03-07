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
let deviceWidth;
let hdHeight;

let determiner = () =>{
	deviceWidth = window.innerWidth;

	switch (deviceWidth < 1024) {
		case true:
			hdHeight = [];
			hiddenDiv.forEach( (element, index) => {
				let them = hiddenDiv[index].querySelectorAll('.hidden-links');
				hdHeight[index] = hiddenDiv[index].offsetHeight;
				outerHiddenDiv[index].style.height = `0`;
				them.forEach((element, index, array) =>{
					setTimeout(() => {
						them[index].style.position = 'absolute';
						them[index].style.top = '30px';
						them[index].style.display = 'none';
					}, 100);
				});
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
				let them = hiddenDiv[index].querySelectorAll('.hidden-links');
					if (outerHiddenDiv[index].style.height === '' || outerHiddenDiv[index].style.height === '0px') {
						outerHiddenDiv[index].style.height = `${hdHeight[index]}px`;
						toggleIcon[index].style.transform = 'rotateZ(-180deg)';	
						hiddenDiv[index].querySelectorAll('.hidden-links').forEach((element, index, array) =>{
							setTimeout(() => {
								them[index].style.position = 'static';
								them[index].style.display = 'block';
							}, 100);
						});
					}else {
						outerHiddenDiv[index].style.height = '0px';
						toggleIcon[index].style.transform = 'rotateZ(-360deg)';
						them.forEach((element, index, array) =>{
							setTimeout(() => {
								them[index].style.position = 'absolute';
								them[index].style.top = '30px';
								them[index].style.display = 'none';
							}, 100);
						});
					}
				}
			});
			break;
		default:
			hiddenDiv.forEach( (element, index) => {
				let them = hiddenDiv[index].querySelectorAll('.hidden-links');
				outerHiddenDiv[index].style.height = `auto`;
				them.forEach((element, index, array) =>{
					setTimeout(() => {
						them[index].style.position = 'static';
						them[index].style.top = '0';
						them[index].style.display = 'block';
					}, 100);
				});
			});
		break;
	}
};

window.addEventListener('load', determiner);
window.addEventListener('resize', determiner);