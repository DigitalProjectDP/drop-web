import { Modelo } from "../interfaces/modelo";
import imgCabañas01 from "../media/img/proyectos/cabañas_de_mar/cabañas.jpg";
import imgCabañas02 from "../media/img/proyectos/cabañas_de_mar/cabañas (1).JPG";
import imgCabañas03 from "../media/img/proyectos/cabañas_de_mar/cabañas (1).jpeg";
import imgCabañas04 from "../media/img/proyectos/cabañas_de_mar/cabañas (1).png";
import imgCabañas05 from "../media/img/proyectos/cabañas_de_mar/cabañas (2).JPG";
import imgCabañas06 from "../media/img/proyectos/cabañas_de_mar/cabañas (2).jpeg";
import imgCabañas07 from "../media/img/proyectos/cabañas_de_mar/cabañas (2).png";
import imgCabañas08 from "../media/img/proyectos/cabañas_de_mar/cabañas (3).jpeg";
import imgCabañas09 from "../media/img/proyectos/cabañas_de_mar/cabañas (3).jpg";
import imgMatheu01 from "../media/img/proyectos/casa_matheu/matheu.JPEG";
import imgMatheu02 from "../media/img/proyectos/casa_matheu/matheu (1).JPEG";
import imgMatheu03 from "../media/img/proyectos/casa_matheu/matheu (1).jpg";
import imgMatheu04 from "../media/img/proyectos/casa_matheu/matheu (1).png";
import imgMatheu05 from "../media/img/proyectos/casa_matheu/matheu (2).JPEG";
import imgMatheu06 from "../media/img/proyectos/casa_matheu/matheu (2).jpg";
import imgMatheu07 from "../media/img/proyectos/casa_matheu/matheu (3).JPEG";
import imgMatheu08 from "../media/img/proyectos/casa_matheu/matheu (3).jpg";
import imgMatheu09 from "../media/img/proyectos/casa_matheu/matheu (4).JPEG";
import imgMatheu10 from "../media/img/proyectos/casa_matheu/matheu (5).JPEG";
import imgMatheu11 from "../media/img/proyectos/casa_matheu/matheu (6).JPEG";
import imgGuest01 from "../media/img/proyectos/guest/guest.JPG";
import imgGuest02 from "../media/img/proyectos/guest/guest (1).jpeg";
import imgGuest03 from "../media/img/proyectos/guest/guest (1).jpg";
import imgGuest04 from "../media/img/proyectos/guest/guest (2).JPG";
import imgGuest05 from "../media/img/proyectos/guest/guest (3).JPG";
import imgGuest06 from "../media/img/proyectos/guest/guest (4).JPG";
import imgGuest07 from "../media/img/proyectos/guest/guest (5).JPG";
import imgGuest08 from "../media/img/proyectos/guest/guest (6).JPG";
import imgGuest09 from "../media/img/proyectos/guest/guest (7).JPG";
import imgGuest10 from "../media/img/proyectos/guest/guest (8).JPG";
import imgGuest11 from "../media/img/proyectos/guest/guest (9).JPG";
import imgSueño01 from "../media/img/proyectos/sueño_joven/sueño.jpg";
import imgSueño02 from "../media/img/proyectos/sueño_joven/sueño (1).JPG";
import imgSueño03 from "../media/img/proyectos/sueño_joven/sueño (1).png";
import imgSueño04 from "../media/img/proyectos/sueño_joven/sueño (2).jpg";
import imgSueño05 from "../media/img/proyectos/sueño_joven/sueño (2).png";
import imgSueño06 from "../media/img/proyectos/sueño_joven/sueño (3).JPG";
import imgSueño07 from "../media/img/proyectos/sueño_joven/sueño (4).jpg";
import imgSueño08 from "../media/img/proyectos/sueño_joven/sueño (5).jpg";
import imgSueño09 from "../media/img/proyectos/sueño_joven/sueño (6).jpg";
import imgSueño10 from "../media/img/proyectos/sueño_joven/sueño (7).jpg";
import imgSueño11 from "../media/img/proyectos/sueño_joven/sueño (8).JPG";
import imgSueño12 from "../media/img/proyectos/sueño_joven/sueño (9).JPG";
import imgVino01 from "../media/img/proyectos/vino_andino/vinoandino.jpg";
import imgVino02 from "../media/img/proyectos/vino_andino/vinoandino (1).JPEG";
import imgVino03 from "../media/img/proyectos/vino_andino/vinoandino (1).JPG";
import imgVino04 from "../media/img/proyectos/vino_andino/vinoandino (1).png";
import imgVino05 from "../media/img/proyectos/vino_andino/vinoandino (10).jpg";
import imgVino06 from "../media/img/proyectos/vino_andino/vinoandino (11).jpg";
import imgVino07 from "../media/img/proyectos/vino_andino/vinoandino (12).jpg";
import imgVino08 from "../media/img/proyectos/vino_andino/vinoandino (2).JPEG";
import imgVino09 from "../media/img/proyectos/vino_andino/vinoandino (2).jpg";
import imgVino10 from "../media/img/proyectos/vino_andino/vinoandino (3).JPEG";
import imgVino11 from "../media/img/proyectos/vino_andino/vinoandino (3).jpg";
import imgVino12 from "../media/img/proyectos/vino_andino/vinoandino (4).jpeg";
import imgVino13 from "../media/img/proyectos/vino_andino/vinoandino (4).jpg";
import imgVino14 from "../media/img/proyectos/vino_andino/vinoandino (5).jpeg";
import imgVino15 from "../media/img/proyectos/vino_andino/vinoandino (5).jpg";
import imgVino16 from "../media/img/proyectos/vino_andino/vinoandino (6).jpg";
import imgVino17 from "../media/img/proyectos/vino_andino/vinoandino (7).jpg";
import imgVino18 from "../media/img/proyectos/vino_andino/vinoandino (8).jpg";
import imgVino19 from "../media/img/proyectos/vino_andino/vinoandino (9).jpg";

export const MockProyectos: Modelo[] = [
    {
        id: 1,
        nombre: 'Cabañas de mar',
        // descripcion: `El concepto orientativo planteado ene l brochure puede ser modificado por el cliente, según conveniencia.
        //               Este modelo de fabricación estandar, permite elegir al usuario si desea toilette + baño, 2 dormitorios, dormitorio, vestidor y estudio, opciones de ubicaciones, cantidades y morfología de carpinterías.`,
        descripcion: '',
        valor: 40000,
        moneda: 'USD$',
        brochure: '',
        categoria: { id: 1, descripcion: 'Alquiler temporario'},
        imagenes: [{id: 1, nombre: 'Imagen01', url: imgCabañas01}, {id: 2, nombre: 'Imagen02', url: imgCabañas02}, {id: 3, nombre: 'Imagen03', url: imgCabañas03}, {id: 4, nombre: 'Imagen04', url: imgCabañas04},
        {id: 5, nombre: 'Imagen05', url: imgCabañas05}, {id: 6, nombre: 'Imagen06', url: imgCabañas06}, {id: 7, nombre: 'Imagen07', url: imgCabañas07}, {id: 8, nombre: 'Imagen08', url: imgCabañas08},
        {id: 9, nombre: 'Imagen09', url: imgCabañas09}],
        caracteristicas: [{id: 1, descripcion: '2 dormitorios | 6 módulos'},{id: 2, descripcion: '116 m2'},{id: 3, descripcion: '70m2 cubiertos + 46m2 de deck'}]
    },
    {
        id: 2,
        nombre: 'Casa Matheu',
        descripcion: ``,
        valor: 40000,
        moneda: 'USD$',
        brochure: '',
        categoria: { id: 1, descripcion: 'Alquiler temporario'},
        imagenes: [{id: 1, nombre: 'Imagen01', url: imgMatheu01}, {id: 2, nombre: 'Imagen02', url: imgMatheu02}, {id: 3, nombre: 'Imagen03', url: imgMatheu03}, {id: 4, nombre: 'Imagen04', url: imgMatheu04},
        {id: 5, nombre: 'Imagen05', url: imgMatheu05}, {id: 6, nombre: 'Imagen06', url: imgMatheu06}, {id: 7, nombre: 'Imagen07', url: imgMatheu07}, {id: 8, nombre: 'Imagen08', url: imgMatheu08},
        {id: 9, nombre: 'Imagen09', url: imgMatheu09}, {id: 10, nombre: 'Imagen10', url: imgMatheu10}, {id: 11, nombre: 'Imagen11', url: imgMatheu11}
        ],
        caracteristicas: [{id: 1, descripcion: '1 Dormitorio | 53m2'},{id: 2, descripcion: 'Personalizable'}]
    },
    {
        id: 3,
        nombre: 'Guest',
        descripcion: ``,
        valor: 40000,
        moneda: 'USD$',
        brochure: '',
        categoria: { id: 1, descripcion: 'Alquiler temporario'},
        imagenes: [{id: 1, nombre: 'Imagen01', url: imgGuest01}, {id: 2, nombre: 'Imagen02', url: imgGuest02}, {id: 3, nombre: 'Imagen03', url: imgGuest03}, {id: 4, nombre: 'Imagen04', url: imgGuest04},
        {id: 5, nombre: 'Imagen05', url: imgGuest05}, {id: 6, nombre: 'Imagen06', url: imgGuest06}, {id: 7, nombre: 'Imagen07', url: imgGuest07}, {id: 8, nombre: 'Imagen08', url: imgGuest08},
        {id: 9, nombre: 'Imagen09', url: imgGuest09}, {id: 10, nombre: 'Imagen10', url: imgGuest10}, {id: 11, nombre: 'Imagen11', url: imgGuest11}
        ],
        caracteristicas: [{id: 1, descripcion: 'Casa 1 dormitorio | 97m2'},{id: 2, descripcion: 'Personalizable'}]
    },
    {
        id: 4,
        nombre: 'Sueño Joven',
        descripcion: ``,
        valor: 40000,
        moneda: 'USD$',
        brochure: '',
        categoria: { id: 1, descripcion: 'Alquiler temporario'},
        imagenes: [{id: 1, nombre: 'Imagen01', url: imgSueño01}, {id: 2, nombre: 'Imagen02', url: imgSueño02}, {id: 3, nombre: 'Imagen03', url: imgSueño03}, {id: 4, nombre: 'Imagen04', url: imgSueño04},
        {id: 5, nombre: 'Imagen05', url: imgSueño05}, {id: 6, nombre: 'Imagen06', url: imgSueño06}, {id: 7, nombre: 'Imagen07', url: imgSueño07}, {id: 8, nombre: 'Imagen08', url: imgSueño08},
        {id: 9, nombre: 'Imagen09', url: imgSueño09}, {id: 10, nombre: 'Imagen10', url: imgSueño10}, {id: 11, nombre: 'Imagen11', url: imgSueño11}, {id: 12, nombre: 'Imagen12', url: imgSueño12}
        ],
        caracteristicas: [{id: 1, descripcion: 'Proyectos personalizados y adaptados según necesidad'}]
    },
    {
        id: 5,
        nombre: 'Vino Andino',
        descripcion: ``,
        valor: 40000,
        moneda: 'USD$',
        brochure: '',
        categoria: { id: 1, descripcion: 'Alquiler temporario'},
        imagenes: [{id: 1, nombre: 'Imagen01', url: imgVino01}, {id: 2, nombre: 'Imagen02', url: imgVino02}, {id: 3, nombre: 'Imagen03', url: imgVino03}, {id: 4, nombre: 'Imagen04', url: imgVino04},
        {id: 5, nombre: 'Imagen05', url: imgVino05}, {id: 6, nombre: 'Imagen06', url: imgVino06}, {id: 7, nombre: 'Imagen07', url: imgVino07}, {id: 8, nombre: 'Imagen08', url: imgVino08},
        {id: 9, nombre: 'Imagen09', url: imgVino09}, {id: 10, nombre: 'Imagen10', url: imgVino10}, {id: 11, nombre: 'Imagen11', url: imgVino11}, {id: 12, nombre: 'Imagen12', url: imgVino12},
        {id: 13, nombre: 'Imagen13', url: imgVino13}, {id: 14, nombre: 'Imagen14', url: imgVino14}, {id: 15, nombre: 'Imagen15', url: imgVino15}, {id: 16, nombre: 'Imagen16', url: imgVino16},
        {id: 17, nombre: 'Imagen17', url: imgVino17}, {id: 18, nombre: 'Imagen18', url: imgVino18}, {id: 19, nombre: 'Imagen19', url: imgVino19}
        ],
        caracteristicas: [{id: 1, descripcion: 'Proyectos personalizados y adaptados según necesidad'}]
    }
]