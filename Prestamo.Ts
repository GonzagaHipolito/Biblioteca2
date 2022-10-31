export class Prestamo {
     
    
    private Inicio:number=0;
     private Fin :number=0;
     
     constructor(Inicio:number,Fin:number)
       
     {this.Inicio=Inicio;
     this.Fin=Fin;}

     public get_Inicio():number {return this.Inicio}
     public set_Inicio(Inicio:string) { this.Inicio = this.Inicio; }  

     public get_Fin():number {return this.Fin}
     public set_Fin(Fin:string) { this.Fin = this.Fin; }  

}
