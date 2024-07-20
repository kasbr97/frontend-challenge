import './Login.css'

function Login() {
    return (
        <div className="background-image">
            <div className="centered-div">
                <div className="left-side-div">
                    <p className="font-title-lg">Learn to code by watching others</p>
                    <p className='font-text-sm'>
                        See how experienced developers solve problems
                        in real-time. Watching scripted tutorials is great, 
                        but understanding how developers think is unvaluable.
                    </p>
                </div>
                <div className="right-side-div">
                    <div className="announcement">
                        <p className="announcement-text">
                            Try it free 7 days <span className="regular-font">then $20/mo. thereafter</span>
                        </p>
                    </div>
                    
                    <form className="login-form">
                        <input placeholder="First Name" type="text" className="input-login-form" >
                        </input>
                        <input placeholder="Last Name" type="text" className="input-login-form">
                        </input>
                        <input placeholder="Email Address" type="text" className="input-login-form" >
                        </input>
                        <input placeholder="Password" type="password" className="input-login-form" >
                        </input>

                        <input type="submit" value="CLAIM YOUR FREE TRIAL" className="submit-login-btn"/>
                        

                        <p className="agreement-form">By clicking the button, you're agreeing to our <span className="terms-service">Terms of Service</span></p>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default Login;