function converter(){
    let resultado = document.getElementById("resultado")
    let valorEmDolar = document.getElementById("valor").value
    let dolarDoDia = 1.70

    let valorReal = valorEmDolar * dolarDoDia

    resultado.innerHTML = "R$" + valorReal
    console.log(valorReal)
}