import { Autor } from "./Autor";    
import { Copia } from './Copia';
import { Lector } from "./Lector";
import { Libro } from "./Libro";


const Laura=new Autor("Laura Gonzaga","Español",7/8/199)
console.log(Laura);

const Diario=new Libro ("El diario Secreto","romantico",2006,"Mariposas")
console.log(Diario);

const Luna=new Libro("Luna llena","romantico",2004,"Mariposas")
console.log(Luna);

const Pedro=new Lector ("89","Obrero Mundial 6 de enero",78,35626279,"tc:si")
console.log(Pedro);
const Emma=new Lector ("89","Obrero Mundial 6 de enero",78,35626279,"tc:si")
const Copi=new Copia ("772722","Luna llena");

