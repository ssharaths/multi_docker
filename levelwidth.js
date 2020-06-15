const tree = require('./tree.js')

function levelwidth(root){

let counter=[0]
let arr = [root,'s']

while(arr.length>1){
  let node = arr.shift()
if(node==='s'){
  counter.push(0)
  arr.push('s')

//--------
// else {
//   arr.push(...node.children);
//   counters[counters.length - 1]++;
// }
//--------
} else {
  counter[counter.length-1]++
  arr.push(...node.children)
}
//let node = arr.shift()


}
return counter


}

let node = new tree.Node(26)
let node1 = node.add(25)
let node2 = node.add(39)
node1.add(125)
let node3 = node1.add(126)
node3.add(526)
node2.add(139)
node2.add(238)

let tree1=new tree.Tree()
tree.root = node

console.log(levelwidth(tree.root))
// tree.traverseBF((node) => {
// console.log(' ' ,  node.data)
//
// })

// console.log('\n ' ,  node.data)
//
// tree.traverseDF((node) => {
// console.log('  ' ,  node.data)
//
// })
