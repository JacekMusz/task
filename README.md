## Introduction

Application should contain list of bank transactions, based on design structure from _design.png_ file and contain following functionalities:

1.  Transactions fetched from API, displayed in table or list.
2.  Pagination (infinite-scroll or traditional, 20 items per page)
3.  Filtering by `beneficiary` field
4.  Form for adding new transaction to the list with basic non-empty fields validation. Add input fields for:
    - amount (must be positive)
    - account number (not empty, numbers)
    - address
    - description
    - date and id should be generated when submiting form
5.  Simple communicate when success/error after form submission.
6.  Removing transaction from the list

NOTE: Points 2-5 should be done on front-end side.

## API description

To run API, run following commands in task directory:

    npm install
    npm run server

Server will be available on http://localhost:3000.

Available endpoints:

> GET /transactions

## Technologies

Required technologies for development are _React_ and _Typescript_.

## Summary

Send us back your app with instruction how to run app and tests. Preferred way is to get URL to codesandbox or your public repository with project. In case of problems/questions feel free to ask.

**Good luck!**

## -------------------------------------------------------------------- MY COMMENT --------------------------------------------------------------------

## ----------------------------------------------------------------------------------------------------------------------------------------------------

## ----------------------------------------------------------------------------------------------------------------------------------------------------

## ----------------------------------------------------------------------------------------------------------------------------------------------------

## ----------------------------------------------------------------------------------------------------------------------------------------------------

# how to run localy ?

npm install
npm start

# Form

I wanted to handle form and validation on my own, with native HTML methods (because of simple validation and requirements).
Now (at the end) I regret it :D
I would use react-hook-forms and yup.

UPDATE 30.11.2022 13:30
I've done a small refactor on development branch
link: https://github.com/JacekMusz/task/pull/2/commits/45d665de8fd8a3194bff829c3af347027f445abe

There are more generic inputs form and I used react-hook-forms and yup

# UI

I didnt use ui libary (e.g. Material UI) consciously - there is a simple UI.

# Tests

I added only 3 unit tests.

## -------------------------------------------------------------------- CRA DEAFULT README FILE --------------------------------------------------------------------

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
