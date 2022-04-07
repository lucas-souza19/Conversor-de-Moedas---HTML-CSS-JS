function calcular() {
    debugger
    var moeda1 = document.getElementById(`moeda1`).value;
    var moeda2 = document.getElementById(`moeda2`).value;
    var qtd = document.getElementById(`qtd`).value;

    var sigla;
    var real = 1.00;
    var euro = 5.55;
    var dollar = 5.00;

    switch (moeda1) {
        case `real`:
            moeda1 = real;
            break;
        case `euro`:
            moeda1 = euro;

            break;
        case `dollar`:
            moeda1 = dollar;

            break;
    }

    switch (moeda2) {
        case `real`:
            moeda2 = real;
            sigla = `R$ `;

            break;
        case `euro`:
            moeda2 = euro;
            sigla = `Є `;

            break;
        case `dollar`:
            moeda2 = dollar;
            sigla = `US$ `;

            break;
    }

    var resultado = qtd * (moeda1 / moeda2);

    if (!isNaN(resultado)) {
        document.getElementById('resultado').value = sigla + resultado.toFixed(2);
    }

}