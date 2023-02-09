# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Table of Contents

1. [Setup HTTPS](#setup-https)
2. [Generate Icons and Splash Screens](#generate-icons-and-splash-screens)
3. [Available Scripts](#available-scripts)
4. [Troubleshooting](#troubleshooting)
5. [Learn More](#learn-more)

## <a name="setup-https"></a>Setup HTTPS

1. Install [mkcert](https://github.com/FiloSottile/mkcert#installation).
2. Install local CA to available trust stores with the following command.

```shell script
mkcert -install
```

3. Uncomment HTTPS=true in [.env](.env) to enable HTTPS.

```shell script
# .env
HTTPS=true
```

4. Optional: Add hosts to OS hosts file and setup:ssl script for additional https domains, defaults only to localhost.
   1. Windows: C:\Windows\System32\drivers\etc\hosts
   2. Mac: /etc/hosts

```shell script
# hosts
127.0.0.1 localhost myhost

# package.json
"setup:ssl": "... localhost myhost",
```

5. Run setup script in [package.json](package.json) to set up husky and ssl certificates. Must generate the ssl certificates for https support.

```shell script
yarn setup
```

6. When viewing the application in the browser and shows a warning about untrusted certificates, will need to [Trust the local CA](https://gist.github.com/cecilemuller/9492b848eb8fe46d462abeb26656c4f8#trust-the-local-ca).
   1. Warnings
      1. Chrome: "Your connection is not private"
      2. Firefox: "Warning: Potential Security Risk Ahead"

## <a name="generate-icons-and-splash-screens"></a>Generate Icons and Splash Screens

1. Replace ./src/assets/images/icons/logo.svg with application logo.svg.
2. Run icons script in [package.json](package.json) to generate icons and splash screens. This script uses [pwa-asset-generator](https://github.com/onderceylan/pwa-asset-generator).

```shell script
yarn icons
```

## <a name="troubleshooting"></a>Troubleshooting

- Unmet peer dependency for Yarn.

  - This template isn't tested with Yarn. The main issue is Yarn doesn't install peerDependencies by default. Have to install these manually or use npm.

- [Help, yarn audit says I have a vulnerability in react-scripts! #11174](https://github.com/facebook/create-react-app/issues/11174)

## <a name="available-scripts"></a>Available Scripts

In the project directory, you can run:

### `yarn analyze`

Run source-map-explorer on build folder.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn format`

Runs prettier on project files.

### `yarn icons`

Runs pwa-asset-generator to generate icons and splash screens for the application.

### `yarn lint`

Runs all other lint scripts together.

### `yarn lint:eslint`

Runs eslint on project files.

### `yarn lint:stylelint`

Runs stylelint on project files.

### `yarn prebuild`

Runs these commands before build script.

### `yarn serve`

Runs serve as http in the build folder.

### `yarn serve:https`

Runs serve as https in the build folder.

### `yarn setup`

Runs all other setup scripts together.

### `yarn setup:husky`

Runs husky to install husky hooks and adds pre-commit hook.

### `yarn setup:ssl`

Runs mkcert to generate ssl certificates for https support.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn test:ci`

Launches the test runner for CI environments.

### `yarn test:coverage`

Launches the test runner for test coverage.

### `yarn test:debug`

Launches the test runner in debug mode.

## <a name="learn-more"></a>Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
