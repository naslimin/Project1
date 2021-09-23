import firebase from '../firebase';

const userCol = firebase.firestore().collection('users');

export function addUsers(data) {
    return userCol.add(data)
}

export function getUsers(data) {
    return new Promise((resolve, reject) => {
        try {
            userCol.get().then(snapshot => {
                let arr = [];
                snapshot.forEach((res) => {
                    arr.push(res.data());
                });
                resolve(arr);
            })
        } catch (e) {
            reject(e);
        }
    })
}

export function addUserSnapshot(callback){
    userCol.onSnapshot(snapshot => {
        let arr = [];
        snapshot.forEach((res) => {
            arr.push(res.data());
        });
        callback(arr);
    })
}

