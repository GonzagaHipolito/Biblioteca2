export class Multa {

    private fecha_ini:number=0;
    private fehcha_fi:number=0;

    constructor(fecha_ini:number,fecha_fi:number)

    {
        this.fecha_ini=fecha_ini;
        this.fehcha_fi=fecha_fi;

    }

     public get_fecha_ini():number {return this.fecha_ini}
     public set_fecha_ini(fecha_ini:string) { this.fecha_ini = this.fecha_ini; }  

     public get_fecha_fi():number {return this.fehcha_fi}
     public set_fecha_fi(fecha_fi:string) { this.fehcha_fi = this.fehcha_fi; }  

}