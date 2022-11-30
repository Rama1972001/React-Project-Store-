import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { GlobalContext } from '../../Utils/Contexts';
import { useNavigate } from 'react-router-dom';

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const auth = useContext(GlobalContext).auth;
    const navigate = useNavigate();

    async function onFormSubmit(e) {
        e.preventDefault();
        // console.log(username, password)
        const resp = await auth.signin(username, password)
        if (resp.status === 200) {
            navigate('/')
        }
    }

    return (
        <div className='container mt-4'>
            <form onSubmit={onFormSubmit}>
                <div>
                    <label htmlFor="username" className='form-label'>Username</label>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} id="username" className='form-control' type="text" />
                </div>

                <div>
                    <label htmlFor="password" className='form-label'>Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} id="password" className='form-control' type="password" />
                </div>
                <button className='mt-3 btn btn-primary'>Login</button>
            </form>
        </div>
    )

}

export default Login;