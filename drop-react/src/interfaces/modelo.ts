import { Caracteristica } from "./caracteristica";
import { ImagenModelo } from "./imagenModelo";

export interface Modelo{
    id?: number,
    nombre?: string,
    descripcion?: string,
    valor: number,
    moneda: string,
    brochure: string,
    imagenes: ImagenModelo[],
    caracteristicas: Caracteristica[]
}