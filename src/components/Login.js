import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = (props) => {
    const [ usernameText, setUsernameText] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onLogin(usernameText);
        navigate("/Algebra_Seminar/");
    }

    return (
    <div className="container">
        <form className="login-form" onSubmit={handleSubmit}>
            <lable htmlFor="title">
                <h1>Login</h1>
            </lable>
            <input id="title" type="text" placeholder="Enter your username" required value={usernameText} onChange={(e)=> setUsernameText(e.target.value)}/>
            <button className="login-btn">Login</button>
        </form>
    </div>
    );
}

export default Login;