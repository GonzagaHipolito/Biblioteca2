export class Autor {
    private nombre : string="";
    private Nacionalidad:string= "";
    private Fecha_nac :number= 0; 

    constructor(nombre:string,Nacionalidad :string, Fecha_nac :number) { 
        this.nombre = nombre;
         this.Nacionalidad= Nacionalidad ; 
         this.Fecha_nac = Fecha_nac;}

         public get_nombre():string { return this.nombre; }
        public set_nombre(nombre:string) { this.nombre = nombre; }  
        
        public get_Fecha_nac():number { return this.Fecha_nac; }
        public set_Fecha_nac(Fecha_nac:number) { this.Fecha_nac = this.Fecha_nac; } 
        
        public  set_Nacionalidad(Nacionalidad:string) { this.Nacionalidad= this.Nacionalidad; } 
        public get_Nacionalidad():string { return this.Nacionalidad; }  


}