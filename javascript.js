let rad = true
let rads = ['rad', 'deg']

display 	=	document.getElementById("display")
clear 		=	document.querySelector(".clear")
del 		=	document.querySelector(".delete")
equal 		= 	document.querySelector(".equal")
dot 		= 	document.querySelector(".•")
bin 		= 	document.querySelector(".bin")
hex 		=	document.querySelector(".hex")
pORm 		= 	document.querySelector(".plus-or-minus")
percentage 	= 	document.querySelector(".percentage")
sqrt		=	document.querySelector(".sqrt")
fac			=	document.querySelector(".fac")
log			=	document.querySelector(".log")

deg			=	document.querySelector(".deg")
sin			=	document.querySelector(".sin")
cos			=	document.querySelector(".cos")
tan			=	document.querySelector(".tan")

buttons 	= 	document.querySelectorAll(".disp")

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

dot.addEventListener('click', function(){
	if ((display.textContent == "I'm a calculator")||(display.textContent == "0")||(display.textContent == "NaN")){
			display.textContent = "0"
	}

	display.textContent += "."
})

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

bin.addEventListener('click', function(){
	//let value = display.textContent
	//value = Number.parseInt(value)
	display.textContent = Number.parseInt(display.textContent).toString(2)
})


hex.addEventListener('click', function(){
	let value = display.textContent
	value = Number.parseInt(value)
	display.textContent = ""+(Number(value).toString(16)).slice(-2).toUpperCase()//value.toString(16)
})

pORm.addEventListener('click', function(){
	let value = display.textContent

	if (value.includes("."))
		value=Number.parseFloat(value)
	else
		value = Number.parseInt(value)

	display.textContent = value * -1
})

sqrt.addEventListener('click', function(){
	let value = display.textContent

	if (value.includes("."))
		value=Number.parseFloat(value)
	else
		value = Number.parseInt(value)

	display.textContent = Math.sqrt(value)// ** (1/2)
})

percentage.addEventListener('click', function(){
	let value = display.textContent

	if (value.includes("."))
		value=Number.parseFloat(value)
	else
		value = Number.parseInt(value)

	display.textContent = value / 100

})

log.addEventListener('click', function(){
	display.textContent = Math.log10(Number(display.textContent))
})


/******************************************/
fac.addEventListener('click', function(){
	let value = display.textContent
	value = Number.parseInt(value)

	value = factorial(value)

	display.textContent = value
})

function factorial(n){
	if (n <= 1)
		return 1
	else
		return n * factorial(n - 1)
}
/******************************************/

deg.addEventListener('click', function(){
	rad = !rad
	console.log(rad)
	deg.textContent = rads[Number(!rad)]

	/*if (rad){
		deg.addEventListener('mouseover', function(){
			deg.style.backgroundColor = "red"
		})

		deg.addEventListener('mouseout', function(){
			deg.style.backgroundColor = "rgb(239, 239, 239);"
		})


	} else {
		deg.addEventListener('mouseover', function(){
			deg.style.backgroundColor = "green"
		})

		deg.addEventListener('mouseout', function(){
			deg.style.backgroundColor = "rgb(239, 239, 239);"
		})
	}
	*/
})

sin.addEventListener('click', function(){
	if (rad){
		display.textContent = Math.sin(Number(display.textContent))
	} else {
		display.textContent = Math.sin((Number(display.textContent) * Math.PI)/180)


	}
})

cos.addEventListener('click', function(){
	if (rad){
		display.textContent = Math.cos(Number(display.textContent))
	} else {
		display.textContent = Math.cos((Number(display.textContent) * Math.PI)/180)

		if (Number(display.textContent) < 0.01) {
			display.textContent = 0
		}
	}
})

tan.addEventListener('click', function(){
	if (rad){
		display.textContent = Math.tan(Number(display.textContent))
	} else {
		display.textContent = Math.tan((Number(display.textContent) * Math.PI)/180)
	}
})

/****************************EQUALS**********************************/

function parse(text) {
	let nums = []
	let ops = []
	let num = ""

	value = text.split("")
	//console.log(value)

	for (let i=0; i<value.length; i++){
		if (["*", "-", "+", "/"].some(j => value[i].includes(j))){
			if (value[i] == "-" && num == ""){
				num += "-"
				continue
			}
			ops.push(value[i])
			
			nums.push(num)
			num = ""
			
			continue

		} else {
			num = num + value[i]
		}
	}
	nums.push(num)

	for (let i=0; i<nums.length;i++){
		if (nums[i].includes(".")){
			nums[i] = Number.parseFloat(nums[i])
		} else {
			nums[i] = Number.parseInt(nums[i])
		}
	}

	console.log(nums)
	console.log(ops)

	return [nums, ops]
}

equal.addEventListener('click', function(){
	let value = display.textContent
	value = parse(value)

	console.log(value)

	let nums = 		value[0],
		operators = value[1]

	let sum = 0
	let num = ""


	let j = 0
	sum += nums[0]

	for (let i=1; i<nums.length; i++){
		switch(operators[j]){
			case "*":
				sum *= nums[i]
				break
			case "/":
				sum /= nums[i]
				break
			 case "+":
				sum += nums[i]
				break
			case "-":
				sum -= nums[i]
				break
		}

		j++
	}
	display.textContent = sum
})