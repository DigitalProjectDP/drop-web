import { Imagen } from "../interfaces/imagen";
import Blog001 from "../media/img/blogs/blog001.png"
import Blog002 from "../media/img/blogs/blog002.png"

export const MockBlogs: Imagen[] = 
[
    {
        id: 1,
        titulo: 'Congreso nuevas tecnlogías. Arquitectura modular, ¿la nueva forma de invertir seguro?',
        subtitulo: '',
        descripcion: '',
        imagenUrl: Blog001,
        tipoSeccion: {
            id: 2,
            descripcion: 'Blog'
        }
    },
    {
        id: 2,
        titulo: 'El auge de los alquileres temporarios',
        subtitulo: '',
        descripcion: '',
        imagenUrl: Blog002,
        tipoSeccion: {
            id: 2,
            descripcion: 'Blog'
        }
    }
]