import EmailValidation from "../hooks/EmailValidation"

test("Valid email", ()=>{
    const result = EmailValidation("email@email.com");

    expect(result).toBeTruthy();
})


test("Invalid email", ()=>{
    const result = EmailValidation("email@@email.com");

    expect(result).toBeFalsy();
})

test("Invalid email with special characters", ()=>{
    const result = EmailValidation("<>@example.com");

    expect(result).toBeFalsy();
})

test("Invalid email 2", ()=>{
    const result = EmailValidation("hello there");

    expect(result).toBeFalsy();
})