let numBin = '';
let saida = '';

function Converter(){
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
    
}

function ExibirAlerta(){
    alert("Digite apenas 0s e 1s!")
}

function CopiarTexto(){
    const input = document.getElementById('botao-copiar')

    navigator.clipboard.writeText(saida.valueOf())

    .then(() => {
        alert("Texto copiado para área de transferência!")
    })
    .catch((error) =>{
        console.error("Erro ao copiar o texto: ",error)
    })
}
