<?php
    // (Letra a) - Dado uma palavra conte o número de caracteres.
    function contaChar($palavra){
        return strlen($palavra);
    }

    $teste = "Rafael";
    echo(contaChar($teste)." letras na palavra"); //Saída deve ser 6

    // (Letra b) - Dado uma frase conte o número de palavras.
    function contaPalavras($frase){
        return str_Word_count($frase);
    }

    $teste = "Esta é uma frase para teste";
    echo(contaPalavras($teste)." palavras na frase"); //Saída deve ser 5

    // (Letra c) - Inverter uma string dada.
    function invertePalavra($palavra){
        return strrev($palavra);
    }

    $teste = "Rafael";
    echo(($teste)." invertido = ".invertePalavra($teste)); //Saída deve ser leafaR

    // (Letra d) - Pesquisar um texto específico na String.
    function pesquisaSubstring($frase, $pesq){
        return strpos($frase, $pesq);
    }

    $teste = "Rafael Guedes";
    $substring = "Guedes";
    
    if(pesquisaSubstring($teste, $substring))
        echo($substring." está contido em ".$teste);
    else
        echo($substring." não está contido em ".$teste);

    //Letra (e) - Substituir texto dentro de uma sequencia de caracteres.
    function substituiTexto($original, $antigo, $novo){
        return str_replace($antigo, $novo, $original);
    }

    $teste = "Rafael Guedes";
    $substituir = "Guedes";
    $new = "Silva";
    echo("Original: ".$teste);
    echo("\nNovo: ".substituiTexto($teste,$substituir,$new));

    // (Letra f) - Operações lógicas.
    function saudacoes(){
        $hora = date("H");

        if ($hora < 10){
            echo("Tenha uma boa manhã!");
        }
        elseif ($hora < 20) {
            echo("Tenha um bom dia!");
        }
        else{
            echo("Tenha uma boa noite!");
        }
    }

    saudacoes();

    // (Letra g) - Loops.
    function letraG(){
        $x = 15;

        while($x<=150){
            echo ("\nX = ".$x);
            $x+=15;
        }
    }
    letraG();
?>