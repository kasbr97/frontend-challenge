# Getting Started

cd into frontend-challenge folder and start the app with
`npm start`

Be sure to clone the backend-challenge repository and next create the .env file based on the .env.example shown in the /frontend-challenge folder.

Within the src folder, the there will be 3 more folders:

1. Components: where the code for the Signup component is and where other components will be later on. Since there's only the Signup component, there's not folder for it. In the future, there should be a folder for each of the components like: Signup folder, Home folder, Profile folder, etc
2. api: The code to call the backend API. Currently there's only one endpoint to be called, but if there's more in the future, they should be added in this folder.
3. Hooks: All the hooks for the code will be here (although there only is one hook for now).
4. `__tests__`: The Test Suites for the emailValidation hook, Signup component, the RegisterUserData to call the API, and the App component.
5. Fonts: All the fonts from the Poppins font family.

## Available Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode. It will show in the console all the test suites, tests passed, snapshots and time taken to run all the tests.

### `npm run build`

Builds the app for production to the `build` folder.\
