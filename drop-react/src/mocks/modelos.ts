import { Modelo } from "../interfaces/modelo";
import imgDosdor01 from "../media/img/modelos/dosdor/dosdor01.jpg";
import imgDosdor02 from "../media/img/modelos/dosdor/dosdor02.jpg";
import imgDosdor03 from "../media/img/modelos/dosdor/dosdor03.jpg";
import imgDosdor04 from "../media/img/modelos/dosdor/dosdor04.jpg";
import imgChillout01 from "../media/img/modelos/chillout/chillout01.jpg";
import imgChillout02 from "../media/img/modelos/chillout/chillout02.jpg";
import imgChillout03 from "../media/img/modelos/chillout/chillout03.jpg";
import imgChillout04 from "../media/img/modelos/chillout/chillout04.jpg";
import imgChillout05 from "../media/img/modelos/chillout/chillout05.jpg";
import imgChillout06 from "../media/img/modelos/chillout/chillout06.jpg";
import imgUndor01 from "../media/img/modelos/undor/undor01.jpg";
import imgUndor02 from "../media/img/modelos/undor/undor01.jpg";
import imgUndor03 from "../media/img/modelos/undor/undor01.jpg";
import imgAmedida01 from "../media/img/modelos/a medida/amedida01.jpg";
import imgAmedida02 from "../media/img/modelos/a medida/amedida02.jpg";
import imgAmedida03 from "../media/img/modelos/a medida/amedida03.jpg";
import imgAmedida04 from "../media/img/modelos/a medida/amedida04.jpg";

export const MockModelos: Modelo[] = [
    {
        id: 1,
        nombre: 'Cabin',
        // descripcion: `El concepto orientativo planteado ene l brochure puede ser modificado por el cliente, según conveniencia.
        //               Este modelo de fabricación estandar, permite elegir al usuario si desea toilette + baño, 2 dormitorios, dormitorio, vestidor y estudio, opciones de ubicaciones, cantidades y morfología de carpinterías.`,
        descripcion: `1 ambiente integrado | 1 módulo.\n38 m2 totales.\n18 m2 cubiertos + 20 m2 deck.\n\nUn espacio adaptable\n\nÚnico ambiente donde se integran todas las necesdidades de un hogar; cocina, baño, living, comedor y dormitorio. \n\nHotel boutique, refugios de montaña, glamping, casa de huéspedes, atelier... ¡el uso que vos quieras!\n\nPropio al espíritu DROP,  al estar compuesto por un solo módulo, terminado en fábrica facilita su velocidad de construcción y sencilla implantación. Llevalo a DONDE QUIERAS.`,
        valor: 40000,
        moneda: 'USD$',
        brochure: '',
        categoria: { id: 1, descripcion: 'Alquiler temporario'},
        imagenes: [{id: 1, nombre: 'Imagen01', url: imgDosdor01}, {id: 2, nombre: 'Imagen02', url: imgDosdor02}, {id: 3, nombre: 'Imagen03', url: imgDosdor03}, {id: 4, nombre: 'Imagen04', url: imgDosdor04}],
        caracteristicas: [{id: 1, descripcion: '1 ambiente | 38 m2'},{id: 2, descripcion: 'Personalizable'}]
    },
    {
        id: 2,
        nombre: 'Chillout',
        descripcion: `1 dormitorio | 3 módulos.\n58 m2 totales. \n35 m2 cubiertos + 23 m2 deck.\n\nEs el modelo habitacional más práctico que desarrollamos. Puede modularse de la forma que prefiera el cliente, generando un amplio loft o un dormitorio independiente de cocina-living-comedor.\n\nPuede ser una primera implantación en el terreno que hoy cumpla con los requisitos mínimos para mudarse y luego facilmente ampliarlo para sumar ambientes independientes o rediseñarlo para que tenga uso de SUM o quincho.\n\nLa pérgola propone la extensión de los ambientes hacia el parque. `,
        valor: 40000,
        moneda: 'USD$',
        brochure: '',
        categoria: { id: 1, descripcion: 'Alquiler temporario'},
        imagenes: [{id: 1, nombre: 'Imagen01', url: imgChillout01}, {id: 2, nombre: 'Imagen02', url: imgChillout02}, {id: 3, nombre: 'Imagen03', url: imgChillout03},
                    {id: 4, nombre: 'Imagen04', url: imgChillout04}, {id: 5, nombre: 'Imagen05', url: imgChillout05}, {id: 6, nombre: 'Imagen06', url: imgChillout06}],
        caracteristicas: [{id: 1, descripcion: '1 Dormitorio | 58m2'},{id: 2, descripcion: 'Personalizable'}]
    },
    {
        id: 3,
        nombre: 'Dosdor',
        descripcion: `2 dormitorios | 6 módulos.\n116 m2 totales.\n70 m2 cubiertos + 46 m2 deck.\n\nLa casa que siempre quisiste.\n\nFuncional a una vida funcional, abierta al parque y amplia. \n\nSe puede personalizar según intenciones del cliente , implantación y orientación del terrino.\n\nComo todos nuestros modelos, puede ser fácilmente ampliable para sumar ambientes independientes o rediseñarlo interiormente, según deseo del cliente. \n\nEste modelo permite al usuario elegir distintas tipologias de diseño. `,
        valor: 40000,
        moneda: 'USD$',
        brochure: '',
        categoria: { id: 1, descripcion: 'Alquiler temporario'},
        imagenes: [{id: 1, nombre: 'Imagen01', url: imgUndor01}, {id: 2, nombre: 'Imagen02', url: imgUndor02}, {id: 3, nombre: 'Imagen03', url: imgUndor03}],
        caracteristicas: [{id: 1, descripcion: '1 dormitorio | 116 m2'},{id: 2, descripcion: 'Personalizable'}]
    },
    {
        id: 4,
        nombre: 'A medida',
        descripcion: ``,
        valor: 40000,
        moneda: 'USD$',
        brochure: '',
        categoria: { id: 1, descripcion: 'Alquiler temporario'},
        imagenes: [{id: 1, nombre: 'Imagen01', url: imgAmedida01}, {id: 2, nombre: 'Imagen02', url: imgAmedida02}, {id: 3, nombre: 'Imagen03', url: imgAmedida03}, {id: 4, nombre: 'Imagen04', url: imgAmedida04}],
        caracteristicas: [{id: 1, descripcion: 'Proyectos personalizados y adaptados según necesidad'}]
    },
]