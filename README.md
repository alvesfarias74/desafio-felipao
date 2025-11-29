# 🎯 Desafio Classificador de Nível de Herói

## 📋 Descrição do Projeto

Este projeto é um desafio de programação desenvolvido como parte do curso **"Executando decisões e Repetições no Código"** do **BootCamp Santander 2025 - Fundamentos de Lógica de Programação**.

O objetivo principal é criar um sistema que classifica o nível de um herói baseado em sua quantidade de experiência (XP), aplicando conceitos fundamentais de lógica de programação.

## 🎮 Objetivo de Aprendizado

- Praticar o uso de **variáveis** para armazenamento de dados
- Aplicar **operadores** de comparação e lógicos
- Implementar **estruturas de decisão** para tomada de decisões
- Utilizar **laços de repetição** para processamento de múltiplos dados
- Desenvolver habilidades de **raciocínio lógico** e **resolução de problemas**

## 🛠️ Tecnologias Utilizadas

- **JavaScript** - Linguagem de programação
- **Node.js** - Ambiente de execução
- **Visual Studio Code** - Editor de código

## 📊 Tabela de Classificação

| Faixa de Experiência (XP) | Nível do Herói |
|---------------------------|----------------|
| Menor que 1.000           | Ferro          |
| 1.001 a 2.000             | Bronze         |
| 2.001 a 5.000             | Prata          |
| 5.001 a 7.000             | Ouro           |
| 7.001 a 8.000             | Platina        |
| 8.001 a 9.000             | Ascendente     |
| 9.001 a 10.000            | Imortal        |
| Maior ou igual a 10.001   | Radiante       |

## 💻 Estrutura do Código

### 🔹 Versão Básica (Herói Único)

```javascript
// Variáveis para armazenar nome e experiência
let nomeHeroi = "Nome do Herói";
let xpHeroi = 5000;

// Estrutura de decisão para classificação
if (xpHeroi < 1000) {
    nivel = "Ferro";
} else if (xpHeroi <= 2000) {
    nivel = "Bronze";
}
// ... continuação das condições

// Saída do resultado
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);
```

### 🔹 Versão Avançada (Múltiplos Heróis)

```javascript
// Array com múltiplos heróis
let herois = [
    { nome: "Herói A", xp: 1500 },
    { nome: "Herói B", xp: 6000 }
];

// Laço de repetição para processar cada herói
for (let i = 0; i < herois.length; i++) {
    // Lógica de classificação
    // Exibição dos resultados
}
```

## 🚀 Como Executar

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/classificador-heroi.git
   ```

2. **Navegue até o diretório**:
   ```bash
   cd classificador-heroi
   ```

3. **Execute o código**:
   ```bash
   node classificador.js
   ```

## 📝 Conceitos Aplicados

### 1. **Variáveis**
- Armazenamento de dados do herói (nome e XP)
- Uso de `let` para declaração de variáveis mutáveis

### 2. **Operadores**
- **Comparação**: `<`, `>=`, `<=`
- **Lógicos**: `&&` (E lógico)
- **Aritméticos**: Manipulação de valores numéricos

### 3. **Estruturas de Decisão**
- `if/else if/else` para determinar o nível baseado na XP
- Controle de fluxo do programa

### 4. **Laços de Repetição**
- `for` para iterar sobre arrays de heróis
- Processamento em lote de múltiplos dados

## 🎯 Resultado Esperado

```
O Herói de nome Aragorn está no nível de Ouro
O Herói de nome Legolas está no nível de Prata
O Herói de nome Gandalf está no nível de Radiante
```

## 🔧 Personalização

Para testar com diferentes heróis, modifique:

- **Nome**: Altere a variável `nomeHeroi`
- **Experiência**: Modifique o valor de `xpHeroi`
- **Múltiplos heróis**: Adicione/remova objetos do array `herois`

## 📚 Competências Desenvolvidas

- ✅ Lógica de programação
- ✅ Estruturas condicionais
- ✅ Manipulação de variáveis
- ✅ Controle de fluxo
- ✅ Resolução de problemas
- ✅ Pensamento algorítmico

## 🤝 Contribuições

Este projeto é parte do BootCamp Santander 2025 e está aberto para melhorias e sugestões da comunidade de desenvolvedores.

---

**Desenvolvido com 💙 para o BootCamp Santander Segunda Edição 2025**