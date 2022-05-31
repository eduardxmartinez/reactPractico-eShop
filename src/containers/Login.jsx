import React from "react";
import "../styles/Login.scss"

const Login = () => {
    return (
        <main className="login">
        <section className="form-container">
            <img src="./assets/logos/logo_yard_sale.svg" alt="logo" className="logo" />
            <h1 className="title">Create a new password</h1>
            <p className="subtitle">Enter a new password for your account</p>
            <form action="/" className="form">
                <label htmlFor="password" className="label">Password</label>
                <input type="password" id="password" placeholder="********" className="input input-password"/>
                <label htmlFor="new-password" className="label">Re-enter password</label>
                <input type="password" id="new-password" placeholder="********" className="input input-new-password"/>
                <input type="submit" value="Confirm" className="primary-button login-button"/>
            </form>
        </section>
        </main>
    )
}

export default Login;