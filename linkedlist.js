
class Node {

  constructor(data,next=null) {

    this.data = data
    this.next = next
  }
}


class LinkedList{

constructor() {

this.head = null

}

insertFirst(data){

const node = new Node(data)


this.head = new Node(data,this.head)

// {"head":{"data":96,"next":{"data":33, "next":null}}}
//---------------


// const node = new Node(data,this.head)
// this.head = node
//---------------

// if(!this.head){
//   this.head = node
// } else {
//   const node1 = this.head()
//   this.head = node
//   node.next = node1
//
// }
}

size() {

 let counter  = 0
  let  node = this.head

  while(node) {
    counter++
    node = node.next

  }
// const node = this.head
// console.log( ' node   ',  node)
// if(node){
//   var size = 1
// }else { return 0}
// while(node.next != null){
// size++
// node.next=node.next.next

//}
return counter

} //size

getFirst() {

  return this.head
}

getLast() {

if(!this.head){
  return null
}
let node = this.head
while(node) {
  if(!node.next){
    return node
  }
  node = node.next
}
 //  var node = this.head
 //  while( node) {
 //    if(!node.next) {
 //      return node
 //    }
 //    node=node.next
 //  }
 // if ( node ) {
 //   return node
 // } else { return null}
 return node
}

clear() {

  this.head = null
  return(null)
}
removeFirst(){

 if ( !this.head) { return null}
  let node = this.head
  this.head = node.next
  return node.data
}

removeLast(){
if(!this.head){
  return null
}
if(!this.head.next){
this.head = null
return }

let preNode = this.head
let Node = this.head.next

while(node.next){
  preNode=node
  Node = node.next


}
preNode.next=null

}

insertLast(data){
let newNode = new Node(data)

let lastNode = this.getLast()
if(lastNode){
  lastNode.next = newNode
  return
} else {this.head = newNode
return }

} //insertLast

getAt(index){
// if(!this.head){
//   return null
//}
let counter =0
let node = this.head

while(node){
if(counter === index) {
  return node
}
counter++
node=node.next

}
return null

}

removeAt(index) {
if(!this.head){
  return
}
if(index ===0){
  this.head = this.head.next
  return
}

let previousNode = this.getAt(index-1)
if(!previousNode || !previousNode.next ){return null}
previousNode.next = previousNode.next.next

}

insertAt(data,index){

if(!this.head){
  this.head(new Node(data))
  return
}
if(index ===0){
  this.head= new Node(data,this.head)
  return
}

const previousNode = this.getAt(index-1) || this.getLast()


previousNode.next = new Node(data,previousNode.next)

}

forEach(fn) {
if (!this.head){
  return
}
let node = this.head
let counter = 0
while(node){

fn(node,counter)
counter++
node=node.next

}

}

*[Symbol.iterator]() {
  let node = this.head

  while(node){
    yield node
    node=node.next

  }



}




}

module.exports = {
  Node:Node,
  LinkedList:LinkedList
}


const list = new LinkedList()
//list.head = new Node(32)
list.insertFirst(28)
list.insertFirst(34)
list.insertFirst(20)
list.insertFirst(15)


console.log(list.head.data)
console.log('size   ', list.size())
console.log(list.getLast())
//console.log(list.clear())
//console.log(list.size())
console.log('removed   ',   list.removeFirst())
console.log('size   ', list.size())
console.log('insert last  ',  list.insertLast(46))
console.log('after insert    ', list.getLast(), '   size   ', list.size())

console.log(' get at   ', list.getAt(2))
list.forEach((node,i) =>{
  console.log( node.data + '  at index   ' + i + '\n')
})

for(let node of list ){
  console.log('for loop    ' , node.data + '\n')
}

list.insertLast(51)


function midPoint(list){
 let slow = list.getFirst()
 let fast = list.getFirst()

while(fast.next && fast.next.next){
  slow = slow.next
  fast = fast.next.next

}
return slow


}

function circular(list) {
let slow = list.getFirst()
let fast = list.getFirst()

while(fast.next  &&  fast.next.next){
  slow = slow.next
  fast = fast.next.next
  if( slow === fast) {
    return true
  }

}
return false

}

function fromLast(list,n){
  let slow = list.getFirst()
  let fast = list.getFirst()

  // let counter = 0
  // while(counter < n) {
  //   fast = fast.next
  //
  // }

  while(n>0){
    fast = fast.next
    n--

  }

  while(fast){
    slow = slow.next
    fast = fast.next

  }
  return slow

}




console.log('midPoint  ' , midPoint(list).data)

console.log(' circular list   ', circular(list))
