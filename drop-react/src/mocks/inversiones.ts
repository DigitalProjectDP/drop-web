import { Inversion } from "../interfaces/inversion";

export const MockInversiones: Inversion[] = [
    {
        id: 1,
        titulo: "Gastronomía",
        descripcion: "Diseños modernos y distintivos, con posibilidad de crecimiento y expansión",
        caracteristicas: [{id: 1, descripcion: 'Cafeterías'},{id: 2, descripcion: 'Heladerías'},{id: 3, descripcion: 'Restaurantes'},{id: 4, descripcion: 'Bares'}]
    },
    {
        id: 2,
        titulo: "Hotelería",
        descripcion: "A tu manera, desarrollo de módulos independientes, como complejos hoteleros",
        caracteristicas: [{id: 1, descripcion: 'Cabañas'},{id: 2, descripcion: 'Glamping'},{id: 3, descripcion: 'Complejos turísticos'}]
    },
    {
        id: 3,
        titulo: "Comercios",
        descripcion: "Emprendedores con actividades comerciales y prestadora de servicios",
        caracteristicas: [{id: 1, descripcion: 'Oficinas'},{id: 2, descripcion: 'Gimnasios'},{id: 3, descripcion: 'Locales'},{id: 4, descripcion: 'Shops'}]
    },
    {
        id: 4,
        titulo: "Residencial",
        descripcion: "Tu casa que siempre soñaste. Personalizalo a tu manera, obtené la renta que estás buscando",
        caracteristicas: [{id: 1, descripcion: 'Viviendas'},{id: 2, descripcion: 'Alquiler temporario'},{id: 3, descripcion: 'Barrios'}]
    }
]