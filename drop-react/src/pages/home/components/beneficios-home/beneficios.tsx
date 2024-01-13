import './style.css'
import { MockBeneficiosHome } from '../../../../mocks/beneficiosHome';
import CardBeneficioHome from './cardBeneficios';

export default function HomeBeneficiosNew() {

const listInfo = MockBeneficiosHome;
  const renderbeneficios = () => listInfo?.map((v, i) => <CardBeneficioHome data={v} key={i}></CardBeneficioHome>)
  return (
    <section className="section__beneficios d-flex justify-content-center align-items-center flex-column">     
      <h1 className="beneficios__title pb-5">Beneficios de construir con Drop</h1>
      <div className="beneficios__container">
        {listInfo? renderbeneficios(): ''}
      </div>
    </section>
  )
}
