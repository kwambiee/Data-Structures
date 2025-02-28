// Write a function that groups words that are anagrams together using a Map.

const groupAnagrams = (anagram_words) => {
    // initialize map
    let grouped_words = new Map();

    // map through the anagram_words
    for (let word of anagram_words) {
        // sorted = lowercase -> split -> sort -> join
        let sorted = word.toLowerCase().split('').sort().join('');
        grouped_words.set(sorted, (grouped_words.get(sorted) || []).concat(word))
        
    }
    return (Array.from(grouped_words.values()));
    
}

const words = ["listen", "silent", "enlist", "hello", "ohell"];
console.log(groupAnagrams(words));