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