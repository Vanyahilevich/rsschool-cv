
function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max + 1))

}


function getData() {
	fetch('https://type.fit/api/quotes')
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			let button = document.querySelector('.image');
			button.addEventListener("click", () => {
			let random = getRandomNumber(0, 1643)
			document.querySelector('.text').textContent = data[random].text
			})

		});
}
getData();

