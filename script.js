var c = document.getElementById("screen");
var ctx = c.getContext("2d");
//matriz[x*matrix+y]

var mapax = 70;//tamanho das linhas linhas
var mapay = 70;//tamanho das colunas
var tela = [mapax*mapay];
for (var i = 0; i < mapax; i++) {
	for (var j = 0; j < mapay; j++) {
		tela[i*mapax+j] = "#FFFFFF";
	}
}



function gerarMapa(matrix,matriy,tela){ //tamanho da matriz x & tamanho da matriz y & valores
	var tamx=5, tamy=5;//tamanho do retangulo
	c.height = (tamx+1) * matrix;//quantidade de quadrados
	c.width = (tamy+1) * matriy;//quantidade de quadrados
	var x = 0,y = 0;
	for (var i = 0; i < c.width; i=i+tamx+1) {
		for (var j = 0; j < c.height; j=j+tamy+1) {
			ctx.fillStyle = tela[x*mapax+y];
			ctx.fillRect(i, j, tamx, tamy);
			y++;	
		}
		x++;
		y = 0;
	}
}

function pintar(x,y,cor){
	if(x>mapax/2 || y > mapay/2){
		alert("Numeros fora do Range");
		return -1;
	}
	x=x;
	y=-y;
	tela[(x+mapax/2)*mapax+(y+mapay/2)] = cor;
	gerarMapa(mapax,mapay,tela);
}
function Main(){
	pintar(0,0,'#FF0000');//mostra a posição 0
	//bline(0,0,5,-5);
	//DrawCirle(0,0,12,'#FFF000');
	/*
	var informes = document.getElementById("informes");
	informes.innerHTML = "<strong>Informes</strong>" + "</br>";
	informes.innerHTML = informes.innerHTML+ "</br>";
	for(var i=0; i<mapay; i++)
	{
	    for(var j=0; j<mapax; j++)
	    {
	        informes.innerHTML = informes.innerHTML + tela[i*mapax+j]+ "  ";
	    }
	    informes.innerHTML=informes.innerHTML+"</br>";
	}
	*/
}

Main();

function modo(){//definição das variáveis
	var op = document.getElementById('metodoSelect');
	var param = document.getElementById('metodoDiv');
	if(op.value == 0){
		param.innerHTML = '';
	}
	if(op.value ==1 ){
		param.innerHTML =" </br><strong>x0	</strong><input type=\"number\" id=\"x0\" value=\"0\"> <strong>/	y0</strong><input type=\"number\" id=\"y0\" value=\"0\"><br><br><strong>x1	</strong><input type=\"number\" id=\"x1\" value=\"0\"><strong>/	y1</strong><input type=\"number\" id=\"y1\" value=\"0\"><br>";
	}
	if(op.value == 2){
		param.innerHTML =" </br><strong>x0	</strong><input type=\"number\" id=\"x0\" value=\"0\"> <strong>/	y0</strong><input type=\"number\" id=\"y0\" value=\"0\"><br><br><strong>x1	</strong><input type=\"number\" id=\"x1\" value=\"0\"><strong>/	y1</strong><input type=\"number\" id=\"y1\" value=\"0\"><br>";
	}
	if(op.value == 3){
		param.innerHTML =" </br><strong>x0	</strong><input type=\"number\" id=\"x0\" value=\"0\"> <strong>/	y0</strong><input type=\"number\" id=\"y0\" value=\"0\"><br><br><strong>x1	</strong><input type=\"number\" id=\"x1\" value=\"0\"><strong>/	y1</strong><input type=\"number\" id=\"y1\" value=\"0\"><br>";
	}
	if(op.value == 4){
		param.innerHTML =" </br><strong>x0	</strong><input type=\"number\" id=\"x0\" value=\"0\"> <strong>/	y0</strong><input type=\"number\" id=\"y0\" value=\"0\"><br> <br><strong>Raio:     </strong><input type=\"number\" id=\"raio\" value=\"6\">";
	}
}
function start(){
	var op = document.getElementById('metodoSelect');
	var color = document.getElementById('colorL');
	if(op.value ==1 ){
		var x0 = document.getElementById('x0');
		var y0 = document.getElementById('y0');
		var x1 = document.getElementById('x1');
		var y1 = document.getElementById('y1');
	}
	if(op.value == 2){
		var x0 = document.getElementById('x0');
		var y0 = document.getElementById('y0');
		var x1 = document.getElementById('x1');
		var y1 = document.getElementById('y1');
	}
	if(op.value == 3){
		var x0 = document.getElementById('x0');
		var y0 = document.getElementById('y0');
		var x1 = document.getElementById('x1');
		var y1 = document.getElementById('y1');
		bline(parseInt(x0.value),parseInt(y0.value),parseInt(x1.value),parseInt(y1.value),color.value);// algoritmo de bresenham
	}
	if(op.value == 4){
		var x0 = document.getElementById('x0');
		var y0 = document.getElementById('y0');
		var raio = document.getElementById('raio');
		DrawCirle(parseInt(x0.value),parseInt(y0.value),parseInt(raio.value),color.value);
	}

}


/* ----- Brasenham Line ----- */

function bline(x0, y0, x1, y1,color) {
 
  var dx = Math.abs(x1 - x0), sx = x0 < x1 ? 1 : -1;
  var dy = Math.abs(y1 - y0), sy = y0 < y1 ? 1 : -1; 
  var err = (dx>dy ? dx : -dy)/2;
 
  while (true) {
    pintar(x0,y0,color);
    if (x0 === x1 && y0 === y1) break;
    var e2 = err;
    if (e2 > -dx){ 
    	err -= dy; 
    	x0 += sx; 
    }
    if (e2 < dy){ 
    	err += dx;
    	y0 += sy;
    }
  }
}

/* ----- Brasenham Cicle ----- */

function DrawCirle(x0, y0, radius,color) {
  var x = radius;
  var y = 0;
  var radiusError = 1 - x;
  
  while (x >= y) {
    pintar(x + x0, y + y0,color);
    pintar(y + x0, x + y0,color);
    pintar(-x + x0, y + y0,color);
    pintar(-y + x0, x + y0,color);
    pintar(-x + x0, -y + y0,color);
    pintar(-y + x0, -x + y0,color);
    pintar(x + x0, -y + y0,color);
    pintar(y + x0, -x + y0,color);
    y++;
    
    if (radiusError < 0) {
        radiusError += 2 * y + 1;
    }
    else {
        x--;
        radiusError+= 2 * (y - x + 1);
    }
  }
};