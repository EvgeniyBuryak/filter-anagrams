let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"

function aclean(anagrams) {
    let sortSet = new Set();
    let set = new Set();
    for (let elem of anagrams) {
        let sortElem = Array.from(elem)
            .sort((a, b) => a > b ? 1 : -1)
            .join('')
            .toLocaleLowerCase();

        if (!sortSet.has(sortElem)) {
            sortSet.add(sortElem);
            set.add(elem);
        }
    }
    
    return Array.from(set);
}