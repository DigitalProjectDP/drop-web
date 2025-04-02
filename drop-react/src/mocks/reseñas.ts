import { Reseña } from "../interfaces/reseña";
import imgCabañas01 from "../media/img/proyectos/cabanas/Portada.jpg";
import imgCabañas02 from "../media/img/proyectos/cabanas/Converted_WebP/40 (1).webp";
import imgMatheu01 from "../media/img/proyectos/matheu/Portada.jpeg";
import imgMatheu02 from "../media/img/proyectos/matheu/Converted_WebP/33.webp";
import imgMatheu03 from "../media/img/proyectos/matheu/Converted_WebP/34.webp";
import imgGuest01 from "../media/img/proyectos/guest/Portada.jpg";
import imgSueño01 from "../media/img/proyectos/suenojoven/Portada.jpg";
import imgSueño02 from "../media/img/proyectos/suenojoven/14.jpg";
import imgSueño04 from "../media/img/proyectos/suenojoven/717cf03a-c1bb-4885-b236-db2686fc01a5.jpg";
import imgVino01 from "../media/img/proyectos/vinoandino/Portada.jpg";

export const MockReseñas: Reseña[] = [
    {
        id: 1,
        nombreUsuario: 'Juan Pérez',
        fotoUsuario: 'https://mighty.tools/mockmind-api/content/human/80.jpg',
        fecha: '2023-01-01 13:55',
        descripcion: 'Increíble experiencia con Drop. Nuestra casa modular superó todas las expectativas. ¡Calidad, rapidez y diseño espectacular!',
        puntuacion: 5,
        imagenes: [imgCabañas01, imgCabañas02],
        color: 'rgb(209, 198, 193)'
    },
    {
        id: 2,
        nombreUsuario: 'María González',
        fotoUsuario: 'https://mighty.tools/mockmind-api/content/human/125.jpg',
        fecha: '2023-02-15 09:30',
        descripcion: 'Contratamos un estudio modular para nuestro jardín y quedamos encantados. El equipo fue profesional y el resultado es muy funcional.',
        puntuacion: 4,
        imagenes: [imgMatheu01, imgMatheu02, imgMatheu03],
        color: '#FFF'
    },
    {
        id: 3,
        nombreUsuario: 'Carlos Rojas',
        fotoUsuario: 'https://mighty.tools/mockmind-api/content/human/104.jpg',
        fecha: '2023-03-10 18:22',
        descripcion: 'Buen precio y acabados decentes, aunque el tiempo de entrega se retrasó un poco. En general, satisfecho.',
        puntuacion: 3,
        imagenes: [imgGuest01],
        color: '#dedede'
    },
    {
        id: 4,
        nombreUsuario: 'Ana López',
        fotoUsuario: 'https://mighty.tools/mockmind-api/content/human/97.jpg',
        fecha: '2023-04-05 11:45',
        descripcion: '¡Nuestra cabaña de containers es el sueño de cualquier minimalista! Diseño moderno, eficiente y eco-friendly. 100% recomendado.',
        puntuacion: 5,
        imagenes: [imgSueño04],
        color: '#FFF'
    },
    {
        id: 5,
        nombreUsuario: 'Luis Mendoza',
        fotoUsuario: 'https://mighty.tools/mockmind-api/content/human/91.jpg',
        fecha: '2023-05-20 16:10',
        descripcion: 'El proyecto fue bueno, pero el servicio postventa podría mejorar. Tuve un pequeño problema con la instalación y tardaron en responder.',
        puntuacion: 3,
        imagenes: [imgVino01],
        color: 'rgb(209, 198, 193)'
    },
    {
        id: 6,
        nombreUsuario: 'Sofía Ramírez',
        fotoUsuario: 'https://mighty.tools/mockmind-api/content/human/111.jpg',
        fecha: '2023-06-30 14:00',
        descripcion: 'Drop transformó un container en una oficina increíble para mi emprendimiento. ¡Todos mis clientes quedan impresionados!',
        puntuacion: 5,
        imagenes: [imgSueño01, imgSueño02],
        color: '#FFF'
    }
];