//your JS code here. If required.
const form = document.querySelector("form")
const ageInput = document.querySelector("#age")
const nameInput = document.querySelector("#name")
const btn  = document.querySelector("#btn")
let age = ageInput.value
let name = nameInput.value
nameInput.addEventListener("change",()=>{
	name = nameInput.value
	btn.disabled = false
})
ageInput.addEventListener("change",()=>{
	age = ageInput.value
	btn.disabled = false
})
let validate = (e)=>{
	e.preventDefault()
	if(!age || !name){
		btn.disabled = true
		alert("Please enter valid details.")
	}
	if(age>18 && name.length>3){
		setTimeout(()=>{
			alert(`Welcome, ${name}. You can vote.`)
		},4000)
	}else{
		setTimeout(()=>{
			alert(`Oh sorry ${name}. You aren't old enough.`)
		},4000)
	}
}
form.addEventListener("submit",validate)