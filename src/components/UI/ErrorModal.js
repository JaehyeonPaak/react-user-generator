import Card from './Card.js';
import Button from './Button.js';
import styles from './ErrorModal.module.css';

const ErrorModal = (props) => {
    return (
        <div>
            <div className={styles.backdrop}></div>
            <Card className={styles.modal}>
                <header className={styles.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={styles.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={styles.actions}>
                    <Button>OK</Button>
                </footer>
            </Card>
        </div>
    );
};

export default ErrorModal;