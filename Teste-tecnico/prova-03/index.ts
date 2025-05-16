function counterWords(text: string): Record<string, number> {
    const words = text.split(" ");
    const response: Record<string, number> = {};

    for (const word of words) {
        const w = word.toLowerCase();
        response[w] = (response[w] || 0) + 1;
    }

    return response;
}

console.log(counterWords("Teste texto Teste"));