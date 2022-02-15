//====================================================HTML
let wrapper = document.createElement('div');
wrapper.classList.add('wrapper')
document.body.append(wrapper)

let field = document.createElement('div');
field.classList.add('field')
wrapper.append(field)

for (let i = 1; i < 10; i++) {
	let ceil = document.createElement('div')
	ceil.innerHTML = `<div class='ceil' data-position = '${i}'></div>`
	ceil.classList.add('ceil')
	field.append(ceil)
}

let info = document.createElement('div');
info.classList.add('info');
wrapper.append(info);

let button = document.createElement('button')
button.classList.add('button');
wrapper.append(button)



let winArr = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[1, 4, 7],
	[2, 5, 8],
	[3, 6, 9],
	[1, 5, 9],
	[3, 5, 7],
]


let arrX = [];
let arrO = [];
let player = "X"
let winX;
let winO;
let step = 0;

function checkWin(arr) {
	let win = winArr.some(item => {
		return item.every(item => {
			return arr.includes(item)
		})
	})
	return win
}

//-------------------------------------------------Проверка выйгрыша

field.addEventListener('click', (e) => {
	if (!(e.target.classList.contains('ceil'))) return;
	if (e.target.innerHTML) return;

	if (checkWin(arrX) || checkWin(arrO)) {
		return;
	}
	step++;
	e.target.innerHTML = player;
	player === "X" ? arrX.push(+e.target.dataset.position) : arrO.push(+e.target.dataset.position);

	if (checkWin(arrX) || checkWin(arrO) ) {
		info.textContent = `Win to ${player} player`
		return;
	}
	if(step === 9){
		info.textContent = `НИЧЬЯ`
		
	}
	player === 'X' ? player = "O" : player = "X"
})

//------------------------------------------------------------ Кнопка сброса

let ceils = document.querySelectorAll('.ceil');
button.addEventListener('click', ()=>{
	ceils.forEach(item => {
		item.innerHTML = '';
	})
	player = 'X';
	arrO = [];
	arrX = [];
	info.textContent = '';
	step = 0;

})