function Signup() {
    return(
        <div className="card">
            <div className="card-header">
                <h2>Sign Up</h2>
            </div>
            <div id="signup" role="tabpanel">
                <form id="signup-form" className="card-body">
                <div>
                    <label htmlFor="username-input-signup">Username</label>
                    <input type="text" id="username-input-signup" />
                </div>
                <div>
                    <label htmlFor="password-input-signup">Password</label>
                    <input type="password" id="password-input-signup" />
                </div>
                <button type="submit" id="signup-btn" className="btn" >Signup!</button>
                <a href="/login">Login instead</a>
                </form>
            </div>
        </div>
    )
}

export default Signup;