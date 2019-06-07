let OnePageScroll = options => {
	let currentSection = 0;
	let content = document.querySelector('.one-page-scroll');
	let countSections = document.querySelectorAll('.section').length;
	let listLinks = document.querySelectorAll('[' + options.attribute + ']');
	let scroll = false;

	let _slideToSection = (indexSection) => {
		if (!scroll) {
			if (indexSection >= 0 && indexSection < countSections) {
				currentSection = indexSection;

				scroll = true;

				let position = indexSection * -100 + '%';

				content.style.transform = `translateY(${position})`;
				content.style.webkitTransform = `translateY(${position})`;

				let sideNavElements = document.querySelectorAll('.fixed-nav__item');
				for (let i = 0; i < sideNavElements.length; i++) {
					if (i !== indexSection) {
						sideNavElements[i].classList.remove('fixed-nav__item--active');
					} else {
						sideNavElements[i].classList.add('fixed-nav__item--active');
					}
				}

				setTimeout(() => {
					scroll = false;
				}, 1000);
			}
		}
	};
	document.addEventListener('keydown', e => {
		switch (e.keyCode) {
			case 40: 
				_slideToSection(currentSection + 1);
				break;
			case 38: 
				_slideToSection(currentSection - 1);
				break;
		}
	});

	listLinks.forEach(item => {
		item.addEventListener('click', e => {
			e.preventDefault();
			let index = parseInt((e.target).getAttribute(options.attribute));
			if (!(index >= 0)) {
				index = parseInt((e.currentTarget).getAttribute(options.attribute));
			}
			_slideToSection(index);
		});
	});

	document.addEventListener('wheel', e => {
		let deltaY = e.deltaY;
		console.log(deltaY);
		let index = deltaY > 0 ? currentSection + 1 : currentSection - 1;

		_slideToSection(index);
	});
};

OnePageScroll({
	content: 'content',
	section: 'section',
	sideNavigation: 'fixed-nav__item',
	attribute: 'data-scroll'
});

let checkMobile = () => {
	let isMobile = false;
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Opera Mobile|Kindle|Windows Phone|PSP|AvantGo|Atomic Web Browser|Blazer|Chrome Mobile|Dolphin|Dolfin|Doris|GO Browser|Jasmine|MicroB|Mobile Firefox|Mobile Safari|Mobile Silk|Motorola Internet Browser|NetFront|NineSky|Nokia Web Browser|Obigo|Openwave Mobile Browser|Palm Pre web browser|Polaris|PS Vita browser|Puffin|QQbrowser|SEMC Browser|Skyfire|Tear|TeaShark|UC Browser|uZard Web|wOSBrowser|Yandex.Browser mobile/i.test(navigator.userAgent)) isMobile = true;
	return isMobile;
};    
if (checkMobile) {
			swipeDetected(content);
	}