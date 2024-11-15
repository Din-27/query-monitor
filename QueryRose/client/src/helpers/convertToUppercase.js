import { dataCmds } from "../constant/data/commands";

export const convertToUpperCase = (str) => {
    return str.split(/\s+/).map((word, index, arr) => {
        // Menangani kata 'using' dengan tanda kurung setelahnya
        if (word.toLowerCase() === 'using' && (arr[index + 1] === '(' || word.includes('()'))) {
            return 'USING';
        }

        // Mencari objek yang memiliki 'name' yang sama dengan kata yang ditemukan
        const match = dataCmds.find(keyword => keyword.name.toLowerCase() === word.toLowerCase());
        return match ? match.cmd : word;  // Jika ditemukan, ganti dengan 'cmd', jika tidak, biarkan kata aslinya
    }).join(' ');
}