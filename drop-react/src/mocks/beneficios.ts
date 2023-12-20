import { Beneficio } from "../interfaces/beneficio";
import imgBeneficio1 from "../media/img/beneficios/velocidad.png";
import imgBeneficio2 from "../media/img/beneficios/ahorro.png";
import imgBeneficio3 from "../media/img/beneficios/transportable.png";
import imgBeneficio4 from "../media/img/beneficios/expansion.png";
import imgBeneficio5 from "../media/img/beneficios/sustentabilidad.png";
import imgBeneficio6 from "../media/img/beneficios/calidad.png";

export const MockBeneficios: Beneficio[] = [
  {
    id: 1,
    titulo: "Velocidad de construcción",
    descripcion: "",
    imagen: imgBeneficio1,
    caracteristicas: [
      { id: 1, descripcion: "En 90 días instalamos el proyecto" },
      { id: 2, descripcion: "Podés visitar nuestra fábrica y ver el avance de obra" }
    ],
  },
  {
    id: 2,
    titulo: "Ahorro económico",
    descripcion: "",
    imagen: imgBeneficio2,
    caracteristicas: [
      { id: 1, descripcion: "Presupuesto inicial sin desviaciones" },
      { id: 2, descripcion: "60% menos valor que construcción convencional" },
      { id: 3, descripcion: "Rápido retorno de la inversión" },
    ],
  },
  {
    id: 3,
    titulo: "Transportable",
    descripcion: "",
    imagen: imgBeneficio3,
    caracteristicas: [
      { id: 1, descripcion: "Construimos en fábrica y te lo llevamos" },
      { id: 2, descripcion: "Te mudás o cambiás de negocio" },
      { id: 3, descripcion: "Lo podés llevar a donde quieras" },      
    ],
  },
  {
    id: 4,
    titulo: "Expansión y escalabilidad",
    descripcion: "",
    imagen: imgBeneficio4,
    caracteristicas: [
      { id: 1, descripcion: "Máxima flexibilidad y adaptabilidad. Permitiendo ampliar y modificar tu proyecto en cualquier momento" },      
    ],
  },
  {
    id: 5,
    titulo: "Sustentabilidad",
    descripcion: "",
    imagen: imgBeneficio5,
    caracteristicas: [
      { id: 1, descripcion: "Construcción Offsite permite la mínima intervención del terreno y contaminación" },
      { id: 2, descripcion: "Reducción del impacto acústico" },
      { id: 3, descripcion: "Menor gasto energético" },
    ],
  },
  {
    id: 6,
    titulo: "Cumplimiento y calidad",
    descripcion: "",
    imagen: imgBeneficio6,
    caracteristicas: [
      { id: 1, descripcion: "Altos estándares de calidad y seguridad." },
      { id: 2, descripcion: "Construcción con certificaciones ISO 9000 y 14001, OHSAS 18001" },
      { id: 3, descripcion: "Construimos con la última tecnología. El software BIM, nos permite hacer evaluaciones diarias." },
    ],
  },
];