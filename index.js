function min(...nums) {
    let minimal = Infinity

    for (let items of nums) {
        if (typeof items === 'number') {
            if (items < minimal) {
                minimal = items
            }
        } else if (Array.isArray(items)) {
            for (let item of items) {
                if (item < minimal) {
                    minimal = item
                }
            }
        } else if (typeof items === 'object') {
            for (let key in items) {
                if (items[key] < minimal) {
                    minimal = items[key]
                }
            }
        }
    }
    return minimal
}

console.log(min(1, 2));
console.log(min([1, 2]));
console.log(min({ a: 1, b: 2 }));
console.log(min({ a: 1, b: 2 }, { a: -21, b: -112 }));




function math() {
    let a = +prompt()
    let b = +prompt()
    console.log(`
    ${a} + ${b} = ${a + b} 
    ${a} - ${b} = ${a - b} 
    ${a} / ${b} = ${a / b} 
    ${a} * ${b} = ${a * b} 
    ${a} ** ${b} = ${a ** b} 
    ${a} % ${b} = ${a % b} 
    `)
}
math()

let names = ["Alex","George","Michael"]
function name(a, b, c) {
return names.reduce((a,b) => {
    if(b.length > a.length) {
        return b 
    } else {
        return a
    }
})
}
let ln = name()
console.log(ln);

