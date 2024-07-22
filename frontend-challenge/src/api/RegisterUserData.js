const BACKEND_URL = process.env.REACT_APP_BACKEND_URL

const RegisterUserData = async (firstn, lastn, emailA, pwd) => {
    try {
        const rawResponse = await fetch(BACKEND_URL + "users/", {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "first_name": firstn,
                        "last_name": lastn,
                        "email": emailA,
                        "password": pwd
                    })
                })
        return await rawResponse.json()
        
    } catch(error) {
        console.log(error)
    }
    }

export default RegisterUserData;