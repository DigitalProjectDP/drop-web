import { Caracteristica } from "./caracteristica";

export interface Beneficio{
    id?: number,
    titulo?: string,
    descripcion?: string,
    imagen?: string,
    caracteristicas: Caracteristica[]
}