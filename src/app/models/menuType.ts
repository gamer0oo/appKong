export interface MenuItem{
    id:number;
    nombre:string;
    url:string;
    icono:string;
    disabled?:boolean;
}

export type Menu = MenuItem[]