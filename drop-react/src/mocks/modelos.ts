import { Modelo } from "../interfaces/modelo";
import imgDosdor01 from "../media/img/modelos/dosdor/dosdor.jpg";
import imgDosdor02 from "../media/img/modelos/dosdor/dosdor (1).jpg";
import imgDosdor03 from "../media/img/modelos/dosdor/dosdor (1).png";
import imgDosdor04 from "../media/img/modelos/dosdor/dosdor (1).JPEG";
import imgDosdor05 from "../media/img/modelos/dosdor/dosdor (2).jpg";
import imgDosdor06 from "../media/img/modelos/dosdor/dosdor (3).jpg";
import imgDosdor07 from "../media/img/modelos/dosdor/dosdor (4).jpg";
import imgDosdor08 from "../media/img/modelos/dosdor/dosdor (5).jpg";
import imgDosdor09 from "../media/img/modelos/dosdor/dosdor (6).jpg";
import imgDosdor10 from "../media/img/modelos/dosdor/dosdor (7).jpg";
import imgDosdor11 from "../media/img/modelos/dosdor/dosdor (8).jpg";
import imgDosdor12 from "../media/img/modelos/dosdor/dosdor (9).jpg";
import imgChillout01 from "../media/img/modelos/chillout/chillout.jpg";
import imgChillout02 from "../media/img/modelos/chillout/chillout (1).png";
import imgChillout03 from "../media/img/modelos/chillout/chillout (1).JPEG";
import imgChillout04 from "../media/img/modelos/chillout/chillout (1).JPG";
import imgChillout05 from "../media/img/modelos/chillout/chillout (2).jpg";
import imgChillout06 from "../media/img/modelos/chillout/chillout (2).png";
import imgChillout07 from "../media/img/modelos/chillout/chillout (2).JPEG";
import imgChillout08 from "../media/img/modelos/chillout/chillout (3).jpg";
import imgChillout09 from "../media/img/modelos/chillout/chillout (3).jpeg";
import imgChillout10 from "../media/img/modelos/chillout/chillout (4).JPEG";
import imgChillout11 from "../media/img/modelos/chillout/chillout (5).jpeg";
import imgCabin01 from "../media/img/modelos/cabin/cabin.jpg";
import imgCabin02 from "../media/img/modelos/cabin/cabin (1).JPEG";
import imgCabin03 from "../media/img/modelos/cabin/cabin (1).jpg";
import imgCabin04 from "../media/img/modelos/cabin/cabin (2).jpeg";
import imgCabin05 from "../media/img/modelos/cabin/cabin (2).jpg";
import imgCabin06 from "../media/img/modelos/cabin/cabin (3).jpeg";
import imgCabin07 from "../media/img/modelos/cabin/cabin (3).jpg";
import imgCabin08 from "../media/img/modelos/cabin/cabin (4).jpeg";
import imgCabin09 from "../media/img/modelos/cabin/cabin (4).jpg";
import imgCabin10 from "../media/img/modelos/cabin/cabin (5).jpeg";
import imgCabin11 from "../media/img/modelos/cabin/cabin (5).jpg";
import imgKube01 from "../media/img/modelos/kube/kube.jpg";
import imgKube02 from "../media/img/modelos/kube/kube (1).JPEG";
import imgKube03 from "../media/img/modelos/kube/kube (1).jpg";
import imgKube04 from "../media/img/modelos/kube/kube (1).png";
import imgKube05 from "../media/img/modelos/kube/kube (2).jpg";
import imgKube06 from "../media/img/modelos/kube/kube (3).jpg";
import imgKube07 from "../media/img/modelos/kube/kube (4).jpg";
import imgKube08 from "../media/img/modelos/kube/kube (5).jpg";
import imgKube09 from "../media/img/modelos/kube/kube (6).jpg";
import imgKube10 from "../media/img/modelos/kube/kube (7).jpg";
import imgKube11 from "../media/img/modelos/kube/kube (8).jpg";
import imgKube12 from "../media/img/modelos/kube/kube (9).JPG";
import brochure01 from "../media/brochure/CABIN.pdf";
import brochure02 from "../media/brochure/CHILLOUT.pdf";
import brochure03 from "../media/brochure/DOSDOR.pdf";
import brochure04 from "../media/brochure/brochure01.pdf";

export const MockModelos: Modelo[] = [
    {
        id: 1,
        nombre: 'Cabin',
        // descripcion: `El concepto orientativo planteado ene l brochure puede ser modificado por el cliente, según conveniencia.
        //               Este modelo de fabricación estandar, permite elegir al usuario si desea toilette + baño, 2 dormitorios, dormitorio, vestidor y estudio, opciones de ubicaciones, cantidades y morfología de carpinterías.`,
        descripcion: `1 ambiente integrado | 1 módulo.\n38 m2 totales.\n18 m2 cubiertos + 20 m2 deck.\n\nUn espacio adaptable\n\nÚnico ambiente donde se integran todas las necesdidades de un hogar; cocina, baño, living, comedor y dormitorio. \n\nHotel boutique, refugios de montaña, glamping, casa de huéspedes, atelier... ¡el uso que vos quieras!\n\nPropio al espíritu DROP,  al estar compuesto por un solo módulo, terminado en fábrica facilita su velocidad de construcción y sencilla implantación. Llevalo a DONDE QUIERAS.`,
        valor: 40000,
        moneda: 'USD$',
        brochure: brochure01,
        categoria: { id: 1, descripcion: 'Alquiler temporario'},
        imagenes: [{id: 1, nombre: 'Imagen01', url: imgCabin01}, {id: 2, nombre: 'Imagen02', url: imgCabin02}, {id: 3, nombre: 'Imagen03', url: imgCabin03}, {id: 4, nombre: 'Imagen04', url: imgCabin04},
        {id: 5, nombre: 'Imagen05', url: imgCabin05}, {id: 6, nombre: 'Imagen06', url: imgCabin06}, {id: 7, nombre: 'Imagen07', url: imgCabin07}, {id: 8, nombre: 'Imagen08', url: imgCabin08},
        {id: 9, nombre: 'Imagen09', url: imgCabin09}, {id: 10, nombre: 'Imagen10', url: imgCabin10}, {id: 11, nombre: 'Imagen11', url: imgCabin11}
        ],
        caracteristicas: [{id: 1, descripcion: '1 Ambiente | 38 m2'},{id: 2, descripcion: 'Personalizable'}]
    },
    {
        id: 2,
        nombre: 'Chillout',
        descripcion: `1 dormitorio | 3 módulos.\n58 m2 totales. \n35 m2 cubiertos + 23 m2 deck.\n\nEs el modelo habitacional más práctico que desarrollamos. Puede modularse de la forma que prefiera el cliente, generando un amplio loft o un dormitorio independiente de cocina-living-comedor.\n\nPuede ser una primera implantación en el terreno que hoy cumpla con los requisitos mínimos para mudarse y luego facilmente ampliarlo para sumar ambientes independientes o rediseñarlo para que tenga uso de SUM o quincho.\n\nLa pérgola propone la extensión de los ambientes hacia el parque. `,
        valor: 40000,
        moneda: 'USD$',
        brochure: brochure02,
        categoria: { id: 1, descripcion: 'Alquiler temporario'},
        imagenes: [{id: 1, nombre: 'Imagen01', url: imgChillout01}, {id: 2, nombre: 'Imagen02', url: imgChillout02}, {id: 3, nombre: 'Imagen03', url: imgChillout03},
                    {id: 4, nombre: 'Imagen04', url: imgChillout04}, {id: 5, nombre: 'Imagen05', url: imgChillout05}, {id: 6, nombre: 'Imagen06', url: imgChillout06},
                    {id: 7, nombre: 'Imagen07', url: imgChillout07}, {id: 8, nombre: 'Imagen08', url: imgChillout08}, {id: 9, nombre: 'Imagen09', url: imgChillout09},
                    {id: 10, nombre: 'Imagen10', url: imgChillout10}, {id: 11, nombre: 'Imagen11', url: imgChillout11}
                ],
        caracteristicas: [{id: 1, descripcion: '1 Dormitorio | 58m2'},{id: 2, descripcion: 'Personalizable'}]
    },
    {
        id: 3,
        nombre: 'Dosdor',
        descripcion: `2 dormitorios | 6 módulos.\n116 m2 totales.\n70 m2 cubiertos + 46 m2 deck.\n\nLa casa que siempre quisiste.\n\nFuncional a una vida funcional, abierta al parque y amplia. \n\nSe puede personalizar según intenciones del cliente , implantación y orientación del terrino.\n\nComo todos nuestros modelos, puede ser fácilmente ampliable para sumar ambientes independientes o rediseñarlo interiormente, según deseo del cliente. \n\nEste modelo permite al usuario elegir distintas tipologias de diseño. `,
        valor: 40000,
        moneda: 'USD$',
        brochure: brochure03,
        categoria: { id: 1, descripcion: 'Alquiler temporario'},
        imagenes: [{id: 1, nombre: 'Imagen01', url: imgDosdor01}, {id: 2, nombre: 'Imagen02', url: imgDosdor02}, {id: 3, nombre: 'Imagen03', url: imgDosdor03}, {id: 4, nombre: 'Imagen04', url: imgDosdor04},
        {id: 5, nombre: 'Imagen05', url: imgDosdor05}, {id: 6, nombre: 'Imagen06', url: imgDosdor06}, {id: 7, nombre: 'Imagen07', url: imgDosdor07}, {id: 8, nombre: 'Imagen08', url: imgDosdor08},
        {id: 9, nombre: 'Imagen09', url: imgDosdor09}, {id: 10, nombre: 'Imagen10', url: imgDosdor10}, {id: 11, nombre: 'Imagen11', url: imgDosdor11}, {id: 12, nombre: 'Imagen12', url: imgDosdor12}
        ],
        caracteristicas: [{id: 1, descripcion: '1 Dormitorio | 116 m2'},{id: 2, descripcion: 'Personalizable'}]
    },
    {
        id: 4,
        nombre: 'Kube',
        descripcion: `La línea KUBE nace a partir de la decisión de DROP de que tus proyectos sean a la medida de tu necesidad. Viviendas modernas, con ambientes amplios e iluminados con ventilaciones cruzadas.\n\nAplicable tanto para proyectos en terrenos con mucho espacio disponible, como para terrenos entre medianeras donde se debe lograr una fachada estética que proteja las visuales y un contrafrente vidriado abierto al parque. La posibilidad de que patios internos queden incrustados en el interior de la casa y provean ventilación e iluminación atodos los ambientes circundantes. \n\nLa flexibilidad y amplitud de los ambientes permiten usos diversos, economizando espacios, propios de la versatilidad y velocidad de la vida moderna, provocando espacios acústica y térmicamente aislados sin perder iluminación natural.`,
        valor: 40000,
        moneda: 'USD$',
        brochure: undefined,
        categoria: { id: 1, descripcion: 'Alquiler temporario'},
        imagenes: [{id: 1, nombre: 'Imagen01', url: imgKube01}, {id: 2, nombre: 'Imagen02', url: imgKube02}, {id: 3, nombre: 'Imagen03', url: imgKube03}, {id: 4, nombre: 'Imagen04', url: imgKube04},
        {id: 5, nombre: 'Imagen05', url: imgKube05}, {id: 6, nombre: 'Imagen06', url: imgKube06}, {id: 7, nombre: 'Imagen07', url: imgKube07}, {id: 8, nombre: 'Imagen08', url: imgKube08},
        {id: 9, nombre: 'Imagen09', url: imgKube09}, {id: 10, nombre: 'Imagen10', url: imgKube10}, {id: 11, nombre: 'Imagen11', url: imgKube11}, {id: 12, nombre: 'Imagen12', url: imgKube12}
        ],
        caracteristicas: [{id: 1, descripcion: 'Proyectos personalizados y adaptados según necesidad'}]
    },
]