# PARN-stack-pattern
PARN - Postgresql, Apollo Graphql, React, Node stack pattern for modern web app.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in production. </br>
Express server listening on port [:4000]. All get requests redirect to client app.

### `yarn server`

Runs Apollo Graphql server.
`GraphQL Playground` ready at [http://localhost:4000/graphql](http://localhost:4000/graphql);

### `yarn client`

Runs the client app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn client:install`

Install node modules in client folder.

### `yarn client:build`

Builds the client app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Client app is ready to be deployed!

### `yarn dev`

Start client and server in development mode at the same time.
