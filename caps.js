const caps = (str) => {

const words = str.split(' ')
const newWords = []
console.log(words)
for ( let word of words) {
var capWord = word[0].toUpperCase() + word.slice(1)
console.log(capWord)
newWords.push(capWord)
words[word] = word
}


return newWords.join(' ')

}

console.log(caps('This is a cool program. Its humid weather'))
