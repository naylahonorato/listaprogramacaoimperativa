// Array lista compras 
let listaCompras = [ 'Arroz','Feijão','Açúcar'];
console.log("Lista de Compras",listaCompras);

console.log("***** JOIN *****");
let separadosporTraco = listaCompras.join("-");
    console.log("O método Join junta os elementos de um array");
    console.log(separadosporTraco);

console.log("***** POP *****");
let ultimoItem = listaCompras.pop()
    console.log("O método Pop elimina o ultimo elemento de um array");
    console.log(ultimoItem);

console.log("***** PUSH *****");
listaCompras.push('Macarrão')
    console.log("O método Push adiciona elementos ao final de um array");
    console.log(listaCompras);

console.log("***** SHIFT *****");
let pimeiroItem = listaCompras.shift()
    console.log("O método Shift elimina o primeiro elemento de um array");
    console.log(listaCompras);

console.log("***** UNSHIFT *****");
listaCompras.unshift('Carne');
    console.log("O método Unshift adiciona elementos ao inicio de um array");
    console.log(listaCompras);
