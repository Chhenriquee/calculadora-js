//função de inserir os números na barra de resultado
function insert(num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

//função para limpar a barra de resulado
function clean(){
    document.getElementById('resultado').innerHTML = "";
}

//função que apaga o último número
function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

//função que calcula o resultado
function calcular(){
    var resultado= document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
}