
var perso=[], tira=[];
var c,i,f,pini,spl,monton;
var veces=Math.round(Math.random()*777);


function jugador(mq,nom,pos)
{
	this.mq=mq;
	this.nom=nom;
	this.pos=pos;
	this.fi=0;
}


function ficha(a,b) //a <= b
{
	this.a=a;
	this.b=b;
	this.ju=5;//boca abajo
}


var nk,nh, nom,n=[0,2,1,3];
nh = prompt("Please cuántos humanos?", "2");
/*nh=parseInt(nk);
if (isNaN(nh))
   {
   alert("introduz entre 1 y 4");
   }
*/
for (f=0;f<nh;f++){
	nom = prompt("su nombre, humano"+(f+1)+" sivuple", "Potter");
	perso[n[f]]=jugador(false,nom,n[f]);
	
}
for (f=nh;f<4;f++){
	alert("se sienta a la mesa MAQ"+(f-1));
	perso[n[f]]=jugador(true,"MAQ"+(f-1),n[f]);
}
 


//28 fichas nuevecitas:
for (c=0;c<7;c++) {
			for (i=c;i<7;i++) {
				tira.push(new ficha(c,i));					
			}
}
// bien mezcladas
for (f=0;f<veces;f++){
 	pini=Math.round(Math.random()*27);
 	spl=Math.round(Math.random()*25+1);
 	if (pini+spl>27){
 		var fid=27-pini+1;
 		monton=tira.splice(pini,fid);
 		tira=monton.concat(tira);
	 	monton=tira.splice(fid,spl-fid);
	 	tira=tira.concat(monton);
 	}else
	 {monton=tira.splice(pini,spl);
	  tira=tira.concat(monton);		 
	 }
}
//repartidas
for (f in tira){
		tira[f].ju=f%4;
}
		
		console.log(tira);


function pon6(ray) {
	var ff;
	for ( var index in ray)
	{
		ff=ray[index];
		if (ff.a==6 && ff.b==6) 
		return(ff.ju);			
	}
}

var salida=pon6(tira);

alert ("Sale "+perso[salida].nom);
	
	//this.fla=true;}
/*
Mazo.prototype.poner = function () {
	localiza (this,this.turno);
	turno++%4;
}


var mano = new Mazo();

mano.crear(); //.ju=5
mano.barajar(); 
mano.repartir(); //.ju %4
if (!mano.fla) pon6(mano.tira);
//else while (turno)
//mano.poner();

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


/*console.log(mano.tira);
console.log(meno);
console.log(meno[6]);
console.log(meno[6][0]);
*/

