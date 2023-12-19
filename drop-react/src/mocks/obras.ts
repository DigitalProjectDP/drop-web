import { Obra } from "../interfaces/obra";

export const MockObras: Obra[] = [
    {
        id: 1,
        nombre: 'Dosdor',
        descripcion: `El concepto orientativo planteado ene l brochure puede ser modificado por el cliente, según conveniencia.
                      Este modelo de fabricación estandar, permite elegir al usuario si desea toilette + baño, 2 dormitorios, dormitorio, vestidor y estudio, opciones de ubicaciones, cantidades y morfología de carpinterías.`,
        valor: 40000,
        moneda: 'USD$',
        brochure: '',
        imagenes: [{id: 1, nombre: 'Imagen01', url: ''}, {id: 2, nombre: 'Imagen02', url: ''}, {id: 3, nombre: 'Imagen03', url: ''}],
        caracteristicas: [{id: 1, descripcion: '2 dormitorios | 6 módulos'},{id: 2, descripcion: '116 m2'},{id: 3, descripcion: '70m2 cubiertos + 46m2 de deck'}]
    },
    {
        id: 2,
        nombre: 'Chillout',
        descripcion: ``,
        valor: 40000,
        moneda: 'USD$',
        brochure: '',
        imagenes: [{id: 1, nombre: 'Imagen01', url: ''}, {id: 2, nombre: 'Imagen02', url: ''}, {id: 3, nombre: 'Imagen03', url: ''}],
        caracteristicas: [{id: 1, descripcion: '1 Dormitorio | 53m2'},{id: 2, descripcion: 'Personalizable'}]
    },
    {
        id: 3,
        nombre: 'Undor',
        descripcion: ``,
        valor: 40000,
        moneda: 'USD$',
        brochure: '',
        imagenes: [{id: 1, nombre: 'Imagen01', url: ''}, {id: 2, nombre: 'Imagen02', url: ''}, {id: 3, nombre: 'Imagen03', url: ''}],
        caracteristicas: [{id: 1, descripcion: 'Casa 1 dormitorio | 97m2'},{id: 2, descripcion: 'Personalizable'}]
    },
    {
        id: 4,
        nombre: 'A medida',
        descripcion: ``,
        valor: 40000,
        moneda: 'USD$',
        brochure: '',
        imagenes: [{id: 1, nombre: 'Imagen01', url: ''}, {id: 2, nombre: 'Imagen02', url: ''}, {id: 3, nombre: 'Imagen03', url: ''}],
        caracteristicas: [{id: 1, descripcion: 'Proyectos personalizados y adaptados según necesidad'}]
    },
]