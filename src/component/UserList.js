import UserInfor from "./UserInfor";

const UserList = props => {
    const { username, surname, email, passwords, confirmPasswords, position, imagUrl } = props;

    return (
        <div>
            {
                users.map((acount, index) => {
                    return (
                        <UserInfor
                            key={index}
                            user={acount}
                            selected={selected === index}
                            handleClick={() => { handleClick && handleClick(index) }}
                            handleUpdate={!handleUpdate ? null : () => { handleUpdate(index) }}
                            handleDelete={!handleDelete ? null : () => {handleDelete(index) }}
                        />
                    )
                })
            }
        </div>
    )
}
export default UserList;