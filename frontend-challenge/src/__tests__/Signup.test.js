import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Signup from './../components/Signup';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

//Simple rendering of a text
test("Terms of agreement successfully renders", () => {
    render(<Signup/>);

    const element = screen.getByText(/By clicking the button, you're agreeing to our/i);

    expect(element).toBeInTheDocument();
})


//For all input fields
test("Signup form validateFields() called when fields are empty", async () => {
    render(<Signup/>);

    await userEvent.click(screen.getByDisplayValue("CLAIM YOUR FREE TRIAL"));

    expect(screen.getByText(/first name cannot be empty/i)).toBeInTheDocument();
    expect(screen.getByText(/Last Name cannot be empty/i)).toBeInTheDocument();
    expect(screen.getByText(/Email cannot be empty/i)).toBeInTheDocument();
    expect(screen.getByText(/Password cannot be empty/i)).toBeInTheDocument();
})

//For first name field
test("Signup form validateFields() called when only firstName is empty", async () => {
    render(<Signup/>);

    await userEvent.type(screen.getByPlaceholderText("Last Name"), "Doe");
    await userEvent.type(screen.getByPlaceholderText("Email Address"), "johnDoe@example.com");
    await userEvent.type(screen.getByPlaceholderText("Password"), "unsafePassword123");

    await userEvent.click(screen.getByDisplayValue("CLAIM YOUR FREE TRIAL"));

    //Only this message should display
    expect(screen.getByText(/first name cannot be empty/i)).toBeInTheDocument();

    //These messages shouldn't display
    expect(screen.queryByText(/Last Name cannot be empty/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Email cannot be empty/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Looks like this is not an email/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Password cannot be empty/i)).not.toBeInTheDocument();
    
})

//For Last Name field
test("Signup form validateFields() called when only lastName is empty", async () => {
    render(<Signup/>);

    await userEvent.type(screen.getByPlaceholderText("First Name"), "John");
    await userEvent.type(screen.getByPlaceholderText("Email Address"), "johnDoe@example.com");
    await userEvent.type(screen.getByPlaceholderText("Password"), "unsafePassword123");
    await userEvent.type(screen.getByPlaceholderText("Confirm Password"), "unsafePassword123");

    await userEvent.click(screen.getByDisplayValue("CLAIM YOUR FREE TRIAL"));

    //Only this message should display
    expect(screen.getByText(/Last Name cannot be empty/i)).toBeInTheDocument();
    
    //These messages shouldn't display
    expect(screen.queryByText(/first name cannot be empty/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Email cannot be empty/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Looks like this is not an email/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Password cannot be empty/i)).not.toBeInTheDocument();
    
})

//For email field
test("Signup form validateFields() called when email isn't valid", async () => {
    render(<Signup/>);

    await userEvent.type(screen.getByPlaceholderText("Email Address"), "kevingmail.com");

    await userEvent.click(screen.getByDisplayValue("CLAIM YOUR FREE TRIAL"));

    expect(screen.getByText(/Looks like this is not an email/i)).toBeInTheDocument();
    
})

// For password field
test("Signup form validateFields() called when password is less than 8 characters", async () => {
    render(<Signup/>);

    await userEvent.type(screen.getByPlaceholderText("Password"), "hello67");

    await userEvent.click(screen.getByDisplayValue("CLAIM YOUR FREE TRIAL"));

    expect(screen.getByText(/Password must be of at least 8 characters long/i)).toBeInTheDocument();
})



