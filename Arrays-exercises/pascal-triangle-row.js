// Problema 3
//  Dado un índice de renglón, regresa el renglón correspondiente del triángulo de
// Pascal.

const getPascalRow = (n) => {
    const row = [];
    if (n == 0) {
        console.log(row.push(1));
        return row.push(1);
    } else { // sacar del factorial del número de fila = n
        let factorialOfRow = 1;
        for (let i = n - 1; i >= 1; i--) {
            factorialOfRow = factorialOfRow * i;
        } // Obtener cada valor de las columnas
        for (let col = 0; col <= n-1; col++) { // este es el número de columnas de 0 a n
            if (col == 0 || col == n - 1) {
                row.push(1);
            } else {
                let factorialOfCol = 1;
                for (let loop = col; loop >= 1; loop--) { // acá se obtiene el valor de cada columna
                    factorialOfCol *= loop;
                }
                combinatorial(factorialOfRow, factorialOfCol, n-1, col, row);  //callback para hacer la operación de la combinatoria
            }
        }
    }
    console.log(row);
    return row;
}

const combinatorial = (fRow, fCol, row, col, arr) => {
    const residual = row - col;
    let factorialOfResidual = 1;
    for (let a = residual; a >= 1; a--) {
        factorialOfResidual *= a;
    }
    arr.push(fRow/(fCol * factorialOfResidual))
}


getPascalRow(5);