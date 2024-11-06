function one() {
    let num = 0
    
    return (a) => {
        return num += a
    }
}

let test = one()

console.log(test(1))
console.log(test(2))
console.log(test(7))
