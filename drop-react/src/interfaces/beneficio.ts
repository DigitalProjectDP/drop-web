import { Caracteristica } from "./caracteristica";

export interface Beneficio{
    id?: number,
    titulo?: string,
    descripcion?: string,
    caracteristicas: Caracteristica[]
}