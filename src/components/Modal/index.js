import React from "react";
//local import
import { displayModal } from 'src/store/actions';
import './modal.scss';


const Modal = ( { modalAction }) => {

   return(
        <div className="modalBackground">
            <div className="modalBody">
                <span className="closeModal" onClick={() => modalAction()}>X</span>
                <div className="modalContent">
                    <h1>Test</h1>
                </div>
            </div>
        </div>
   )
}

export default Modal;