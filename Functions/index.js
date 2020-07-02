
document.getElementById("bt").addEventListener("click", function (){
    
    if(document.getElementById("nb-nd").value.length > 0){

        let binario = Number.parseInt((document.getElementById("nb-nd").value), 2)
        window.alert(`A conversão de Binário para Decimal é ${binario}`)
 
    }else{
        window.alert("não há parametros no Binário")
    }

});


document.getElementById("bt2").addEventListener("click", function (){
    if(document.getElementById("nd-nb").value.length > 0){
        
        let decimal = Number.parseInt(document.getElementById("nd-nb").value)   
        window.alert(`A conversão de Decimal para Binário é ${decimal.toString(2)}`)

    }else{
        window.alert("Não há Parametros no Decimal")
    }
});

