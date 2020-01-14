// Implement an algorithm to determine if a string has all unique characters.

let strings = ['abcdefghijklmopqrstuwxyz', 'abcdefghijkk']

let i = 0
let j = 1

while (i != strings.length) {
    while (j != strings.length) {
        if (strings[1][i] == strings[1][j]) {
            console.log('Doublon détecté')
            return 0
        }
        else
            j++
    }
    j = 1
    i++
}
console.log('Pas de Doublon')
return 1