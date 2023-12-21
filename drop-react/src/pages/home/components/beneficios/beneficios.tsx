import './style.css'
import { MockBeneficios } from '../../../../mocks/beneficios';
import CardBeneficio from './cardBeneficios'

export default function HomeBeneficios() {

const listInfo = MockBeneficios;
  const renderbeneficios = () => listInfo?.map((v, i) => <CardBeneficio data={v} key={i}></CardBeneficio>)
  return (
    <section className="section__beneficios d-flex justify-content-center align-items-center flex-column">     
      <h1 className="beneficios__title">Beneficios de construir con Drop</h1>
      <div className="beneficios__container">
        {listInfo? renderbeneficios(): ''}
      </div>
    </section>
  )
}
