// las clases se construyen con prototipos
// en JS las funciones son objetos
// cuando creas un objeto, el prototipo del objeto es creado por detras

// function Holiday(destination, days) {
// 	this.destination = destination
// 	this.days = days
// }

// Holiday.prototype.info = function () {
// 	console.log(this.destination + " | " + this.days + " days")
// }

// var nepal = new Holiday("Nepal", 30)
// console.log(nepal.info())

//--------------------

//super class
class Holiday {
	constructor(destination, days){
		this.destination = destination
		this.days = days
	}
	info(){
		console.log(`${this.destination} will take ${this.days} days`)
	}
}
// console.log(Holiday.prototype)

// const japan = new Holiday("Tokyo, Japan", 20)
// japan.info()

class Expedition extends Holiday {
	constructor(destination, days, gear) {
		super(destination, days)
		this.gear = gear
	}
	info() {
		super.info();
		console.log(`Bring your ${this.gear.join(" and your ")}`)
	}
}

const tripWithGear = new Expedition("Everest", 30, ["Sunglasses", "Flags", "Camera"])
tripWithGear.info()