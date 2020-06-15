
class Queue {

constructor(){

this.data=[]


}

add(record) {
  this.data.unshift(record)
  //console.log(record, '     ', this.data)
}

remove(){

//  console.log('FROM REMOVE   ', this.data)
  return this.data.pop()
}

peek() {

  return ( this.data[this.data.length - 1])
}

}

const q = new Queue()
q.add(1)
q.add(2)
q.add(3)

console.log('PEEK   ' , q.peek())

console.log(q.remove())
console.log(q.remove())
console.log(q.remove())

module.exports = Queue
