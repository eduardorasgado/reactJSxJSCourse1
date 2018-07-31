// take values from global scope and insert them in an object

var name = 'Everest'
var height = 8848
var output = function () {
	console.log(`Mt. ${this.name} is ${this.height} meters tall`)
}
var adventureClimbing = { name, height, output }
console.log(adventureClimbing.output())

// this is the same
var adventureClombingVer2 = {
	name: 'Everent',
	height: 8848,
	output() {
		console.log(`Mt. ${this.name} is ${this.height} meter tall`)
	}
}
adventureClombingVer2.output()