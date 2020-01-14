// Write code to reverse a String

const string = 'abcdefghijklmnopqrstuvwxyz'
let resString = ''

let i = 0
let j = string.length

while (i <= string.length) {
    resString += string[j]
    j--
    i++
}
resString.substr(1)
console.log(resString)
return string