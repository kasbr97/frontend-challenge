import { fireEvent, render, screen } from '@testing-library/react';
import RegisterUserData from '../api/RegisterUserData';
import Signup from '../components/Signup';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL

describe("RegisterUerData", ()=>{

    test("Register user data API called", async ()=>{
        //https://stackoverflow.com/questions/55088482/jest-not-implemented-window-alert
        //To help understand why I had to create this for window.alert
        const jsdomAlert = window.alert;  // remember the jsdom alert
        window.alert = () => {}; // provide an empty implementation for window.alert

        global.fetch = jest.fn().mockResolvedValue({
            ok: true,
            json: ()=> Promise.resolve({first_name: "John"})
        })
        render(<Signup/>)
        await userEvent.type(screen.getByPlaceholderText("First Name"), "John");
        await userEvent.type(screen.getByPlaceholderText("Last Name"), "Doe");
        await userEvent.type(screen.getByPlaceholderText("Email Address"), "johnDoe@example.com");
        await userEvent.type(screen.getByPlaceholderText("Password"), "unsafePassword123");
        await userEvent.type(screen.getByPlaceholderText("Confirm Password"), "unsafePassword123");
    
        await userEvent.click(screen.getByDisplayValue("CLAIM YOUR FREE TRIAL"));
    
        expect(global.fetch).toHaveBeenCalledWith(BACKEND_URL + "users/", 
            expect.objectContaining({
                headers: {
                    "Accept": "application/json", 
                    "Content-Type": "application/json"
                },
                method: 'POST',
                body: JSON.stringify({
                    first_name: "John",
                    last_name: "Doe",
                    email: "johnDoe@example.com",
                    password: "unsafePassword123"
                })
            })
        );

        window.alert = jsdomAlert;  // restore the jsdom alert

    })
})