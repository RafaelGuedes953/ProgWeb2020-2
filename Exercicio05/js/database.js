// Definição do banco de dados SQLite
var db = openDatabase(
    'myAcademy',
    '1.0',
    'Academy Database',
    2 * 1024 * 1024
);

var errCallback = function () {
    alert("Deu um erro no banco de dados!");
}

// Substituir o formulário padrão apresentar em favor do nosso código
/*form.submit(function(event){
    event.preventDefault();
    salvarcontato($('#nome').val(), $('#telefone').val(), $('#endereço').val(), function(){
        alert("dados do contato " + $('#nome').val() + " salvos!");
    })
});*/

// Verificar se o navegador é compatível com Web SQL
function verifyBrowser() {
    if (window.openDatabase) {
        alert("Este browser suporta Web SQL Databases");
    }
    else {
        alert("Este browser NÃO suporta Web SQLDatabases");
    }
}

// Função que cria a tabela Aluno
function createDatabase() {
    db.transaction(function (tx) {
        createStudent = "CREATE TABLE IF NOT EXISTS students (" +
            "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
            "nome TEXT NOT NULL, sport TEXT NOT NULL, telefone INTEGER NOT NULL);";
        tx.executeSql(createStudent, [], function () {
            console.log("Código para cadastrar dados");
            console.log("SQL: " + createStudent);
            //alert("Tabela criada no banco de dados!");
        });
    });
}

function selectStudent() {
    db.transaction(function (tx) {
        sql = 'SELECT * FROM students';
        tx.executeSql(sql, [], function (tx, results) {
            var len = results.rows.length;
            alert('Existem ' + len + ' registros!');
            for (var i = 0; i < len; i++) {
                var row = results.rows.item(i);
                alert(`${row.id}: ${row.nome}, ${row.esporte}, ${row.telefone}`);
            }
        },
            function (tx, error) {
                alert('Ooops ' + error.message);
            });
    });
}

// A ideia é receber o id do aluno pelo id na row em que o botão foi pressionado
function deleteStudent(idStu) {
    db.transaction(function (tx) {
        sql = `DELETE FROM students WHERE id=${idStu}`; //'DELETE * FROM contacts WHERE id='+idStu
        tx.executeSql(sql) //será que funciona?
    })
}

function insertStudent() {
    nome = document.getElementById('nome').value;
    esporte = document.getElementById('esporte').value;
    telefone = document.getElementById('telefone').value;

    db.transaction(function (tx) {
        sql = `INSERT INTO students VALUES (${nome},${esporte},${telefone})`;
        console.log('SQL: ' + sql);
        tx.executeSql(sql, [], function(transaction, results){
            successCallback(results);
        }, errCallback);
    })

}