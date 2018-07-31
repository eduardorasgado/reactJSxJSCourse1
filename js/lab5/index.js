var mountains = ['Everest', 'Popocatepetl', 'Annapurna'];
var mountainsFromJapan= ['Fuji'];

var allMountains = [...mountains, ...mountainsFromJapan];

allMountains.map((m) => console.log(m));


// var day = {
// 	breakfast: 'toast with milk',
// 	lunch: 'rice with chicken curry'
// };

// var night = {
// 	dinner: 'noodle soup'
// };

// var picnic = { ...day , ...night };

//THIS IS TRANSPILED IN BABEL AS:

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var day = {
	breakfast: 'toast with milk',
	lunch: 'rice with chicken curry'
};

var night = {
	dinner: 'noodle soup'
};

var picnic = _extends({}, day, night);
console.log(picnic);
//------------------------------------
// REST OPERATOR

var rivers = ['Sunkosi', 'Tamakoshi', 'Saptakoshi']

var [first, ...rest] = rivers
console.log(first)
console.log(rest)