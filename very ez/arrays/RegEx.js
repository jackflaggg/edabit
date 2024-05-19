function acceptedWords(arr) {
    return arr.filter(elem => {
        if (!elem.match(new RegExp('C', 'g'))) {
            return elem
        }
    })
}

console.log(acceptedWords(["Ducks", "Bears",  "Cats"]));