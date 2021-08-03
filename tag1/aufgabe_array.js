let array = ["Jazz", "Blues"];
array.push("Rock-n-Roll")

function remove_middle(liste) {
    let length = liste.length;

    liste.pop(liste[length / 2])
    return liste
}

array = remove_middle(array)
console.log(array)
console.log(array.)