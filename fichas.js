
var i,c,n1,n2;
var ind=0;
var nome=[];

function ficha(a,b) //a <= b
{
	this.a=a;
	this.b=b;
	this.rep=false;

}

for (c=0;c<7;c++)
{
	n1=c;
	for (i=c;i<7;i++)
	{
		n2=i;
		nome[ind]= new ficha(n1,n2);
		ind++;
	}
}
var meno=nome;
var mano;
/*
var jugador={
	id:5,
	turno:false,
	mano:false,
	fichas:0,
	ahorcadas:0,
	juego:[]};

	var jugadores=new Array();
	jugadores=[new jugador.id=0,new jugador.id=1,new jugador.id=2,new jugador.id=3];
*/
function desemilla(decre){
	var fic=Math.round(Math.random()*decre);
	var rr= meno.splice(fic,1);
	rr[0].rep=true;
	return rr;
}

function reparto()
{var d=27;
	
	for (var ju=0; ju<4;ju++)
	{console.log('\n'+ju+'\n');
		for (var fi=0;fi<7;fi++)
		{
			reco=desemilla(d--);
			
			mano+=reco;
console.log(mano);
		}

		
	
	}
	
}

reparto();