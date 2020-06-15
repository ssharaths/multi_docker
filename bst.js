class Node {

  constructor(data){

    this.data = data
    this.left = null
    this.right = null
  }

insert(data) {

if(data<this.data && this.left){
 console.log(' Left r  ', data)
  this.left.insert(data)
} else if( data<this.data){
  console.log(' Left insert  ', data)
  this.left = new Node(data)
} else if(data > this.data && this.right){
  console.log(' Right r  ', data)
  this.right.insert(data)
}else if( data > this.data){
console.log(' Right insert  ', data)
  this.right = new Node(data)
}



}

contains(data){

  if (this.data === data){
    return this
  }

if(data < this.data && this.left){
console.log(' Left  +  ', data)
  return this.left.contains(data)
}else if(data > this.data && this.right){
  console.log(' Right  + ', data)
  return this.right.contains(data)
}
return null


}



}

const node = new Node(25)
const node1 = new Node(5)
const node2 = new Node(62)

node.insert(5)
node.insert(62)
node.insert(40)
node.insert(23)
node.insert(132)
console.log(node.contains(23))
