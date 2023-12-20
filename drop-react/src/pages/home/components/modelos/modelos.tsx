import './style.css'
import { MockModelos } from '../../../../mocks/modelos';
import CardModelos from './cardModelos'

export default function HomeModelos() {

const listInfo = MockModelos;
  const rendermodelos = () => listInfo?.map((v, i) => <CardModelos data={v} key={i}></CardModelos>)
  return (
    <section className="section__modelos" id="section__modelos">     
      <h1 className="modelos__title">Nuestros modelos</h1>
      <div className="row modelos__container">
        {listInfo? rendermodelos(): ''}
      </div>
    </section>
  )
}
