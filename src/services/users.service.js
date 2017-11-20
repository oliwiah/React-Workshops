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
    { login: 'Dziki', id: uuid.create().hex, hypePoints: 30 },
    { login: 'Justin1', id: uuid.create().hex, hypePoints: 31 },
    { login: 'Gienio1', id: uuid.create().hex, hypePoints: 30 },
    { login: 'Chudini1', id: uuid.create().hex, hypePoints: 30 },
    { login: 'Mati1', id: uuid.create().hex, hypePoints: 30 },
    { login: 'Dario1', id: uuid.create().hex, hypePoints: 30 },
    { login: 'Jacob1', id: uuid.create().hex, hypePoints: 30 },
    { login: 'Dziki1', id: uuid.create().hex, hypePoints: 30 },
    { login: 'Justin2', id: uuid.create().hex, hypePoints: 31 },
    { login: 'Gienio2', id: uuid.create().hex, hypePoints: 30 },
    { login: 'Chudini2', id: uuid.create().hex, hypePoints: 30 },
    { login: 'Mati2', id: uuid.create().hex, hypePoints: 30 },
    { login: 'Dario2', id: uuid.create().hex, hypePoints: 30 },
    { login: 'Jacob2', id: uuid.create().hex, hypePoints: 30 },
    { login: 'Dziki2', id: uuid.create().hex, hypePoints: 30 },
    { login: 'Justin3', id: uuid.create().hex, hypePoints: 31 },
    { login: 'Gienio3', id: uuid.create().hex, hypePoints: 30 },
    { login: 'Chudini3', id: uuid.create().hex, hypePoints: 30 },
    { login: 'Mati3', id: uuid.create().hex, hypePoints: 30 },
    { login: 'Dario3', id: uuid.create().hex, hypePoints: 30 },
    { login: 'Jacob3', id: uuid.create().hex, hypePoints: 30 },
    { login: 'Dziki3', id: uuid.create().hex, hypePoints: 30 },
    { login: 'Justin4', id: uuid.create().hex, hypePoints: 31 },
    { login: 'Gienio4', id: uuid.create().hex, hypePoints: 30 },
    { login: 'Chudini4', id: uuid.create().hex, hypePoints: 30 },
    { login: 'Mati4', id: uuid.create().hex, hypePoints: 30 },
    { login: 'Dario4', id: uuid.create().hex, hypePoints: 30 },
    { login: 'Jacob4', id: uuid.create().hex, hypePoints: 30 },
    { login: 'Dziki4', id: uuid.create().hex, hypePoints: 30 }
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

const deleteUser = user => new Promise((resolve, reject) => {
    setTimeout(() => resolve(users.filter(usr => usr.login !== user.login )));
})

export default {
    getUsers,
    addUser,
    deleteUser,
};
