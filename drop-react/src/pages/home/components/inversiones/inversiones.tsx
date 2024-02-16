import './style.css'
import { MockInversiones } from '../../../../mocks/inversiones';
import CardInversiones from './cardInversiones'
import Contacto from '../../../../components/contacto';
import { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';

export default function HomeInversiones() {
  const [inversionNombre, setInversionNombre] = useState<string>();
  const [showModal, setShowModal] = useState<boolean>();

  const listInfo = MockInversiones;

  const openModal = (nombre: string) => {
    setInversionNombre(nombre);
    const buttonModal = document.getElementById("buttonModalContacto");
    //buttonModal?.click();
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  useEffect(() =>{
  },[inversionNombre] )

  const renderInversiones = () => listInfo?.map((v, i) => <CardInversiones data={v} key={i} openModal={openModal}></CardInversiones>)

  return (
    <section className="section__inversiones" id="section__inversiones">
      <div className="inversiones__container">
        {listInfo? renderInversiones(): ''}
      </div>
      <Modal show={showModal} onHide={closeModal}>
          <Modal.Header closeButton className="border-0"></Modal.Header>   
          <Modal.Body>
            {inversionNombre?<Contacto data={`Hola. Quiero recibir más información sobre ${inversionNombre}`} isModal={true}></Contacto>:''}
          </Modal.Body>        
        </Modal>    
    </section>
  )
}
