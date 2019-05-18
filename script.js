var c = document.getElementById("screen");
var ctx = c.getContext("2d");
//matriz[x*matrix+y]

var mapax = 30;//tamanho das linhas linhas
var mapay = 30;//tamanho das colunas
var tela = [mapax*mapay];
for (var i = 0; i < mapax; i++) {
	for (var j = 0; j < mapay; j++) {
		tela[i*mapax+j] = '#ff0000';
	}
}



function gerarMapa(matrix,matriy,tela){ //tamanho da matriz x & tamanho da matriz y & valores
	var tamx=20, tamy=20;//tamanho do retangulo
	c.width = (tamx+1) * matrix;//quantidade de quadrados
	c.height = (tamy+1) * matriy;//quantidade de quadrados
	var x = 0,y = 0;
	for (var i = 0; i < c.width; i=i+tamx+1) {
		for (var j = 0; j < c.height; j=j+tamy+1) {
			ctx.fillStyle = tela[x*mapax+y];
			ctx.fillRect(i, j, tamx, tamy);
			x++;
			
		}
		x = 0;
		y++;
	}
}

function pintar(x,y,cor){
	if(x > mapax || y>mapay){
		alert("Valor digitado passou do tamanho da tela");
		return -1;
	}
	tela[x*mapax+y] = cor;
	gerarMapa(mapax,mapay,tela);
}
var nextmapa;
function Main(){
	gerarMapa(mapax,mapay,tela);
	pintar(mapax/2,mapay/2,'#000000');
	var informes = document.getElementById("informes");
	
}

Main();
