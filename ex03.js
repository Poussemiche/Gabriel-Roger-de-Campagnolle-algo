// Write a method to decide if two strings are anagrams or not.

let string = 'poule'
let string2 = 'loupe'
let string2Wrong = 'louze'

let i = 0
let j = 0
let cpt = 0

while (i != string.length) {
    while (j != string2.length) {
        if (string[i] == string2[j]) {
            i++
            j = 0
            cpt++
        } else
            j++
    }
    if (j == string2.length && i != string.length) {
        console.log('This is not an anagram')
        return false
    }
}

if (cpt == string.length) {
    console.log('This is an anagram')
    return true
}
    