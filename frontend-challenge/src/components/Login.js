import { useState } from 'react';
import './Login.css'

function Login() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");

    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const validateFields = (event) =>{
        event.preventDefault();
        if (firstName.length === 0) {
            setFirstNameError(true);
        } else {
            setFirstNameError(false)
        }

        if (lastName.length === 0) {
            setLastNameError(true);
        } else {
            setLastNameError(false)
        }

        // The validation below sanitizes the input by not accepting characters such as <>"=
        if (!String(emailAddress).toLowerCase()
            .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            setEmailError(true);
        } else {
            setEmailError(false)
        }

        if (password.length === 0) {
            setPasswordError(true);
        } else {
            setPasswordError(false)
        }
    }

    return (
        <div className="background-img">
            <div className="row">
                <div className="col-6">
                    <div className="size-left-div">

                        <p className="font-title-lg">Learn to code by watching others</p>
                        <p className='font-text-sm'>
                            See how experienced developers solve problems
                            in real-time. Watching scripted tutorials is great, 
                            but understanding how developers think is unvaluable.
                        </p>
                    </div>
                </div>
                <div className="col-6">
                    <div className="size-right-div">
                        <div className="announcement">
                            <p className="announcement-text">
                                Try it free 7 days <span className="regular-font">then $20/mo. thereafter</span>
                            </p>
                        </div>
                        
                        <form className="login-form" onSubmit={(e)=>{validateFields(e)}}>
                            {
                                firstNameError ?
                                    <>
                                        <label className="label-error">
                                            <input type="text" className="input-login-form-error" 
                                                onChange={(e)=>{setFirstName(e.target.value)}}
                                                value={firstName || ""}>
                                            </input>
                                        </label>
                                        <p className="error-text">First Name cannot be empty</p>
                                    </>
                                :
                                    <input placeholder="First Name" type="text" className="input-login-form" 
                                        onChange={(e)=>{setFirstName(e.target.value)}}
                                        value={firstName || ""}>
                                    </input>
                            }

                            {
                                lastNameError ?
                                <>
                                    <label className="label-error">
                                        <input type="text" className="input-login-form-error"
                                            onChange={(e)=>{setLastName(e.target.value)}}
                                            value={lastName || ""}>
                                        </input>
                                    </label>
                                    <p className="error-text">Last Name cannot be empty</p>
                                </>
                                :
                                    <input placeholder="Last Name" type="text" className="input-login-form"
                                        onChange={(e)=>{setLastName(e.target.value)}}
                                        value={lastName || ""}>
                                    </input>
                            }

                            {
                                emailError ?
                                <>
                                    <label className="label-error">
                                        <input type="text" className="input-login-form-error" 
                                            onChange={(e)=>{setEmailAddress(e.target.value)}}
                                            value={emailAddress || ""}>
                                        </input>
                                    </label>
                                    <p className="error-text">Looks like this is not an email</p>
                                </>
                                :
                                <input placeholder="Email Address" type="text" className="input-login-form" 
                                    onChange={(e)=>{setEmailAddress(e.target.value)}}
                                    value={emailAddress || ""}>
                                </input>
                            }

                            {
                                passwordError ?
                                <>
                                    <label className="label-error">
                                         <input type="password" className="input-login-form-error" 
                                            onChange={(e)=>{setPassword(e.target.value)}}
                                            value={password || ""}>
                                        </input>
                                    </label>
                                    <p className="error-text">Password cannot be empty</p>
                                </>
                                :
                                    <input placeholder="Password" type="password" className="input-login-form" 
                                        onChange={(e)=>{setPassword(e.target.value)}}
                                        value={password || ""}>
                                    </input>
                            }

                            <input type="submit"  value="CLAIM YOUR FREE TRIAL" className="submit-login-btn"/>
                            

                            <p className="agreement-form">
                                By clicking the button, 
                                you're agreeing to our <span className="terms-service">Terms of Service</span>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Login;