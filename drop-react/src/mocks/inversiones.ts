import { Inversion } from "../interfaces/inversion";
import imgGastronomia from "../media/img/home/gastronomia.png";
import imgHoteleria from "../media/img/home/hoteleria.jpeg";
import imgComercios from "../media/img/home/comercios.jpg";
import imgResidencial from "../media/img/home/residencial.webp";

export const MockInversiones: Inversion[] = [
    {
        id: 1,
        titulo: "Gastronomía",
        descripcion: "Diseños modernos y distintivos, con posibilidad de crecimiento y expansión",
        imagen: imgGastronomia,
        caracteristicas: [{id: 1, descripcion: 'Cafeterías'},{id: 2, descripcion: 'Heladerías'},{id: 3, descripcion: 'Restaurantes'},{id: 4, descripcion: 'Bares'}]
    },
    {
        id: 2,
        titulo: "Hotelería",
        descripcion: "A tu manera, desarrollo de módulos independientes, como complejos hoteleros",
        imagen: imgHoteleria,
        caracteristicas: [{id: 1, descripcion: 'Cabañas'},{id: 2, descripcion: 'Glamping'},{id: 3, descripcion: 'Complejos turísticos'}]
    },
    {
        id: 3,
        titulo: "Comercios",
        descripcion: "Emprendedores con actividades comerciales y prestadora de servicios",
        imagen: imgComercios,
        caracteristicas: [{id: 1, descripcion: 'Oficinas'},{id: 2, descripcion: 'Gimnasios'},{id: 3, descripcion: 'Locales'},{id: 4, descripcion: 'Shops'}]
    },
    {
        id: 4,
        titulo: "Residencial",
        descripcion: "Tu casa que siempre soñaste. Personalizalo a tu manera, obtené la renta que estás buscando",
        imagen: imgResidencial,
        caracteristicas: [{id: 1, descripcion: 'Viviendas'},{id: 2, descripcion: 'Alquiler temporario'},{id: 3, descripcion: 'Barrios'}]
    }
]