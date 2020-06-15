const anagram = (strA, strB) => {

var str1 = genMap(strA)
var str2 = genMap(strB)

console.log(str1, '         ' ,  str2, '        ', Object.keys(str1).length,  '   ' , Object.keys(str2).length)

console.log(' object  keys  ',   Object.keys(str1))
if(Object.keys(str1).length != Object.keys(str2).length){console.log( ' length ')
 return false}

for(let key in str1){
  if(str1[key] != str2[key]) {
    //console.log( ' length ')
    return false
  }
}

  return true
}


const genMap = (str) => {

var charMap = {}
for (let char of str.replace(/[^\w]/g,'').toLowerCase()) {
  charMap[char] = charMap[char] + 1 || 1

}
return charMap

}

console.log(anagram('abcdef','abc  de  , fghi'))
