import React, { useState, useEffect } from 'react';
import {Redirect} from 'react-router-dom';
import queryString from "query-string";
import {Link} from "react-router-dom";

const Login = ({ location }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState("");
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        const { message } = queryString.parse(location.search);
        setErr(message);
    }, [email, password]);
    
    const loginfunc = async (e) => {
        e.preventDefault();
        console.log(email, password);
        if (email==="" || password===""){
            setErr("Please fill all the fields");
            return;
        }
        setErr("");

        let headers = new Headers();
        headers.append('Origin','http://localhost:3000');

        const response = await fetch("http://localhost/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({
                email,
                password
            })
        });
        const content = await response.json();
        console.log(content.error);
        if(content.error) setErr(content.error);
        else{
            setRedirect(true);
        }
        

    }
    if (redirect===true) return <Redirect to="/" />
    return (
        <div className="main-cont">
            <div className="sec-cont">
                <div className="left-panel">
                    <h1 className="login-heading">Welcome Back,</h1>
                    <p className="err-para">{err}</p>
                    <form className="login-form">
                        <input type="email" name="email" className="input-field" placeholder="Email" minLength="6" onChange={e=>setEmail(e.target.value)} />
                        <input type="password" name="password" className="input-field" placeholder="Password" onChange={e=>setPassword(e.target.value)} />
                        <button type="submit" className="login-btn" onClick={loginfunc}>Sign In</button>
                    </form>
                    <p className="login-para">Doesn't have an account? <span><Link to="/register">Sign-up here</Link></span></p>
                </div>

                <div className="right-panel">
                    <h1 className='right-head white center'>New here?</h1>
                    <p className="right-para white center">Sign up and discover great amount of new opportunities!</p>
                    <Link to="/register"><button className='sign-btn white'>SIGN UP</button></Link>
                </div>
            </div>
        </div>
    );
}

export default Login;