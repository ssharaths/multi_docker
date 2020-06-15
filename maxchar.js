
const maxChar = (str) => {
var chars = {}
var max =0
var maxChar =''
for( let char of str) {

console.log(chars[char])
//  chars[char] = (chars[char]) ? 1 : chars[char]++
  if (!chars[char]){
chars[char] = 1
  } else {chars[char]++}
}
 for(let char in chars){
   if(chars[char] > max ) {
     max = chars[char]
     maxChar = char
   }
 }

return maxChar
}
console.log(maxChar('aacbbbbbbccccccccccccaaaaa'))
