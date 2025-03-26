import { Caracteristica } from "./caracteristica";
import { ImagenModelo } from "./imagenModelo";

export interface Reseña{
    id?: number,
    nombreUsuario?: string,
    fotoUsuario?: any,
    fecha?: string,
    descripcion?: string,
    puntuacion?: number,
    imagenes: string[]
}