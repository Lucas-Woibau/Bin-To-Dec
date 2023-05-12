let numBin = document.getElementById('numBin');
let saida = '';

numBin.addEventListener('input',() => {
    numBin = document.getElementById('numBin').value;
    const numBinStr = numBin.toString()       

    //Dividindo numero em individuais
    for(var i = 0; i < numBin.length; i++){     
        numBin = numBinStr.split('')
        if(numBin[i] != 0 && numBin[i] != 1){
            return ExibirAlerta()
        }
    }

    //Fazer o cálculo
    let finalNumberDec = []
    numBin.reverse()

    for(var i = 0; i < numBin.length; i++){
        const calcExpo = Math.pow(2, 0 + i)
        finalNumberDec.push(calcExpo * numBin[i])      
    }

    //Somando os números
    let somaFinalNumberDec = finalNumberDec.reduce((acumulador, valorAtual) => acumulador + valorAtual,0)
    
    saida = document.getElementById('numDec').value = somaFinalNumberDec;
    
});

function ExibirAlerta(){
    const error = document.getElementById('erro')
    error.innerHTML = `<small>Favor digitar apenas 1s e 0s</small>`;
    setTimeout(() =>{
        error.innerHTML = ``;
    }, 3000)
}

function CopiarTexto(){
    const input = document.getElementById('botao-copiar')

    navigator.clipboard.writeText(saida.valueOf())

    .then(() => {
        input.textContent = "COPIADO"
        input.style.cursor = "default"    
        input.style.backgroundColor = "rgb(108, 235, 161)";
        setTimeout(() =>{
            input.textContent = "COPIAR"
            input.style.cursor = "pointer"
            input.style.backgroundColor = "aqua";
        }, 2000);
    })
    .catch((error) =>{
        console.error("Erro ao copiar o texto: ",error)
    })
}
