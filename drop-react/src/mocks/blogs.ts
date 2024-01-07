import { Imagen } from "../interfaces/imagen";
import Blog001 from "../media/img/blogs/blog001.png"
import Blog002 from "../media/img/blogs/blog002.png"

export const MockBlogs: Imagen[] = 
[
    {
        id: 1,
        titulo: `Congreso nuevas tecnologías. 
                Arquitectura modular, ¿la nueva forma de invertir seguro?`,
        subtitulo: 'Hace varios años que en Sudamérica se ha instalado una opción constructiva oriunda de merio oriente. Se trata de la arquitectura modular, diferenciando sus principales beneficios en costos y en entrega inmediata',
        descripcion: `Entonces, ¿Qué tan segura es la inversión modular?
        En pocas palabras, el CEO y el Presidente de Drop, Agustín y Fernando Magno, nos comentaron sobre el fenómeno climático caracterizado por el calentamiento del Océano Pacífico y sus efectos se extienden por todo el myndo, incluso provocando condiciones climáticas extremas en Australia.
        Entonces, profundicemos en lo que eso realmente significa
        
        Entendiendo el sistema constructivo
        El Niño es un evento climático complejo que ocurre de manera irregular cada dos a siete años. Durante El Niño, el OcéanoPacífico central y oriental experimenta temperaturas superficiales del mar más altas de lo habitual, lo que provoca unacascada de cambios climáticos. Si bien los impactos de El Niño pueden variar, una característica común es un cambio enlos patrones climáticos, incluido el aumento de las temperaturas, la disminución de las precipitaciones y las mayorestasas de evaporación.
        <button>Click</button>
        `,
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