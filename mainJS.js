$(document).ready(function(){
	
	
	
	
	//----------- strelica za vrh strane ------------------------------------------
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('#strelica').fadeIn();
		} else {
			$('#strelica').fadeOut();
		}
	});
	
	
	$('#strelica').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
	
	
	/*---------------------------drop down meni---------------------------------------------------------*/	
	$('#meni li ul').css({
		display: "none",
		left: "auto"
	  });
	  $('#meni li').hover(function() {
		$(this).find('ul').stop(true, true).slideDown('fast');}, 
		function() {
		$(this).find('ul').stop(true,true).fadeOut('fast');
	});
	
	
	/*------------------------------- iskacuca slika -----------------------------------------------------*/
	$( '#iskace2 > li > ul' )
		.hide()
		.click(function( e ){
			e.stopPropagation();
		});
	$('#iskace2 > li').toggle(function(){
		  $(this).find('ul').slideDown();
	  }, function(){
	$( this ).find('ul').slideUp();
	  });
	
	/*------------------------------- search -----------------------------------------------------*/
	 $("#prikazuje").hide();
	$("#search_button").click(function(){
		$("#header,#meni,#sredina,#footer").addClass("prikazuje_class");
		
		$("#prikazuje").show().animate({width: '730px', opacity: '1'}, "slow").animate({height: '250px', opacity: '1'}, "fast");
		$("#prikazuje").css("position","fixed");
		
	});
	$("#prikazuje").css({"top":$( window ).height()/2-250+"px", "left":$( window ).width()/2-360+"px"});
	$("#zatvori").click(function(){
		$("#prikazuje").hide().css({'width':'0px','height':'0px'});
		$("#header,#meni,#sredina,#footer").removeClass("prikazuje_class");
	});
});


/*--------------------------- slajder ---------------------------------------------------------*/
var c=0
var niz=Array ("slajder/1.jpg","slajder/2.jpg","slajder/3.jpg","slajder/4.jpg"); 
			
function timedCount()
	{
		document.getElementById('slajder2').src=niz[c]; 
		c=c+1;  
		if(c==4) 
		{
			c=0; 
		}
		t=setTimeout("timedCount()",2000); 
	}
	
	
/*--------------------------- CONTACT ---------------------------------------------------------*/
		function imeProvera()
		{
			var ime=document.getElementById("ime").value;
			var regIme=/^[A-Z]{1}[a-z]{2,20}$/;
			
			if(!regIme.test(ime)) 
			{ 
				document.getElementById("ime").style.borderColor="red";
			}
			else
			{
				document.getElementById("ime").style.borderColor="";
			}
		}
		
		function prezimeProvera()
		{
			var prezime=document.getElementById("prezime").value;
			var regPrezime=/^[A-Z]{1}[a-z]{2,20}$/;
			
			if(!regPrezime.test(prezime)) 
			{ 
				document.getElementById("prezime").style.borderColor="red";
			}
			else
			{
				document.getElementById("prezime").style.borderColor="";
			}
		}
		
		function emailProvera()
		{
			var email=document.getElementById("email").value;
			var regEmail=/^[\w\.]+[\d]*@[\w]+\.\w{2,3}(\.[\w]{2})?$/; 
			
			if(!regEmail.test(email)) 
			{ 
				document.getElementById("email").style.borderColor="red";
			}
			else
			{
				document.getElementById("email").style.borderColor="";
			}
		}
		
		function datumProvera()
		{
			var datum=document.getElementById("datum").value;
			var regDatum=/^(19[5-9][0-9]|20[0-1][0-5])\-([1-9]|1[0-2])\-([1-9]|1[0-9]|2[0-9]|3[0-1])$/;
			
			if(!regDatum.test(datum)) 
			{ 
				document.getElementById("datum").style.borderColor="red";
			}
			else
			{
				document.getElementById("datum").style.borderColor="";
			}
		}
		
		
		
		
	
	function provera() {
		var ime=document.getElementById("ime").value;
		var prezime=document.getElementById("prezime").value;
		var email=document.getElementById("email").value;
		var datum=document.getElementById("datum").value;
		var pol=document.getElementsByName("pol");
		var drzava=document.getElementById("drzava");
		var prostor=document.getElementById("prostor").value;
		
		
		var regIme=/^[A-Z]{1}[a-z]{2,20}$/;
		var regPrezime=/^[A-Z]{1}[a-z]{2,20}$/;
		var regEmail=/^[\w\.]+[\d]*@[\w]+\.\w{2,3}(\.[\w]{2})?$/; 
		var regDatum=/^(19[5-9][0-9]|20[0-1][0-5])\-([1-9]|1[0-2])\-([1-9]|1[0-9]|2[0-9]|3[0-1])$/;
		
		var greske=new Array();
		
		if(!regIme.test(ime)) 
		{ 
			document.getElementById("ime").style.borderColor="red";
		}
		else
		{
			document.getElementById("ime").style.borderColor="";
		}
		
		if(!regPrezime.test(prezime))
		{
			document.getElementById("prezime").style.borderColor="red";
		}
		else
		{
			document.getElementById("prezime").style.borderColor="";
		}
		 
		
	/*-------------------------------------*/
		if(!regEmail.test(email))
		{
			document.getElementById("email").style.borderColor="red";
		}
		else
		{
			document.getElementById("email").style.borderColor="";
		}
		
	/*----------------------------------------------------*/
		if(!regDatum.test(datum))
		{
			document.getElementById("datum").style.borderColor="red";
		}
		else 
		{
			document.getElementById("datum").style.borderColor="";
		}
	/*--------------------------------------------------*/
		var izabrano="";
		for(var i=0;i<pol.length;i++) 
		{
			if(pol[i].checked)
			{
				izabrano=pol[i].value;
				break;
			}
		}
		if(izabrano=="") 
		{	
			document.getElementById("zvezda1").innerHTML="*";
			document.getElementById("zvezda2").innerHTML="*";
		}
		else 
		{
			document.getElementById("zvezda1").innerHTML="";
			document.getElementById("zvezda2").innerHTML="";
		}
	/*---------------------------------------------------------*/
		if(drzava.selectedIndex=="0")
		{
			document.getElementById("drzava").style.borderColor="red";
		}
		else 
		{
			document.getElementById("drzava").style.borderColor="";
		}
	/*--------------------------------------------------*/
		if(prostor=="")
		{
			document.getElementById("prostor").style.borderColor="red";
		}
		else 
		{
			document.getElementById("prostor").style.borderColor="";
		}

		
		if(greske.length==0)
		{
		window.location="mailto:lazar.djokovic.13.14@ict.edu.rs?subject=Lotr-Contact&body=Name: "+ime+"%0ALastName: "+last+"%0AEmail: "+email+"%0ABirthday: "+birth+"%0AGender: "+izabrano+"%0AText: "+area+"%0ACountry: "+drzava[drzava.selectedIndex].value+";";
		}
	}
	
	//------------------- ABOUT ME -----------------------
	
	//------------------- search ----------------------------------------------------------------
	function pretraga(){
	if(window.XMLHttpRequest){
		var xmlhttp=new XMLHttpRequest();
	}else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.open("GET","search.xml",false);
	xmlhttp.send();
	var xmlDoc=xmlhttp.responseXML;
	
	prikaz(xmlDoc);
	
}
function prikaz(xmlDoc){
	var pom=0;
	var movies= xmlDoc.getElementsByTagName("movie");
	var search_value = document.getElementById("search").value;
	document.getElementById("upozorenje").innerHTML="";
	
	for(var i=0;i<movies.length;i++){
			var movie_name= movies[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
			
			if(search_value.toLowerCase().trim() == movie_name.toLowerCase().trim()){
				
				var naslov1xml= movies[i].getElementsByTagName("naslov1")[0].childNodes[0].nodeValue; 
				var naslov2xml= movies[i].getElementsByTagName("naslov2")[0].childNodes[0].nodeValue;
				var tekst1xml= movies[i].getElementsByTagName("tekst1")[0].childNodes[0].nodeValue;
				var tekst2xml= movies[i].getElementsByTagName("tekst2")[0].childNodes[0].nodeValue;
				var linkxml= movies[i].getElementsByTagName("link")[0].childNodes[0].nodeValue;
				
				document.getElementById("naslovid").style.display="block"; 
				document.getElementById("pretragaTekst").style.display="block";

				document.getElementById("naslovid").innerHTML="<div class='naslov'><h3>"+naslov1xml+"</h3><p>"+naslov2xml+"</p><br/></div>";
				document.getElementById("pretragaTekst").innerHTML="<p class='p1 p1_indent'>"+tekst1xml+"</br><a href='"+linkxml+"'><i>"+tekst2xml+"</i></a></p>"; 
				pom++;
			} 
	}
	if(pom==0){
		document.getElementById("upozorenje").innerHTML="<h1 id='bojah1'><i>Enter movie part (I, II or III)..</i></h1>";
		document.getElementById("naslovid").style.display="none"; 
		document.getElementById("pretragaTekst").style.display="none"; 
		
	}
}
		
		
		
		
		
		
		//------------------- search ----------------------------------------------------------------
		
	function kolacici(){
			if(document.cookie=="")
			{
					document.getElementById("brglasova").innerHTML = Math.floor(Math.random()*50);
					document.getElementById("brglasova2").innerHTML = Math.floor(Math.random()*10);
			}
			else
			{ 
				for(var i=0;i<2;i++)
				{ 
					var kolacic=document.cookie.split(";")[i].split(";")[0];
					var ime = kolacic.split("=")[0]; 
					var sadrzaj = kolacic.split("=")[1];
					 
					if(ime.trim() == "glasanje")
					{
						document.getElementById("brglasova").innerHTML = sadrzaj.split("@")[1];

						if(sadrzaj.split("@")[0] == "yes")
						{
							document.getElementById("brglasova").style.color = "#00FF00";
						}
						 
						document.getElementById("bdugmeAnketa").disabled = true;
					}
					if(ime.trim() == "glasanje2")
					{
						document.getElementById("brglasova2").innerHTML = sadrzaj.split("@")[1];

						if(sadrzaj.split("@")[0] == "no")
						{
							document.getElementById("brglasova2").style.color = "red";
						}
						 
						document.getElementById("bdugmeAnketa").disabled = true;
					}
				}
			}

		}
		function glasaj()
		{
		var anketaValue=document.getElementById("brglasova").innerHTML;
		var anketaValue2=document.getElementById("brglasova2").innerHTML;
		
		var za = "mozda";
			if(document.getElementById("yes").checked)
			{
				document.getElementById("plus").innerHTML="+";
				document.getElementById("brglasova").innerHTML = parseInt(anketaValue)+1; 
				za = "yes";
			}else{
				document.getElementById("minus").innerHTML="-";
				document.getElementById("brglasova2").innerHTML = parseInt(anketaValue2)+1; 
				za="no";
			}
			document.getElementById("bdugmeAnketa").disabled=true;
			
			var datum = new Date();
			datum.setMonth(datum.getMonth()+3);
			document.cookie = "glasanje="+za+"@"+document.getElementById("brglasova").innerHTML.trim()+";expires="+datum.toGMTString();
			document.cookie = "glasanje2="+za+"@"+document.getElementById("brglasova2").innerHTML.trim()+";expires="+datum.toGMTString();
			
		}