import React, {useState} from 'react';
import { Redirect, Link } from 'react-router-dom';

const Register = (props)=>{

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [err, setErr] = useState("");
    const [redirect, setRedirect] = useState(false);
    const emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const submit=async(e)=>{
        e.preventDefault();
        if(!name || !email || !password || !password2){
            setErr("A field has been left empty");
        }
        else if(name.length<3) setErr("Name cannot be less than 3 characters.");
        else if(email.length<5) setErr("email cannot be less than 5 characters.");
        else if(!emailRegex.test(email)) setErr("Enter a valid email");
        else if(password.length<5 || password2.length<5) setErr("password cannot be less than 5 characters.");
        else if(password!==password2) setErr("Passwords do not match");
        else{
            const response = await fetch("http://localhost/register", {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(
                    {
                        name: name,
                        email: email,
                        password: password,
                        password2: password2
                    }
                )
            });
            const content = await response.json();
            console.log(content);
            if(content.error) setErr(content.error);
            else{
                setErr("");
                setRedirect(true);
            }
        }
    }
    
    if(redirect===true){
        console.log("to be redirected");
        return (<Redirect to="/login?message='You can now sign in with your new ID!'" />);
    }
    else{return(
        <div className="main-cont">
            <div className="sec-cont">
                <div className="left-panel">
                    <h1 className="login-heading">Welcome Back,</h1>
                    <p className="err-para">{err}</p>
                    <form className="login-form">
                        <input type="text" name="name" className="input-field" placeholder="Full name" required minLength="6" maxLength="100" onChange={e=>setName(e.target.value)} />
                        <input type="email" name="email" className="input-field" placeholder="Email" required minLength="6" maxLength="100" onChange={e=>setEmail(e.target.value)} />
                        <input type="password" name="password" className="input-field" placeholder="Password" required maxLength="20" onChange={e=>setPassword(e.target.value)} />
                        <input type="password" name = "password2" className="input-field" placeholder="Confirm your password" required maxLength="20" onChange={e=>setPassword2(e.target.value)} />
                        <button type="submit" className="login-btn" onClick={submit} >Sign Up</button>
                    </form>
                    <p className="login-para">Already have an account? <span><Link to="/login" >Login here</Link></span></p>
                </div>

                <div className="right-panel">
                    <h1 className='right-head white center'>Already been here?</h1>
                    <p className="right-para white center">Sign in to see your info and progress!</p>
                    <Link to="/login" ><button className='sign-btn white'>SIGN IN</button></Link>
                </div>
            </div>
        </div>
    );}
}

export default Register;