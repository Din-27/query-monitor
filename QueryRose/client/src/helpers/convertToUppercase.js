import { dataCmds } from "../constant/data/commands";

export const convertToUpperCase = (str) => {
    return str.split(/\s+/).map((word, index, arr) => {
        // Mencari objek yang memiliki 'name' yang sama dengan kata yang ditemukan
        const match = dataCmds.find(keyword => keyword.name.toLowerCase() === word.toLowerCase());

        // Menangani kata 'using' dengan tanda kurung setelahnya
        if (match || (match && (arr[index + 1] === '(' || word.includes('()')))) {
            // console.log('match');

            return match.cmd;  // Jika ditemukan, ganti dengan 'cmd', jika tidak, biarkan kata aslinya
        }
        return word.toLowerCase();  // Jika ditemukan, ganti dengan 'cmd', jika tidak, biarkan kata aslinya
    }).join(' ');
}