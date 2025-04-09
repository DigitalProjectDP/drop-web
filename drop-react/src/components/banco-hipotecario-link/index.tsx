import "./style.css";
import imgLogoHipotecario from "../../media/logo/logo_hipotecario.png"

export default function BancoHipotecarioLink() {
    return (
        <article className="container border border-1 shadow p-2" id="section__hipotecario">
            <div className="d-flex flex-column justify-content-center align-items-center gap-2 py-3">
                <h5 className="px-3">Nueva línea de préstamo para casas industrializadas de diseño. <br></br> Elegí tu casa modular a medida y contáctanos.</h5>
                
                <a className="bg-light border shadow p-1 mt-4 fs-5" id="ver-modelos" href="https://www.hipotecario.com.ar/personas/prestamos-a-la-vivienda/viviendas-industrializadas/"
                    target="_blank" rel="noreferrer"><img src={imgLogoHipotecario} alt="Logo_Hipotecario" height={64} /></a>
            </div>
        </article>

    )
}