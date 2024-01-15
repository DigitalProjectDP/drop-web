import style from './style.module.css'
import Spinner from 'react-bootstrap/Spinner';

export default function SpinnerLoading(){

    return (
        <div className={style.divAbsolute}>
            <div className={style.divSpinner}>
                <div className={`d-flex flex-column gap-3 justify-content-center align-items-center ${style.spinner}`}>
                    <Spinner animation="border" variant="info" role="status" style={{ width: "4rem", height: "4rem" }}>
                        <span className="visually-hidden">Cargando...</span>
                    </Spinner>
                    <span>Cargando</span>
                </div>
            </div>
        </div>
    )
}