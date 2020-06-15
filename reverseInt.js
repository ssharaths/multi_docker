const revInt = (int) => {

const positive = int>0 ? 1 : -1
console.log(int.toString().split('').reverse())
var intStr = parseInt(int.toString().split('').reverse().join(''))
// if(!positive) {
// intStr = intStr * -1}
//   return intStr
// }
return intStr * positive}

console.log(revInt(process.argv[2]))
