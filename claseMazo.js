
function ficha(a,b) //a <= b
	{
	this.a=a;
	this.b=b;
	this.ju=5;
	}

function Mazo(){
	this.grupos=1,
	this.tira=new Array();
}

Mazo.prototype.crear = function() {
	var i,c;
	sarra=this.tira;
		for (c=0;c<7;c++) {
			for (i=c;i<7;i++) {
				sarra.push(new ficha(c,i));					
			}
		}this.tira=sarra;
}

Mazo.prototype.barajar = function () {
	var f,pini,spl,monton;
	var sarra=this.tira;
	var veces=Math.round(Math.random()*777);
 	for (f=0;f<veces;f++){
 		pini=Math.round(Math.random()*27);
 		spl=Math.round(Math.random()*25+1);
 		if (pini+spl>27){
 			var fid=27-pini+1;
 			monton=sarra.splice(pini,fid);
 			
	 		sarra=monton.concat(sarra);
	 		monton=sarra.splice(fid,spl-fid);
	 		sarra=sarra.concat(monton);
 		}else
		 {monton=sarra.splice(pini,spl);
		  sarra=sarra.concat(monton);		 
		 }
	}this.tira=sarra;	
}

Mazo.prototype.repartir = function () {
	var sarra=this.tira;
	for (var f=0;f<28;f++){
		sarra[f].ju=f%4;
	}this.tira=sarra;	  
}


var mano = new Mazo();

mano.crear(); //.ju=5
mano.barajar(); 
mano.repartir(); //.ju %4

function localiza(ray,jug) {
	var answ=[];
	var fic=[];
	
	//answ[jug][fic]=[];
	
	for (var f=0;f<28;f++) {
		fic=[];
		if(ray[f].ju==jug) {
			fic[0]=ray[f].a;
			fic[1]=ray[f].b;
			answ.push(fic);
		}	
	}
return answ;
}
var meno=localiza(mano.tira,2);
console.log(mano.tira);
console.log(meno);
console.log(meno[6]);
console.log(meno[6][0]);
