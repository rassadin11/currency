import { getAuth, signInWithEmailAndPassword } from '@firebase/auth'
import app from '../../../firebase';
import { useRef, useState } from 'react';
import s from './Login.module.scss'

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const auth = getAuth(app);
    const loginRef = useRef();
    const passwordRef = useRef();

    const handleLogin = (email, password) => {

        signInWithEmailAndPassword(auth, email, password).then(() => {
            setIsLoggedIn(true);
        }).catch(() => { })
    }

    return (
        <form action="#" className={s.form}>
            <p className={s.title}>Login form</p>
            <input type="text" ref={loginRef} placeholder='Login' className={s.input} />
            <input type="password" ref={passwordRef} placeholder='Password' className={s.input} />

            {isLoggedIn && "You logged in"}
            <button onClick={(e) => {
                e.preventDefault();
                handleLogin(loginRef.current.value, passwordRef.current.value)
            }}>Login</button>
        </form>
    )
}

export default Login