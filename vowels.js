// const vowels = (str) => {
//
// const match = ['a','e','i','o','u']
// var count = 0
// for ( let char of str.toLowerCase()){
//
// //count = match.includes(char) ? count = count + 1 : count
// //console.log( count)
//  if (match.includes(char)) {
//    count++
//  }
//
// }
//
// return count
//
// }

const vowels = (str) => {

const v = str.match(/[aeiou]/gi)
return v ? v.length : 0
}

console.log(vowels('aeiouaeiouerrfefdaf24r24rfadcade3r3rascscdvgkjbvuwhcaccacuashuq'))
