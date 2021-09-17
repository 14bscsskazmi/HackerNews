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
# HackerNews
 
 
 Hacker News basic front-end
 
 
 
 1) Splash Screen.
 
 
 
 
 
 ![image](https://user-images.githubusercontent.com/23105781/133820955-7b2becef-806b-4ba0-8deb-c3fbc289a2d6.png)
 
 
 
 
 
 
 
 2) Landing Screen.
 
 
 
 
 

 ![image](https://user-images.githubusercontent.com/23105781/133821310-28bde2d7-bb9a-471d-9d16-ad3c7d6822ed.png)
 
 
 
 
 
 
 3) After Clicking on 'See Top Stories' the loader comes






![image](https://user-images.githubusercontent.com/23105781/133821615-47562eab-3300-43c0-90ea-13f9362db5e8.png)






Right Now I get all the ids of the New stories but I am only fetching first 12 new stories(it takes few seconds(10sh) as the application sends the request for each story after gettings all the ids. then all the stories pushed in an array and get rendered in the view.






![image](https://user-images.githubusercontent.com/23105781/133824363-f5df80f8-142d-4a11-806a-45b91b40ec53.png)







![image](https://user-images.githubusercontent.com/23105781/133823985-32b0e4fa-3d22-4808-935f-198906a3523f.png)








