// const steps = (n) => {
//
//   for (let rows=0; rows<n; rows++) {
//     var steps = ''
//     for(var column =0; column <n; column++){
//       if(column<=rows){
//         steps += '#'
//       } else { steps += ' '}
//
//     }
//     console.log(steps)
//
//
//
//   }
//
// return ''
//
// }


//-----------------

const recSteps = (n, row=0,stairs = '') => {

if ( n === row) {
  return
}

if(n===stairs.length) {
  console.log(stairs)
  return recSteps(n,row + 1,'')
}

stairs=stairs.length<=row ? stairs+='#':stairs+=' '
// if(stairs.length <= row){
// //  console.log(stairs)
//   stairs+='#'
// } else (stairs += ' ')
recSteps(n,row,stairs)

}

recSteps(5,0,'')
