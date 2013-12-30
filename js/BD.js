var db = window.openDatabase("PracticaXPO.db3", "1.0", "Cliente,orden,detalles", 30 * 1024);

function CreaDB() {
	db.transaction(CreaTablas, errorCB, successCB);
}

function CreaTablas(tx) {
     tx.executeSql('CREATE TABLE IF NOT EXISTS Cliente (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, Nombre Varchar(100), RFC VARCHAR(100), Telefono VARCHAR(100), Direccion VARCHAR(100));');
     tx.executeSql('CREATE TABLE IF NOT EXISTS Orden (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, Fecha Varchar(100), Total INTEGER, Cliente INTEGER);');
     tx.executeSql('CREATE TABLE IF NOT EXISTS DetallesOrden (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, Cantidad INTEGER, Producto Varchar(100), Precio INTEGER, Subtotal INTEGER, Orden INTEGER);');
}

function errorCB(err) {
    alert("Error processing SQL: Codigo: " + err.code + " Mensaje: "+err.message);
}
function successCB() {
}