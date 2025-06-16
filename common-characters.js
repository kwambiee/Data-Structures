var commonChars = function (words) {
    let common = [];
    let firstWord = words[0];
    for (let i = 0; i < firstWord.length; i++) {
        let char = firstWord[i];
        if (words.every(word => word.includes(char))) {
            common.push(char);
            words = words.map(word => word.replace(char, ''));
        }
    }
    return common;   

};
commonChars(["bella", "label", "roller"])
// return array of characters that show up in all strings