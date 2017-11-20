import uuid from 'uuid-js';

//
// Mocked data
//
export let users = [
    { login: 'Justin', id: uuid.create().hex, hypePoints: 31 },
    { login: 'Gienio', id: uuid.create().hex, hypePoints: 30 },
    { login: 'Chudini', id: uuid.create().hex, hypePoints: 30 },
    { login: 'Mati', id: uuid.create().hex, hypePoints: 30 },
    { login: 'Dario', id: uuid.create().hex, hypePoints: 30 },
    { login: 'Jacob', id: uuid.create().hex, hypePoints: 30 },
    { login: 'Dziki', id: uuid.create().hex, hypePoints: 30 }
];

//
// Mocked responses from backend
//
const getUsers = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve(users), 1000);
    // setTimeout(() => reject(), 1000);
});

const addUser = login => new Promise((resolve, reject) => {
    setTimeout(() => resolve([...users, { login, id: uuid.create().hex, hypePoints: 30 }]), 1000);
});

const deleteUser = login => new Promise((resolve, reject) => {
    setTimeout(() => resolve(users.filter(usr => usr.login === login )));
})

export default {
    getUsers,
    addUser,
    deleteUser,
};
