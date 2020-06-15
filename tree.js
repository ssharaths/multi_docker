
class Node {

constructor(data) {

this.data = data
this.children = []

}


add(data){

  //let node = new Node(data)
  this.children.push(new Node(data))
 return this.children[this.children.length - 1]
}

remove(data){

  this.children = this.children.filter((node) => {

    return node.data !== data
  })

}


}


class Tree {

constructor() {

  this.root=null
}


traverseBF(fn){

  let node = this.root

  if(!node) {
    return
  }

  let arr = []
  //console.log('Arr Length  at init   ', arr.length)
  arr.push(this.root)
  //console.log(arr.length)

  while(arr.length){
    node = arr.shift()
    arr.push(...node.children)
    fn(node)
    //console.log('\n', arr.length)
  }

}

traverseDF(fn) {
 let arr = []

 arr.push(this.root)

while(arr.length){

 let node = arr.shift()
 //arr.unshift(...node.children)
  let i = 1
  for (let child of node.children ){
  arr.unshift(node.children[node.children.length - i])
i++}

 fn(node)

 //-------
 // while (arr.length) {
 //   const node = arr.shift();
 //
 //   arr.unshift(...node.children);
 //   fn(node);
 // }
 //-------

}

}

}

let node = new Node(26)
let node1 = node.add(25)
let node2 = node.add(39)
node1.add(125)
let node3 = node1.add(126)
node3.add(526)
node2.add(139)
node2.add(238)

let tree=new Tree()
tree.root = node
tree.traverseBF((node) => {
console.log(' ' ,  node.data)

})

console.log('\n ' ,  node.data)

tree.traverseDF((node) => {
console.log('  ' ,  node.data)

})

module.exports = {
  Node,
  Tree
}
