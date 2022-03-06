function doas(strings, x, y){
    const operator = strings[1].replace(/\s/gi, "");
    switch (operator){
        case '+': return x + y;
        case '-': return x - y;
        case '*': return x * y;
        case '/': return x / y;
        default: throw Error(`unknow operator: '${operator}'`);
    }
}

console.log(doas`${42}%${76}`);