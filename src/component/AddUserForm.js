import styles from '../../styles/createacount.module.css';
import { useEffect, useState } from 'react';
import { addUsers } from '../services/users';
import Link from 'next/link';

const AddusersForm = props => {
    const [username, setusername] = useState('');
    const [surname, setsurname] = useState('');
    const [email, setemail] = useState('');
    const [passwords, setpasswords] = useState('');
    const [confirmPasswords, setconfirmPasswords] = useState('');
    const [position, setposition] = useState('');
    const [imagUrl, setImageUrl] = useState('');

    useEffect(() => {
        const { users } = props;
        if (users) {
            setusername(users.username);
            setsurname(users.surname);
            setemail(users.email);
            setpasswords(users.passwords);
            setconfirmPasswords(users.confirmPasswords);
            setposition(users.position);
            setImageUrl(users.imagUrl);
        }
    }, [props.users]);

    useEffect(() => {
        const { handleChange } = props;
        handleChange && handleChange({ username, surname, email, passwords, confirmPasswords, position });
    }, [username, surname, email, passwords, confirmPasswords, position ])

    const handleChangeFile = e => {
        const reader = new FileReader();

        reader.onload = e => {
            setImageUrl(e.target.result);
        }

        if (e.target.files[0])
            reader.readAsDataURL(e.target.files[0]);
    }

    const handleCreate = () => {
        addUsers({ username, surname, email, passwords, confirmPasswords, position,imagUrl })
    }

    return (
        <div className={styles.list}>
            <div className={styles.listItem}><br />
                <span>WELCOME</span>
            </div>
            <div className={styles.listItem2}>
                <span>โรงเรียนวังกะพ้อ "เพียรอนุสรณ์"</span>
            </div>
            <br /><br />
            <div className={styles.inputDisplay}>
                <h2>Register</h2>
                <br />
                <input placeholder="Name" onChange={e => setusername(e.target.value)} value={username} />
                <br />
                <input placeholder="Surname" onChange={e => setsurname(e.target.value)} value={surname} />
                <br />
                <input placeholder="Email" onChange={e => setemail(e.target.value)} value={email} />
                <br />
                <input type='password' placeholder="Password" onChange={e => setpasswords(e.target.value)} value={passwords} />
                <br />
                <input type='password' placeholder="ConfirmPassword" onChange={e => setconfirmPasswords(e.target.value)} value={confirmPasswords} />
                <br />
                <input placeholder="Position" onChange={e => setposition(e.target.value)} value={position} />
                <br />
                <div> 
                    <input type='file' accept='image/*' onChange={handleChangeFile} />
                </div>
                <Link href ='/'>
                <button className={styles.addButton} onClick={handleCreate}>Register</button>
                </Link>
            </div>
        </div>
    )
}
export default AddusersForm;