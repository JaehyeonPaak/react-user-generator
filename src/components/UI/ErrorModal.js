import Card from './Card.js';
import Button from './Button.js';
import styles from './ErrorModal.module.css';
import React from 'react';

const ErrorModal = (props) => {
    return (
        <React.Fragment>
            <div className={styles.backdrop} onClick={props.onClick}></div>
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
            </Card>
        </React.Fragment>
    );
};

export default ErrorModal;