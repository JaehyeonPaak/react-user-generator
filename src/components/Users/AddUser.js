import styles from './AddUser.module.css';
import Card from '../UI/Card.js';
import Button from '../UI/Button.js';
import { useState } from 'react';
import ErrorModal from '../UI/ErrorModal';
import React from 'react';
import { useRef } from 'react';

const AddUser = (props) => {
    // const [enteredUserName, setEnteredUserName] = useState('');
    // const [enteredAge, setEnteredAge] = useState('');

    const [error, setError] = useState();

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const addUserHandler = (e) => {
        e.preventDefault();

        const enteredUserName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;

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

        // setEnteredUserName('');
        // setEnteredAge('');
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    };

    const errorHandler = () => {
        setError(null);
    };

    // const usernameChangeHandler = (e) => {
    //     setEnteredUserName((prev) => e.target.value);
    // };
    
    // const ageChangeHandler = (e) => {
    //     setEnteredAge((prev) => e.target.value);
    // };

    return (
        <React.Fragment>
            {error != null && <ErrorModal title={error.title} message={error.message} onClick={errorHandler}></ErrorModal>}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input id='username' type='text' ref={nameInputRef}></input>
                    <label htmlFor='age'>Age (Years)</label>
                    <input id='age' type='number' ref={ageInputRef}></input>
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </React.Fragment>
    );
}

export default AddUser;