// Exercicios com testes jest, feito por Vinicius José.

// funcaoModulo

// Crie uma função (array function) que retorne o modulo da matriz. Matriz essa que é somada verticalmente
// da esquerda para a direita, e da direta para a esquerda.
// EX: 

// 5, 6, 8
// 8, 7, 3
// 4, 9, 1

// Primeiro é somado na vertical da direta para a esquerda: 5 + 7 + 1 = 13.
// Segundo é somado na vertical da esquerda para a direita: 8, 7, 4 = 19.
// Depois é feita uma subtração, e o resultado é o modulo do valor: 13 - 19 = -6.
// Lembrando que, por conta de ser modulo, o resultado final não é -6! E sim 6.
// NUNCA o valor retornado vai ser negativo, NUNCA.
// O valor sempre vai ser um numero inteiro positivo/neutro, ou seja, um NUMBER, não é FLOAT, nem STRING, nem ARRAY
// nem OBJETO, e sim um NUMBER (número) positivo!

// TIPO DE ENTRADA (PARAMETRO): array, onde 3 <= array.length <= 15.
// Exemplo padrão: [[5, 6, 8], [8, 7, 3], [4, 9, 1]].
// Mais exemplos:
// [[15, 88, 90], [0, 9, 1], [3, 11, 28]];
// [[17, 90, 98, 50], [100, 125, 5, 87], [3, 11, 4, 0], [37, 75, 67, 77]].

// // Para executar o teste dessa funcao, digite no terminal: npm test 01.

const funcaoModulo = () => {
  // ESCREVA SUA SOLUÇÃO AQUI!
}

// funcaoReverso

// Reverso do número. Faça uma função que retorne o 
// reverso de um número inteiro informado. Por exemplo: 127 -> '721'.
// TIPO DE ENTRADA (PARAMETRO): Number, onde 10 <= Number <= 10000.
// TIPO DE SAIDA: String.

// Para executar o teste dessa funcao, digite no terminal: npm test 02.

const funcaoReverso = () => {
  // ESCREVA SUA SOLUÇÃO AQUI!
}


// NÃO MEXA DAQUI PARA BAIXO!

export { funcaoModulo, funcaoReverso };
