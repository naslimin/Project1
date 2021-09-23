import createacount from "../../pages/createacount";
import styles from '../../styles/Userinfor.module.css';
import Link from 'next/link';

const UserInfor = props => {

    const { username, surname, email, passwords, confirmPasswords, position, imageUrl } = props.user;

    return (
        <div className={styles.text}><br /><br />
            <h1>ข้อมูลส่วนตัว</h1>
            <div><br />
                <div className={styles.inputDisplay}>
                    <a >
                        <img className={styles.img} src="https://scontent.fbkk5-5.fna.fbcdn.net/v/t1.6435-9/242695774_1699842533739862_3247535178519255646_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=kUnvQmgjaMEAX-mUN_d&_nc_ht=scontent.fbkk5-5.fna&oh=98adc7ac69e711d78d58c28a7dd0bda7&oe=616FE407" />
                    </a><br /><br /><br /><br />
                    ข้อมูลพื้นฐาน
                    <div><br /><br /><br />
                        <span>ชื่อ-สกุล: {username}</span>
                        <span>{surname}</span>
                        <p>ตำแหน่ง : {position}</p>
                        <p>อีเมล : {email}</p>
                        <p>Passwords : {passwords}</p>
                        <p>Confirm Passwords : {confirmPasswords}</p>
                        <img src={imageUrl} />
                        <button className="login-button"
                            onClick={() => { console.log('clicked') }}>
                            <Link href='/userinformation'>
                                <a>แก้ไขข้อมูล</a>
                            </Link>
                        </button>
                        <button className="login-button"
                            onClick={() => { console.log('clicked') }}>
                            <Link href='/userinformation'>
                                <a>ลบข้อมูล</a>
                            </Link>
                        </button>
                    </div>
                </div><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br />
            </div>
        </div>

    )
}
export default UserInfor;

