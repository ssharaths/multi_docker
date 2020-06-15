// const fib = (n) => {
//  var fibArr = [0,1]
//
//   for ( let count = 2; count<=n; count++){
//     fibArr.push(fibArr[count-1] + fibArr[count-2])
//
//   }
//   return(fibArr[n])
// }

function memoize(fn){

var cache = {}
return function(...args) {

   if ( cache[args]){
     return cache[agrs]
   }
   const result = fn.apply(this,args)
   cache[args] = result
   return result

     }
   }
}


}

const fib = (n) => {
if ( n < 2){
  return n
}
return fib(n-1) + fib(n-2)

}

console.log(fib(26))
