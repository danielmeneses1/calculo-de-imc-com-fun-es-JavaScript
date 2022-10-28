function calcularIMC(peso,altura){
    return peso / Math.pow(altura, 2);
    }


function classificarImc(imc) {
        if (imc < 18.5) {
            return 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 25) {
            return 'Peso normal';
        } else if (imc >= 25 && imc < 30) {
            return 'Acima do peso';
        } else if (imc >= 30 && imc < 40) {
            return 'Obeso';
        } else {
            return 'Obsedidade Grave';
        }
}

function showOn(){
    console.log(calcularIMC(peso, altura))
    const imc = calcularIMC(peso, altura)
    console.log(classificarImc(imc));
}
 
function main(){
    
    const peso = 83;
    const altura = 1.80;

    showOn();

}

main()

