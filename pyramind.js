
const pyramid = (n) => {

const midPoint = Math.floor((n*2 - 1)/2)
console.log(midPoint)

for(var rows = 0; rows<n; rows++) {
 var level = ''
  for(var columns = 0; columns < n * 2 - 1; columns++){
    if (midPoint - rows <= columns && midPoint + rows >= columns) {
      level+='#'
    }else {level+=' '}
}
console.log(level)
}
}



pyramid(5)
