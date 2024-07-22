const EmailValidation = (emailAddress) => {
            // The validation below sanitizes the input by not accepting characters such as <>"=, 
            //this should be done with the other fields as well
            return String(emailAddress).toLowerCase()
            .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
}

export default EmailValidation