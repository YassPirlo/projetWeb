function letterFinder(word,match){
    compteur=word.length
    for (let i=0 ; i<compteur; i++){

        if (word[i]==match){
            console.log("Found the", match, "at", i)
        }else{
            console.log("No match found at", i)
        }
    }
}
letterFinder("test","t")