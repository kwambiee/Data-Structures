function aclean(arr) {
    let map = new Map();
    let count = new Map();

    for (let word of arr) {
        let sorted = word.toLowerCase().split('').sort().join(''); 
        map.set(sorted, (map.get(sorted) || []).concat(word));
        count.set(sorted, (count.get(sorted) || 0) + 1); 
    }

    console.log(map, "map");
    return Array.from(map.values()).filter(group => group.length > 1).flat();

    
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares", "unique"];
console.log(aclean(arr));