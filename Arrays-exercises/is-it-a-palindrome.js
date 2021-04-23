// Problema 1
// Escribe un programa que verifique que una frase es un palíndromo
// Ejemplo: La ruta nos aportó otro paso natural = true
// Ejemplo: Claramente, esto no es un palíndromo = false

const isAPalindrome = (phrase) => {
    phrase = phrase.replace(/[., ]+/g, ''); // quito los espacios, puntos y comas
    phrase = phrase.toLowerCase(); // paso todo a minúsculas
    phrase = phrase.normalize('NFD').replace(/[\u0300-\u036f]/g, ""); // quito los caracteres especiales
    const originalArr = Array.from(phrase); // convierto la frase en un arreglo
    const newArr = []; // creo el nuevo arreglo con el que voy a comparar la frase original
    for (let i = originalArr.length - 1; i >= 0; i--) {
        newArr.push(originalArr[i]);
    };
    // paso a string ambos arreglos
    const originalStr = originalArr.join();
    const newStr = newArr.join();
    // Ahora hay que validar si es un palíndromo
    if (originalStr == newStr) {
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    }
}

isAPalindrome('La ruta nos aportó otro paso natural');
isAPalindrome('Claramente, esto no es un palíndromo');
isAPalindrome('Juegos con palíndromos ');
isAPalindrome('Ají traga la lagartija');