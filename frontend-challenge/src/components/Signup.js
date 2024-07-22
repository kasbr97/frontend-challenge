import { useState } from 'react';
import './Signup.css'
import EmailValidation from "../hooks/EmailValidation"

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL

function Signup() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");

    //states are numbers to display different types of error messages
    const [firstNameError, setFirstNameError] = useState(0);
    const [lastNameError, setLastNameError] = useState(0);
    const [emailError, setEmailError] = useState(0);
    const [passwordError, setPasswordError] = useState(0);

    const validateFields = (event) =>{
        event.preventDefault();

        if ((firstName.length > 0 && firstName.length < 255)
            && (lastName.length > 0 && lastName.length < 255)
            && EmailValidation(emailAddress) 
            && (password.length >= 8 && password.length < 255)
        ) {
            //send to Backend
            (async ()=>{
                const rawResponse = await fetch(BACKEND_URL + "users/", {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "first_name": firstName,
                        "last_name": lastName,
                        "email": emailAddress,
                        "password": password
                    })
                })
                const content = await rawResponse.json()
                if (content.detail) {
                    alert(content.detail);
                } else {
                    setErrorMessagesToFalse()
                }

                if (content.first_name) {
                    setErrorMessagesToFalse()
                    alert("Welcome! User registered with ", content.email);
                }
            })();
            
        } else {
            if (firstName.length === 0 || firstName.length > 255) {
                setFirstNameError(1);
            } else {
                setFirstNameError(0);
            }
            
            if (lastName.length === 0 || lastName.length > 255) {
                setLastNameError(1);
            } else {
                setLastNameError(0);
            }
            
            if (emailAddress.length === 0) {
                setEmailError(1)
            } else if (!EmailValidation(emailAddress)) {
                setEmailError(2);
            } else {
                setEmailError(0);
            }
            
            if (password.length === 0 || password.length > 255) {
                setPasswordError(1);
            } else if (password.length < 8) {
                setPasswordError(2);
            } else {
                setPasswordError(0);
            }
        }
    }
        
    const setErrorMessagesToFalse = () => {
        setFirstNameError(0);
        setLastNameError(0);
        setEmailError(0);
        setPasswordError(0);
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
                        
                        <form className="signup-form" onSubmit={(e)=>{validateFields(e)}}>
                            {
                                firstNameError!==0 ?
                                    <>
                                        <label className="label-error">
                                            <input type="text" className="input-signup-form-error" 
                                                onChange={(e)=>{setFirstName(e.target.value)}}
                                                value={firstName || ""}>
                                            </input>
                                        </label>
                                        <p className="error-text">First Name cannot be empty</p>
                                    </>
                                :
                                    <input placeholder="First Name" type="text" className="input-signup-form" 
                                        onChange={(e)=>{setFirstName(e.target.value)}}
                                        value={firstName || ""}>
                                    </input>
                            }
                            {
                                lastNameError!==0 ?
                                <>
                                    <label className="label-error">
                                        <input type="text" className="input-signup-form-error"
                                            onChange={(e)=>{setLastName(e.target.value)}}
                                            value={lastName || ""}>
                                        </input>
                                    </label>
                                    <p className="error-text">Last Name cannot be empty</p>
                                </>
                                :
                                    <input placeholder="Last Name" type="text" className="input-signup-form"
                                        onChange={(e)=>{setLastName(e.target.value)}}
                                        value={lastName || ""}>
                                    </input>
                            }
                            {
                                emailError!==0 ?
                                <>
                                    <label className="label-error">
                                        <input type="text" className="input-signup-form-error" 
                                            onChange={(e)=>{setEmailAddress(e.target.value)}}
                                            value={emailAddress || ""}>
                                        </input>
                                    </label>
                                    {
                                        emailError === 1 &&
                                        <p className="error-text">Email cannot be empty</p>
                                    }
                                    {
                                        emailError === 2 &&
                                        <p className="error-text">Looks like this is not an email</p>
                                    }
                                </>
                                :
                                <input placeholder="Email Address" type="text" className="input-signup-form" 
                                    onChange={(e)=>{setEmailAddress(e.target.value)}}
                                    value={emailAddress || ""}>
                                </input>
                            }
                            {
                                passwordError!==0 ?
                                <>
                                    <label className="label-error">
                                         <input type="password" className="input-signup-form-error" 
                                            onChange={(e)=>{setPassword(e.target.value)}}
                                            value={password || ""}>
                                        </input>
                                    </label>
                                    {
                                        passwordError === 1 &&
                                        <p className="error-text">Password cannot be empty</p>
                                    }
                                    {
                                        passwordError === 2 &&
                                        <p className="error-text">Password must be of at least 8 characters long</p>
                                    }
                                </>
                                :
                                    <input placeholder="Password" type="password" className="input-signup-form" 
                                        onChange={(e)=>{setPassword(e.target.value)}}
                                        value={password || ""}>
                                    </input>
                            }
                            <input type="submit"  value="CLAIM YOUR FREE TRIAL" className="submit-signup-btn"/>

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

export default Signup;