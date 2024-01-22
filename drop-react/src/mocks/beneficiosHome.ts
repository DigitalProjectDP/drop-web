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
    titulo: "VELOCIDAD",
    descripcion: `Experiemente plazos de construcción
    acelerados con edificios de acero de calibre
    liviano. La facilidad de configuración y la
    naturaleza modular permiten un montaje
    rápido, lo que garantiza que su desarrollo
    se complete de manera eficiente y
    a tiempo.`,
    imagen: imgBeneficio1,
    caracteristicas: [
      { id: 1, descripcion: "En 90 días instalamos el proyecto" },
      { id: 2, descripcion: "Podés visitar nuestra fábrica y ver el avance de obra" }
    ],
  },
  {
    id: 2,
    titulo: "EXPANSION",
    descripcion: `Construya con confianza y previsibilidad. 
    La precisión y consistencia en la fabricación garantizan un proceso de construcción confiable, entregando su proyecto a tiempo y dentro de los parámetros especificados.`,
    imagen: imgBeneficio2,
    caracteristicas: [
      { id: 1, descripcion: "Presupuesto inicial sin desviaciones" },
      { id: 2, descripcion: "60% menos valor que construcción convencional" },
      { id: 3, descripcion: "Rápido retorno de la inversión" },
    ],
  },
  {
    id: 3,
    titulo: "AHORRO",
    descripcion: `El diseño modular y adaptable de ORCA garantiza ajustes rápidos, brindando flexibilidad y eficiencia durante todo el proceso de construcción.
    Desbloquee una agilidad incomparable en la construcción`,
    imagen: imgBeneficio3,
    caracteristicas: [
      { id: 1, descripcion: "Construimos en fábrica y te lo llevamos" },
      { id: 2, descripcion: "Te mudás o cambiás de negocio" },
      { id: 3, descripcion: "Lo podés llevar a donde quieras" },      
    ],
  },
  {
    id: 4,
    titulo: "CALIDAD",
    descripcion: `Reconocidas por su durabilidad y precisión, estas estructuras prometen una calidad excepcional, asegurando un hogar que resiste el paso del tiempo con estilo y resistencia.
    Eleva tu desarrollo con casas ORCA.`,
    imagen: imgBeneficio4,
    caracteristicas: [
      { id: 1, descripcion: "Máxima flexibilidad y adaptabilidad. Permitiendo ampliar y modificar tu proyecto en cualquier momento" },      
    ],
  },
  {
    id: 5,
    titulo: "TRANSPORTABLE",
    descripcion: `Experimente una resiliencia incomparable en casas construidas con ORCA. Construidas para resistir la prueba del tiempo y diversos desafíos ambientales,
    estas estructuras ofrecen resistencia duradera y tranquilidad a los propietarios.`,
    imagen: imgBeneficio5,
    caracteristicas: [
      { id: 1, descripcion: "Construcción Offsite permite la mínima intervención del terreno y contaminación" },
      { id: 2, descripcion: "Reducción del impacto acústico" },
      { id: 3, descripcion: "Menor gasto energético" },
    ],
  },
  {
    id: 6,
    titulo: "VERDE",
    descripcion: `Adopte una vida ecológica con casas fabricadas con acero LGS. 
    Estas estructuras sostenibles minimizan el impacto ambiental, ofreciendo eficiencia energética, reciclabilidad y un compromiso con un futuro más verde para los propietarios.`,
    imagen: imgBeneficio6,
    caracteristicas: [
      { id: 1, descripcion: "Altos estándares de calidad y seguridad." },
      { id: 2, descripcion: "Construcción con certificaciones ISO 9000 y 14001, OHSAS 18001" },
      { id: 3, descripcion: "Construimos con la última tecnología. El software BIM, nos permite hacer evaluaciones diarias." },
    ],
  },
];