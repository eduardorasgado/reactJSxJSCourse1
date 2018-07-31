// function sayHi(){
// 	//
// }

// console.log(this)

let nepal = {
	// add property
	mountains: ['Everest', 'Fish Tail', 'Fuji'],
	// method to print all the mountains
	printWithDash: function () {
		setTimeout(() => console.log(this.mountains.join(" - ")), 3000)
	}
}

nepal.printWithDash()

let thingsToDo = {
	morning: "Exercise",
	afternoon: "Work",
	evening: "Code",
	night: ["Sleep", "Dream"]
}

console.log(thingsToDo)

//assign the first two values of object to some values: DESTRUCTURING OBJECTC
let {morning, afternoon} =  thingsToDo

console.log(morning,' - ', afternoon)
morning = "ff"
console.log(thingsToDo)
console.log(morning,' - ', afternoon)

let uniStudent = ({name, university}) => {
	// this works too:
	//let {name, university} = student
	console.log(`${name} from ${university}`)
}

uniStudent({
	name: 'Eduardo',
	university: 'ITISTMO'
})