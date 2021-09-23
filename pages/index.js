import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import qs from 'qs';
import Router from 'next/router';
import Link from 'next/link';
import firebase from '../src/firebase';
import { addUserSnapshot } from '../src/services/users';



const HomePage = (props) => {

  const { user, addUser } = props;

  const handleCreate = (index) => {
    addUser(index);
  }

  const handleForm = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const getAuthen = async () => {
    try {
      const result = await axios.post(`http://localhost:3003/login`, qs.stringify(form), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      console.log(result)
      if (result.data.token) {
        console.log("success")
        Router.push('/home')
      }
      else {
        console.log("error")
      }

    } catch (e) {

      console.log(e)
    }
  }

  const handleEnter = e => {
    if (e.key === "Enter") {
      getAuthen()
    }
  }

  const checkChookies = () => {
    if (cookies.user) {
      Router.push("/home")
    }
  }

  useEffect(() => {
    firebase.firestore().collection('user').get().then(snapshot => {
      snapshot.forEach((res) => {
        console.log(res.data())
      })
    })

    console.log('test')
  }, [])

  return (
    <div>
      <Head>
        <title>Login page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.listItem}>
          <span className={styles.listItem1}>WELCOME</span><br />
          <span className={styles.listItem2}>โรงเรียนวังกะพ้อเพียรอนุสรณ์</span>
        </div>
        <div className={styles.inputDisplay}>
          <a >
            <img className={styles.img} src="https://i.pinimg.com/originals/89/64/99/8964998576cfac440b3a14df748fc670.png" />
          </a>
          <main className='login-container'>
            <input className={styles.input}
              className="username"
              type="text"
              name="username"
              placeholder="username"
            /><br /><br />
            <input className="password"
              type="password"
              name="password"
              placeholder="password"
            /><br /><br /><br />
            <button className="login-button"
              onClick={() => { console.log('clicked') }}>
              <Link href='/userinformation'>
                <a>Login</a>
              </Link>
            </button>
            <br /><br /><br />
            <span className={styles.listItem3}>Remember me</span>
          </main>
        </div><br />
        <h4 className={styles.input}>Don't have any acount yet?</h4>
        <Link href="/createacount"><a className={styles.input2}> Create acount </a></Link>
      </div>
    </div>
  )
}
export default HomePage;