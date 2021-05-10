import React from 'react'
import ReactModal from 'react-modal'

const OptionModal = (props) => {
    return (
        <ReactModal
            isOpen={!!props.selectedOption}
            onRequestClose={props.handleClearSelectedOption}
            contentLabel="Selected Option"
            closeTimeoutMS={200}
            className="modal"
            ariaHideApp={false}

        >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.handleClearSelectedOption}>Bravo!!!</button>
        </ReactModal>
    )
}

export default OptionModal;


/*
 <Modal
        isOpen = {!!props.selectedOption}
        onRequestClose = {props.handleClearSelectedOption} //Clear the dialog bog eappears on just clicking anywhere
        contentLabel = "Selected Option"
        closeTimeoutMS = {200}
        className="modal"
        closeTimeoutMS = {200}
        ariaHideApp = {false}
    >
    <h3 className="modal__title">Selected Option</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button" onClick={props.handleClearSelectedOption}>Bravo!!!</button>
    </Modal>
*/