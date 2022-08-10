import { useRef, useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import './login.scss'

function Login() {
    const loginUser = useRef();
    const loginPass = useRef();
    const [isFetching, setIsFetching] = useState(false);
    const {login, loginError, passError, setLoginError, setPassError} = useContext(AuthContext);    
            
    async function handleSubmit (e) {
        e.preventDefault();
        setIsFetching(true)
        const delay = (amount) => new Promise(resolve => setTimeout(resolve, amount))
        await delay(750)
        setIsFetching(false)
             
        login(loginUser.current.value.toLowerCase(), loginPass.current.value)
    }

    return ( 
        <section className="login__page">
            <img src="brewdog-logo.png" alt="BrewDog" className="brewdog__logo" />
            <form action="#" id="form__login" onSubmit={handleSubmit}>
                <input type="text" id="login__user" name="login-user" ref={loginUser} required placeholder="Username" onChange={() => setLoginError(false)}/>
                <input type="password" name="login-pass" id="login__pass" ref={loginPass} required placeholder="Password" onChange={() => setPassError(false)}/>
                {loginError && <span className="login__error">Usuário não encontrado</span>}
                {passError && <span className="login__error">Senha incorreta</span>}
                {!isFetching ? (
                    <button type="submit">Login</button>
                ) : (
                    <img src="/loading.png" alt="loading" className="loggin__in" />
                ) }
            </form>
            <div className="passtip">
                <span className="users__available">Available users: frodo, gimli, eowyn, legolas</span>
                <span className="pass__default">Default password: 12345</span>
            </div>
        </section>
     );
}

export default Login;