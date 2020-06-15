const q = require('./queue.js')


const weave = (q1,q2) => {

var q3 = new q()

while(q1.peek() || q2.peek()) {

  if ( q1.peek()){
    q3.add(q1.remove())
    console.log( ' peek    1  \n')
  }
  console.log( 'in between     \n')

  if(q2.peek()){
    console.log( ' peek    2  \n')
    q3.add(q2.remove())
  }
  console.log(' loop    ', q3)
}
return q3
}


const q5 = new q()
q5.add(1)
q5.add(2)
q5.add(3)
q5.add(4)

const q4 = new q()
q4.add('one')
q4.add('two')
q4.add('three')
q4.add('four')

console.log(weave(q5,q4))
