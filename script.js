let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"

function aclean(anagrams) {
    let sortArr = [];
    for (let elem of anagrams) {
        sortArr.push( Array.from(elem)
            .sort( (a, b) => a > b ? 1 : -1 )
            .join('')
            .toLocaleLowerCase()
        );
    }

    return Array.from(new Set(sortArr));
}