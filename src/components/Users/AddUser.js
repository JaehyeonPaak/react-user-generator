import styles from './AddUser.module.css';
import Card from '../UI/Card.js';
import Button from '../UI/Button.js';
import { useState } from 'react';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (e) => {
        e.preventDefault();
        // console.log(enteredUserName + ' ' + enteredAge);
        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }

        if (Number(enteredAge) < 1) {
            return;
        }

        props.onAddUser(enteredUserName, enteredAge);

        setEnteredUserName('');
        setEnteredAge('');
    };

    const usernameChangeHandler = (e) => {
        setEnteredUserName((prev) => e.target.value);
    };
    
    const ageChangeHandler = (e) => {
        setEnteredAge((prev) => e.target.value);
    };

    return (
        <div>
            <ErrorModal title={'Error occured'} message={'Something went wrong!'}></ErrorModal>
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