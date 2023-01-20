export function FetchData(url, method, body = {}, options = {}) {
    let _options = {
        ...options
    }
    if (method.toUpperCase() === 'POST') {
        _options.body = JSON.stringify(body)
    }
    return fetch(url, {
        method,
        ..._options
    }).then(async (resp) => {
        const status = resp.status
        return {
            data: await resp.json(),
            status
        }
    })
}

export function FakeLoginApi(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username ==='Rama' && password === '123') {
                resolve({ user: { name: 'Rama' }, token: 'eyJhbGciOiJIUzI1NiIsInR', status: 200 })
            } else {
                resolve({ user: '', token: '', status: 404 })
            }
        }, 1500)
    })
}