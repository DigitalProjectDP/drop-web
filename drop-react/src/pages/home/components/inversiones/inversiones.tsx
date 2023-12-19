import './style.css'
import { MockInversiones } from '../../../../mocks/inversiones';
import CardInversiones from './cardInversiones'

export default function HomeInversiones() {

const listInfo = MockInversiones;
  const renderInversiones = () => listInfo?.map((v, i) => <CardInversiones data={v} key={i}></CardInversiones>)
  return (
    <section className="section__inversiones">
      <p className="container text__paragraph">
          Somos <strong className="text__secondary">Drop</strong>, pioneros y líderes en arquitectura modular en Argentina. <br />
          La construcción modular es la nueva forma de construir. Basándonos en 3 pilares fundamentales: <i>rapidez, adaptabilidad y economía</i>. <br />
          Por eso somos el socio estratégico para aquellas personas que estén buscando su primer vivienda, para inversores gastronómicos, hoteleros o emprendedores.
      </p>
      <h1 className="inversiones__title">Inversiones destacadas</h1>
      <div className="inversiones__container">
        {listInfo? renderInversiones(): ''}
      </div>
    </section>
  )
}
