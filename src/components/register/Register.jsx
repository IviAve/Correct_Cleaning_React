export default function Register() {
    return(
        <div className="login-center">
        <form className="login"  method="POST">
   <label htmlFor="username">Username:</label>
   <input type="text" id="username" name="username" value="username"/>

   <label htmlFor="email">Email:</label>
   <input type="email" id="email" name="email" value="email"/>

   <label htmlFor="password">Password:</label>
   <input type="password" id="password" name="password"/>

   <label htmlFor="confirm-password">Confirm Password:</label>
   <input type="password" id="confirm-password" name="rePassword"/>

   <button type="submit">Register</button>
   <p className="login">Already have an account? <a href="/auth/login">Login here</a></p>
</form>
</div>
        
        
    )
}