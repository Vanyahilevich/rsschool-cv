let rows = document.querySelector('.rows')

function searchImage(search){

fetch(`https://api.unsplash.com/search/photos?query=${search}&per_page=4&orientation=landscape&client_id=eMuyzNQuVPV4X7LAlSPiz9EWHwW5gq7gKJrq2-0UpPw`)
.then( function (resp) {return resp.json()})
.then (function (data) {
	data.results.map(item =>{
		const photo = document.createElement('div');
		const img = document.createElement('img');
		photo.classList.add('photo')
		img.classList.add('img')
		photo.append(img);
		img.src = `${item.urls.small_s3}`;
		img.alt = `image`;
		rows.append(photo)

	})
	let showMode = document.querySelector('.show-mode')
	let img = document.querySelectorAll('.img')	
	showMode.addEventListener('click', (e) =>{
		if(e.target.classList.contains('one')){
			img.forEach(item => {
				item.classList = '';
				item.classList.add('show-one')
			})
		}
		if(e.target.classList.contains('two')){
			img.forEach(item => {
				item.classList = '';
				item.classList.add('show-two')
			})
		}
		if(e.target.classList.contains('four')){
			img.forEach(item => {
				item.classList = '';
				item.classList.add('img')
			})
		}
		

	}
	)




	})
.catch(function (){
});

}

let input = document.querySelector('.input')
searchImage('pig')
let button = document.querySelector('.button')
button.addEventListener('click', ()=>{
	if(input.value === "") return;
	rows.innerHTML = ''
	searchImage(input.value)
})
window.addEventListener('keyup', (e)=>{
	if(input.value === "") return;
	if(e.code === 'Enter') {
		rows.innerHTML = ''
			searchImage(input.value)
	}
})



let showMode = document.querySelector('.show-mode')
let tt = document.querySelectorAll('.img')

showMode.addEventListener('click', (e) =>{
	if(e.target.classList.contains('one')){
		console.log(tt)
	}
}
)