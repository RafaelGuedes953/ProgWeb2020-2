<?php
# dados para conexão com o banco de dados

$servidor = 'localhost';
$usuario = 'root';
$senha = '';
$banco = 'sistema_web';



# executa a conexão com o MySQL
$link = mysqli_connect("$servidor", "$usuario", "$senha", "$banco");
//mysqli_select_db($link, 'test');

$acao = $_SERVER['QUERY_STRING'];

#verifica se o arquivo foi chamado a partir de um formulario
if ($acao == "adicionar") {
    //Recuperar valores enviados por POST
    $Cpf = $_POST['cpf'];
    $Senha = $_POST['pass'];
    $Nome = $_POST['nome'];
    $Sobrenome = $_POST['sobrenome'];

    // Definição da expressão SQL (INSERT)

    $sql = "INSERT INTO users (cpf, nome, sobrenome, pass) VALUES ('$Cpf', '$Nome', '$Sobrenome', '$Senha')";

    //Executa a espressão no servidor
    $result = mysqli_query($link, $sql) or die(mysqli_error($link));

    // Verifica erro na operação e guarda o resultado
    if (!$result) {
        die('Erro: ' . mysqli_error($link)); //verificar posteriormente
    }
    else {
        // Caso sucesso, mostra na tela
        echo 'O cadastro foi realizado com sucesso!';
        //echo '<script type="text/javascript">window.location="cadastro.html"</script>';
    }
}
?>