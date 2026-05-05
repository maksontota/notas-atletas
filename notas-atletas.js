let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }];

function calcularMediaAtletas(listaAtletas) {
    for (let i = 0; i < listaAtletas.length; i++) {
        // 1. Obtém as notas e ordena em ordem crescente
        // O sort((a, b) => a - b) garante a ordenação numérica correta
        let notasOrdenadas = listaAtletas[i].notas.sort((a, b) => a - b);

        // 2. Seleciona as notas do meio (desconsidera a menor e a maior)
        let notasComputadas = notasOrdenadas.slice(1, 4);

        // 3. Calcula a soma das notas válidas
        let soma = 0;
        notasComputadas.forEach(function(nota) {
            soma += nota;
        });

        // 4. Calcula a média
        let media = soma / notasComputadas.length;

        // 5. Apresenta os resultados no console
        console.log(`Atleta: ${listaAtletas[i].nome}`);
        console.log(`Notas Obtidas: ${listaAtletas[i].notas.join(',')}`);
        console.log(`Média Válida: ${media}`);
        console.log(""); // Linha em branco para separar os atletas
    }
}

// Executa a função
calcularMediaAtletas(atletas);
