import {Fraction} from './fraction.class.js';
// Fraction(numerator, denominator)
const fr = new Fraction(3, 4); // para representar "três quartos"
console.log(fr.numerator === 3);
console.log(fr.denominator === 4);
console.log(fr.toString()); // imprime, por exemplo: "3/4"
console.log(fr.toString() === '3/4');
// as seguintes linhas não devem funcionar
// fr.numerator = 10;
// fr.denominator = 10;
// -----------------------
const f1 = new Fraction(4, 15);
console.log(f1.toString() === '4/15');
const f2 = new Fraction(5, 15);
console.log(f2.toString() === '5/15');
const f3 = f1.plus(f2); // representaria uma situação de: f1 + f2
console.log(f3.toString()); // imprime "9/15"
console.log(f3.toString() === '9/15');
// TODO: mais 3 casos de teste com plus
const f4 = new Fraction(1, 3);
console.log(f4.canReduce); // imprime false
console.log(f4.canReduce === false);
const f5 = new Fraction(9, 15);
console.log(f5.canReduce); // imprime true
console.log(f5.canReduce === true);
f5.reduce();
console.log(f5.toString() === '3/5');
console.log(f5.canReduce === false);
const f19 = new Fraction(1, 2);
f19.reduce();
console.log(f5.toString() === '1/2');
console.log(f19.canReduce === false);
const f20 = new Fraction(5, 10);
console.log(f20.canReduce === true);
f20.reduce();
console.log(f20.toString() === '1/2');
console.log(f20.canReduce === false);
const f21 = new Fraction(12, 36);
console.log(f21.canReduce === true);
f21.reduce();
console.log(f21.toString() === '1/3');
console.log(f20.canReduce === false);
// TODO: escreva mais 3 casos de teste com reduce
const f6 = new Fraction(25, 4);
const f7 = new Fraction(2, 5);
const f8 = f6.divide(f7);
console.log(f8); // imprime "125/8"
const f22 = new Fraction(5, 2);
const f23 = new Fraction(2, 4);
const f24 = f22.divide(f23);
console.log(f24); // imprimi "20/5"
const f25 = new Fraction(7, 2);
const f26 = new Fraction(3, 1);
const f27 = f25.divide(f26);
console.log(f27); // imprimi "7/6"
const f28 = new Fraction(6, 7);
const f29 = new Fraction(7, 6);
const f30 = f28.divide(f29);
console.log(f30); // imprime "36/49"
// TODO: escreva mais 3 casos de teste com divide
const f9 = new Fraction(3, 7);
const f10 = new Fraction(2, 3);
const f11 = f9.multiply(f10);
console.log(f11.toString()); // imprime "6/21"
console.log(f11.toString() === '6/21'); // imprime "6/21"
const f31 = new Fraction(2, 3);
const f32 = new Fraction(5, 7);
const f33 = f31.multiply(f32);
console.log(f33); // imprime "10/21"
const f34 = new Fraction(6, 11);
const f35 = new Fraction(9, 5);
const f36 = f34.multiply(f35);
console.log(f36); // imprime "55/51"
const f37 = new Fraction(13, 5);
const f38 = new Fraction(7, 2);
const f39 = f37.multiply(f38);
console.log(f39); // imprime "91/10"
// TODO: escreva mais 3 casos de teste com multiply
const f12 = new Fraction(7, 8);
const f13 = new Fraction(2, 5);
console.log(f12.greaterThan(f13)); // imprime "true"
console.log(f12.greaterThan(f13) === true);
console.log(f12.lessThan(f13)); // imprime "false"
console.log(f12.lessThan(f13) === false);
console.log(f12.equals(f13)); // false
console.log(f12.equals(f13) === false);
const f14 = new Fraction(2, 3);
const f15 = new Fraction(12, 36);
const f16 = new Fraction(1, 3);
console.log(f14.greaterThan(f16)); // imprime "true";
console.log(f16.greaterThan(f15)); // imprime "false";
console.log(f14.greaterThan(f15)); // imprime "true"
console.log(f15.equals(f16)); // imprime "true"
console.log(f14.equals(f15)); // imprime "false"
console.log(f16.equals(f15)); // imprime "true"
console.log(f16.lessThan(f14)); // imprime "true";
console.log(f16.lessThan(f15)); // imprime "false";
console.log(f16.lessThan(f16)); // imprime "false";
// TODO: escreva mais 9 casos de teste com greaterThan, lessThan e equals
const f17 = new Fraction(4);
console.log(f17.numerator === 4);
console.log(f17.denominator === 1);
console.log(f17.toString() === '4/1');
// TODO: escreva casos de teste para o valor que se espera de f17
const f18 = new Fraction();
console.log(f18.numerator === 1);
console.log(f18.denominator === 1);
console.log(f18.toString() === '1/1');
// TODO: escreva casos de teste para o valor que se espera de f18

