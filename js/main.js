//variables
let nombre;
let tiempo;
let animo;
let dinero;
let cantidad;
let precioTiempo;
let precioAnimo;
let precioDinero;

//funciones
function vacio (){
  alert("Tu respuesta quedó en blanco.\nPor favor, probá de nuevo.")
}

//programa


nombre=prompt('¡Te doy la bienvenida!\nSoy el diseñador de experiencias de /MODO:AVENTURA/.\n¿Cómo es tu nombre?')
while (nombre == "") {
  vacio();
  nombre=prompt('Por favor, ¿Me decís tu nombre?')
}

email=prompt("¡Hola"+" "+nombre+"!\n¿Nos pasás tu correo electrónico?")
while (email == "") {
  vacio();
  email=prompt('¿Nos pasás tu mail? Prometemos no enviar SPAM')
}

alert ('¡Genial! Gracias.\n\nTe voy a hacer algunas sugerencias para tus vacaciones.')

tiempo = prompt('¿Cuánto tiempo de vacaciones querés tomarte? \nMarcá:\n \n1: Un mes\n2: Quince días\n3: Un fin de semana.');
if (tiempo != "") {

   switch (tiempo) {
        case "1":
            codTiempo=1
            precioTiempo=30
            tiempo="un mes";
          console.log(tiempo);
        break;
        case "2":
            codTiempo=2
            precioTiempo=15
            tiempo="quince días";
          console.log(tiempo);
          break;
        case "3":
            codTiempo=3
            precioTiempo=3
            tiempo="un fin de semana";
          console.log(tiempo);
          break;
        default:
          alert("Opción no válida");
          tiempo="no dijiste cuánto tiempo";
          codTiempo=-9;
          break;
      }
}
else {
  alert("Seguimos con otra pregunta.")
}

animo = prompt('Bien. \nAhora contame: ¿Qué animo querés darle a tu experiencia? Marcá:\n\n1: Si tenés ganas de experiencias fuertes\n2: Si querés que el tiempo se te vaya volando sin sorpresas.\n3: Si preferís un descanso tranquilo.');
    
if (animo != "") {
        
    switch (animo) {
                case "1":
                    codAnimo=1;
                    animo="de experiencias fuertes"
                    precioAnimo=15000
                  console.log(animo);
                break;
                case "2":
                    codAnimo=2;
                    precioAnimo=7000
                    animo="de tiempo entretenido";
                  console.log(animo);
                  break;
                case "3":
                    codAnimo=3;
                    animo="de descanso tranquilo"
                    precioAnimo=1000
                  console.log(animo);
                  break;
                default:
                  alert("Opción no válida");
                  animo="no dijiste qué querés hacer";
                  codAnimo=-9
                  break;
              }
};

dinero = prompt('¡Excelente '+nombre+'!\nPor último, decime: ¿Qué presupuesto tenés pensado dedicar a la experiencia? Marcá:\n1: Si buscas lo mejor que haya sin importar el precio;\n2: Si querés lo mejor que tu dinero pueda comprar;\n3: Si estás para vacaciones y no para gastos.');
    
if (dinero != "") {
        
    switch (dinero) {
                case "1":
                  codDinero=1
                  precioDinero=2
                  dinero="sin reparar en gastos";
                  console.log(dinero);
                break;
                case "2":
                  codDinero=2
                  precioDinero=1
                  dinero="invirtiendo en lo mejor que tu dinero pueda comprar."
                  console.log(dinero);
                  break;
                case "3":
                  codDinero=3
                  precioDinero=0.5
                  dinero="saliendo de vacaciones y no 'de COMPRAS'"
                  console.log(dinero);
                  break;
                default:
                  alert("Opción no válida");
                  dinero="No dijiste cuánto querés gastar";
                  codDinero=-9
                  break;}
    }
  
  let perfilDeExperiencia=tiempo+" "+animo+" "+dinero;
  let codigoExperiencia=codTiempo+codAnimo+codDinero;
  let precioExperiencia=precioAnimo*precioTiempo*precioDinero

  if (codigoExperiencia>=3){
  alert("Tu perfil de viaje es"+" "+perfilDeExperiencia+". Tiene un costo de $ "+precioExperiencia);
  }
  else {
    alert("No tenemos suficiente información para asesorarte")
  }
  
  