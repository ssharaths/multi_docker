const bubbleSort = (arr) => {

  for(let i=0; i<arr.length;i++){
    for(let j=0;j<(arr.length -1 - i); j++){


      if (arr[j] > arr[j+1]){
        let lesser = arr[j+1]
        arr[j+1]=arr[j]
        arr[j] = lesser


      }
    }

  }

  return arr
}

const selectionSort = (arr) => {

for(let i=0; i<arr.length; i++){
    let indexOfMin = i
  for(let j=i+1; j<arr.length; j++){
    if(arr[j] < arr[indexOfMin]){
      indexOfMin = j

    }
    if(i !== indexOfMin){

      let lesser = arr[indexOfMin]
      arr[indexOfMin] = arr[i]
      arr[i] = lesser
    }


  }

}

return arr
}


console.log(bubbleSort([15,132,34,5,96,53]))
console.log(selectionSort([15,132,34,5,96,53]))
