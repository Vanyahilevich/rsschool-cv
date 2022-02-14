function showImage(search, Page = 1) {
	fetch(`https://api.unsplash.com/search/photos?query=${search}&per_page=28&page=${Page}&orientation=landscape&client_id=eMuyzNQuVPV4X7LAlSPiz9EWHwW5gq7gKJrq2-0UpPw`)
		.then(function (resp) { return resp.json() })
		.then(function (data) {
			createImage(data)
			infoImages()
			console.log(data)
		})
		.catch(function () {
		});
}




let gallery = document.querySelector('.gallery')



function createImage(data) {
	data.results.length = 28;

	data.results.map(item => {
		const photo = document.createElement('div');
		const img = document.createElement('img');
		const title = document.createElement('p');
		const button = document.createElement('button')

		photo.classList.add('photo')
		img.classList.add('img')
		title.classList.add('img-title')
		button.classList.add('button')
		
		photo.append(img);
		photo.append(title)
		photo.append(button)

		gallery.append(photo)

		button.innerHTML = `<svg class="download">
			<use xlink:href="sprite.svg#download"></use>
									</svg>`
		img.src = `${item.urls.small_s3}`;
		img.alt = `image`;
		if (item.description) {
			title.textContent = limitSrt(item.description.toUpperCase(), 15);
		} else {
			title.textContent = limitSrt(item.alt_description.toUpperCase(), 15);
		}
		
	})
	let images = document.querySelectorAll('.img')
	//------------------------------------------------------------ смена 4 на 2
	let modeShow = document.querySelector('.modeshow');
	let mode = document.querySelector('.mode');
	modeShow.addEventListener('click', () => {
		mode.classList.toggle('mode-active')
		images.forEach(i => {
			i.classList.toggle('img-active')
		})
	})
}
////////////////////////////////////////////////////////////// create new element in image
function infoImages (){
let images = document.querySelectorAll('.img')
let titles = document.querySelectorAll('.img-title')
let buttons = document.querySelectorAll('.button')
console.log(buttons)
images.forEach((i, index) => {
	i.addEventListener('mouseover', () => {
		i.classList.add('img-mouseover')
		titles[index].classList.add('img-title-active')
		buttons[index].classList.add('button-active')
		
	})
	i.addEventListener('mouseout', () => {
		i.classList.remove('img-mouseover')
		titles[index].classList.remove('img-title-active')
		buttons[index].classList.remove('button-active')

	})
})
}


let rememberSearch = '';
let input = document.querySelector('.input')
let searchBtn = document.querySelector('.icon-search')
let morePage = document.querySelector('.more-page')

console.log()



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
			showImage('winter', click)
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
	input.focus()
})
function limitSrt(str, limit) {
	if (str.length <= limit) return str;
	return str.slice(0, limit) + "..."
}
showImage('winter',3)