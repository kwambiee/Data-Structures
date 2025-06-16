// Write a function that takes an array of words and returns a Map where the keys are words and the values are the number of times each word appears in the array.

const countWords = (array_words) => {
    let map_words = new Map();
    let mapped_words;

    for (let word of array_words) {
        mapped_words = map_words.set(word, (map_words.get(word)|| 0) + 1)
    }
    //  To make object from Map
    // Object.fromEntries(map_words)

    // To make Array from Map
    // Array.from(map_words)

    return mapped_words;

    

}

const words = ["apple", "banana", "apple", "orange", "banana", "banana"];
console.log(countWords(words));