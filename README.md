### Objective

Your assignment is to implement a responsive signup form and a backend API to save the submitted data. The frontend should be implemented using JavaScript and React. The backend API can be implemented using any language of your choice. **The goal is to get the form as close to the design as possible and ensure the backend API correctly validates and saves and data.**

### Brief

The design team at AxS Health has provided you with designs for a new signup form! Your task is to build out the project to the designs inside the `/design` folder. You will find both a mobile and a desktop version of the design to work to. You can use any tools you like to help you complete the challenge.

### Tasks

- Implement the frontend using:
    - Language: **JavaScript**
    - Framework: **React**
- Implement the backend using:
    - Any language of your choice
- Frontend Requirements:
    - View the optimal layout for the site depending on their device's screen size.
    - See hover states for all interactive elements on the page.
    - You will find all the required assets in the `/images` folder. The assets are already optimized.
    - There is also a `style-guide.md` file, containing the information you'll need, such as color palette and fonts.
- Backend Requirements:
    - Form Validation:
        - Validate the following fields:
            - First Name: Required, string, maximum 255 characters.
            - Last Name: Required, string, maximum 255 characters.
            - Email: Required, valid email format, unique in the database.
            - Password: Required, minimum 8 characters, confirmed (with a password confirmation field).
            - Return appropriate error messages for validation failures.
        - Unique Email Validation:
            - Ensure the email field is unique by checking the database before saving the data.
            - Return a specific error message if the email is already registered.
    - Save Form Data:
        - Save the validated form data to the database.
        - Hash the password before saving it.
    - Response:
        - Return a success message upon successful registration.
        - Return error messages for validation or database save failures.

### Evaluation Criteria

- Best practices.
- Show us your work through your commit history.
- We're looking for you to produce working code, with enough room to demonstrate how to structure components in a small program.
- Completeness: did you complete the features?
- Correctness: does the functionality act in sensible, thought-out ways?
- Maintainability: is it written in a clean, maintainable way?
- Testing: is the system adequately tested?

### Deliverables

Make sure to include all source code in the repository. 

### CodeSubmit

Please organize, design, test and document your code as if it were going into production - then push your changes to the master branch. After you have pushed your code, you may submit the assignment on the assignment page.

All the best and happy coding,

The AxS Health Team