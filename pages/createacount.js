import React, { useState, useEffect } from 'react'
import firebase from '../src/firebase';
import { addUsers, addUserSnapshot, getUsers } from '../src/services/users';
import AddusersForm from '../src/component/AddUserForm';

const CreateAcountPage = (props) => {

  const { users, createUser, updateUser, deleteUser } = props;

  const [selected, setSelected] = useState();
  const [formData, setFormData] = useState({});

  useEffect(() => {
    addUserSnapshot(data => {
      console.log(data);
    })
  },[])
      
  

  return (
    //<MainLaout>
      <AddusersForm
        handleChange={(data) => setFormData(data)}
        handleCreate={(data) => createUser(data)} 
        />

      /*<UserInfor
        selected={selected}
        users={users}
        handleClick={(index) => setSelected(index)}
        handleUpdate={(index) => updateUser(index, formData)}
        handleDelete={(index) => deleteUser(index)}
      />
    </MainLaout>*/
  )
}
export default CreateAcountPage;
