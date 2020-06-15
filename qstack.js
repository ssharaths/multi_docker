const Stack = require('./stack.js')

class Queue {

constructor() {
const this.first = new Stack()
const this.second = new Stack()

}

add(record) {
 this.first.push(record)

}

remove() {

while(this.first.peek()) {
this.second.push(this.first.pop())
}
const retRecord = this.second.pop()

while(this.second.peek()){

  this.first.push(this.second.pop()) }
  return retRecord
}

peek() {




}


}






const qstack = () {






}
