let btnPlay = document.querySelector('.player__button');
let video = document.querySelector('.viewer');
let btnVolume = document.querySelector('.volume')
let icon = document.querySelector('.icon')
let main = document.querySelector('.main-svg-icon')
let rangeVolume = document.querySelector('.volume-slider')
//-------------------------------------------------------------------- Button Play
let togglePlay = ()  =>{
	let method = video.paused ? "play" : "pause";
	video[method]();
	icon.setAttribute('xlink:href', `sprite.svg#${method}`)
	main.classList.toggle('hide-main')
	
}
main.addEventListener('click', togglePlay)
btnPlay.addEventListener('click',togglePlay)
video.addEventListener('click' ,togglePlay)
//------------------------------------------------------------------- Volume
function handleRangeUpdate(){
	video.volume = rangeVolume.value;
	rangeVolume.style.background = `linear-gradient(to right, rgb(189, 174, 130) 0%, rgb(189, 174, 130) ${rangeVolume.value * 100}%, rgb(200, 200, 200) ${rangeVolume.value * 100}%, rgb(200, 200, 200) 100%)`;
}
function validateVolume(){
	video.volume = video.volume ? 0 : 1;
	rangeVolume.value = video.volume;
	let mode = video.volume ? 'volume' : "mute";
	btnVolume.setAttribute('xlink:href', `sprite.svg#${mode}`)
}
rangeVolume.addEventListener('input', ()=>{
	handleRangeUpdate()
	let mode = video.volume ? 'volume' : "mute";
	btnVolume.setAttribute('xlink:href', `sprite.svg#${mode}`)
})
btnVolume.addEventListener('click', validateVolume)
handleRangeUpdate()
//-------------------------------------------------------------------- Time
let time = document.querySelector('.time-slider')
video.addEventListener('timeupdate', ()=>{
	time.value = video.currentTime / video.duration
	time.style.background = `linear-gradient(to right, rgb(189, 174, 130) 0%, rgb(189, 174, 130) ${time.value * 100}%, rgb(200, 200, 200) ${time.value * 100}%, rgb(200, 200, 200) 100%)`;

	if(video.currentTime === video.duration){
		icon.setAttribute('xlink:href', `sprite.svg#pause`)
		main.classList.toggle('hide-main')
	}
})
time.addEventListener('input', ()=> {
	video.currentTime = time.value * video.duration;
})

