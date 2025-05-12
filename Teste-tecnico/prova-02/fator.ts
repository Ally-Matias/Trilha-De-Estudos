import definition from './network-definition.json';
import processing from './network-processing.json';

function computeNetwork(defn: number[][], proc: number[][]) {
    // 1. Calcular e acumular alfas de cada elemento da rede
    let alpha = BigInt(5);
    const alphas: bigint[] = [];
    for (const inputs of defn) {
        const sumInputs = inputs.reduce((acc, x) => acc + x, 0);
        // fator = floor(tanh(sumInputs/1000) * 10)
        const factor = Math.floor(Math.tanh(sumInputs / 1000) * 10);
        const beta = alpha * BigInt(factor);
        alphas.push(beta);
        alpha = beta;
    }
    const sumAlphas = alphas.reduce((acc, x) => acc + x, BigInt(0));

    // 2. Processar cada lista de entrada usando o alfa final da rede
    const outputs: bigint[] = [];
    for (const inputs of proc) {
        const sumInputs = inputs.reduce((acc, x) => acc + x, 0);
        const factor = Math.floor(Math.tanh(sumInputs / 1000) * 10);
        outputs.push(alpha * BigInt(factor));
    }
    const sumOutputs = outputs.reduce((acc, x) => acc + x, BigInt(0));

    return { sumAlphas, sumOutputs };
}

const { sumAlphas, sumOutputs } = computeNetwork(
    definition as unknown as number[][],
    processing as unknown as number[][]
);

console.log('Soma dos fatores α da rede:', sumAlphas.toString());
console.log('Soma de todos os outputs da rede:', sumOutputs.toString());
