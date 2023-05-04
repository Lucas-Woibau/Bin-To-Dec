let numBin = '';
let saida = '';

function Converter(){
    numBin = document.getElementById('numBin').value;
    const numBinStr = numBin.toString();          //Convertendo para String

    for(var i = 0; i < numBin.length; i++){     //Dividindo numero em individuais
        numBin = numBinStr.split('');
        if(numBin[i] != 0 && numBin[i] != 1){
            return ExibirAlerta();
        }
    }

    //Fazer o cálculo
    let reverseNumBin = numBin.reverse().join('');

    saida = document.getElementById('numDec').value = reverseNumBin;
    
}

function ExibirAlerta(){
    alert("Digite apenas 0s e 1s!")
}
