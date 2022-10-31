export class Lector {

    private nom:string="";
    private direccion : string="";
    private no_socio :number= 0; 
    private telefono:number= 0; 
    private Tc :string= ""; 

    constructor(nom:string,direccion:string,no_socio:number,telefono:number,Tc:string) {

        this.nom=nom;
        this.no_socio=no_socio;
        this.telefono=telefono;
        this.Tc=Tc;
        this.direccion=direccion;

    }

      public get_nom():string { return this.nom; }
      public set_nom(nom:string) { this.nom = this.nom; }  

      public get_direccion():string { return this.direccion; }
      public set_direccion(direccion:string) { this.direccion = direccion; }  

      public get_no_socio():number {return this.no_socio}
      public set_no_socio(no_socio:string) { this.no_socio = this.no_socio; }  

      public get_telefono():number {return this.telefono}
      public set_telefono(telefono:string) { this.telefono = this.telefono; }  

      public get_Tc ():string { return this.Tc; }
      public set_Tc(Tc:string) { this.Tc= this.Tc; } 

      



      




      


} 