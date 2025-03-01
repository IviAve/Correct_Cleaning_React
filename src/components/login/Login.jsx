export default function Login() {
    return(
        <>
        <div className="login-center">
        <form className="login"  method="POST">

        <h2>Login</h2>

<div className="field">
    <label htmlFor="username">Email</label>
    <input type="email" name="email" id="email-login" placeholder="Email"/>
    <span className="help-info">example: iviave@abv.bg</span>
</div>

<div className="field">
    <label htmlFor="password">Password</label>
    <input type="password" name="password" id="password-login" placeholder="Password"/>
    <span className="help-info">minimum 6 characters, letters and numbers, at least 1 special character</span>
</div>

<button className="btn">Login</button>
</form>
</div>
</>
        
    )
}