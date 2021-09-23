import Router from 'next/router';
import { useEffect } from 'react';
import UserInfor from '../src/component/UserInfor';
import { addUserSnapshot } from '../src/services/users';

const users = [
  {
    username: 'Patimoh',
    surname: 'Duerama',
    email: 'patimoh@gmail.com',
    passwords: 'xxxx',
    confirmPasswords: 'xxxx',
    position: 'School director',
    imageUrl: 'https://scontent.fbkk5-7.fna.fbcdn.net/v/t1.6435-9/242684918_1700242580366524_1920814469282254914_n.jpg?_nc_cat=108&_nc_rgb565=1&ccb=1-5&_nc_sid=730e14&_nc_ohc=4HgtEtfT1jAAX_tPAhp&_nc_ht=scontent.fbkk5-7.fna&oh=8d5f428975e6fead5f7ddbbb0fb77edb&oe=616E8E92'
  },
  {
    username: 'Patty',
    surname: 'De',
    email: 'patimoh@gmail.com',
    passwords: 'xxxx',
    confirmPasswords: 'xxxx',
    position: 'School director',
    imageUrl: 'https://scontent.fbkk5-7.fna.fbcdn.net/v/t1.6435-9/242684918_1700242580366524_1920814469282254914_n.jpg?_nc_cat=108&_nc_rgb565=1&ccb=1-5&_nc_sid=730e14&_nc_ohc=4HgtEtfT1jAAX_tPAhp&_nc_ht=scontent.fbkk5-7.fna&oh=8d5f428975e6fead5f7ddbbb0fb77edb&oe=616E8E92'
  }
]

const UserInforPage = () => {

  return (
    <div>
      {
        users.map((acount, index) => {
          return (
            <UserInfor key={index} user={acount} />
          )
        })
      }
    </div>
  )
}
export default UserInforPage;