# Stitch Todo List Assessment
Basic automated tests for a Todo List for Stitch Users

# Requirements
To install this application you require the following :

npm : 8.5.0
nvm : 0.39.1
node : v16.14.2
mocha : 9.2.2


Once you have installed npm and nvm, you may use nvm to install Node JS v16 which is a requirement for this project

After installing node, navigate to the root directory of this project and in your terminal run

npm install

Then to run the application, run:

npm run start

Now its time to install the packages/items we need to proceed with the tests

npm install mocha -g --save-dev
npm install chai --save-dev
npm install should --save-dev
npm install request --save-dev

The installed packages are:
    Mocha — Test Framework
    Chai — Test Framework
    Should — Library to extend the tests
    Request — To execute API calls