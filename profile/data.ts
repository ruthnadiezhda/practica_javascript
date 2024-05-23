/*ACTIVIDAD: CREANDO UNA INTERFAZ*/
export interface Persona {
    nombre: string;
    edad: number;
    profesion: string;
    ubicacion: string;
    hobby: string;
    mayorDeEdad?: boolean;
}