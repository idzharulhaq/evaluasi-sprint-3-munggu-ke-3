function listusers(page) {
    return fetch(`https://reqres.in/api/users?page=2`)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.error(err))
}

function singleusers(id) {
    return fetch(`https://reqres.in/api/users/2`)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.error(err))
}

function login() {
    let datatosend = {
        email: prompt('enter your email'),
        password: prompt('enter your password')
    }

    const init = {
        method: 'post',
        body: JSON.stringify(datatosend)
    }

    const response = fetch(`https://reqres.in/api/login`, init)
        .then(res => res.json())
        .then(res => console.log())
        .catch(err => console.error(err))

    return response
}

function register() {
    let datatosend = {
        name: prompt('enter your fullname'),
        email: prompt('enter your email'),
        password: prompt('enter your password'),
        age: prompt('enter your age')
    }

    const init = {
        method: 'post',
        body: JSON.stringify(datatosend)
    }

    return fetch(`https://reqres.in/api/register`, init)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.error(err))
}
