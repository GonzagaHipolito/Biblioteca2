import { Libro } from './Libro';
export class Copia 
 {
      
      private titulo : string="";

      private fecha : string="";
      private  id : string="";

      private libros :any []=[];


      constructor(id:string,titulo:string) { 
        this.id = id;
        this.titulo=titulo; }
        public get_id():string { return this.id; }
        public set_id(id:string) { this.id = id; }  

        public get_titulo():string { return this.titulo; }
        public set_titulo(titulo:string) { this.titulo = titulo; }  



        
        
      

}
