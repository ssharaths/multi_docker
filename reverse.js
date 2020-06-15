
const reverse = (str) => {

return str.split('').every( (char, i) => {
  return char === str[str.length -i -1]
})
// const revStr = str.split('').reduce( (reversed,char) => {
//   return char+reversed
// },'' )
// return revStr === str
//---------
  // var reversed =''
  // for (let character of str) {
  //   reversed = character + reversed
  // }
  // return reversed

//---------
// var reversed =''
// for ( var i=0; i<str.length;i++) {
//   reversed = str[i] + reversed
// }
// return reversed


  //---------

// return str
//         .split('')
//         .reverse()
//         .join('')

}

console.log(reverse(process.argv[2]))
