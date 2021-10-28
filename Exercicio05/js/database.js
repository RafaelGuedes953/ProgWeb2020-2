// Definição do banco de dados SQLite
var db = openDatabase(
    'myAcademy',
    '1.0',
    'Academy Database',
    2 * 1024 * 1024
);

// Verificar se o navegador é compatível com Web SQL
function verifyBrowser(){
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
        createStudent = 'CREATE TABLE IF NOT EXISTS students(id, nome, sport, telefone)';
        tx.executeSql(createStudent, [], function () {
            console.log("Código para inserir dados");
        });
    });
}

function selectStudent() {
    db.transaction(function (tx) {
        sql = 'SELECT * FROM contacts';
        tx.executeSql(sql, [], function (tx, results) {
            var len = results.rows.length;
            alert('Existem ' + len + ' registros!');
            for (var i = 0; i < len; i++) {
                var row = results.rows.item(i);
                alert(row.id + ': ' + row.name);
            }
        },
            function (tx, error) {
                alert('ooops ' + error.message);
            });
    });
}

// A ideia é receber o id do aluno pelo id na row em que o botão foi pressionado
function deleteStudent(idStu){

}

function insertStudent(){

}