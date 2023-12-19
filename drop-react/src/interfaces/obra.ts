import { Caracteristica } from "./caracteristica";
import { ImagenObra } from "./imagenObra";

export interface Obra{
    id?: number,
    nombre?: string,
    descripcion?: string,
    valor: number,
    moneda: string,
    brochure: string,
    imagenes: ImagenObra[],
    caracteristicas: Caracteristica[]
}