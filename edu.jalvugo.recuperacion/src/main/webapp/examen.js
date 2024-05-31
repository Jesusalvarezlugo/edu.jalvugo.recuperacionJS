

function letra(){
	
	var palabraAAdivinar="puerta";
	var palabraEscondida=['*','*','*','*','*','*'];
	var palabraSeparada=palabraAAdivinar.split("");
	console.log(typeof(palabraSeparada));
	const escribir = document.getElementById("div");
	var contador=0;
	
		var letraIntroducida=prompt("Introduzca una letra para adivinar: ");
		
		for(let i=0;i<palabraSeparada.length;i++){
			
			if(!palabraSeparada[i].search(letraIntroducida)){
									
					palabraEscondida[i]=palabraSeparada[i];
									
			}else{
				contador++;
			}
			
		}
		
		
		console.log(palabraEscondida);
		
	
	
}