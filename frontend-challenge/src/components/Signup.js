import { useEffect, useState } from 'react';
import './Signup.css';
import EmailValidation from "../hooks/EmailValidation";
import RegisterUserData from '../api/RegisterUserData';

function Signup() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");

    //states are numbers to display different types of error messages
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmedPasswordError, setConfirmedPasswordError] = useState("");

    const validateFields = (event) =>{
        event.preventDefault();

        if ((firstName.length > 0 && firstName.length < 255)
            && (lastName.length > 0 && lastName.length < 255)
            && EmailValidation(emailAddress) 
            && (password.length >= 8 && password.length < 255)
            && (password === confirmedPassword)
        ) {
            //send to Backend
            (async ()=>{
                const content = await RegisterUserData(firstName, lastName, emailAddress, password);
                
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
                setFirstNameError("empty");
            } else {
                setFirstNameError("");
            }
            
            if (lastName.length === 0 || lastName.length > 255) {
                setLastNameError("empty");
            } else {
                setLastNameError("");
            }
            
            if (emailAddress.length === 0) {
                setEmailError("empty")
            } else if (!EmailValidation(emailAddress)) {
                setEmailError("invalidEmail");
            } else {
                setEmailError("");
            }
            
            if (password.length === 0 || password.length > 255) {
                setPasswordError("empty");
            } else if (password.length < 8) {
                setPasswordError("longerPwd");
            } else {
                setPasswordError("");
            }

            if (confirmedPassword.length === 0) {
                setConfirmedPasswordError("empty");
            }
        }
    }
        
    const setErrorMessagesToFalse = () => {
        setFirstNameError("");
        setLastNameError("");
        setEmailError("");
        setPasswordError("");
        setConfirmedPasswordError("");
    }

    useEffect(()=>{
        if (password) {
            if (confirmedPassword !== password && confirmedPassword.length > 0) {
                setConfirmedPasswordError("notMatch");
            } else {
                setConfirmedPasswordError("");
            }
        }
    },[confirmedPassword, password])

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
                                firstNameError==="empty" ?
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
                                lastNameError==="empty" ?
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
                                emailError !== "" ?
                                <>
                                    <label className="label-error">
                                        <input type="text" className="input-signup-form-error" 
                                            onChange={(e)=>{setEmailAddress(e.target.value)}}
                                            value={emailAddress || ""}>
                                        </input>
                                    </label>
                                    {
                                        emailError === "empty" &&
                                        <p className="error-text">Email cannot be empty</p>
                                    }
                                    {
                                        emailError === "invalidEmail" &&
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
                                passwordError !== "" ?
                                <>
                                    <label className="label-error">
                                         <input type="password" className="input-signup-form-error" 
                                            onChange={(e)=>{setPassword(e.target.value)}}
                                            value={password || ""}>
                                        </input>
                                    </label>
                                    {
                                        passwordError === "empty" &&
                                        <p className="error-text">Password cannot be empty</p>
                                    }
                                    {
                                        passwordError === "longerPwd" &&
                                        <p className="error-text">Password must be of at least 8 characters long</p>
                                    }
                                </>
                                :
                                    <input placeholder="Password" type="password" className="input-signup-form" 
                                        onChange={(e)=>{setPassword(e.target.value)}}
                                        value={password || ""}>
                                    </input>
                            }

                            {
                                confirmedPasswordError==="empty" ?
                                <>
                                    <label className="label-error">
                                         <input type="password" className="input-signup-form-error" 
                                            onChange={(e)=>{setConfirmedPassword(e.target.value)}}
                                            value={confirmedPassword || ""}>
                                        </input>
                                    </label>
                                    <p className="error-text">Field cannot be empty</p>
                                </>
                                :
                                <>
                                    <input placeholder="Confirm Password" type="password" 
                                        className={confirmedPasswordError === "notMatch" ? "input-signup-form-error" :"input-signup-form"} 
                                        onChange={(e)=>{setConfirmedPassword(e.target.value)}}
                                        value={confirmedPassword || ""}>
                                    </input>
                                    {
                                        confirmedPasswordError === "notMatch" &&
                                        <p className="error-text">Passwords do not match</p>
                                    }
                                </>
                            }
                            <input type="submit" value="CLAIM YOUR FREE TRIAL" className="submit-signup-btn"/>

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