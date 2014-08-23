
var mano = new mazo();


for (var v=0;v<28;v++) {
	console.log(mano[v].a+' '+mano[v].ju);
}


function ficha(a,b) //a <= b
	{
	this.a=a;
	this.b=b;
	this.ju=5;
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
return ordenadas;
}

 
mazo.prototype.baraja = function () {
	console.log('t');
	var f,pini,spl,monton;
 	for (f=0;f<43;f++){
 		pini=Math.round(Math.random()*27);
 		spl=Math.round(Math.random()*25+1);
 		if (pini+spl>27){
 			var fid=27-pini+1;
 			monton=this.splice(pini,fid);
	 		this=monton.concat(this);
	 		monton=this.splice(fid,spl-fid);
	 		this=this.concat(monton);
 		}else
		{monton=this.splice(pini,spl);
		 this=this.concat(monton);		 
		}
	}
};


mano.baraja();


/*
  this.deal      = stackDeal;
  this.draw      = stackDraw;
  this.addCard   = stackAddCard;
  this.combine   = stackCombine;
  this.cardCount = stackCardCount;

  */





function reparto(conj) {
	
	for (var fi=0;fi<28;fi++) {
			conj[fi].ju=fi%4; }
			
/*			reco[fi]=
			(d--);


			mano+=reco;
console.log(mano);*/
	

		
	
	
console.log(conj);
}
reparto(mano);

