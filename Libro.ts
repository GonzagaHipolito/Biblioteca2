import {Autor} from "./Autor";

export class Libro  {

    private titulo : string="";
    private tipo:string= "";
    private year :number= 0; 
    private editorial :string="";

    private Autor:any=[]=[];

    constructor (titulo:string,
        tipo:string,year :number,editorial:string) { 
        
        
        
        this.titulo= titulo;
        this.tipo= tipo; 
        this.year = year;
        this.editorial=editorial;}

        public get_titulo():string { return this.titulo; }
        public set_titulo(titulo:string) { this.titulo = this.titulo; }  
        
        public get_year():number { return this.year; }
        public set_year(year:number) { this.year = this.year; } 
        
        public  set_tipo(tipo:string) { this.tipo= this.tipo; } 
        public get_tipo():string { return this.tipo; }  
       
        public  set_editorial(editorial:string) { this.editorial= this.editorial; } 
        public get_editorial():string { return this.editorial; }  
        





}