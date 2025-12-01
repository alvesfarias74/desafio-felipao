function calcularRank(vitorias, derrotas) {
    // Calcula saldo de vitórias
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    // Estruturas de decisão para definir o nível
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    // Retorna a mensagem final
    return `O Herói tem um saldo de ${saldoVitorias} vitórias e está no nível de ${nivel}`;
}

// Exemplos de teste
console.log(calcularRank(8, 3));   // O Herói tem de saldo de 5 está no nível de Ferro
console.log(calcularRank(25, 5));  // O Herói tem de saldo de 20 está no nível de Prata
console.log(calcularRank(102, 10));// O Herói tem de saldo de 92 está no nível de Imortal