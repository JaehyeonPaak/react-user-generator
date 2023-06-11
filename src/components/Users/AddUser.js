import styles from './AddUser.module.css';
import Card from '../UI/Card.js';
import Button from '../UI/Button.js';
import { useState } from 'react';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (e) => {
        e.preventDefault();
        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }
        if (Number(enteredAge) < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (greater than 0).'
            });
            return;
        }
        props.onAddUser(enteredUserName, enteredAge);
        setEnteredUserName('');
        setEnteredAge('');
    };

    const errorHandler = () => {
        setError(null);
    };

    const usernameChangeHandler = (e) => {
        setEnteredUserName((prev) => e.target.value);
    };
    
    const ageChangeHandler = (e) => {
        setEnteredAge((prev) => e.target.value);
    };

    return (
        <div>
            {error != null && <ErrorModal title={error.title} message={error.message} onClick={errorHandler}></ErrorModal>}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input id='username' type='text' value={enteredUserName} onChange={usernameChangeHandler}></input>
                    <label htmlFor='age'>Age (Years)</label>
                    <input id='age' type='number' value={enteredAge} onChange={ageChangeHandler}></input>
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </div>
    );
}

export default AddUser;