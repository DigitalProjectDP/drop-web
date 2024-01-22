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

export const MockProyectos: Modelo[] = [
    {
        id: 1,
        nombre: 'Proyecto Mendoza',
        // descripcion: `El concepto orientativo planteado ene l brochure puede ser modificado por el cliente, según conveniencia.
        //               Este modelo de fabricación estandar, permite elegir al usuario si desea toilette + baño, 2 dormitorios, dormitorio, vestidor y estudio, opciones de ubicaciones, cantidades y morfología de carpinterías.`,
        descripcion: '',
        valor: 40000,
        moneda: 'USD$',
        brochure: '',
        categoria: { id: 1, descripcion: 'Alquiler temporario'},
        imagenes: [{id: 1, nombre: 'Imagen01', url: imgDosdor01}, {id: 2, nombre: 'Imagen02', url: imgDosdor02}, {id: 3, nombre: 'Imagen03', url: imgDosdor03}, {id: 4, nombre: 'Imagen04', url: imgDosdor04}],
        caracteristicas: [{id: 1, descripcion: '2 dormitorios | 6 módulos'},{id: 2, descripcion: '116 m2'},{id: 3, descripcion: '70m2 cubiertos + 46m2 de deck'}]
    },
    {
        id: 2,
        nombre: 'Proyecto La Plata',
        descripcion: ``,
        valor: 40000,
        moneda: 'USD$',
        brochure: '',
        categoria: { id: 1, descripcion: 'Alquiler temporario'},
        imagenes: [{id: 1, nombre: 'Imagen01', url: imgChillout01}, {id: 2, nombre: 'Imagen02', url: imgChillout02}, {id: 3, nombre: 'Imagen03', url: imgChillout03},
                    {id: 4, nombre: 'Imagen04', url: imgChillout04}, {id: 5, nombre: 'Imagen05', url: imgChillout05}, {id: 6, nombre: 'Imagen06', url: imgChillout06}],
        caracteristicas: [{id: 1, descripcion: '1 Dormitorio | 53m2'},{id: 2, descripcion: 'Personalizable'}]
    },
    {
        id: 3,
        nombre: 'Proyecto Tigre',
        descripcion: ``,
        valor: 40000,
        moneda: 'USD$',
        brochure: '',
        categoria: { id: 1, descripcion: 'Alquiler temporario'},
        imagenes: [{id: 1, nombre: 'Imagen01', url: imgUndor01}, {id: 2, nombre: 'Imagen02', url: imgUndor02}, {id: 3, nombre: 'Imagen03', url: imgUndor03}],
        caracteristicas: [{id: 1, descripcion: 'Casa 1 dormitorio | 97m2'},{id: 2, descripcion: 'Personalizable'}]
    },
    {
        id: 4,
        nombre: 'Proyecto Córdoba',
        descripcion: ``,
        valor: 40000,
        moneda: 'USD$',
        brochure: '',
        categoria: { id: 1, descripcion: 'Alquiler temporario'},
        imagenes: [{id: 1, nombre: 'Imagen01', url: imgAmedida01}, {id: 2, nombre: 'Imagen02', url: imgAmedida02}, {id: 3, nombre: 'Imagen03', url: imgAmedida03}, {id: 4, nombre: 'Imagen04', url: imgAmedida04}],
        caracteristicas: [{id: 1, descripcion: 'Proyectos personalizados y adaptados según necesidad'}]
    },
]