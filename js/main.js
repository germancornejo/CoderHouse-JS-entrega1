//variables
let vacio="Tu respuesta quedó en blanco pero no hay problema.\nProbá de nuevo.";
let nombre;
let tiempo;
let animo;
let dinero;


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
for (let i = 1; i < 3; i++) {
while (nombre == "") {
  alert(vacio)
  nombre=prompt('Por favor, ¿Me decís tu nombre?')
}
}

email=prompt("¡Hola"+" "+nombre+"!\n¿Nos pasás tu correo electrónico? Prometemos no mandar SPAM.")

alert ('¡Genial! Gracias.\nTe voy a hacer algunas sugerencias para tus vacaciones.')

tiempo = prompt('¿Cuánto tiempo querés dedicarte en vacaciones? \nMarcá: \n1: Un mes\n2: Quince días\n3: Un fin de semana.');
if (tiempo != "") {

   switch (tiempo) {
        case "1":
            tiempo="un mes";
          console.log("un mes");
        break;
        case "2":
            tiempo="quince días";
          console.log("quince días");
          break;
        case "3":
            tiempo="un fin de semana";
          console.log("un fin de semana");
          break;
        default:
          alert("Opción no válida");
          break;
      }

}

animo = prompt('Bien. Ahora contame: ¿Qué animo querés darle a tu experiencia? Marcá:\n1: Si tenés ganas de experiencias fuertes\n2: Si querés que el tiempo se te vaya volando sin sorpresas.\n3: Si preferís un descanso tranquilo.');
    
if (animo != "") {
        
    switch (animo) {
                case "1":
                    animo="una experiencia fuerte"
                  console.log("una experiencia fuerte");
                break;
                case "2":
                    animo="un tiempo entretenido"
                  console.log("un tiempo entretenido");
                  break;
                case "3":
                    animo="un descanso tranquilo"
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
                  console.log("sin reparar en gastos");
                break;
                case "2":
                  console.log("invirtiendo en lo mejor que tu dinero pueda comprar.");
                  break;
                case "3":
                  console.log("saliendo de vacaciones y no de gastos.");
                  break;
                default:
                  alert("Opción no válida");
                  break;}
    }
  