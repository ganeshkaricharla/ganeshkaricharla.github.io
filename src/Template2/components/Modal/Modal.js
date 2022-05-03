import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = ({ closeModal }) => {
    return ReactDOM.createPortal(
        <div onClick={closeModal} className='modal-overlay'>
            <div
                onClick={(e) => e.stopPropagation()}
                className='modal-container'
            >
                <div className='upper-section'>
                    <h1>Hola Visitor!</h1>
                    <p onClick={closeModal} className='close'>
                        &times;
                    </p>
                </div>
                <div className='middle-section'>
                    <p>How's your day going?</p>
                    <p>
                        Explore my website,regards,thankyou...
                    </p>

                </div>
                <div className='lower-section'>
                    <button onClick={closeModal} className='modal-btn btn-red'>
                        Close
                    </button>
                    <a
                        href='https://vighnesh777.github.io/img/Resume.pdf'
                        download
                        className='modal-btn btn-green'
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    );
};

export default Modal;
