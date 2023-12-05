function calculadora() {
    while (true) {
        let calculo = prompt("Ingrese la calculo que desea realizar:\nSuma (+), Resta (-), Multiplicación (*), División (/)\nIngrese 'salir' para salir.");

        if (calculo === 'salir') {
            alert("Saliendo de la calculadora.....");
            break;
        }

        if (calculo === '+' || calculo === '-' || calculo === '*' || calculo === '/') {
            let num1 = parseFloat(prompt("Ingrese el primer numero:"));
            let num2 = parseFloat(prompt("Ingrese el segundo numero:"));

            if (calculo === '+') {
                let resultado = num1 + num2;
                alert("El resultado de la suma es: " + resultado);
            } else if (calculo === '-') {
                let resultado = num1 - num2;
                alert("El resultado de la resta es: " + resultado);
            } else if (calculo === '*') {
                let resultado = num1 * num2;
                alert("El resultado de la multiplicación es: " + resultado);
            } else if (calculo === '/') {
                if (num2 !== 0) {
                    let resultado = num1 / num2;
                    alert("El resultado de la división es: " + resultado);
                } else {
                    alert("No se puede dividir por cero.");
                }
            }
        } else {
            alert("Intente de nuevo.");
        }
    }
}
calculadora();
