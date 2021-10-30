<?php
$servidor = 'localhost';
$usuario = 'root';
$senha = '';
$banco = 'sistema_web';
// Dados para conexão com o banco de dados

$link = mysqli_connect("$servidor", "$usuario", "$senha", "$banco"); # executa a conexão com o MySQL

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    //Recuperar valores enviados por POST
    $Cpf = $_POST['cpf'];
    $Senha = $_POST['pass'];

    // Definição da expressão SQL (INSERT)

    $sql = "SELECT * FROM users WHERE cpf='$Cpf' AND pass='$Senha'";

    //Executa a espressão no servidor
    $result = mysqli_query($link, $sql) or die(mysqli_error($link));
    $dados = mysqli_fetch_assoc($result);
    $cpf_log = $dados['cpf'];
    $nome_log = $dados['nome'];

    // Se não houver usuário cadastrado retornar erro
    if (mysqli_num_rows($result) <= 0) {
        echo ("<script type='text/javascript'>alert('Login e/ou senha incorretos');window.location.href='../index.html';</script>");
        die();
    } else {
        echo ("<script type='text/javascript'>alert('Parabéns '$nome_log'! Seu login foi realizado com sucesso!');window.location.href='../index.html';</script>");
        //header('Location: index.html');
    }
}

?>