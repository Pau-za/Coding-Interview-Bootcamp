// Problema 2
// Dado un arreglo de números y un valor deseado, regresa los índices de los dos
// números en el arreglo que sumen ese valor.
// Puedes asumir que siempre hay una sola solución. No puedes usar el mismo elemento
// dos veces.
// Input: nums=[2, 7, 1, 5], target = 9
// Output: [0,1]
// In: nums = [3, -1, 0, 1], target=0
// Out: [1, 3]

const getTowValues = (number, arr) => {
    for (i = 0; i <= arr.length - 1; i++) {
        const j = i + 1;
        const g = i - 2;
        if (j <= arr.length) {
            if (arr[i] + arr[j] == number) {
                console.log(i, j);
            }
        }
        if (g >= 0) {
            if (arr[i] + arr[g] == number) {
                console.log(i, g);
            }
        }
        if (i == arr.length - 1) {
            if (arr[i] + arr[0] == number) {
                console.log(0, i);
            }
        }
    }
};

getTowValues(6, [2, 7, 1, 5]); 