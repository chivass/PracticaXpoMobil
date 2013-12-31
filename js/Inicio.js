function Inicio() {
		document.addEventListener("deviceready", aplicacionIniciada, false); // Al inciar la app
		     
}

function aplicacionIniciada()
{

	CreaDB();
	FastClick.attach(document.body); 
}
 
var myScroll;
function loaded() {
myScroll = new iScroll('wrapper');
}
document.addEventListener('DOMContentLoaded', loaded, false);

