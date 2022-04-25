export interface Usuarios {
    _id:number,
    username:string,
    rol_id: number,
    email:string,
    password: string
}
export interface UsuariosRegis {
    username:string,
    rol_id:number,
    email:string,
    password: string
}
export interface UsuariosLog {
    email:string,
    password: string
}
