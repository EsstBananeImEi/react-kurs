
function uppercase_first_char(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

console.log(uppercase_first_char("petEr"));
console.log(uppercase_first_char("sebasitan"));
console.log(uppercase_first_char("petra"));

function check_for_spam(text) {
    let lowerStr = text.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

console.log(check_for_spam("vIaGRa"))


// function truncate(text, max_length) {
//     if (text.length > max_length) {
//         return text.slice(0, max_length - 1) + "..."
//     }
//     console.log(text)

// }

function truncate(text, max_length) {
    return (text.length > max_length) ?
        text.slice(0, max_length - 1) + "..." : text;
}

console.log(truncate("What I'd like to tell on this topic is:", 20))
console.log(truncate("What I'd like to tell on this topic is:", 5))


function extractCurrencyValue(string) {
    return string.slice(1)
}

console.log(extractCurrencyValue('$120'))