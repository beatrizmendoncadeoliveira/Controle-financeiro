var titulo = document.querySelector(".titulo");
titulo.textContent = "Financeiro Controle";

var receita = document.querySelector("#primeira-receita");
var valor = receita.querySelector(".info-valor");
var saldo = receita.querySelector(".info-saldo");
saldo.textContent = valor.textContent;
if(saldo.textContent>0){
    saldo.style.color="green";
}


var receita2 = document.querySelector("#segunda-receita");
var valor2 = receita2.querySelector(".info-valor");
var saldo2 = receita2.querySelector(".info-saldo");
saldo2.textContent = valor2.textContent;
if(saldo2.textContent<0){
    saldo2.style.color="red";
}

var receita3 = document.querySelector("#terceira-receita");
var valor3 = receita3.querySelector(".info-valor");
var saldo3 = receita3.querySelector(".info-saldo");
saldo3.textContent = valor3.textContent;
if(saldo3.textContent<0){
    saldo3.style.color="red";
}


var receita4=document.querySelector("#quarta-receita");
var valor4=receita4.querySelector(".info-valor");
var saldo4=receita4.querySelector(".info-saldo");
saldo4.textContent=valor4.textContent;
if(saldo4.textContent>0){
    saldo4.style.color="green";
}

var receita5=document.querySelector("#quinta-receita");
var valor5=receita5.querySelector(".info-valor");
var saldo5=receita5.querySelector(".info-saldo");
saldo5.textContent=valor5.textContent;

if(saldo5.textContent<0){
    saldo5.style.color="red";
}




var botao=document.querySelector("#adicionar-receita");
botao.addEventListener("click", function(evento){
    evento.preventDefault();
    var form=document.formulario;
    var descricao=form.descricao.value;
    var categoria=form.categoria.value;
    var data=form.data.value;
    var valor=parseFloat(form.valor.value);
    var erros=document.querySelector(".erros");
 
    limparErros(erros);


    if(descricao.length<=0){
        erros.textContent+="A descricao é obrigatoria.\n";
    }

    if(categoria.length<=0){
        erros.textContent+="A categoria é obrigatoria.\n";
    }
    if(data.length<=0){
        erros.textContent+="A data é obrigatoria \n";
    }
    
    if(isNaN(valor)){
        erros.textContent+="O valor é obrigatorio \n";
    }
    else{
        if(valor==0){
            erros.textContent+="O valor deve ser diferente de zero(0) \n";
        }
    }

    

});

function limparErros(erros){
    erros.innerHTML="";

}









