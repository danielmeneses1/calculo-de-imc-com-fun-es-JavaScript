const calculateBMI = (weight, height) => weight / Math.pow(height, 2);

const classifyBMI = (value) => {
    if (value < 18.5)
        return 'Abaixo do peso'

    else if (value >= 18.5 && value < 25)
        return 'Peso normal'

    else if (value >= 25 && value < 30)
        return 'Acima do peso'

    else if (value >= 30 && value < 40)
        return 'Obeso'

    return 'Obsedidade Grave';
}

const calculate = () => {
    let weight = document.querySelector('#weight').value
    let height = document.querySelector('#height').value

    if (!weight || !height) {
        alert('Preencha todos os campos!')
        return
    }

    let bmi = calculateBMI(weight, height)
    let classification = classifyBMI(bmi)

    document.querySelector('#result').style.display = 'flex'
    document.querySelector('#result-title').innerHTML = `Seu IMC é ${bmi.toFixed(2)}`
    document.querySelector('#result-description').innerHTML = `Classificação: ${classification}`
}