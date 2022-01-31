const i18Obj = {
	'EN': {
		'skills': 'Skills',
		'portfolio': 'Portfolio',
		'video': 'Video',
		'price': 'Price',
		'contacts': 'Contacts',
		'hero-title': 'Alexa Rise',
		'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
		'hire': 'Hire me',
		'skill-title-1': 'Digital photography',
		'skill-text-1': 'High-quality photos in the studio and on the nature',
		'skill-title-2': 'Video shooting',
		'skill-text-2': 'Capture your moments so that they always stay with you',
		'skill-title-3': 'Retouch',
		'skill-text-3': 'I strive to make photography surpass reality',
		'skill-title-4': 'Audio',
		'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
		'winter': 'Winter',
		'spring': 'Spring',
		'summer': 'Summer',
		'autumn': 'Autumn',
		'price-description-1-span-1': 'One location',
		'price-description-1-span-2': '120 photos in color',
		'price-description-1-span-3': '12 photos in retouch',
		'price-description-1-span-4': 'Readiness 2-3 weeks',
		'price-description-1-span-5': 'Make up, visage',
		'price-description-2-span-1': 'One or two locations',
		'price-description-2-span-2': '200 photos in color',
		'price-description-2-span-3': '20 photos in retouch',
		'price-description-2-span-4': 'Readiness 1-2 weeks',
		'price-description-2-span-5': 'Make up, visage',
		'price-description-3-span-1': 'Three locations or more',
		'price-description-3-span-2': '300 photos in color',
		'price-description-3-span-3': '50 photos in retouch',
		'price-description-3-span-4': 'Readiness 1 week',
		'price-description-3-span-5': 'Make up, visage, hairstyle',
		'order': 'Order shooting',
		'contact-me': 'Contact me',
		'send-message': 'Send message',
		'e-mail': 'E-mail',
		'phone': 'Phone',
		'message': 'Message',
	},
	'RU': {
		'skills': 'Навыки',
		'portfolio': 'Портфолио',
		'video': 'Видео',
		'price': 'Цены',
		'contacts': 'Контакты',
		'hero-title': 'Алекса Райс',
		'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
		'hire': 'Пригласить',
		'skill-title-1': 'Фотография',
		'skill-text-1': 'Высококачественные фото в студии и на природе',
		'skill-title-2': 'Видеосъемка',
		'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
		'skill-title-3': 'Ретушь',
		'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
		'skill-title-4': 'Звук',
		'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
		'winter': 'Зима',
		'spring': 'Весна',
		'summer': 'Лето',
		'autumn': 'Осень',
		'price-description-1-span-1': 'Одна локация',
		'price-description-1-span-2': '120 цветных фото',
		'price-description-1-span-3': '12 отретушированных фото',
		'price-description-1-span-4': 'Готовность через 2-3 недели',
		'price-description-1-span-5': 'Макияж, визаж',
		'price-description-2-span-1': 'Одна-две локации',
		'price-description-2-span-2': '200 цветных фото',
		'price-description-2-span-3': '20 отретушированных фото',
		'price-description-2-span-4': 'Готовность через 1-2 недели',
		'price-description-2-span-5': 'Макияж, визаж',
		'price-description-3-span-1': 'Три локации и больше',
		'price-description-3-span-2': '300 цветных фото',
		'price-description-3-span-3': '50 отретушированных фото',
		'price-description-3-span-4': 'Готовность через 1 неделю',
		'price-description-3-span-5': 'Макияж, визаж, прическа',
		'order': 'Заказать съемку',
		'contact-me': 'Свяжитесь со мной',
		'send-message': 'Отправить',
		'e-mail': 'Почта',
		'phone': 'Телефон',
		'message': 'Сообщение',
	}
}

console.log("ругается на ссылки и не придерживался perfectPixel ")



const showBurger = () => {
	const burger = document.querySelector('.logo__burger')
	const menu = document.querySelector('.burger')
	const ul = document.querySelector(".header__nav")
	let svgBurger = document.querySelector('.burger__logo')
	burger.addEventListener("click", () => {
		menu.classList.toggle("burger__active")
		if (menu.classList[1]) {
		svgBurger.innerHTML = '<use xlink:href="sprite.svg#close-black"></use>';
		
		} else {
			svgBurger.innerHTML = '<use xlink:href="sprite.svg#burger"></use>';
		}
	})
	// ul.addEventListener('click', (event) => {
	// 	burger.classList.toggle("burger-active")
	// 	nav.classList.toggle("header__nav__active")
	// })
}
showBurger()
//----------------------------------------------------------------
const replacementImage = () => {
	const portfolioImage = document.querySelectorAll('.portfolio-image');
	const portfolio = document.querySelector('.portfolio__body')
	portfolio.addEventListener('click', (event) => {
		if (!(event.target.classList.contains("portfolio__season"))) return;
		let season = event.target.dataset.season


		portfolioImage.forEach((item, index) => {
			item.src = `img/${season}0${index + 1}.jpg`
		})
	});
}
replacementImage()
//----------------------------------------------------------------
function preloadSummerImages() {
	const seasons = ['winter', 'spring', 'summer', 'autumn'];
	seasons.forEach(item => {
		for (let i = 1; i <= 6; i++) {
			const img = new Image();
			img.src = `img/${item}0${i}.jpg`
			// console.log(`/img/${item}0${i}.jpg`)
		}
	})
}
preloadSummerImages();
//----------------------------------------------------------------
const pressButtonSeasons = () => {
	let bodyBtn = document.querySelector('.portfolio__main')
	let activeBtn = document.querySelectorAll(".btn")

	bodyBtn.addEventListener('click', (event) => {
		if (!(event.target.classList.contains("btn"))) return;
		Array.from(bodyBtn.children).forEach(item => {
			item.classList.remove('active')
		})
		event.target.classList.add('active')
	})
}
pressButtonSeasons()
//----------------------------------------------------
const getTranslate = language => {
	let dataTranslate = document.querySelectorAll("[data-i18]");
	dataTranslate.forEach(item => {
		if (!item.dataset.i18) return;
		if (item.placeholder) {
			item.placeholder = i18Obj[language][item.dataset.i18]
		} else {
			item.textContent = i18Obj[language][item.dataset.i18]
		}

	})

}


//-------------------------------------------------------


let bodyBtn = document.querySelectorAll('.portfolio__season')



const iconLight = document.querySelector('.icon-light')
let mainImg = document.querySelector('.hero__row')
let contactImg = document.querySelector(".contacts__row")
const svg = document.querySelector('.header__sun')

iconLight.addEventListener("click", () => {
	if (!iconLight.classList.contains('dark')) {
		mainImg.classList.add('light__hero__row')
		contactImg.classList.add('light__contacts__row')
		iconLight.classList.add('dark')
		document.documentElement.style.setProperty('--white-black', '#000');
		document.documentElement.style.setProperty('--brown-white', '#fff');
		document.documentElement.style.setProperty('--brown-black', '#000');
		document.documentElement.style.setProperty('--brown-Mblack', '#1C1C1C');
		document.documentElement.style.setProperty('--black-brown', '#bdae82');
		document.documentElement.style.setProperty('--black-white', '#fff');
		document.documentElement.style.setProperty('--colorInput', '#e6dbc7');
		svg.innerHTML = '<use xlink:href="sprite.svg#moon"></use>';
		


	} else {
		mainImg.classList.remove('light__hero__row')
		contactImg.classList.remove('light__contacts__row')
		iconLight.classList.remove('dark')
		document.documentElement.style.setProperty('--white-black', '#fff');
		document.documentElement.style.setProperty('--brown-white', '#bdae82');
		document.documentElement.style.setProperty('--brown-black', '#bdae82');
		document.documentElement.style.setProperty('--brown-Mblack', '#bdae82');
		document.documentElement.style.setProperty('--black-brown', '#000');
		document.documentElement.style.setProperty('--black-white', '#000');
		document.documentElement.style.setProperty('--colorInput', 'transparent');
		svg.innerHTML = '<use xlink:href="sprite.svg#sun"></use>';


	}
})



const pressButtonLang = () => {
	const langBtns = document.querySelector('.header__lang')
	langBtns.addEventListener("click", (event) => {
		// добавление класса 
		if (!(event.target.classList.contains("header__btn"))) return;
		Array.from(langBtns.children).forEach(item => item.classList.remove('active__lang'))
		event.target.classList.add('active__lang')
		//берем язык с нажатой кнопки
		let lang = document.querySelector('.active__lang').innerHTML

		getTranslate(lang)
	})
}
pressButtonLang()


function setLocalStorage() {
	///// translate
	let lang = document.querySelector('.active__lang').innerHTML
	localStorage.setItem('lang', lang);
	//// light-dark
	if (document.querySelector('.icon-light').classList.contains('dark')) {
		localStorage.setItem('dark', true);
	} else {
		localStorage.setItem('dark', false);
	}
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
	//// transale
	if (localStorage.getItem('lang')) {
		const lang = localStorage.getItem('lang');
		let btn = document.querySelectorAll('.lang')
		btn.forEach(item => {
			item.innerHTML === lang ? item.classList.add('active__lang') : item;
		})
		getTranslate(lang);

	}
	//////// dark-light
	if (localStorage.getItem('dark') === 'true') {
		mainImg.classList.add('light__hero__row')
		contactImg.classList.add('light__contacts__row')
		iconLight.classList.add('dark')
		document.documentElement.style.setProperty('--white-black', '#000');
		document.documentElement.style.setProperty('--brown-white', '#fff');
		document.documentElement.style.setProperty('--brown-black', '#000');
		document.documentElement.style.setProperty('--brown-Mblack', '#1C1C1C');
		document.documentElement.style.setProperty('--black-brown', '#bdae82');
		document.documentElement.style.setProperty('--black-white', '#fff');
		document.documentElement.style.setProperty('--colorInput', '#e6dbc7');
		svg.innerHTML = '<use xlink:href="sprite.svg#moon"></use>';

	}
}
window.addEventListener('load', getLocalStorage)

