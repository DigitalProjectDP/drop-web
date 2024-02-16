import './style.css'
import { MockModelos } from '../../../../mocks/modelos';
import CardModelos from './cardModelos'

export default function HomeModelos() {

const listInfo = MockModelos;
  const rendermodelos = () => listInfo?.map((v, i) => <CardModelos data={v} key={i}></CardModelos>)
  return (
    <section className="section__modelos" id="section__modelos">     
      <h3 className="modelos__title">Nuestros modelos</h3>
      <div className="row modelos__container gap-3 gap-xl-5 mb-5">
        {listInfo? rendermodelos(): ''}
      </div>
    </section>
  )
}
