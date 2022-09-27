//variables
let vacio="Tu respuesta quedó en blanco.\nPor favor, probá de nuevo.";
let nombre;
let tiempo;
let animo;
let dinero;
let cantidad;


//programa

/*
for (let i = 1; i <= 3; i++) {
  let pregunta = prompt("");
  if (pregunta != "usted?") {
    let respuesta = "Si";
    alert(respuesta);
  } else {
    respuesta = "Asi es... espero haberlos iluminado... ";
    alert(respuesta);
  }
}
*/

//for (let i = 1; i < 3; i++) {
nombre=prompt('¡Te doy la bienvenida!\nSoy el diseñador de experiencias de /MODO:AVENTURA/.\n¿Cómo es tu nombre?')
while (nombre == "") {
  alert(vacio);
  nombre=prompt('Por favor, ¿Me decís tu nombre?')
}

email=prompt("¡Hola"+" "+nombre+"!\n¿Nos pasás tu correo electrónico?")
while (email == "") {
  alert(vacio);
  email=prompt('¿Nos pasás tu mail? Prometemos no enviar SPAM')
}

alert ('¡Genial! Gracias.\n\nTe voy a hacer algunas sugerencias para tus vacaciones.')

tiempo = prompt('¿Cuánto tiempo de vacaciones querés tomarte? \nMarcá:\n \n1: Un mes\n2: Quince días\n3: Un fin de semana.');
if (tiempo != "") {

   switch (tiempo) {
        case "1":
            codTiempo=1
            tiempo="un mes";
          console.log("un mes");
        break;
        case "2":
            codTiempo=2
            tiempo="quince días";
          console.log("quince días");
          break;
        case "3":
            codTiempo=3
            tiempo="un fin de semana";
          console.log("un fin de semana");
          break;
        default:
          alert("Opción no válida");
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
                  console.log("una experiencia fuerte");
                break;
                case "2":
                    codAnimo=2;
                    animo="de tiempo entretenido";
                  console.log("un tiempo entretenido");
                  break;
                case "3":
                    codAnimo=3;
                    animo="de descanso tranquilo"
                  console.log("un descanso tranquilo");
                  break;
                default:
                  alert("Opción no válida");
                  break;
              }
};

dinero = prompt('¡Excelente '+nombre+'!\nPor último, decime: ¿Qué presupuesto tenés pensado dedicar a la experiencia? Marcá:\n1: Si buscas lo mejor que haya sin importar el precio;\n2: Si querés lo mejor que tu dinero pueda comprar;\n3: Si estás para vacaciones y no para gastos.');
    
if (dinero != "") {
        
    switch (dinero) {
                case "1":
                  codDinero=1
                  dinero="sin reparar en gastos";
                  console.log("sin reparar en gastos");
                break;
                case "2":
                  codDinero=2
                  dinero="invirtiendo en lo mejor que tu dinero pueda comprar."
                  console.log("invirtiendo en lo mejor que tu dinero pueda comprar.");
                  break;
                case "3":
                  codDinero=3
                  dinero="saliendo de vacaciones y no 'de gastos'."
                  console.log("saliendo de vacaciones y no de gastos.");
                  break;
                default:
                  alert("Opción no válida");
                  break;}
    }
  
  let perfilDeExperiencia=tiempo+" "+animo+" "+dinero;
  let codigoExperiencia=codTiempo+codAnimo+codDinero;
  alert("Tu perfil de viaje es"+" "+perfilDeExperiencia". Y el precio es de $ "+codigoExperiencia+900);
  
  
cantidad=prompt('¿Con cuantas personas querés compartir la experiencia?')
cantidad=parseFloat(cantidad)

