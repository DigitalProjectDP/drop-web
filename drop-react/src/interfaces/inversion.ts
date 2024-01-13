import { Caracteristica } from "./caracteristica";

export interface Inversion{
    id?: number,
    titulo?: string,
    descripcion?: string,
    imagen?: string,
    caracteristicas: Caracteristica[]
}