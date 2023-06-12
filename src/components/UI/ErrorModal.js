import Card from './Card.js';
import Button from './Button.js';
import styles from './ErrorModal.module.css';
import React from 'react';
import ReactDom from 'react-dom';

const ErrorModal = (props) => {
    return (
        <React.Fragment>
            {ReactDom.createPortal((
                <div className={styles.backdrop} onClick={props.onClick}></div>), 
            document.getElementById('backdrop-root'))}
            {ReactDom.createPortal((
                <Card className={styles.modal}>
                    <header className={styles.header}>
                        <h2>{props.title}</h2>
                    </header>
                    <div className={styles.content}>
                        <p>{props.message}</p>
                    </div>
                    <footer className={styles.actions}>
                        <Button onClick={props.onClick}>OK</Button>
                    </footer>
                </Card>), 
            document.getElementById('overlay-root'))}
        </React.Fragment>
    );
};

export default ErrorModal;