import "./style.css";

export default function Copyright(){
    return (
        <div className="copyright">
            <div className="container">
                <div className="floatLeft fw-bold">
                    © DROP <p className="d-none d-md-block fw-light ">Todos Los Derechos Reservados</p>
                </div>
                <div className="floatRight d-flex gap-2">
                    <p className="d-none d-md-block">Desarrollado por:</p>
                    <a href="https://wa.me/+5492216104161" target="_blank" className="logo__dp">
                        DigitalProject
                        {/* <a href=""><img src={misticaLogo} alt="Mistica Logo"/></a> */}
                    </a>
                </div>
            </div>
        </div>
    )
}