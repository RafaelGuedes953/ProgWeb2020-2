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
function createTable() {
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

function insertStudent() {
    //id = 284728;
    nome = document.getElementById('nome').value;
    esporte = document.getElementById('esporte').value;
    telefone = document.getElementById('telefone').value;

    db.transaction(function (tx) {
        sql = `INSERT INTO students (nome,sport,telefone) VALUES (?,?,?);`;
        console.log('SQL: ' + sql);
        tx.executeSql(sql, [nome,esporte,telefone]);
    });

}

function selectStudent() {
    db.transaction(function (tx) {
        sql = 'SELECT * FROM students;';
        tx.executeSql(sql, [], function (tx, results) {
            var len = results.rows.length;
            alert('Existem ' + len + ' registros!');
            for (var i = 0; i < len; i++) {
                var row = results.rows.item(i);
                alert(`${row.id}: ${row.nome}, ${row.sport}, ${row.telefone}`);
            }
        },
            function (tx, error) {
                alert('Ooops ' + error.message);
            });
    });
}

function listTable() {

    db.transaction(function (tx) {
        let tbody = document.getElementById('tableBody');
        tbody.innerText = '';

        sql = 'SELECT * FROM students;';
        tx.executeSql(sql, [], function (tx, results) {
            var len = results.rows.length;
            //console.log("Recuperando dados!");
            for (var i = 0; i < len; i++) {
                var row = results.rows.item(i);
                let tr = tbody.insertRow();

                let td_id = tr.insertCell();
                let td_nome = tr.insertCell();
                let td_esporte = tr.insertCell();
                let td_telefone = tr.insertCell();
                let td_acao = tr.insertCell();

                console.log(`${row.id}: ${row.nome}, , ${row.sport}, ${row.telefone}`);
                td_id.innerText = row.id;
                td_nome.innerText = row.nome;
                td_esporte.innerText = row.sport;
                td_telefone.innerText = row.telefone;

                let imgDelete = document.createElement('img');
                imgDelete.src = 'image/trash_icon.svg';
                imgDelete.setAttribute("class", "icon");
                
                //Botão deletar com imagem
                let btnDel = document.createElement('button');
                btnDel.setAttribute("onclick", "deleteStudent("+row.id+")");
                btnDel.setAttribute("class", "button");
                btnDel.appendChild(imgDelete);

                td_acao.appendChild(btnDel);
                //td_acao.appendChild(imgDelete);
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
        sql = `DELETE FROM students WHERE id=${idStu};`; //'DELETE * FROM contacts WHERE id='+idStu
        tx.executeSql(sql)
        alert(`Valor com id=${idStu} apagado!`);
        listTable();
        // Atualizar lista na tabela
    });
}

function deleteTable() {
    //console.log("Deletando tabela");
    db.transaction(function (tx) {
        sql = 'DROP TABLE IF EXISTS students;';
        tx.executeSql(sql);
        alert("Tabela students deletada");
        console.log("Function delete executada");
    });
}



/*, function(transaction, results){
    successCallback(results);
}, errCallback*/