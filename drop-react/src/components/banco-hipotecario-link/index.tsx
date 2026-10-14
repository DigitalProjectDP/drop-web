import "./style.css";
import imgLogoHipotecario from "../../media/logo/logo_hipotecario.png"
import imgLogoProvincia from "../../media/logo/logo_banco_provincia.png"

export default function BancoHipotecarioLink() {
    return (
        <article className="container border border-1 shadow p-2" id="section__hipotecario">
            <div className="d-flex flex-column justify-content-center align-items-center gap-2 py-3">
                <h5 className="px-3">Nueva línea de créditos para construcción de casas modulares. <br></br> Elegí el diseño que mejor vaya con vos y contactanos.</h5>

                <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 py-3">
                    <a className="bg-light shadow p-1 mt-2 mt-md-4 fs-5 border" id="banco-link" href="https://www.bancoprovincia.com.ar/web/prestamo_aca_viviendas_modulares"
                        target="_blank" rel="noreferrer"><img src={imgLogoProvincia} alt="Logo_Hipotecario" height={64} width={190} /></a>
                    <a className="bg-light shadow p-1 mt-2 mt-md-4 fs-5 border" id="banco-link" href="https://www.hipotecario.com.ar/personas/prestamos-a-la-vivienda/viviendas-industrializadas/"
                        target="_blank" rel="noreferrer"><img src={imgLogoHipotecario} alt="Logo_Banco_Provincia" height={64} width={190} /></a>
                </div>
            </div>
        </article>

    )
}