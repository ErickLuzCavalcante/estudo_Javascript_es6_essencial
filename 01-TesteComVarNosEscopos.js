var test = "exemplo";

(() => {
    console.log('Valor da função "$(test)"');
    if (true){
        var test =  "exemplo";
        console.log('Valor dentro do if "$(test)"');
    }
    console.log('Valor após a execução do if "$(test)"');
})();