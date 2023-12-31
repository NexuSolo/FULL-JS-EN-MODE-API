/* eslint-disable no-unused-vars */

export async function login(email, password) {
    const response = await fetch('http://localhost:8080/api/utilisateur/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);


    if (data.error) {
        throw new Error(data.error);
    }

    return data;
}

export async function register(nom, prenom, email, password) {
    const response = await fetch('http://localhost:8080/api/utilisateur/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nom, prenom, email, password }),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.error) {
        throw new Error(data.error);
    }

    return data;
}

export async function getUser(id){
    const response = await fetch('http://localhost:8080/api/utilisateur/'+id, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    if (data.error) {
        throw new Error(data.error);
    }

    return data;
}

export async function verifyToken(){
    try {
        if(localStorage.getItem('token') === null) return false;
        const response = await fetch('http://localhost:8080/api/utilisateur/verify', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            },
        });
        return true;
    } catch (error) {
        return false;
    }
}
