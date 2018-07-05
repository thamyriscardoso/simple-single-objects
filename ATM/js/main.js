import {ATM} from './atm.class.js';

const atm = new ATM(2344499);
console.log(atm.numeroSerie === 2344499);
// a linha a seguir não deve fazer efeito
// atm.numeroSerie = 34883444;
console.log(atm.numeroSerie === 2344499);
// o ATM não tem dinheiro no início
console.log(atm.valor); // 0
console.log(atm.valor === 0);
// abastecendo com 33 notas de 100
atm.abastecer(33, 100);
// verificando a quantidade de cédulas de 100
console.log(atm.cedulas(100)); // 33
// espera-se 33 cédulas
console.log(atm.cedulas(100) === 33);
// e 33 * R$ 100 totalizando R$ 3300
console.log(atm.valor === 3300);
// espera-se nenhuma cédula de qualquer outro valor
console.log(atm.cedulas(5)); // 0
console.log(atm.cedulas(5) === 0);
console.log(atm.cedulas(50)); // 0
console.log(atm.cedulas(50) === 0);
// mesmo os que não existem podem ser consultados, mas retornam 0
console.log(atm.cedulas(3)); // 0
console.log(atm.cedulas(3) === 0);
// abastecimento de cédulas não existentes são rejeitados
atm.abastecer(8, 3); // 8 cédulas de R$ 3,00
console.log(atm.cedulas(3) === 0);
// consultando o valor
console.log(atm.valor); // 33 * 100 = 3300 reais
console.log(atm.valor === 3300);
// retirada rejeitada
atm.retirar(350); // não há cédulas de R$ 50,00
console.log(atm.cedulas(100) === 33);
console.log(atm.valor === 3300);
// retirada válida
atm.retirar(300); // 3 cédulas de 100
console.log(atm.cedulas(100) === 30);
console.log(atm.valor === 3000);
// retirada rejeitada
atm.retirar(3100); // não há cédulas suficientes
console.log(atm.cedulas(100) === 30);
console.log(atm.valor === 3000);
// retirada válida
atm.retirar(3000); // vai esvaziar o ATM
console.log(atm.cedulas(100) === 0);
console.log(atm.valor === 0);
// abastecimento de R$ 50,00 e R$ 10,00
atm.abastecer(10, 10); // 10 cédulas de R$ 10,00
atm.abastecer(10, 50); // 10 cédulas de R$ 50,00
console.log(atm.cedulas(10) === 10);
console.log(atm.cedulas(50) === 10);
console.log(atm.valor === 600); // 10 * 10 + 10 * 50
// retirada prioriza cédulas de maior valor
atm.retirar(100); // retira 2 cédulas de R$ 50,00
console.log(atm.cedulas(10) === 10);
console.log(atm.cedulas(50) === 8);
console.log(atm.valor === 500); // 10 * 10 + 8 * 50
// retirada combinada
atm.retirar(90); // 1 cédula de R$ 50,00 e 4 cédulas de R$ 10,00
console.log(atm.cedulas(10) === 6);
console.log(atm.cedulas(50) === 7);
console.log(atm.valor === 410); // 6 * 10 + 7 * 50
// até aqui 0.5 pts
// incluir casos de teste pessoais com retiradas
// quem combinam 3, 4 e 5 cédulas (+0.5 pts)
// ---------------------------------------------------


atm.retirar(385);
// retirada invalida
console.log(atm.valor === 410);
atm.abastecer(1, 20);
atm.abastecer(1, 5);
atm.retirar(385);
console.log(atm.valor === 50);
console.log(atm.cedulas(5) === 0);
console.log(atm.cedulas(10) === 5);
console.log(atm.cedulas(20) === 0);
console.log(atm.cedulas(50) === 0);
console.log(atm.cedulas(100) === 0);
// retirou 1 cédula de 5, 1 cédula de 10, 1 cédula de 20, e 7 cédulas de 50
// 4 cédulas

atm.abastecer(5, 100);
atm.abastecer(5, 50);
atm.abastecer(5, 20);
atm.abastecer(5, 5);
console.log(atm.valor === 925);
atm.retirar(1000);
// inválido  maior que valor total

atm.retirar(125);
// 1 de 100  1 de 20  1 de 5
// 3 cédulas
console.log(atm.valor === 800);

atm.retirar(490);
// 4 de 100 1 de 50 2 de 20
// 3 cédulas
console.log(atm.valor === 310);

atm.retirar(310);
// 4 de 5  5 de 10 2 de 20 4 de 50
// 4 cédulas
// esvaziou
console.log(atm.valor === 0);
console.log(atm.cedulas(5) === 0);
console.log(atm.cedulas(10) === 0);
console.log(atm.cedulas(20) === 0);
console.log(atm.cedulas(50) === 0);
console.log(atm.cedulas(100) === 0);
atm.abastecer(10, 100);
atm.abastecer(10, 50);
atm.abastecer(5, 20);
atm.abastecer(5, 10);
atm.abastecer(5, 5);
console.log(atm.valor === 1675);

atm.retirar(1535);
// 10 de 100  10 de 50 1 de 20 1 de 10 1 de 5
// 5 cédulas
console.log(atm.valor === 140);
atm.abastecer(2, 100);
atm.abastecer(2, 50);
atm.retirar(185);
// 1 de 100 1 de 50 1 de 20 1 de 10 1 de 5
// 5 cédulas
console.log(atm.valor === 255);
