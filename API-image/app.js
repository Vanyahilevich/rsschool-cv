let gallery = document.querySelector('.gallery')
function createImage(data) {
	data.results.length = 28;
	data.results.map(item => {
		const photo = document.createElement('div');
		const img = document.createElement('img');
		photo.classList.add('photo')
		img.classList.add('img')
		photo.append(img);
		img.src = `${item.urls.small_s3}`;
		img.alt = `image`;
		gallery.append(photo)
	})
}
//////////////////////////////////////////////////////////////  Заменить количество картинок на странице
function showImage(search, Page = 1) {
	fetch(`https://api.unsplash.com/search/photos?query=${search}&per_page=28&page=${Page}&orientation=landscape&client_id=eMuyzNQuVPV4X7LAlSPiz9EWHwW5gq7gKJrq2-0UpPw`)
		.then(function (resp) { return resp.json() })
		.then(function (data) {
			createImage(data)
		})
		.catch(function () {
		});
}

showImage('random')

let rememberSearch = '';
let input = document.querySelector('.input')
let searchBtn = document.querySelector('.icon-search')
let morePage = document.querySelector('.more-page')
window.addEventListener('keyup', (e) => {
	if (input.value === '') return;
	if (input.value === rememberSearch) return;
	if (e.code === "Enter") {
		gallery.innerHTML = '';
		showImage(input.value);
		rememberSearch = input.value;
	}
})
searchBtn.addEventListener('click', () => {
	if (input.value === '') return;
	if (input.value === rememberSearch) return;
	gallery.innerHTML = '';
	showImage(input.value);
	rememberSearch = input.value;
})




let click = 2;
morePage.addEventListener('click', () => {
	if (input.value === '') {
		if (rememberSearch === '') {
			showImage('random', click)
		} else return;
		showImage(rememberSearch, click);
	} else {
		showImage(input.value, click);
	}
	click++;
})

input.addEventListener('input', (e) => {
	if (!input.value) {
		cross.classList.remove('cross-active')

	} else {
		cross.classList.add('cross-active')
	}


})

let cross = document.querySelector(".cross")
cross.addEventListener('click', () => {
	input.value = '';
	cross.classList.remove('cross-active')
})