import './style.css'
import imgProceso from '../../../../media/img/home-proceso.jpg'

export default function HomeProceso() {

    let imagenProceso = imgProceso;
    return (
        <section className="section__proceso">
            <h1 className="proceso__title">Proceso de fabricación</h1>
            <p className="container text__paragraph">
                En <i>Drop</i>, construimos espacios adaptables según la necesidad. 
                Eso es posible con el método de construcción modular, modificando y presonalizando cada módulo según sea necesario. <br />
                Este sistema nos permite trasladar los módulos en más de una ocasión.
            </p>
            <div className="container proceso__container">
                <img src={imagenProceso} alt="ImagenProceso" className="proceso__imagen"/>
            </div>
        </section>
    )
}
