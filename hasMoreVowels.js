function hasMoreVowels(str){
    const vowels = ['a','e','i','o','u']
    let count = 0
    const vowelsNeeded = str.length / 2
    let newArr = str.toLowerCase().split('')

    for (let i = 0; i < newArr.length; i++){
        let characters = newArr[i]

        if(vowels.includes(characters)){
            count++
        } if(count > vowelsNeeded){
            return `True this word has more vowels than consonants.`
        } 
    }
    return `False does not have more vowel than consonants`
}

console.log(hasMoreVowels('ramon'))
console.log(hasMoreVowels('ana'))
console.log(hasMoreVowels('Rue'))