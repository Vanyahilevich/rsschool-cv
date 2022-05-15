function createNumber(counter = 0, min = counter - 5, max = counter + 5) {
	class Number {
		constructor(counter, min, max) {
			this.counter = counter
			this.min = min
			this.max = max
			this.$elem = document.createElement("span")
			this.$hr = document.createElement("hr")
			this.$plusButton = document.createElement('button')
			this.$minusButton = document.createElement('button')
			this.$counters = document.querySelector('.counters')
			this.$counters.append(this.$minusButton)
			this.$counters.append(this.$plusButton)
			this.$counters.append(this.$elem)
			this.$counters.append(this.$hr)
			this.$elem.innerHTML = this.counter;
			this.$plusButton.innerHTML = '+1'
			this.$minusButton.innerHTML = '-1'
			this.$plusButton.addEventListener('click', () => {
				if (this.checkMax()) return
				this.$elem.innerHTML = this.increment()

			})
			this.$minusButton.addEventListener('click', () => {
				if(this.checkMin()) return
				this.$elem.innerHTML = this.decrement()
			})
		}
		checkMax() {
			this.$minusButton.removeAttribute('disabled')
			this.$minusButton.classList.remove('disabled')
			if (this.counter === this.max) {
				this.$plusButton.setAttribute('disabled', 'disabled')
				this.$plusButton.classList.add('disabled')
				return 1
			}
		}
		checkMin() {
			this.$plusButton.removeAttribute('disabled')
			this.$plusButton.classList.remove('disabled')
			if (this.counter === this.min) {
				this.$minusButton.setAttribute('disabled', 'disabled')
				this.$minusButton.classList.add('disabled')
				return 1
			}
		}
		decrement() {
			if (this.checkMin()) return null
			this.counter -= 1
			this.$elem.innerHTML = this.counter;
			return this.counter
		}
		increment() {
			if (this.checkMax()) return null
			this.counter += 1
			this.$elem.innerHTML = this.counter;
			return this.counter
		}
	}


	return new Number(counter, min, max)
}
const counter_1 = createNumber(15, -Infinity, Infinity)
const counter_2 = createNumber(-6)
const counter_3 = createNumber(10)

console.log(counter_1.counter)
console.log(counter_2.counter)
console.log(counter_3.counter)

// counter_1.decrement()
// console.log(counter_1.counter)


// counter_3.increment()
// console.log(counter_3.counter)











