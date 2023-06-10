import styles from './AddUser.module.css';
import Card from '../UI/Card.js';
import Button from '../UI/Button.js';

const AddUser = (props) => {
    const addUserHandler = (e) => {
        e.preventDefault();
    };

    return (
        <Card className={styles.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input id='username' type='text'></input>
                <label htmlFor='age'>Age (Years)</label>
                <input id='age' type='number'></input>
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
    );
}

export default AddUser;