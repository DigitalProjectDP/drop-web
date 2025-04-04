export interface Reseña{
    id?: number,
    modelo?: string,
    nombreUsuario?: string,
    fotoUsuario?: any,
    fecha?: string,
    descripcion?: string,
    puntuacion?: number,
    imagenes: string[],
    color?: string
}