
		var Person=new Array();
		Person[0]=new Object();
	
		Person[0]={Name:"Rick Sanzech",Alter:70,Herkunft:"C-137",Beruf:"Erfinder, Waffenhändler, Wissenschaftler"};
		Person[1]={Name:"Morty Smith",Alter:14,Herkunft:"C-137",Beruf:"Schüler"};
		Person[2]={Name:"Summer Smith",Alter:17,Herkunft:"C-137",Beruf:"Student"};
		Person[3]={Name:"Beth Smith",Alter:34,Herkunft:"C-137",Beruf:"Pferdechirurgin"};
		Person[4]={Name:"Jerry Smith",Alter:34,Herkunft:"C-137",Beruf:"Arbeitslos"};
		var sHTML = '<div style="position: absolute;margin-left: 40px; top: 20px;">'
		
	function descr(x) 
		{
			switch(x)
			{
			case "Rick":document.getElementById("text").innerHTML= sHTML + Person[0].Name+"<br> Alter: "+Person[0].Alter+"<br> Herkunft: "+Person[0].Herkunft+"<br> Beruf: "+Person[0].Beruf;break;
			case "Morty":document.getElementById("text").innerHTML = sHTML +Person[1].Name+"<br> Alter: "+Person[1].Alter+"<br> Herkunft: "+Person[1].Herkunft+"<br> Beruf: "+Person[1].Beruf;break;
			case "Summer":document.getElementById("text").innerHTML = sHTML +Person[2].Name+"<br> Alter: "+Person[2].Alter+"<br> Herkunft: "+Person[2].Herkunft+"<br> Beruf: "+Person[2].Beruf;break;
			case "Beth":document.getElementById("text").innerHTML =sHTML + Person[3].Name+"<br> Alter: "+Person[3].Alter+"<br> Herkunft: "+Person[3].Herkunft+"<br> Beruf: "+Person[3].Beruf;break;
			case "Jerry":document.getElementById("text").innerHTML =sHTML + Person[4].Name+"<br> Alter: "+Person[4].Alter+"<br> Herkunft: "+Person[4].Herkunft+"<br> Beruf: "+Person[4].Beruf;break;
			default:document.getElementById("text").innerHTML = "ERROR";
			}
		}

