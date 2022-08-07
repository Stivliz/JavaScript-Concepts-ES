/*

0-3: Muy deficiente
3-5: Insuficiente
5-6: Suficiente
6-7: Bien
7-9: Notable
9-10: Sobresaliente*/


const notaFin = 4;
    if (notaFin >= 0 && notaFin <= 3) {
        console.log("Muy deficiente");
    } else if (notaFin >= 3 && notaFin <= 5) {
        console.log("Insuficiente");
    } else if (notaFin >= 5 && notaFin <= 6) {
        console.log("Suficiente");
    } else if (notaFin >= 6 && notaFin <= 7) {
        console.log("Bien");
    } else if (notaFin >= 7 && notaFin <= 9) {
        console.log("Notable");
    } else if (notaFin >= 9 && notaFin <= 10) {
        console.log("Sobresaliente");
    } else {
        console.log("Nota inválida");
    }



