import './style.css'
import { MockModelos } from '../../../../mocks/modelos';
import CardModelos from './cardModelos'
import BancoHipotecarioLink from '../../../../components/banco-hipotecario-link';

export default function HomeModelos() {

const listInfo = MockModelos;
  const rendermodelos = () => listInfo?.map((v, i) => <CardModelos data={v} key={i}></CardModelos>)
  return (
    <section className="section__modelos mb-1" id="section__modelos">     
      <h3 className="modelos__title">Nuestros modelos</h3>
      <div className="row modelos__container gap-3 gap-xl-5 mb-3">
        {listInfo? rendermodelos(): ''}
      </div>
      <BancoHipotecarioLink></BancoHipotecarioLink>
    </section>
  )
}
