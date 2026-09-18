const Cinema = require("./index.js");

const cinema = new Cinema(7, 6); 
 
console.log("Assentos disponíveis:", cinema.assentosDisponiveis().length);
console.log(cinema.assentosDisponiveis());
 
console.log("\n- Reservando A1 individualmente -");
cinema.reservarAssento("A1");
console.log("A1:", cinema.assentos.get("A1"));
 
console.log("\n- Tentando reservar A1 de novo -");
try {
  cinema.reservarAssento("A1");
} catch (error) {
  console.log("Erro esperado:", error.message);
}
 
console.log("\n- Reservando o melhor bloco para 4 pessoas -");
const grupo = cinema.reservarMelhores(4);
console.log(grupo);
 
console.log("\n- Assentos disponíveis restantes -");
console.log(cinema.assentosDisponiveis());
 
