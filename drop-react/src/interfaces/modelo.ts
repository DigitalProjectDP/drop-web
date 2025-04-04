import { Caracteristica } from "./caracteristica";
import { ImagenModelo } from "./imagenModelo";

export interface Modelo{
    id?: number,
    nombre?: string,
    subtitulo?: string,
    descripcion?: string,
    valor: number,
    moneda: string,
    brochure: string,
    categoria: Caracteristica,
    imagenes: ImagenModelo[],
    caracteristicas: Caracteristica[]
}