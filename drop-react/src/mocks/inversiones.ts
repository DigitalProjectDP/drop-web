import { Inversion } from "../interfaces/inversion";
import imgGastronomia from "../media/img/home/inversiones/GASTRONOMIA.webp";
import imgHoteleria from "../media/img/home/inversiones/HOTELERIA.webp";
import imgComercios from "../media/img/home/inversiones/COMERCIOS.webp";
import imgResidencial from "../media/img/home/inversiones/VIVIENDA.webp";

export const MockInversiones: Inversion[] = [
    {
        id: 1,
        titulo: "Gastronomía",
        descripcion: "Diseños modernos y de impacto, con posibilidad de crecimiento y expansión. Tu proyecto en tiempo record, y al menor costo. Para resolver tanto salón comedor, como un puesto para take away.",
        imagen: imgGastronomia,
        caracteristicas: [{ id: 1, descripcion: 'Cafeterías' }, { id: 2, descripcion: 'Heladerías' }, { id: 3, descripcion: 'Restaurantes' }, { id: 4, descripcion: 'Bares' }, { id: 5, descripcion: 'Puestos en la ruta' }, { id: 6, descripcion: 'Paradores en playa' }]
    },
    {
        id: 2,
        titulo: "Turismo",
        descripcion: "Cápsulas para alojamiento según el destino que elijas: refugios de montaña, cabañas en el campo, glamping o todo lo que imagines para tu desarrollo turístico.",
        imagen: imgHoteleria,
        caracteristicas: [{ id: 1, descripcion: 'Cabañas' }, { id: 2, descripcion: 'Glamping' }, { id: 3, descripcion: 'Complejos turísticos' }, { id: 4, descripcion: 'Refugios' }]
    },
    {
        id: 3,
        titulo: "Comercial",
        descripcion: "El espacio ideal tanto para emprendedores como para empresas. Los desarrollamos ad hoc para tu proyecto comercial.\n",
        imagen: imgComercios,
        caracteristicas: [{ id: 1, descripcion: 'Oficinas' }, { id: 2, descripcion: 'Gimnasios' }, { id: 3, descripcion: 'Locales' }, { id: 4, descripcion: 'Shops' }, { id: 5, descripcion: 'Talleres' }]
    },
    {
        id: 4,
        titulo: "Vivienda",
        descripcion: "La casa moderna y práctica que siempre quisiste, con calidad premium, en tiempo record y al menor costo. Llave mano, totalmente equipada. Sin invasión en tu terreno, 100% de construcción en fábrica.",
        imagen: imgResidencial,
        caracteristicas: [{ id: 1, descripcion: 'Vivienda propia' }, { id: 2, descripcion: 'Alquiler temporario' }, { id: 3, descripcion: 'Desarrollos inmobiliarios' }]
    }
]