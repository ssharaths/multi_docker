
class Stack {

constructor(inData) {

  this.data = inData || []
}

push(record) {

  this.data.push(record)
}

pop(){

return this.data.pop()

}

peek() {

  return this.data[this.data.length - 1]
}


}

module.exports = Stack

const s = new Stack([1,2])

// s.push(1)
// s.push(2)
// s.push(3)
// s.push(4)

const s1 = new Stack()

s1.push('one')
s1.push('two')
s1.push('three')
s1.push('four')

console.log(s.pop())
console.log(s1.pop())
console.log(s.pop())
console.log(s1.pop())
console.log(s.pop())
console.log(s1.pop())
