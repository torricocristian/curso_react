import { useState, useRef } from 'react'
import axios from '../api/Axios';

const Login = () => {
    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const errRef = useRef();
    const [success, setSuccess] = useState(false);
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
          const response = await axios.post(
            '/login',
            JSON.stringify({ user, pwd }),
            {
              headers: { 
                "Content-Type": "application/json"
              }
            }
          );
          console.log(response,'response');
          setUser("");
          setPwd("");
          setSuccess(true);
        } catch (err) {
          if (!err?.response) {
            setErrMsg("No Server Response");
          } else if (err.response?.status === 400) {
            setErrMsg("Usuario o contraseña incorrecto");
          } else if (err.response?.status === 401) {
            setErrMsg("No autorizado");
          } else {
            setErrMsg("Login Error");
          }
          errRef.current.focus();
        }
    };
    

    return (
        <div className="Login-test">
            <h1>Testeando Login por medio de un endpoint</h1>

            {
              success && <div>Login Exitoso</div> 
            }

            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
            >
              {errMsg}
            </p>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="username"
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                    placeholder='Ingrese su user'
                />
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                    placeholder='Ingrese su contraseña'
                />

                <button>
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login