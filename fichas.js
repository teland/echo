
var mano = new mazo();

function ficha(a,b) //a <= b
	{
	this.a=a;
	this.b=b;
	//this.rep=false;
	}


function mazo() {

  // Crea un grupo de fichas
  var ordenadas=[];

	var i,c,n1,n2;
	var ind=0;

	

	for (c=0;c<7;c++) {
		n1=c;
		for (i=c;i<7;i++) {
			n2=i;
			ordenadas.push(new ficha(n1,n2));
			ind++;			
		}
	}
console.log(ind);	

return ordenadas;
}

 
 function baraja(conj) {

var pini,spl,monton;
 	for (f=0;f<43;f++){
 		pini=Math.round(Math.random()*27);
 		spl=Math.round(Math.random()*25+1);
 		if (pini+spl>27){
 			var fid=27-pini+1;
 			monton=conj.splice(pini,fid);
	 		conj=monton.concat(conj);
	 		monton=conj.splice(fid,spl-fid);
	 		conj=conj.concat(monton);
 		}else
		{monton=conj.splice(pini,spl);
		 conj=conj.concat(monton);		 
		}console.log('paso '+f+': '+pini+'  '+spl);
		 console.log(conj);
	}
}




/*
  this.deal      = stackDeal;
  this.draw      = stackDraw;
  this.addCard   = stackAddCard;
  this.combine   = stackCombine;
  this.cardCount = stackCardCount;

  */



for (var v=0;v<28;v++) {

console.log(mano[v].a+' '+mano[v].b);
}

baraja(mano);


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

