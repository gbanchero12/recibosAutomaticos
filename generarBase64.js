$(document).ready(eventos);

function eventos(){

$("#btnGenerar").click(convert);
//$("#btnGenerar").click(tomarDatosXml);
$("#btnSave").click(guardarPdf);
$("#btnCargar").click(leerDatos);
}

function convert() {
	
		$("#lblGenerar").html("Cargando recibos...");
    	var filesSelected = document.getElementById("recibo").files;
    	if (filesSelected.length > 0) {
      	var fileToLoad = filesSelected[0];

      	var fileReader = new FileReader();
  		}
  	
  		else
  	
  	{$("#lblGenerar").html("Debes de seleccionar un archivo .txt y una imagen!");}
      
      	fileReader.onload = function (fileLoadedEvent) {
      
        var srcData = fileLoadedEvent.target.result; // <--- data: base64
        
        var newImage = document.createElement('img');
        
        newImage.id = "imgBase"

        newImage.src = srcData;
        
        //document.getElementById("imgTest").innerHTML = newImage.outerHTML;
        
      	obtenerSrc(srcData);

        }

      fileReader.readAsDataURL(fileToLoad);

      //var src = $("#imgBase").attr(src);
  
    
    //}

    //Paso datos a PDF

    
}


	var month = new Array();
	month[0] = "Enero";
	month[1] = "Febrero";
	month[2] = "Marzo";
	month[3] = "Abril";
	month[4] = "Mayo";
	month[5] = "Junio";
	month[6] = "Julio";
	month[7] = "Agosto";
	month[8] = "Septiembre";
	month[9] = "Octubre";
	month[10] = "Noviembre";
	month[11] = "Diciembre";



var doc = new jsPDF();

function obtenerSrc(param){
  



	for (z = 0; z <= listaRecibos.length - 1; z++){

    //Via Original
    //doc.setFontSize(50)
	
	doc.addImage(param, 'JPEG', -77, 0, 290, 200)
	
	doc.setFontSize(12)




	console.log(listaRecibos[z].Importe);
	

	var numeroEnLetras = numeroALetras(listaRecibos[z].Importe, {
 	 plural: ' ',
  	singular: ' ',
  	centPlural: 'CENTAVOS ',
  	centSingular: 'CENTAVO '
	});
	console.log(listaRecibos[z].Importe);
	var primeraParteLetras = "";
	var segundaParteLetras = "";
	for (u=0;u<25;u++){
		primeraParteLetras += numeroEnLetras.charAt(u);
	}
	for(i=25;i<numeroEnLetras.length - 1; i++){
		segundaParteLetras += numeroEnLetras.charAt(i);
	}

	var fechaReciboExcel = listaRecibos[z].Fecha;

	function getJsDateFromExcel(excelDate) {

 	return new Date((excelDate - (25567 + 1))*86400*1000);

	}	

	var fechaRecibo = getJsDateFromExcel(fechaReciboExcel);

	
	//ancho, alto
	doc.text(160, 49, fechaRecibo.getDate().toString()+ " " + month[fechaRecibo.getMonth()])//dia mes
	doc.text(194, 49, (fechaRecibo.getYear()-100).toString())//año
	doc.text(32, 59, listaRecibos[z].Cliente)//nombre cliente
	doc.setFontSize(8)
	doc.text(42, 68, numeroEnLetras)

	doc.setFontSize(8)
	doc.text(11.5,76.5,"X")
	
	doc.setFontSize(12)
	
	//doc.text(62, 65, segundaParteLetras)
	doc.text(60, 78, listaRecibos[z].ImporteEnNumero)//importe en numero
	//doc.text(164, 74, "----")
	doc.text(91, 48, listaRecibos[z].NumeroCli)//numero de cliente
	doc.text(150,79, listaRecibos[z].FormaPago)//FormaDePago
	doc.text(44,101, "pago de facturas")
	console.log(listaRecibos[z].Banco);
	if(listaRecibos[z].Banco !== "0"){
	doc.text(28,90,  listaRecibos[z].Cuenta + " ( Banco: " + listaRecibos[z].Banco + " Sucursal: " + listaRecibos[z].Sucursal + " )")
	}
	doc.addPage();

	//Via Cliente

	doc.addImage(param, 'JPEG', -77, 0, 290, 200)
	
	doc.setFontSize(12)




	console.log(listaRecibos[z].Importe);
	

	var numeroEnLetras = numeroALetras(listaRecibos[z].Importe, {
  	plural: ' ',
  	singular: ' ',
  	centPlural: 'CENTAVOS ',
  	centSingular: 'CENTAVO '
	});
	console.log(listaRecibos[z].Importe);
	var primeraParteLetras = "";
	var segundaParteLetras = "";
	for (u=0;u<25;u++){
		primeraParteLetras += numeroEnLetras.charAt(u);
	}
	for(i=25;i<numeroEnLetras.length - 1; i++){
		segundaParteLetras += numeroEnLetras.charAt(i);
	}

	var fechaReciboExcel = listaRecibos[z].Fecha;

	function getJsDateFromExcel(excelDate) {

 	return new Date((excelDate - (25567 + 1))*86400*1000);

	}	

	var fechaRecibo = getJsDateFromExcel(fechaReciboExcel);

	
	//ancho, alto
	doc.text(160, 49, fechaRecibo.getDate().toString()+ " " + month[fechaRecibo.getMonth()])//dia mes
	doc.text(194, 49, (fechaRecibo.getYear()-100).toString())//año
	doc.text(32, 59, listaRecibos[z].Cliente)//nombre cliente
	doc.setFontSize(8)
	doc.text(42, 68, numeroEnLetras)

	doc.setFontSize(8)
	doc.text(11.5,76.5,"X")
	
	doc.setFontSize(12)
	
	//doc.text(62, 65, segundaParteLetras)
	doc.text(60, 78, listaRecibos[z].ImporteEnNumero)//importe en numero
	//doc.text(164, 74, "----")
	doc.text(91, 48, listaRecibos[z].NumeroCli)//numero de cliente
	doc.text(150,79, listaRecibos[z].FormaPago)//FormaDePago
	doc.text(44,101, "pago de facturas")
	console.log(listaRecibos[z].Banco);
	if(listaRecibos[z].Banco !== "0"){
	doc.text(28,90,  listaRecibos[z].Cuenta + " ( Banco: " + listaRecibos[z].Banco + " Sucursal: " + listaRecibos[z].Sucursal + " )")
	}
	doc.addPage();


	}
	if(listaRecibos.length > 1){
	$("#lblGenerar").html("<strong>" + "Recibos generados" + "</strong>");
	}else{$("#lblGenerar").html("Verifique los datos ingresados");}
    
    
	};

	function addCommas(nStr) { 
    nStr += ''; 
    var x = nStr.split('.'); 
    var x1 = x[0]; 
    var x2 = x.length > 1 ? ',' + x[1] : ''; 
    var rgx = /(\d+)(\d{3})/; 
    while (rgx.test(x1)) { 
     x1 = x1.replace(rgx, '$1' + '.' + '$2'); 
    } 
    return x1 + x2; 
} 

   
function guardarPdf(){
	doc.save('recibo.pdf');
}

var listaRecibos = new Array();

function leerDatos(){

if(xml[0] !== undefined){

var celda = 0;
var string = xml[0].toString();
var contador = 0;

var numeroCli = 0;
var cliente = "";
var formaPago= 0;
var fecha = 0;
var numeroRecibo = 0;
var importe = 0;
var banco = 0;
var sucursal = 0;
var cuenta = 0;



for (var x = 0; x < string.length;x++){
	var digitoActual = string.charAt(x);
	
	
	if(digitoActual === "|"){
	
	contador++;
		
	if (contador === 1){ numeroCli = parseFloat(celda).toString(); }
	if (contador === 2){ cliente = celda; }
	if (contador === 3){ formaPago= celda; }
	if (contador === 8){ fecha = celda; }
	if (contador === 9){ numeroRecibo = celda; }
	if (contador === 4){ 
			celda = celda.replace(",", ".");
			importeEnNumero = addCommas((parseFloat(celda) * (1)).toFixed(2)); 
			importe = (parseFloat(celda) * (1)).toFixed(2); 
		}
	if (contador === 5){banco = parseFloat(celda).toString(); }
	if (contador === 6){sucursal = parseFloat(celda).toString(); }
	if (contador === 7){cuenta = parseFloat(celda).toString();} 
	
	celda = "";
	
	if (contador === 10){ contador = 0; //termino de recorrer el primer recibo
		crearRecibo(numeroCli,cliente,formaPago,fecha,numeroRecibo,importe,importeEnNumero,banco,sucursal,cuenta);
	}

	} else {celda += digitoActual;}

}

function crearRecibo(pNumeroCli, pCliente, pFormaPago, pFecha, pNumeroRecibo, pImporte,pImporteEnNumero,pBanco,pSucursal,pCuenta) {
    var unRecibo; //reservamos espacio en memoria
    unRecibo = {
        "NumeroCli": pNumeroCli,
        "Cliente": pCliente,
        "FormaPago": pFormaPago,
        "Fecha": pFecha,
        "NumeroRecibo": pNumeroRecibo,
        "Importe": pImporte,
        "ImporteEnNumero":pImporteEnNumero,
	"Banco":pBanco,
	"Sucursal":pSucursal,
	"Cuenta":pCuenta
    };

    listaRecibos.push(unRecibo);
}

}

if(listaRecibos.length > 0){
$("#lblDatos").html("Datos cargados exitosamente");
}else{$("#lblDatos").html("Verifique los datos cargados")}
}


