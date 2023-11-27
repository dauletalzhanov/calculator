display = document.getElementById("display")
clear = document.querySelector(".clear")
del = document.querySelector(".delete")
equal = document.querySelector(".equal")

buttons = document.querySelectorAll(".disp")

for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', function(){
		if ((display.textContent == "I'm a calculator")||(display.textContent == "0")||(display.textContent == "NaN")){
			display.textContent = ""
		}

		let value = buttons[i].textContent
		display.textContent += value

		//event.target.style.cssText += "background-color:red;"

	})
}


clear.addEventListener('click', function(){
	display.textContent = "0"
})

del.addEventListener('click', function(){
	if (display.textContent.length === 1) {
		display.textContent = 0
	} else {
		display.textContent = display.textContent.slice(0, -1)
	}
})

equal.addEventListener('click', function(){
	let value = display.textContent
	let sum = 0
	let operator = ""


	value = value.split("")
	console.log(value)

	for (let i=0; i<value.length; i++){

		if (["*", "-", "+", "/"].some(j => value[i].includes(j))){
			operator = value[i]
			console.log(operator)
			continue
		} else {
			value[i] = Number.parseInt(value[i])
		}


		if (operator == "+"){
			sum = sum + value[i]
		} else if (operator == '-') {
			sum = sum - value[i]
		} else if (operator == "*") {
			sum = sum * value[i]
		} else if (operator == "/") {
			sum = sum / value[i]
		} else {
			sum = sum + value[i]
		}

		console.log(sum)
	}

	display.textContent = sum

})