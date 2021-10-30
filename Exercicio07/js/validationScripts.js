
function validateCPF() {
    var Soma = 0;
    var Resto;
    var strCPF = document.getElementById("cpf").value; // Pega valor do cpf de acordo com o ID do elemento

    if (strCPF == "00000000000"){
        alert("Insira um CPF válido, este CPF é composto por 0s!");
        cpf.focus();
        return;
    } 

    for (i = 1; i <= 9; i++)
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);

    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) 
        Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))){
        alert("CPF inválido! Por favor, modifique");
        cpf.focus();
        return;
    }
        
    Soma = 0;
    for (i = 1; i <= 10; i++) 
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) 
        Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11))){
        alert("CPF inválido! Por favor, modifique");
        cpf.focus();
        return;
    }
    
    return true;
}

function validatePass() {
    var txt_pass = document.getElementById("pass").value; // Pega valor do elemento de acordo com o ID
    var passRep = document.getElementById("passRep");
    
    if(passRep != null){
        var rep_pass = passRep.value;
    }

    if(isNaN(txt_pass)){ //verificar se a senha contém números
        alert("A senha contém letras, e deve possuir apenas números!");
        return false;
    }

    //Verificar se as senhas do cadastro são iguais
    if((txt_pass != rep_pass) && (rep_pass!=null)){
        alert("As senhas devem ser iguais!");
        return false;
    }
    
    return true;
}

// Função utilizada no html (utilizará a validateCPF e validatePass)
function validateForm() {

    if((validateCPF() && validatePass())==true){
        //alert("Dados validados com sucesso"); //debug
        console.log("Dados validados...");
    }
    else{
        alert("Algo deu errado");
    }

}
