export default function Register() {
    return(
        <div className="login-center">
        <form className="login"  method="POST">

            <h2>Register</h2>
      <div className="field">      
   <label htmlFor="username">Username:</label>
   <input type="text" id="username" name="username" placeholder="Username" />
   <span className="help-info">example: todorov</span>
   </div>

   <div className="field">
   <label htmlFor="email">Email:</label>
   <input type="email" id="email" name="email"  placeholder="Email"/>
   <span className="help-info">example: iviave@abv.bg</span>
   </div>

   <div className="field">
   <label htmlFor="password">Password:</label>
   <input type="password" id="password" name="password" placeholder="Password"/>
   <span className="help-info">minimum 6 characters, letters and numbers, at least 1 special character</span>
   </div>
<div className="field">
   <label htmlFor="confirm-password">Confirm Password:</label>
   <input type="password" id="confirm-password" name="rePassword" placeholder="Re-Password"/>
   </div>
   <button className="btn-reg-log">Register</button>
   <p className="login">Already have an account? <a href="/auth/login">Login here</a></p>
</form>
</div>
        
        
    )
}