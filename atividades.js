function atividade1() {
  console.log("Hello world!");
}

function atividade2() {
  const num1 = parseFloat(prompt("Digite o primeiro numero: "));
  const num2 = parseFloat(prompt("Digite o segundo numero: "));
  const soma = num1 + num2;
  console.log(`A soma de ${num1} + ${num2} e ${soma}`);
}

function atividade3() {
  const num = parseFloat(prompt("Digite um numero: "));
  if (num % 2 == 0) {
    console.log(`O  numero: ${num} e par`);
  } else {
    console.log(`O numero: ${num} e impar`);
  }
}

function atividade4() {
  const num1 = parseFloat(prompt("Digite o primeiro numero: "));
  const num2 = parseFloat(prompt("Digite o segundo numero: "));
  const maior = num1 > num2 ? num1 : num2;
  console.log(`O maior numero e: ${maior}`);
}

function atividade5() {
  const num1 = parseFloat(prompt("Digite o Primeiro numero: "));
  const num2 = parseFloat(prompt("Digite o Segundo numero: "));
  const num3 = parseFloat(prompt("Digite o terceiro numero: "));
  const media = (num1 + num2 + num3) / 3;
  console.log(`A media dos numeros e: ${media}`);
}

function atividade6() {
  const raio = parseFloat(prompt("Digite o valor do raio"));
  const area = Math.PI * Math.pow(raio, 2).toFixed(2);
  console.log(`A area do circulo e ${area}`);
}

function atividade7() {
  const celsius = parseFloat(prompt("Digite o Graus em Celcius: "));
  const fahrenheit = (celsius * 9) / 5 + 32;
  console.log(`O valor de ${celsius} em fahrenheit e ${fahrenheit}`);
}

function atividade8() {
  const numero = parseFloat(prompt("Digite um numero para saber a tabuada: "));
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

function atividade9() {
  const numero = parseFloat(prompt("Digite um numero: "));
  if (numero < 0) {
    console.log("Fatorial não definido para números negativos.");
    return;
  }
  let resultado = 1;
  for (let i = 2; i <= numero; i++) {
    resultado *= i;
  }
  console.log(`O fatorial de ${numero} é ${resultado}`);
}

function atividade10() {
  for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
}

function atividade11() {
  const num = parseFloat(
    prompt("Digite um numero para verificar se e primo: ")
  );
  if (num <= 1) {
    console.log("Número menor ou igual a 1");
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    console.log("Dividindo por:", i);
    if (num % i === 0) {
      console.log("É divisível por", i);
      return false;
    }
  }

  console.log("É primo");
  return true;
}
function atividade12() {
  const n = parseInt(prompt("Digite um número natural:"));
  const soma = (n * (n + 1)) / 2;
  console.log("A soma dos primeiros", n, "números naturais é:", soma);
}

function atividade13() {
  const n = parseInt(
    prompt("Digite a quantidade de termos da sequência de Fibonacci:")
  );
  const fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  console.log(fib);
}

function atividade14() {
  let input = prompt("Digite um número para inverter:");
  let num = parseInt(input);

  let invertido = 0;
  while (num !== 0) {
    invertido = invertido * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  console.log("O número invertido é:", invertido);
}
function atividade15() {
  const base = parseInt(prompt("Digite a base:"));
  const expoente = parseInt(prompt("Digite o expoente:"));
  let resultado = 1;
  for (let i = 0; i < expoente; i++) {
    resultado *= base;
  }
  console.log(`${base} elevado a ${expoente} é igual a ${resultado}`);
}

function atividade16() {
  const num1 = parseInt(prompt("Digite o primeiro número:"));
  const num2 = parseInt(prompt("Digite o segundo número:"));

  function mdc(a, b) {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  console.log("O MDC de", num1, "e", num2, "é", mdc(num1, num2));
}

function atividade17() {
  const num1 = parseInt(prompt("Digite o primeiro número:"));
  const num2 = parseInt(prompt("Digite o segundo número:"));

  function mmc(a, b) {
    return (a * b) / mdc(a, b);
  }

  console.log("O MMC de", num1, "e", num2, "é", mmc(num1, num2));
}

function atividade18(){
    const num = parseInt(prompt("Digite um número:"));
    let somaDivisores = 0;
    for (let i = 1; i < num; i++) {
      if (num % i === 0) {
        somaDivisores += i;
      }
    }
    if (somaDivisores === num) {
      console.log(num, "é um número perfeito.");
    } else {
      console.log(num, "não é um número perfeito.");
    }
  }
  
function atividade19(){
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let tentativas = 0;
  
    while (true) {
      const chute = parseInt(prompt("Adivinhe o número (entre 1 e 100):"));
      tentativas++;
  
      if (chute === numeroSecreto) {
        console.log(`Parabéns! Você acertou em ${tentativas} tentativas.`);
        break;
      } else if (chute < numeroSecreto) {
        console.log("O número secreto é maior.");
      } else {
        console.log("O número secreto é menor.");
      }
    }
  }

  function atividade20(){
    let numero = parseInt(prompt("Digite um número inteiro positivo:"));

    while (isNaN(numero) || numero <= 0) {
      numero = parseInt(prompt("Número inválido. Digite um número inteiro positivo:"));
    }
  
    // Função para verificar se um número é primo
    function isPrimo(num) {
      if (num <= 1) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    }
  
    // Função para calcular a soma dos números naturais até um número
    function somaNumerosNaturais(num) {
      return (num * (num + 1)) / 2;
    }
  
    // Função para gerar os primeiros N termos da sequência de Fibonacci
    function fibonacci(n) {
      const fib = [0, 1];
      for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
      }
      return fib;
    }
  
    // Função para inverter os dígitos de um número
    function inverterNumero(num) {
      let invertido = 0;
      while (num !== 0) {
        invertido = invertido * 10 + (num % 10);
        num = Math.floor(num / 10);
      }
      return invertido;
    }
  
    // Função para calcular o fatorial de um número
    function fatorial(num) {
      if (num === 0 || num === 1) return 1;
      let resultado = 1;
      for (let i = 2; i <= num; i++) {
        resultado *= i;
      }
      return resultado;
    }
  
    // Chamar as funções e exibir os resultados
    function exibirResultados(numero, isPrimoResult, soma, fibonacciResult, invertido, fatorialResult) {
      console.log(`${numero} é um número primo.`);
      console.log(`A soma dos números naturais até ${numero} é: ${soma}`);
      console.log(`Os primeiros ${numero} termos da sequência de Fibonacci são: ${fibonacciResult}`);
      console.log(`O número ${numero} invertido é: ${invertido}`);
      console.log(`O fatorial de ${numero} é: ${fatorialResult}`);
    }
  
    const isPrimoResult = isPrimo(numero);
    const soma = somaNumerosNaturais(numero);
    const fibonacciResult = fibonacci(numero);
    const invertido = inverterNumero(numero);
    const fatorialResult = fatorial(numero);
  
    exibirResultados(numero, isPrimoResult, soma, fibonacciResult, invertido, fatorialResult);
  }
  
  
