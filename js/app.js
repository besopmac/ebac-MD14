(function() {

// Containers
const result1 = document.querySelector('#result1');
const result2 = document.querySelector('#result2');
const result3 = document.querySelector('#result3');

// #1 Execício
const sentences = [
	((8 + 6) + ` (${typeof (8 + 6)})`),
  (('8' + '6') + ` (${typeof ('8' + '6')})`),
  (('8.6' + 4) + ` (${typeof ('8.6' + 4)})`),
  (('8' * 4) + ` (${typeof ('8' * 4)})`),
  (('8' - 4) + ` (${typeof ('8' - 4)})`),
  (('8' / 3) + ` (${typeof ('8' / 3)})`),
  ((5 + true) + ` (${typeof (5 + true)})`),
  (('teste' + true) + ` (${typeof ('teste' + true)})`),
  (('8' == 8) + ` (${typeof ('8' == 8)})`),
  (('8' == 4) + ` (${typeof ('8' == 4)})`),
  ((8 === '8') + ` (${typeof (8 === '8')})`),
  ((8 !== '8') + ` (${typeof (8 !== '8')})`),
  ((8 < 4) + ` (${typeof (8 < 4)})`),
  ((8 > 4) + ` (${typeof (8 > 4)})`)
]

// #2 Exercício
const exer2 = [
	(10 + 15),
  ('10' + 2),
  ('10' * 2),
  ('10' / 3),
  ('10' % 3),
  (10 + true),
  (10 == '10'),
  (10 === '10'),
  (10 < 11),
  (10 > 12),
  (10 <= 10.1),
  (10 > 9.99),
  (10 != 'dez'),
  (10 + true),
  ('dez' + true),
  (10 + false),
  (10 * false),
  (true + true),
  '10++ // invalid increment operand',
  '10-- // invalid decrement operand',
  (1 & 1),
  (1 & 0),
  (0 & 0),
  (1 & 0),
  (0 / 1),
  (5 + 5 == 10),
  ('5' + '5' == 10),
  ('5' * 2 > 9),
  (10 + 10) * 2,
  (10 + 10 * 2)
]

// #3 Exercicio
let branco = 'preto';
let preto = 'cinza';
let cinza = 'branco';
let carro = 'preto';
let valor = 30000;
let prestacao = 750;
let cavalo = carro == 'preto' ? 'cinza' : 'marron'

const exer3 = [
	(`a) branco == 'branco': ` + (branco == 'branco')),
	(`b) branco == cinza: ` + (branco == cinza)),
	(`c) carro === branco: ` + (carro === branco)),
	(`d) ` + (cavalo)),
	(`e) valor / prestacao: ` + (valor / prestacao) + ` prestações`),
	(`e) branco + preto + cinza: ` + (branco + preto + cinza).length + ` caracteres`),
]

function fillResult(results, target) {
	for (let i = 0; i < results.length; i++) {
		const listItem = document.createElement("p");
		const sentenceText = document.createTextNode(results[i]);
		listItem.appendChild(sentenceText);
		target.appendChild(listItem);
	}
}

fillResult(sentences, result1);
fillResult(exer2, result2);
fillResult(exer3, result3);
})()