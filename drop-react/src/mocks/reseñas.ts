import { Reseña } from "../interfaces/reseña";
import imgDrops from "../media/img/reseñas/drop_placeholder.webp";
import imgCB from "../media/img/reseñas/CB 1.webp";
import imgCP from "../media/img/reseñas/CP.webp";
import imgFP from "../media/img/reseñas/FP.webp";
import imgGF from "../media/img/reseñas/GF.webp";
import imgGP from "../media/img/reseñas/GP.webp";
import imgRS from "../media/img/reseñas/RS.webp";
import imgSL from "../media/img/reseñas/SL 1.webp";
import imgMC from "../media/img/reseñas/MC.jpg";
import imgDMF from "../media/img/reseñas/DMF.webp";
import imgRB from "../media/img/reseñas/RB.webp";
import imgAMB from "../media/img/reseñas/AMB 2.webp";

export const MockReseñas: Reseña[] = 
[
    {
        modelo: "CANARIO",
        nombreUsuario: "S.L.",
        imagenes: [imgSL],
        descripcion: "El proceso fue muy rápido y eficiente. Obtuvimos la casa en la costa que siempre quisimos y sin inconvenientes. Desde la elaboración del proyecto a la instalación definitiva.",
        //color: 'rgba(69,125,153, 0.3)'
        color: '#FFF'
    },
    {
        modelo: "MATHEU",
        nombreUsuario: "C.P.",
        imagenes: [imgCP],
        descripcion: "¡Muy feliz, es un sueño cumplido! El proceso fue super ameno, muchas gracias a DROP. Siempre tuvieron en cuenta nuestras indicaciones, anímense a construir en un nuevo sistema constructivo.",
        color: 'rgba(0,0,0,0.1)'
    },
    {
        modelo: "BARILOCHE",
        nombreUsuario: "G.F.",
        imagenes: [imgGF],
        descripcion: "¡Muchas gracias a todos los chicos, se portaron increíble! para ustedes puede ser un proyecto más pero para mí es mi casa, estoy muy contenta ¡GRACIAS!",        
        color: '#FFF'
    },
    {
        modelo: "PEDEFLOUS",
        nombreUsuario: "G.P.",
        imagenes: [imgGP],
        descripcion: "Nos contactamos con DROP y desde un principio fueron muy claros y transparentes, nos mostraron sus proyectos, elegimos uno de ellos y le hicimos algunas modificaciones. A los 3 meses nos trajeron los módulos y a la semana ya la podíamos usar. Recomiendo la empresa y su servicio, estamos muy contentos con la casa",
        color: 'rgba(0,0,0,0.1)'
    },
    {
        modelo: "VINO ANDINO",
        nombreUsuario: "R.S.",
        imagenes: [imgRS],
        descripcion: "Inicialmente fue un proyecto para irnos a vivir a Valle de Uco y luego se transformó en un ingreso, comenzamos alquilando uno de los módulos y ahora los estamos alquilando todos. Estamos muy contentos con el proyecto.",        
        color: '#FFF'
    },
    {
        modelo: "ROSWELL",
        nombreUsuario: "M.C.",
        imagenes: [imgMC],
        descripcion: "Muy buena solución para mi taller, fue rápido y quedó buenísimo!",
        color: 'rgba(0,0,0,0.1)'
    },
    {
        modelo: "HERNANDEZ",
        nombreUsuario: "D.M.F.",
        imagenes: [imgDMF],
        descripcion: "Hicimos la casa que siempre quisimos tratando de optimizar la cantidad de m2 pero haciéndola funcional y pensando en todos los detalles, estamos super contentos y felices con el resultado.",
        // color: 'rgba(0,111,106,0.2)'
        color: '#FFF'
    },
    {
        modelo: "MARINA",
        nombreUsuario: "R.B.",
        imagenes: [imgRB],
        descripcion: "Nuestro proyecto es un proyecto de gamping en la costa argentina, los módulos ya se están alquilando y esperamos hacer más para hacer crecer el emprendimiento. ",
        color: 'rgba(0,0,0,0.1)'
    },
    {
        modelo: "KILI",
        nombreUsuario: "C.B.",
        imagenes: [imgCB],
        descripcion: "Los chicos lograron hacer el proyecto como quería y me ayudaron a tomar decisiones para que el resultado sea óptimo en función del precio y la calidad de la casa. ",        
        color: '#FFF'
    },
    {
        modelo: "ANA MARIA",
        nombreUsuario: "A.M.B.",
        imagenes: [imgAMB],
        descripcion: "Fue todo muy práctico y muy rápido. La casa es super cómoda y luminosa. Yo estuve en obra anteriormente y este proceso es superador. Para los jóvenes y para los más grandes es una excelente opción. ¡La empresa se encarga de todo!",
        color: 'rgba(0,0,0,0.1)'
    },
    {
        modelo: "508",
        nombreUsuario: "F.P.",
        imagenes: [imgFP],
        descripcion: "Nuestra experiencia con Drop Modular fue muy positiva. Cumplieron con todo lo prometido, siempre con buena comunicación y profesionalismo. Lo más valioso fue haber construido una relación de confianza . Muy recomendables por su seriedad y compromiso.",
        color: '#FFF'
    }
]