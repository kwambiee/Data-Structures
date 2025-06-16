var prefixCount = function (words, pref) {
    let count = 0;
    for (i = 0; i < words.length; i++) {
        if(words[i].startsWith(pref)){
            count++;
        }
    }
    return count;

};

prefixCount(["pay", "attention", "practice", "attend"], "code"); 