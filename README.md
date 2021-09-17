# HackerNews Mobile Application
## Install React Native
Follow the instructions for "React Native CLI Quickstart" in the [React Native documentaion](https://reactnative.dev/docs/environment-setup) until _Creating a new application_. Skip the step `brew install node` as we will use `nvm` (installation instructions below).
## Install NVM
Follow the installation [instructions](https://github.com/nvm-sh/nvm).
## VS Code and development environment setup
1. Install VS Code
    1. Install the following plugins: `dbaeumer.vscode-eslint`, `davidanson.vscode-markdownlint`
    2. Open the settings JSON file by pressing Shift+CMD+P and entering `Preferences: Open Settings (JSON)`
    3. Add the lines shown below
2. Clone the repo https://github.com/14bscsskazmi/HackerNews
3. Go to the root of the repository
4. Run `nvm use` (you might need to install our specific Node.js version) and create .nvmrc file and save your current version there. So that everyone is on the same node version
5. Run `npm install && npx pod-install`
6. Add a `.env` file with the same structure as `.env.test`
    - Ask someone in the team for the secret values
```json
{
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "editor.tabSize": 4
}
```
## Run the frontend app
You can choose to run the application on either device or phone simulator.

##### EXTRA configurations for Macbook m1 architectures
follow the youtube tutorial below. and you will be able to run the project on M1 architectures
https://www.youtube.com/watch?v=kXSNqYN_RdE

## Other useful links for M1 architectures related issues
https://stackoverflow.com/questions/66369650/undefined-symbol-protocol-descriptor-for-swift-expressiblebyfloatliteral-issu