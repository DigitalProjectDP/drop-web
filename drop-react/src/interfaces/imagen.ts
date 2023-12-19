import { TipoImagen } from "./tipoImagen";

export interface Imagen{
    id?: number,
    titulo?: string,
    subtitulo?: string,
    descripcion?: string,
    imagenUrl?: string,
    tipoSeccion: TipoImagen
}