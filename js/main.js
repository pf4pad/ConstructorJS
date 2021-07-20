	
	/*
	new Swiper('.swiper-container', {
		loop: true,
		navigation: {
			nextEl: '.arrow',
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			541: {
				slidesPerView: 2,
				spaceBetween: 40
			}
		}
	});

	const menuButton = document.querySelector('.menu-button');
	const menu = document.querySelector('.header');
	menuButton.addEventListener('click', function () {
		menuButton.classList.toggle('menu-button-active');
		menu.classList.toggle('header-active');
	})

	 */

	const getElemment = (tagName, classNames) => {
		const element = document.createElement(tagName);
		if (classNames) {
			element.classList.add(...classNames);
		}
		return element;
	}

	const createHeader = (param) => {
		const header = getElemment('header');

		const container = getElemment('div', ['container']);

		const wrapper = getElemment('div', ['header']);

		if (param.header.logo) {
			const logo = getElemment('img', ['logo']);
			logo.src = param.header.logo;
			logo.alt = 'Логотип ' + param.title;
			wrapper.append(logo);
		}


		header.append(container);
		container.append(wrapper);


		return header;

	}

	const moveConstructor = (selector, options) => {
			const app = document.querySelector(selector);

			app.classList.add('body-app')

			if (options.header) {
				
				app.append(createHeader(options));
			}
			

	};

	moveConstructor('.app', {
		title: 'Ведьмак',
		header:{
			logo: 'witcher/logo.png'
		}

	});