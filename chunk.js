//const chunk = (arr,size) => {

// var chunked = []
// var i = 0
// console.log(arr.length)
//
// while ( i < arr.length) {
//  var tempArr = arr.slice(i, i + size)
//  chunked.push(tempArr)
//  i += size
//  }
//
// return chunked
// }
//
// console.log(chunk([1,2,3,4,5,6],2))

//-----------



 const chunk = (arr, size) => {

 var chunked = []
 for(var element of arr ){
   var subArr= chunked[chunked.length - 1]

  if ( !subArr || subArr.length === size){
    subArr = [element]
    chunked.push(subArr)
  } else {
    subArr.push(element)
  }


 }

 return chunked

 }

console.log(chunk([1,2,3,4,5,6],2))


//
// function chunk(array, size) {
//   const chunked = [];
//
//   for (let element of array) {
//
//     const pre = chunked[chunked.length - 1];
//     console.log('element  ' , element, '   previous element  ', pre,
//   '   chunked    ',chunked)
//     if (!pre || pre.length === size) {
//       chunked.push([element]);
//     } else {
//       pre.push(element);
//     }
//   }
//
//   return chunked;
// }
//
// console.log(chunk([1,2,3,4,5,6], 2))
