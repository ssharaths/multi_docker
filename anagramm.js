
const anagram = (str1,str2) => {

return  comp(str1) === comp(str2)
  //return true || false
}


const comp = (str) => {
console.log('str    ', str)
var str1 = str
var spStr = str.split('')
for(let char of str1){
  console.log('char    ',char)
}

for (let char of spStr){

  console.log('spStr     ', char)
}
console.log(str.split(''))

return str.replace(/[^\w]/g,'').split('').sort().join('')

}

console.log(anagram('abcdef', 'abcdeefef'))
