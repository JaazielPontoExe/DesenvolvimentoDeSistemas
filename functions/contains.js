export function contain(index,char) {
    for (let j = 0; j < char.length; j++) {
        if (index == char[j]) return true
    } return false
}