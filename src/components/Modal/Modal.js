import React from 'react';
import * as S from './Modal.styles';

const Modal = () => {
    return (
        <div className="modal">
            <div className="modal-background"></div>
                <div className="modal-content">
                This is my modal.
                </div>
            <button className="modal-close is-large" aria-label="close"></button>
        </div>
    )
}

export default Modal;