import { Beneficio } from "../interfaces/beneficio";
import imgBeneficio1 from "../media/img/beneficios/velocidad.png";
import imgBeneficio2 from "../media/img/beneficios/expansion.png";
import imgBeneficio3 from "../media/img/beneficios/ahorro.png";
import imgBeneficio4 from "../media/img/beneficios/calidad.png";
import imgBeneficio5 from "../media/img/beneficios/transportable.png";
import imgBeneficio6 from "../media/img/beneficios/sustentabilidad.png";

export const MockBeneficiosHome: Beneficio[] = [
  {
    id: 1,
    titulo: "90 DÍAS",
    descripcion: `Es solo el tiempo que necesitamos en fábrica, las instalaciones en el terreno son muy veloces y con poco impacto.`,
    imagen: imgBeneficio1,
    color: '#fded04',
    caracteristicas: [
      { id: 1, descripcion: "En 90 días instalamos el proyecto" },
      { id: 2, descripcion: "Podés visitar nuestra fábrica y ver el avance de obra" }
    ],
  },
  {
    id: 2,
    titulo: "EXPANSION",
    descripcion: `Nuestros DROPs están diseñados para que puedas ampliarlos siempre, ya sea una vivienda, un local comercial, u otro destino que elijas.`,
    imagen: imgBeneficio2,
    color: '#fded04',
    caracteristicas: [
      { id: 1, descripcion: "Presupuesto inicial sin desviaciones" },
      { id: 2, descripcion: "60% menos valor que construcción convencional" },
      { id: 3, descripcion: "Rápido retorno de la inversión" },
    ],
  },
  {
    id: 3,
    titulo: "AHORRO",
    descripcion: `No solo vas a ahorrar dinero, sino también tiempo y estrés. Los plazos y valores pactados inicialmente no van a ser una variable. Lo hacemos SIMPLE.`,
    imagen: imgBeneficio3,
    color: '#fded04',
    caracteristicas: [
      { id: 1, descripcion: "Construimos en fábrica y te lo llevamos" },
      { id: 2, descripcion: "Te mudás o cambiás de negocio" },
      { id: 3, descripcion: "Lo podés llevar a donde quieras" },
    ],
  },
  {
    id: 4,
    titulo: "PREMIUM",
    descripcion: `Trabajamos con materiales de primera calidad y tenemos un sistema constructivo diseñado por nosotros para que la durabilidad en el tiempo equipare a la construcción tradicional.`,
    imagen: imgBeneficio4,
    color: '#fded04',
    caracteristicas: [
      { id: 1, descripcion: "Máxima flexibilidad y adaptabilidad. Permitiendo ampliar y modificar tu proyecto en cualquier momento" },
    ],
  },
  {
    id: 5,
    titulo: "TRANSPORTABLE",
    descripcion: `De la misma manera que trasladamos los módulos desde nuestra fábrica al terreno, en un futuro, el mismo DROP puede ser implantado en otro lugar.`,
    imagen: imgBeneficio5,
    color: '#fded04',
    caracteristicas: [
      { id: 1, descripcion: "Construcción Offsite permite la mínima intervención del terreno y contaminación" },
      { id: 2, descripcion: "Reducción del impacto acústico" },
      { id: 3, descripcion: "Menor gasto energético" },
    ],
  },
  {
    id: 6,
    titulo: "PROPÓSITO",
    descripcion: `Generamos el mínimo impacto posible en el lugar de implantación, ya que no conlleva movimiento de suelo. Además, la aislación de nuestros paneles permite generar un ahorro de energía sustancial. `,
    imagen: imgBeneficio6,
    color: '#fded04',
    caracteristicas: [
      { id: 1, descripcion: "Altos estándares de calidad y seguridad." },
      { id: 2, descripcion: "Construcción con certificaciones ISO 9000 y 14001, OHSAS 18001" },
      { id: 3, descripcion: "Construimos con la última tecnología. El software BIM, nos permite hacer evaluaciones diarias." },
    ],
  },
];