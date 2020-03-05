/**
 * Cria as váriaveis a e b
 * com escopo de script (global)
 */

var a = 1;
let b = 1;

if (a % 2 == 1) {
    a = 2;
    b = 2;
}

const c = a + b;
console.log(c);

/**
 * Toda váriavel criada dentro de uma 
 * função tem escopo de bloco
 */
function fazAlgumaCoisa() {
    a = a + 1;
    b = b + 1;
    var d = 7;
    let e = 8;
}

fazAlgumaCoisa();
console.log(a);
console.log(b);
//console.log(d);
//console.log(e);

if (a % 2 == 1) {
    var f = 2;
    let g = 1;
}

console.log(f);
console.log(g);