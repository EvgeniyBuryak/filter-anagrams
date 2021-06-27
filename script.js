let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"

function aclean(anagrams) {

    let map = new Map();

    for (let elem of anagrams) {
        let key = Array.from(elem)
            .sort((a, b) => a > b ? 1 : -1)
            .join('')
            .toLocaleLowerCase();

        //if (!map.has(key)) {
            map.set(key, elem);
        //}
    }

    return Array.from(map.values());    
}