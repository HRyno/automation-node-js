# Stitch Todo List Assessment
Basic automated tests for a Todo List for Stitch Users

# Requirements
To install this application you require the following :

npm : 8.5.0 \
nvm : 0.39.1 \
node : v16.14.2 \
mocha : 9.2.2 \


Once you have installed npm and nvm, you may use nvm to install Node JS v16 which is a requirement for this project

After installing node, navigate to the root directory of this project and in your terminal run

npm install

Then to run the application, run:

npm run start

Now its time to install the packages/items we need to proceed with the tests :

npm install mocha -g --save-dev \
npm install chai --save-dev \
npm install should --save-dev \
npm install request --save-dev


The installed packages are:

Mocha : Test Framework \
Chai : Test Framework \
Should : Library to extend the tests \
Request :  To execute API calls


# Running tests
To run the tests, execute the following command in the root folder of the project :

mocha \

The test results will be like below : \


C:\Users\rynohoorn\workspace\learn_node\automation-node-js>mocha \


  Test TODOs API  \ 
    √ GET TODO's: verify items in the todo_list, Produces: JSON Array of Todos \
[
  { todo: 'Write app for QA assessment', status: 'inprogress', id: 1 }, \
  { todo: 'Write up for QA assessment', status: 'done', id: 2 }, \
  { id: 3, todo: 'add redit', status: 'inprogress' } \
] \
    √ ADD TODO's: Consumes: JSON Object of Todo to add,  Produces: JSON Array of Todos \
[
  { todo: 'Write app for QA assessment', status: 'inprogress', id: 1 }, \
  { todo: 'Write up for QA assessment', status: 'done', id: 2 }, \
  { id: 3, todo: 'add redit', status: 'inprogress' } \
]
    √ EDIT TODO's: Consumes: JSON Object of Todo to edit,  Produces: JSON Array of Todos \
[
  { todo: 'Write app for QA assessment', status: 'inprogress', id: 1 }, \
  { todo: 'Write up for QA assessment', status: 'done', id: 2 } \ 
]
    √ DELETE TODO's: Consumes: JSON Object of containing id of todo to delete,  Produces: JSON Array of Todos \

  4 passing (37ms) \
C:\Users\rynohoorn\workspace\learn_node\automation-node-js>
